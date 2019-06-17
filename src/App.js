import React, { Component } from "../node_modules/react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from "../node_modules/react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/Navbar";
import Register from "./Components/Register/Register";
import SignIn from "./Components/SignIn/SignIn";
import DoctorCards from "./Components/Cards/doctorCards";
import HomeCards from "./Components/Cards/homeCards";
import About from "./Components/AboutComp/About";
import Categories from "./Components/Categories/Categories";
import ProfilePage from "./Components/ProfilePage/Profile";
import firebase from './Components/firebase/firebase'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/DoctorCards" component={DoctorCards} />
          <Route exact path="/HomeCards" component={HomeCards} />
          <Route exact path="/about" component={About} />
          <Route excut path="/Categories" component={Categories} />
          <Route exact path="/ProfilePage" component={ProfilePage} />

        </Router>
      </div>
    );
  }
}

export default App;
