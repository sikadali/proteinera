import ast
import os
import types

from flask import Flask, g, request, jsonify
from neo4j import GraphDatabase, basic_auth
from neo4j.graph import Node

from dotenv import *

import json

from components.Protein import protein_parser

load_dotenv(find_dotenv())

app = Flask(__name__)


def env(key, default=None, required=True):
    """
    Retrieves environment variables and returns Python natives. The (optional)
    default will be returned if the environment variable does not exist.
    """
    try:
        value = os.environ[key]
        return ast.literal_eval(value)
    except (SyntaxError, ValueError):
        return value
    except KeyError:
        if default or not required:
            return default
        raise RuntimeError("Missing required environment variable '%s'" % key)


DATABASE_USERNAME = env('DATABASE_USERNAME')
DATABASE_PASSWORD = env('DATABASE_PASSWORD')
DATABASE_URL = env('DATABASE_URL')

driver = GraphDatabase.driver(DATABASE_URL, auth=basic_auth(DATABASE_USERNAME, str(DATABASE_PASSWORD)))
# driver = GraphDatabase.driver("bolt://localhost:7687", auth=basic_auth("neo4j", "neo4j"))

app.config['SECRET_KEY'] = env('SECRET_KEY')


def get_node_properties(node: Node):
    def get_properties(self):
        return self._properties

    node.get_properties = types.MethodType(get_properties, node)
    return node.get_properties()


def get_db():
    if not hasattr(g, 'neo4j_db'):
        g.neo4j_db = driver.session()
    return g.neo4j_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'neo4j_db'):
        g.neo4j_db.close()


def run_transaction(query: str, var: dict):
    return get_db().write_transaction(lambda tx: list(tx.run(query, var)))


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/test', methods=['GET'])
def get_hello_world():
    return 'Hello World TEST!'


@app.route('/protein_test', methods=['GET'])
def get_test_protein():
    result = run_transaction('match (p:Protein) return p LIMIT $limit', {'limit': 2})
    return json.dumps([get_node_properties(record['p']) for record in result])


@app.route('/protein/entry/<entry>', methods=['GET'])
def get_protein_by_entry(entry):
    result = run_transaction('match (p:Protein{entry: $entry}) return p', {'entry': entry})
    return json.dumps([get_node_properties(record['p']) for record in result])


@app.route('/protein/entry_name/<entry_name>', methods=['GET'])
def get_protein_by_entry_name(entry_name):
    result = run_transaction('match (p:Protein{entry_name: $entry_name}) return p', {'entry_name': entry_name})
    return json.dumps([get_node_properties(record['p']) for record in result])


@app.route('/neighbour/entry_name/<entry_name>', methods=['GET'])
def get_neighbour_by_entry_name(entry_name):
    result = run_transaction(
        "MATCH p=(p1:Protein)-[:possess]-(i:InterPro)-[:possess]-(p2:Protein) "
        "WHERE p1.entryName=$entry_name "
        "RETURN p2",
        {'entry_name': entry_name}
    )
    return json.dumps([get_node_properties(record['p2']) for record in result])


@app.route('/neighbour/entry/<entry>', methods=['GET'])
def get_neighbour_by_entry(entry):
    result = run_transaction(
        "MATCH p=(p1:Protein)-[:possess]-(i:InterPro)-[:possess]-(p2:Protein) "
        "WHERE p1.entry=$entry "
        "RETURN p2",
        {'entry': entry}
    )
    return json.dumps([get_node_properties(record['p2']) for record in result])


@app.route('/neighbour/jaccard/entry/<entry>', methods=['GET'])
def get_neighbour_jaccard_by_entry(entry):
    reference_protein_data = json.loads(get_protein_by_entry(entry))[0]
    neighbours_data = json.loads(get_neighbour_by_entry(entry))

    reference_protein = protein_parser(reference_protein_data)

    # For each neighbour, we compute the jaccard index from the reference protein
    for neighbour in neighbours_data:
        neighbour_protein = protein_parser(neighbour)
        jaccard = reference_protein.compute_jaccard(neighbour_protein)
        neighbour['jaccard'] = jaccard

    return jsonify({
        'reference_protein': reference_protein_data,
        'neighbours': neighbours_data
    })


if __name__ == '__main__':
    app.run(debug=True)
