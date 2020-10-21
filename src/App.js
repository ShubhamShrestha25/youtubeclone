import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendVideo from "./components/RecommendVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <h1>Search page</h1>
          </Route>
          <Route path="/">
            <h1>Home page</h1>
          </Route>
        </Switch>
      </Router>
      <div className="app__page">
        <Sidebar />

        <RecommendVideo />
      </div>
    </div>
  );
}

export default App;
