import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fbAccount: "",
      description: "",
      email: "",
      phoneNumber: "",
      Location: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.email]: e.target.value });
  }
  onClick(event) {
    event.preventDefault();
    const data = this.state;
    fetch("http://localhost:5001/Register", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(state => this.setState(state));

    console.log(this.state);
  }
  render() {
    return (
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
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
          <form class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">Register</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">
                  Name
                </label>
                <input
                  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onclick={this.onclick}
                />
                {/* <button 
              
              onChange={this.onChange} disabled={!isEnabled}> Show Shops
              
              </button> */}
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="password">
                  Email
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  on={this.onChange}
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  on={this.onChange}
                />
              </div>
            </fieldset>

            <div>
              <center>
                <button>
                  <a
                    // class="b ph3 pv2 input-reset ba b--black bg-transparent grow "
                    href="/DoctorCards"
                  >
                    Enter
                  </a>
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
