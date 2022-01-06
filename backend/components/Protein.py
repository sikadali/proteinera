class Protein:

    def __init__(self, entry: str, name: str, go: [str], interpro: [str], sequence: str, ec_number: str,
                 entry_name: str):
        self.entryName = entry_name
        self.ECNumber = ec_number
        self.sequence = sequence
        self.crossReferenceInterPro = interpro
        self.proteinNames = name
        self.geneOntology = go
        self.entry = entry

    #
    def compute_intersection(self, other) -> int:
        return len(list(set(self.crossReferenceInterPro).intersection(other.crossReferenceInterPro)))

    def compute_jaccard(self, other) -> float:
        # print(self.interpro)
        if len(self.crossReferenceInterPro) == 0 or len(other.crossReferenceInterPro) == 0:
            return 0
        else:
            return self.compute_intersection(other) / (len(list(set(self.crossReferenceInterPro).union(other.crossReferenceInterPro))))

    def print_name(self):
        print("Protein name : " + self.proteinNames)


def protein_parser(protein_data: any) -> Protein:
    return Protein(
        protein_data.get('entry'),
        protein_data.get('proteinNames'),
        protein_data.get('geneOntology'),
        protein_data.get('crossReferenceInterPro'),
        protein_data.get('sequence'),
        protein_data.get('ECNumber'),
        protein_data.get('entryName')
    )
