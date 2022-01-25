// Import Components
import "./App.css";
// importing the component Nav, react is programmed to look for index.
// if the the index is named anything than index ww have to include in in the path
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
