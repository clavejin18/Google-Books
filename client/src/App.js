// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navBar";
import Title from "./components/mainTitle";
import SavedBooks from "./pages/savedBooks";
import Search from "./pages/searchBooks";
import NotFound from "./pages/notFound";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container.fluid">
          <Navbar />
          <Title />
          <Switch>
            <Route exact path="/" component={SavedBooks} />
            <Route exact path="/books" component={SavedBooks} />
            <Route exact path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}
// Export App
export default App;