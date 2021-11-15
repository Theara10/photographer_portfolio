import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import About from "./pages/About";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/project" component={Project} exact />
          <Route path="/about" component={About} exact />
          <Route path="/hireme" component={HireMe} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
