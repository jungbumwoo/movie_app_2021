import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigaion from "./components/Navigation";

import "./App.css";

function App() {
  
  return (
    <HashRouter>
      <Navigaion />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;
