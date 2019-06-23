import React , {Component} from "react";

class Neurology extends Component{
     render(){
         const style = {
     marginTop:"370px",
    marginBottom: "5rem",
    justifyContent: "left"
    }
         return(
            <div className="text-justify align-bottom font-weight-bold" style = {style} >

          <p>
  The OHSU Department of Neurology is one of the nation’s leading neurologic research and training programs and provides the most comprehensive care of neurologic illnesses in the Pacific Northwest.
We have subspecialty centers that offer specialized care for patients with a range of neurologic diseases including Alzheimer’s disease and related dementias, Parkinson’s disease and other movement disorders, multiple sclerosis, stroke, amyotrophic lateral sclerosis, neuromuscular diseases, epilepsy and brain tumors. These centers provide expert care, conduct research and hold educational programs for patients and physicians throughout the region.

Our department has a robust laboratory research program aimed at understanding the cause and cure of a variety of neurologic diseases. Finally, we have a highly regarded neurology residency program and offer post-doctoral training in multiple subspecialty areas. Our goal is to continue providing state-the-art care for neurologic illnesses today, while conducting research, and training the next generation of neurologists to improve neurologic disease treatments in the future.
          </p>
  </div>
         )
     }
}
export default Neurology;
