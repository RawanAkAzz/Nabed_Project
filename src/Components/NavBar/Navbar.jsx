import React, { Component } from "../../../node_modules/react";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="dt w-100 mw8 center">
          <div className="dtc w2 v-mid pa3">
            <a
              href="/"
              className="dib w2 h2 pa1 ba b--black-90 grow-large border-box"
            >
              {/* <svg
              class="link black-90 hover-black"
              data-icon="skull"
              viewBox="0 0 32 32"
              style={{ fill: "currentcolor" }}
            >
              <title>skull icon</title>
              <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12" />
            </svg> */}
            </a>
          </div>
          <div className="dtc v-mid tr pa3">
            <a
              className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
              href="/Categories"
            >
              Categories
            </a>

            <a
              className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
              href="/about"
            >
              About
            </a>

            <a
              className="f6 fw4 hover-black no-underline black-70 dib ml2 pv2 ph3 ba"
              href="/SignIn"
            >
              LogIn
            </a>

            {/* <a
              className="f6 fw4 hover-black no-underline black-70 dib ml2 pv2 ph3 ba"
              href="/doctorCards"
            >
              Register
            </a> */}
          </div>
        </nav>
        {/* <Router>
              {/* <Route exact path='/' component={Categories} /> */}

        {/* <switch>
        <Route exact path ='/' Component={Categories}/>
        <Route exact path ='/Doctors' Component={Doctors}/>
        <Route exact path ='/About' Component={About}/>
      </switch> */}
      </div>
    );
  }
}

export default NavBar;
