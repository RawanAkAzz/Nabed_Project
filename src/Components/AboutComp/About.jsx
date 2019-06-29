import React, {Component} from '../../../node_modules/react'
 const divStyle = {
                margin: '40px',
                border: '5px solid'
              };
              class About extends Component{
    render(){
        
        return(
           
       <div className="p-3 mb-2" id="e">  <div style={divStyle}/>
        <div  className="br2 ba  mv4 w-100 w-50-m w-25-l mw5 center" style={{width: '300px', height: '50px',padding:'10px'}} >

        <center>
           About App 
           </center> 
          
            </div> 
            <p>
           Hospital information systems provide a common source of information about a patient's health history. The system has to keep data in a secure place and controls who can reach the data in certain circumstances. These systems enhance the ability of health care professionals to coordinate care by providing a patient's health information and visit history at the place and time that it is needed. Patient's laboratory test information also includes visual results such as X-ray, which may be reachable by professionals. HIS provide internal and external communication among health care providers. Portable devices such as smartphones and tablet computers may be used at the bedside.
           </p>
           <p className="mb-4">
           Potential benefits of hospital information systems include: <br/>
</p>
<p>
  <ol>
* Efficient and accurate administration of finance, diet of patient, engineering, and distribution of medical aid. It helps to view a broad picture of hospital growth <br/>
* Improved monitoring of drug usage, and study of effectiveness. This leads to the reduction of adverse drug interactions while promoting more appropriate pharmaceutical utilization. <br/>
* Enhances information integrity, reduces transcription errors, and reduces duplication of information entries. <br/>
* Hospital software is easy to use and eliminates error caused by handwriting. New technology computer systems give perfect performance to pull up information from server or cloud servers.
</ol>
           </p>
           </div>
          )
    }
}
export default About;