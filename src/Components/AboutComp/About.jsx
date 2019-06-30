import React, {Component} from '../../../node_modules/react'
 
class About extends Component{
  render(){  
    return(  
     <div className="p-5 mb-2 text-dark" id="e">  
        <div  className="br2 mv4 w-100  center" style={{width: '300px', height: '50px',padding:'10px'}} >
      <center>
         <h1>About NABED</h1>
       </center>  
         <h4>NABED_HAYAH</h4>
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
      </div>
    )
  }
}

export default About;