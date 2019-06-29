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
import Sugrery from "./Components/CategoriesCards/Sugrery";
import Neurology from "./Components/CategoriesCards/Neurology";
import Dental from "./Components/CategoriesCards/Dental section";
import HeartSection from "./Components/CategoriesCards/HeartSection";
import Laboratory from "./Components/CategoriesCards/Laboratory Department";
import Ophthalmology from "./Components/CategoriesCards/Ophthalmology";
import GeneralServices from "./Components/CategoriesCards/GeneralServices";
import imageUpload from "./Components/imageUpload";
import Healthy from "./Components/CategoriesCards/Healthy";
import EditProfile from "./Components/EditPage/EditProfile";
import firebase from "./Components/firebase/firebase";
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
          <Route exact path="/CategoriesCards" component={Sugrery} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/Sugrery" component={Sugrery} />
          <Route exact path="/Neurology" component={Neurology} />
          <Route exact path="/Dental" component={Dental} />
          <Route exact path="/HeartSection" component={HeartSection} />
          <Route exact path="/Laboratory" component={Laboratory} />
          <Route exact path="/Ophthalmology" component={Ophthalmology} />
          <Route exact path="/GeneralServices" component={GeneralServices} />
          <Route exact path="/Healthy" component={Healthy} />
          <Route exact path="/imageUpload" component={imageUpload} />
          <Route exact path="/EditProfile" component={EditProfile} />
          <Route exact path="/firebase" component={firebase} />
        </Router>
      </div>
    );
  }
}

export default App;
