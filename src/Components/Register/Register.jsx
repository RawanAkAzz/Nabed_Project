import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from "mdbreact";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: {
        name: "",
        fbAccount: "",
        description: "",
        email: "",
        phoneNumber: "",
        Location: "",
        password: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // fetch('https://http://localhost:3000/')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
  }
  onChange(e) {
    var states = this.state.states;
    var name = e.target.id;
    var value = e.target.value;
    states[name] = value;
    this.setState({ states: states });
    console.log(this.state.states);
  }
  onClick(event) {
    event.preventDefault();

    //console.log(this.state.states)
    var that = this;
    $.ajax({
      type: "POST",
      url: "http://localhost:5001/Register",
      data: that.state.states,
      success: function(data) {
        alert("the Name is used, please use another name");
        console.log("hide");
      },
      error: function(request, status, error) {}
    });
  }
  render() {
    return (
      // <MDBContainer className="d-flex justify-content-center mt-5">
      //   <MDBRow>
      //     <MDBCol md="6">
      //       <MDBCard>
      //         <MDBCardBody className="mx-4">
      //           <div className="text-center">
      //             <h3 className="pink-text mb-5">
      //               <strong>Sign up</strong>
      //             </h3>
      //           </div>
      //           <MDBInput label="Yor email" group type="text" validate />
      //           <MDBInput label="Yor password" group type="password" validate />

      //           <div classNsme="md-form pd-3">
      //             <div className="form-check my-4">
      //               <input
      //                 className="form-check-input"
      //                 tpe="checkbox"
      //                 id="defultCheck12"
      //               />
      //               <label htmlFor="defultckeck12" className="grey-text">
      //                 Accept the
      //                 <a href="#!" className="blue-text">
      //                   Terms and conditions
      //                 </a>
      //               </label>
      //             </div>
      //           </div>
      //           <MDBRow className="d-fle align-items-center mb-4">
      //             <MDBCol md="6" className="text-center">
      //               <button
      //                 type="button"
      //                 className="btn btn-pink btn-block btn-rounded z-depth-1"
      //               >
      //                 Sign up
      //               </button>
      //             </MDBCol>
      //             <MDBCol md="6">
      //               <p className="font-small grey-text d-flex justify-content-end">
      //                 Have an account?
      //                 <a href="#!" className="blue-text ml-1">
      //                   Log in
      //                 </a>
      //               </p>
      //             </MDBCol>
      //           </MDBRow>
      //         </MDBCardBody>
      //         {/* <button

      //         onChange={this.onChange} disabled={!isEnabled}> Show Shops

      //         </button> */}

      //         <div className="footer pt-3 mdb-color lighten-3">
      //           <MDBRow className="d-flex justify-content-center">
      //             <p className="font-small white-text mb-2 pt-3">
      //               or Sign up with:
      //             </p>
      //           </MDBRow>
      //           <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
      //             <a href="#!" className="fa-lg p-2 m-2 fb-ic">
      //               <MDBIcon
      //                 icon="facebook-f"
      //                 fab
      //                 size="lg"
      //                 className="white-text"
      //               >
      //                 {" "}
      //               </MDBIcon>
      //             </a>
      //             <a href="#!" className="fa-lg p-2 m-2 tw-ic">
      //               <MDBIcon className="fab fa-twitter white-text fa-lg">
      //                 {" "}
      //               </MDBIcon>
      //             </a>
      //             <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
      //               <MDBIcon className="fab fa-google-plus-g white-text fa-lg">
      //                 {" "}
      //               </MDBIcon>
      //             </a>
      //           </MDBRow>
      //         </div>
      //       </MDBCard>
      //     </MDBCol>
      //   </MDBRow>
      // </MDBContainer>

      <MDBContainer className="justify-content-center mt-5">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="pink-text mb-5">
                    <strong>Sign up</strong>
                  </h3>
                </div>
                <MDBInput label="Your email" group type="text" validate />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                />
                <div className="md-form pb-3">
                  <div className="form-check my-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck12"
                    />
                    <label htmlFor="defaultCheck12" className="grey-text">
                      Accept the
                      <a href="#!" className="blue-text">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <MDBCol md="6" className="text-center">
                    <button
                      type="button"
                      className="btn btn-pink btn-block btn-rounded z-depth-1"
                    >
                      <a href="/doctorCards" className="blue-text ml-1">
                        Sign up
                      </a>
                    </button>
                  </MDBCol>
                  <MDBCol md="6">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Have an account?
                      <a href="/signIn" className="blue-text ml-1">
                        Log in
                      </a>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <div className="footer pt-3 mdb-color lighten-3">
                <MDBRow className="d-flex justify-content-center">
                  <p className="font-small white-text mb-2 pt-3">
                    or Sign up with:
                  </p>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a
                    href="https://www.facebook.com/"
                    className="fa-lg p-2 m-2 fb-ic"
                  >
                    <MDBIcon
                      icon="facebook-f"
                      fab
                      size="lg"
                      className="white-text"
                    >
                      {" "}
                    </MDBIcon>
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon className="fab fa-twitter white-text fa-lg">
                      {" "}
                    </MDBIcon>
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon className="fab fa-google-plus-g white-text fa-lg">
                      {" "}
                    </MDBIcon>
                  </a>
                </MDBRow>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
//         <div className="form-style-7">
//           <form>
//             <body>
//               {" "}
//               <center>
//                 <input
//                   id="filled-search"
//                   label="name"
//                   type="text"
//                   placeholder="Name"
//                   // className={classes.textField}
//                   // margin="normal"
//                   // variant="filled"
//                   onChange={this.onChange}
//                   name="Name"
//                 />
//                 <br />

//                 <input
//                   id="filled-search"
//                   label="email"
//                   type="text"
//                   placeholder="email"
//                   // className={classes.textField}
//                   // margin="normal"
//                   // variant="filled"
//                   onChange={this.onChange}
//                   name="email"
//                 />

//                 <br />

//                 <input
//                   id="filled-search"
//                   label="pasasword"
//                   // className={classes.textField}
//                   type="password"
//                   placeholder="pasasword"
//                   name="pasasword"
//                   autoComplete="pasasword"
//                   // margin="normal"
//                   // variant="filled"
//                   onChange={this.onChange}
//                 />

//                 <br />

//                 <input
//                   id="filled-search"
//                   label="phoneNumber"
//                   // className={classes.textField}
//                   type="text"
//                   placeholder="PhoneNumber"
//                   // autoComplete="current-phoneNumber"
//                   // margin="normal"
//                   // variant="filled"
//                   onChange={this.onChange}
//                   name="phoneNumber"
//                 />

//                 <br />

//                 <br />

//                 <input
//                   id="filled-search"
//                   label="location"
//                   // className={classes.textField}
//                   type="text"
//                   placeholder="location"
//                   // autoComplete="current-phoneNumber"
//                   // margin="normal"
//                   // variant="filled"
//                   onChange={this.onChange}
//                   name="location"
//                 />

//                 <br />

//                 <br />

//                 {/* <input
//                   id="filled-search"
//                   label="fbAccount"
//                   // className={classes.textField}
//                   type="text"
//                   placeholder="fbAccount"
//                   // autoComplete="current-phoneNumber"
//                   // margin="normal"
//                   // variant="filled"
//                   onChange={this.onChange}
//                   name="fbAccount"
//                 /> */}

//                 <br />
//                 <button>
//                   <a
//                     class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
//                     href="/DoctorCards"
//                   >
//                     Enter
//                   </a>
//                 </button>
//               </center>
//             </body>
//           </form>
//         </div>
//       </article>
