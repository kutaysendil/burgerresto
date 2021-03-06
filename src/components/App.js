import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer/Footer";
import UploadForm from "../components/Admin/UploadForm";
import DeleteForm from "./Admin/DeleteForm";
import Admin from "./Admin/Admin";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/uploadform" exact component={UploadForm} />
          <Route path="/deleteform" exact component={DeleteForm} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
