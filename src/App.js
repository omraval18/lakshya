import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/contact';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* loginPage */}
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>

        {/* contect */}
        <Route path="/contact">
          <Contact />
        </Route>

        {/* about */}
        <Route path="/about">
          <h1>about</h1>
        </Route>

        {/* about */}
        <Route path="/team">
          <Team/>
        </Route>

        {/* Homepage */}
        <Route exact path="/">
          <h1>homepage</h1>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
