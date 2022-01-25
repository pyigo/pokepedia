import { useContext } from "react";
// Import Components
// importing the component Nav, react is programmed to look for index.
// if the the index is named anything than index ww have to include in in the path
import Nav from "./components/Nav";

// contexts
import Usercontext from "./contexts/UserContext";

// css
import "./App.css";

function App() {

  // in able for us to use our context,  we import first
  // then we can use useContext hooks to access our context
  // const user = useContext(Usercontext)
  // console.log(user)
  return (
    <div className="App">


      {/* All context comes with the provider component. this allows us to use this as a wrapper and share information to all of its children */}
      <Usercontext.Provider value={'Christina'}>
        <Nav />
      </Usercontext.Provider>
    </div>
  );
}

export default App;
