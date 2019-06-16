import React, { Component } from "react";
import $ from 'jquery'

class SignIn extends Component {
   constructor(props){
     super(props);
     this.state = {
       email : "",
       password : ""
     } 
    //  this.onChange = this.onChange.bind(this);
    //   this.onClick = this.onClick.bind(this);
   }
   
  
 

 
//  onChange(e) {
//    var states = this.state.states
//    var email = e.target.id
//    var value = e.target.value
//    console.log(email)
//    states[email] = value
//    this.setState({states: states})
  
//  }
 onClick(event) {
   event.preventDefault();

   console.log(this.state.states)
   var that = this
   $.ajax({
     type: 'POST',
     url: 'https://http://localhost:3000/',
     data: that.state.states,
     success: function (data) {
      

     },
     error: function (request, status, error) {
       console.log(error)
     }
   })
 }


  
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
                  Email
                </label>
                <input
                  class="pa2 input-reset bahover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onChange}
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
                  
                  class="b pa2 input-reset ba bg-transparent w-100"
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
      </article></div>
   
    );
    }
  }
export default SignIn;
 