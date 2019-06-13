import React, { Component } from "../../../node_modules/react";
import './doctorCards';

class doctorCards extends Component {
 constructor(props){
  super(props);
   this.status = {
     doctor : [] 
   }
 }

// componentDidMount(){
//   fetch('/')
//      .then(res => res.json())
//      .then(doctor => this.setState({doctor} , () => console.log('doctor' ,
//      doctor )));
// }
 
 render() { 
    return(
     
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
    {/* <div>
<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"/>
  <div className="tc">
    <img alt="" src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
    <h1 className="f4">Doctor1</h1>
    <hr className="mw3 bb bw1 b--black-10"/>
  </div>
  <p className="lh-copy measure center f6 black-70">
    Quite affectionate and outgoing.
    She loves to get chin scratches and will
    roll around on the floor waiting for you give her more of them.
  </p>
 </div> */}

 
   </div>  
    )              
    }
}
 
export default doctorCards;