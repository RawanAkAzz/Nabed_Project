import React, {Component} from '../../../node_modules/react'
class About extends Component{
    render(){
         const divStyle = {
                margin: '40px',
               background:'pink',
                border: '5px solid pink'
              };
        return(
           
       <div id="e">  <div style={divStyle}/>
        <div  className="br2 ba  mv4 w-100 w-50-m w-25-l mw5 center" style={{width: '300px', height: '50px',padding:'10px'}} >

        <center>
           About App 
           </center> 
            </div></div>
          )
    }
}
export default About;