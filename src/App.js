import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Overdubs from "./components/overdubs";
import Media from "./components/media";
import Lessons from "./components/lessons";
import "./App.css";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/overdubs">
          <Overdubs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/media">
          <Media />
        </Route>
        <Route path="/lessons">
          <Lessons />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
