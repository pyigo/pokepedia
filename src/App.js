import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Import Components
// importing the component Nav, react is programmed to look for index.
// if the the index is named anything than index ww have to include in in the path
import Nav from "./components/Nav";

// pages
import Login from "./pages/Login";
import PokemonList from "./pages/PokemonList";
import Home from "./pages/Home";

// contexts
import UserContext from "./contexts/UserContext";

// css
import "./App.css";
import axios from "axios";
// import { Routes, Route } from "react-router-dom";

const App = () => {
  // in able for us to use our context,  we import first
  // then we can use useContext hooks to access our context
  // const user = useContext(Usercontext)
  // console.log(user)

  // We will pass on our user to all of App's children via the provider value prop
  const [user, setUser] = useState("");
  const [pokeList, setPokeList] = useState([])

  useEffect(() => {
    fetchPokemon()

    // empty aray brackets are called DEPENDENCY ARRAY. ITS goal is to call useEffect once only when the DOM  component loads
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1118"
      );
      setPokeList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }


  // console.log("this is pokelist", pokeList)

  return (
    <div className="App">
      {/* All context comes with the provider component. this allows us to use this as a wrapper and share information to all of its children */}
      <UserContext.Provider value={user}>
        <Nav />
        {/* We need to wrap our routes insIde react router Route componenet */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login setUser={setUser} />} />

          <Route path="pokemon/list" element={<PokemonList pokeList={pokeList} itemsPerPage={4} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
