import React, {Component} from '../../../node_modules/react'
 const divStyle = {
                margin: '40px',
               background:'pink',
                border: '5px solid pink'
              };
              class About extends Component{
    render(){
        
        return(
           
       <div className="p-3 mb-2 bg-warning text-dark" id="e">  <div style={divStyle}/>
        <div  className="br2 ba  mv4 w-100 w-50-m w-25-l mw5 center" style={{width: '300px', height: '50px',padding:'10px'}} >

        <center>
           About App 
           </center> 
            </div></div>
          )
    }
}
export default About;