import React, { Component } from "../../../node_modules/react";

class Image extends Component {
  render() {
    const styleii={
      fontSize:"1rem",
      marginButtom:"8rem"
    }
    return(
      <article class="athelas">
        <div class="vh-100 dt w-100 cover  " style={{background:'url(https://www.popsci.com/sites/popsci.com/files/images/2016/12/computer-1149148_1920.jpg) no-repeat center '}}>
          <div class="dtc v-mid">     
            <div class="f1 f-1 mt-19 center mb-5 w-20 tc pv5 bg-black-20 " style={{color:'#FFF'}} style= {styleii}>
              <p className="f1 center mt-7 mb-2 wh-100" >Good health is not something we can buy. However, it can be an extremely valuable savings account.</p>
            </div>
          </div>
        </div>   
      </article>
    )
  }
}

export default Image;