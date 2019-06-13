// import React, { Component } from "react";

// class SignIn extends Component {
//    constructor(props){
//      super(props);
//      this.state = {
//        email : "",
//        password : ""
//      }
//    }
   
//    onclick = event =>{
//      this.state({
//        [event.target.email]:event.target.value
//      })
//    }

//   render(){
//     return (
//       <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//         <main class="pa4 black-80">
//           <form class="measure center">
//             <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
//               <legend class="f4 fw6 ph0 mh0">LogIn</legend>
//               <div class="mt3">
//                 <label class="db fw6 lh-copy f6" for="email-address">
//                   Email
//                 </label>
//                 <input
//                   class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="email"
//                   name="email-address"
//                   id="email-address"
//                   onclick={this.onclick}
//                 />
//               </div>
//               <div class="mv3">
//                 <label class="db fw6 lh-copy f6" for="password">
//                   Password
//                 </label>
//                 <input
//                   class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="password"
//                   name="password"
//                   id="password"
//                     on={this.onChange}
//                 />
//               </div>
//             </fieldset>
//             <div class="">
//               <input
//                 class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
//                 type="submit"
//                 value="LogIn"
//               />
//             </div>
//             <div class="lh-copy mt3">
//                <a
//                 class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"

//             href="/Register"
//           >
//             Register
//           </a>
//             </div>
//           </form>
//         </main>
//       </article>
//     );
//     }
//   }
// export default SignIn;

    
import React, { Component } from 'react';


class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  sendData() {
    const data = { email: this.state.email, password: this.state.password }
    console.log(data)
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  clicked() {
    this.setState({
      email: "",
      password: "",
      isEnabled: false
    });
  }

  // getInfo() {

  //   // event.preventDefault();

  //   fetch('http://localhost:3500/getshops', {
  //     method: 'GET',
  //     headers: { "Content-Type": "application/json" }
  //   }).then(response => response.json())
  //     .then(state => {
  //       console.log(state)
  //       this.setState({shops: state.shops})});

  // }


  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
    console.log(this.state.email)
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  render() {
    const { email, password } = this.state;
    var isEnabled = email.length > 0 && password.length > 0;
    return (
      <body>
        <div className="form-style-7" >
          <center>
            <div className="App">
              <br></br>
              <h4>
                Doctor Profile
          </h4>
               Email <input id="rawan" type='text' placeholder='Enter your email' name="email" required onChange={this.handleEmailChange} /><br></br>
              Password <input type='password' placeholder='password' name="password" required onChange={this.handlePasswordChange} /><br></br>
              <br></br>
             <button 
              
              onChange={this.handleChange} disabled={!isEnabled}> MyProfile
              
              </button>
    <br></br>
                    
            </div></center>
           </div>

            </body>
    );
  }
}
export default SignIn;


