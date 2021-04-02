import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages";
import Formulaire from "./Formulaire";




const App = () => {

  return (
    <Router>
      <Formulaire />
    </Router>
  );
}

export default App;
