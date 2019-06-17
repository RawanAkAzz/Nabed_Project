import React, { Component } from "react";
import $ from 'jquery'
import { Link  } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { states :{
      name: "",
      fbAccount: "",
      description: "",
      email: "",
      phoneNumber: "",
      Location: "",
      password: ""
    }
  }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // fetch('https://http://localhost:3000/')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
  }
  onChange(e) {
    var states = this.state.states
    var name = e.target.id
    var value = e.target.value
    states[name] = value
    this.setState({states: states})
    console.log(this.state.states)
   
  }
  onClick(event) {
    event.preventDefault();

    //console.log(this.state.states)
    var that = this
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/Register',
      data: that.state.states,
      success: function (data) { 
        alert("the Name is used, please use another name")
      console.log("hide") 

      },
      error: function (request, status, error) {
  
      
      }
    })
  }
  render() {
    return (
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div classNsme="mt3">
             <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba  hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onChange}
                />
                {/* <button 
              
              onChange={this.onChange} disabled={!isEnabled}> Show Shops
              
              </button> */}
              </div>
              <div className="mv3">  <label class="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent  w-100"
                  type="e-mail"
                  name="email"
                  id="email"
                  onChange={this.onChange}
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onChange}
                />
              </div>
               <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="phoneNumber">
                phoneNumber
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={this.onChange}
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="description">
                description
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="description"
                  id="description"
                  onChange={this.onChange}
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="Location">
                Location
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="Location"
                  id="Location"
                  onChange={this.onChange}
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="fbAccount">
                fbAccount
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="fbAccount"
                  id="fbAccount"
                  onChange={this.onChange}
                />
              </div>
            </fieldset>
           
            <div>
              <center>
                <button onClick={this.onClick}>
                  <Link
                    
                    to="/SignIn"
                  >
                    Enter
                  </Link>
                </button>
              </center>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Register;

//   return (
//     <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//       <main class="pa4 black-80">
//         <form class="measure center">
//           <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
//             <legend class="f4 fw6 ph0 mh0">LogIn</legend>
//             <div class="mt3">
//               <label class="db fw6 lh-copy f6" for="email-address">
//                 Email
//               </label>
//               <input
//                 class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                 type="email"
//                 name="email-address"
//                 id="email-address"
//               />
//             </div>
//             <div class="mv3">
//               <label class="db fw6 lh-copy f6" for="password">
//                 Password
//               </label>
//               <input
//                 class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                 type="password"
//                 name="password"
//                 id="password"
//               />
//             </div>
//           </fieldset>
//           <div class="">
//             <input
//               onClick={onRouteChange("home")}
//               class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
//               type="submit"
//               value="LogIn"
//             />
//           </div>
//           <div class="lh-copy mt3">
//             <a href="#0" class="f6 link dim black db">
//               Register
//             </a>
//           </div>
//         </form>
//       </main>
//     </article>
//   );


// <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      //   <div className="form-style-7">
      //     <form>
      //       <body>
      //         {" "}
      //         <center>
      //           <input
      //             id="filled-search"
      //             label="name"
      //             type="text"
      //             placeholder="Name"
      //             // className={classes.textField}
      //             // margin="normal"
      //             // variant="filled"
      //             onChange={this.onChange}
      //             name="Name"
      //           />
      //           <br />

      //           <input
      //             id="filled-search"
      //             label="email"
      //             type="text"
      //             placeholder="email"
      //             // className={classes.textField}
      //             // margin="normal"
      //             // variant="filled"
      //             onChange={this.onChange}
      //             name="email"
      //           />

      //           <br />

      //           <input
      //             id="filled-search"
      //             label="pasasword"
      //             // className={classes.textField}
      //             type="password"
      //             placeholder="pasasword"
      //             name="pasasword"
      //             autoComplete="pasasword"
      //             // margin="normal"
      //             // variant="filled"
      //             onChange={this.onChange}
      //           />

      //           <br />

      //           <input
      //             id="filled-search"
      //             label="phoneNumber"
      //             // className={classes.textField}
      //             type="text"
      //             placeholder="PhoneNumber"
      //             // autoComplete="current-phoneNumber"
      //             // margin="normal"
      //             // variant="filled"
      //             onChange={this.onChange}
      //             name="phoneNumber"
      //           />

      //           <br />

      //           <br />

      //           <input
      //             id="filled-search"
      //             label="location"
      //             // className={classes.textField}
      //             type="text"
      //             placeholder="location"
      //             // autoComplete="current-phoneNumber"
      //             // margin="normal"
      //             // variant="filled"
      //             onChange={this.onChange}
      //             name="location"
      //           />

      //           <br />

      //           <br />

      //           {/* <input
      //             id="filled-search"
      //             label="fbAccount"
      //             // className={classes.textField}
      //             type="text"
      //             placeholder="fbAccount"
      //             // autoComplete="current-phoneNumber"
      //             // margin="normal"
      //             // variant="filled"
      //             onChange={this.onChange}
      //             name="fbAccount"
      //           /> */}

      //           <br />
      //           <button>
      //             <a
      //               class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
      //               href="/DoctorCards"
      //             >
      //               Enter
      //             </a>
      //           </button>
      //         </center>
      //       </body>
      //     </form>
      //   </div>
      // </article>
      