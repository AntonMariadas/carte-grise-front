import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom"
import "./Simulateur";
import Simulateur from "./Simulateur";



const App = () => {

  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
