import React, { Component } from "react";

class SignIn extends Component {
   constructor(props){
     super(props);
     this.state = {
       email : "",
       password : ""
     }
   }
   
//    handleChange(e) {
//     console.log(e.target.value);
//     this.setState({[e.target.name] : e.target.value});
// }

//    onClick = event =>{
//      this.state({
//        [event.target.email]:event.target.value
//      })
//    }
//    clicked() {
//     this.setState({
//       email: "",
//       password: "",
//       isEnabled: false
//     });
//   }

//       click(event) {
//       fetch({
//           type: 'POST',
//           url: '/signin ',
//           data: this.state,
//           dataType: 'json'
//         });
//         console.log(this.state);
//       }


  
render(){
    return (
    
       <div>
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
          <form class="measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">LogIn</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">
              </label>
                <input
                 class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                   name="email-address"
                  id="email-address"
                 onlick={this.onclick}
               />
                  {/* <button 
              
             onChange={this.onChange} disabled={!isEnabled}> Show Shops
              
         </button> */}

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
                    onChange={this.onChange}
                />
              </div>
            </fieldset>
            <div class="">
              <input
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="LogIn"
              />
            </div>
            <div class="lh-copy mt3">
               <a
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"

            href="/Register"
          >
            Register
          </a>
            </div>
          </form>
        </main>
      </article>
    </div>
    )}
   
  
    
  }
export default SignIn;
