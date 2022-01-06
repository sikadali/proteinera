import "./Search.css";
import axios from 'axios';
import { useContext, useState } from "react";
import { StoreContext } from '../../utils/StoreProvider';


export default function Search () {
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:`/neighbour/jaccard/entry/${entry}`,
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        neighbours: res.neighbours,
        reference_protein: res.reference_protein}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}


  const {
    entry: [entry, setEntry],
    proteins: [proteins, setProteins]
  } = useContext(StoreContext);

  /*
  const url_jaccard_by_entry = `http://localhost:5000/neighbour/jaccard/entry/${entry}`;

  const getProteins = async () => {
		//let result = await Axios.get(url_jaccard_by_entry);
		//setProteins(result.data.hits);
		//console.log(result.data);

    console.log(proteins);
    Axios({
      method:'get',
      url:`http://localhost:5000/neighbour/jaccard/entry/${entry}`,
      headers: {'content-type': 'application/json'},
      data:proteins
    })
        .then(result => {
          setProteins({results:result.data});
          console.log(result.data)
        })
        .catch(error=> {
          console.log(error);
        })
	};*/

	const onSubmit = (e) => {
		e.preventDefault();
		getData();
    console.log(profileData);
	};

  return (
    <div className="search">
      <h1>PROTEINERA</h1>
      <form className="search__searchForm">
        <input
          type="text"
          className="search__input"
          placeholder="enter some keyword"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <input
          className="search__submit"
          type="submit"
          value="Search"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}
