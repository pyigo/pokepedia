import { useContext } from "react";
import { Routes, Route } from 'react-router-dom'
// Import Components
// importing the component Nav, react is programmed to look for index.
// if the the index is named anything than index ww have to include in in the path
import Nav from "./components/Nav";

// pages
import Login from "./pages/Login";

// contexts
import UserContext from "./contexts/UserContext";

// css
import "./App.css";
// import { Routes, Route } from "react-router-dom";

function App() {

  // in able for us to use our context,  we import first
  // then we can use useContext hooks to access our context
  // const user = useContext(Usercontext)
  // console.log(user)
  return (
    <div className="App">


      {/* All context comes with the provider component. this allows us to use this as a wrapper and share information to all of its children */}
      <UserContext.Provider value={'Christina'}>
        <Nav />
        {/* We need to wrap our routes insIde react router Route componenet */}
        <Routes>
          <Route path='login' element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
