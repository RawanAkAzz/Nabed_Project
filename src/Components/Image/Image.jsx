import React, { Component } from "../../../node_modules/react";

class Image extends Component {
  render() {
    const styleii={
      fontSize:"1rem",
      marginButtom:"18rem",
      textAlign: "center",
      justifyContent:"center",
      marginTop:"35",
      marginLeft:"36",
      color:'#FFF' 

    }
    const stylei={
      fontSize:"1rem",
      marginButtom:"9rem",
      textAlign: "center"

    }
    return(
      <article class="athelas">
        <div class="vh-100 dt w-100 cover " style={{background:'url(https://www.popsci.com/sites/popsci.com/files/images/2016/12/computer-1149148_1920.jpg) no-repeat center '}}>
          <div class="dtc v-mid">     
            <div class="f1 mt-19 center mb-11 w-20  pv2 bg-black-20 " style= {styleii}>
              <p className="h" style={stylei} >Good health is not something we can buy. However, it can be an extremely valuable savings account.</p>
            </div>
          </div>
        </div>   
      </article>
    )
  }
}

export default Image;