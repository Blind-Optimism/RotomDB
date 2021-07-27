import { useState } from "react";

function PokemonSearch(props) {
  const setResult = props.setResult;

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleQuery = (e) => {
    // if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      fetchPokemon();
    // }
  };

  const fetchPokemon = async () => {
    let response = {};

    if (searchTerm !== "") {
      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    }

    if (response !== {} && response.status) {
      setResult(response);
    }

    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setResult(data);
    }
  };

  return (
    <form style={{ padding: "5rem"}} onSubmit={handleQuery}>
      <input onChange={handleChange}/>
      <button type="submit">
        Catch 'em all!
      </button>
    </form>
  );
}

export default PokemonSearch;
