
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Service from './Components/Service';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Features from './Pages/Features';

function App() {
  return (
    <>

      {/* <Home/> */}

      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Project} />
          <Route exact path="/about" component={Contact} />
          <Route exact path="/feature" component={Features} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      <Footer />

    </>
  );
}

export default App;
