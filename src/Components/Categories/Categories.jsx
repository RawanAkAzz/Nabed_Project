import React, { Component } from "react";
// import Image from "../Image/Image"

class Categories extends Component {
   
   constructor(props){
     super(props);
     this.state = {
       name :""
     }
   }
render(){

  return(
    <div>
      <div><center>
      <h2 className="md-display-1 inverse center">Categories</h2></center></div>

  

   <center>
      <div className="row">
      <div className="col-sm-3 small-up-1 medium-up-3 large-up-4 image-grid m-b-30">
         <div className="column">
          <a href="/Sugrery" title="Department of Surgery">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Department of Surgery" width="200" />
          </a>
           <p className="md-body-1"><a className="l-dark" href="Sugrery" title="Department of Surgery"> Department of Surgery</a></p>
        </div>
        </div>
         <div className="column">
         <a href="store url=equipment/Department of Neurology}" title="Department of Neurology">
          <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Department of Neurology" width="200" />
         </a>
          <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/Department of Neurology}}" title="Department of Neurology">Department of Neurology</a></p>
        </div> 
         <div className="column">
         <a href="{{store url=equipment/Dental section}}" title="Dental section">
         <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Dental section" width="200" />
         </a>
      
         <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/Dental section}}" title="Dental section"> Dental section</a></p>
       </div>
         <div className="column">
         <a href="{{store url=equipment/package-units}}" title="Heart Section
">
          <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Heart Section
" width="200" />
         </a>
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/package-units}}" title="Heart Section
">Heart Section
</a></p>
        </div> </div>
        <div className="row">
         <div className="col-sm3 m-b-large" width="200">
           <a href="{{store url=equipment/ductless-minisplit}}" title="Laboratory Department">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Laboratory Department" width="200" />
           </a>
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/ductless-minisplit}}" title="Laboratory Department">Laboratory Department</a></p>
         </div>
         <div className="column m-b-large">
           <a href="{{store url=equipment/cuber-ice-machines}}">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Department of Ophthalmology" width="200" />
        
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/cuber-ice-machines}}" title="Department of Ophthalmology">Department of Ophthalmology</a></p>
       </a>
         </div>
         <div className="col-sm3 m-b-large">
           <a href="{{store url=equipment/refrigeration-condensing-units}}" title="refrigeration condensing units">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Refrigeration Condensing Units" width="200" />
           </a>
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/refrigeration-condensing-units}}" title="Refrigeration Condensing Units">Refrigeration Condensing Units</a></p>
 
         </div>
         <div className="col-sm3 m-b-large">
           <a href="{{store url=equipment/commercial-condensers}}" title>
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Commercial Condensers" width="200" />
          
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/commercial-condensers}}" title="Commercial Condensers">Commercial Condensers</a></p>
      </a>
         </div></div>
         <div className="column m-b-large">
           <a href="{{store url=equipment/iaq-air-cleaners-uv-lights}}" title="IAQ Air Cleaners">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="IAQ Air Cleaners" width="200" />
   
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/iaq-air-cleaners-uv-lights}}" title="IAQ Cleaners and UV Lights">IAQ Cleaners and UV Lights</a></p>
   </a>
         </div>
         <div className="column m-b-large">
           <a href="{{store url=equipment/refrigeration-evaporators}}" title="Refrigeration Evaporators">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Refrigeration Evaporators" width="200" />

             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/refrigeration-evaporators}}" title="">Refrigeration Evaporators</a></p>
           
  </a>
  </div>
         <div className="column m-b-large">
           <a href="{{store url=equipment/ptac-units}}" title="PTAC Units">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="PTAC Units" width="200" />
   </a>
   </div>
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/ptac-units}}" title="PTAC Units">P-Tac Units</a></p>
         
 
         <div className="column m-b-large m-b-60">
           <a href="{{store url=equipment/air-handlers-commercial}}">
            <img src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="Commercial Air Handlers" width="200" />
  </a>
             <p className="md-body-1"><a className="l-dark" href="{{store url=equipment/air-handlers-commercial}}" title="Commercial Air Handlers">Commercial Air Handlers</a></p>
    
</div></center>

    <div className="columns small-12 medium-3 subnav-menu medium-pull-9 m-b-60 col-leftpad--remove">
       <p className="mdc-headline">Show All Categories</p>
        <ul>
          <li><a href="{{store url=equipment/air-cooled-condensers}}">Air Cooled Condensers</a></li>
    <li><a href="{{store url=equipment/air-handlers-commercial}}">Air Handlers - Commercial</a></li>
    <li><a href="{{store url=equipment/air-handlers-residential}}">Air Handlers - Residential</a></li>
    <li><a href="{{store url=equipment/back-bar}}">Back Bar</a></li>
    <li><a href="{{store url=equipment/coils}}">Coils</a></li>
    <li><a href="{{store url=equipment/condensers-commercial}}">Condensers - Commercial</a></li>
    <li><a href="{{store url=equipment/condensers-residential}}">Condensers - Residential</a></li>
    <li><a href="{{store url=equipment/cuber-ice-machines}}">Department of Ophthalmology</a></li>
    <li><a href="{{store url=equipment/delfield-parts}}">Delfield Parts</a></li>
    <li><a href="{{store url=equipment/door-gaskets-heaters-and-accessories}}">Door Gaskets, Heaters and Accessories</a></li>
    <li><a href="{{store url=equipment/ductless-mini-split}}">Laboratory Department</a></li>
    <li><a href="{{store url=equipment/electric-furnaces}}">Electric Furnaces</a></li>
    <li><a href="{{store url=equipment/electric-heaters}}">Electric Heaters</a></li>
    <li><a href="{{store url=equipment/equipment-curbs-and-stands}}">Equipment Curbs and Stands</a></li>
    <li><a href="{{store url=equipment/exhaust-fans}}">Exhaust Fans</a></li>
    <li><a href="{{store url=equipment/flaker-ice-machines}}">Flaker Ice Machines</a></li>
    <li><a href="{{store url=equipment/furnaces}}">Furnaces</a></li>
    <li><a href="{{store url=equipment/iaq-air-cleaners-uv-lights}}">IAQ (Air Cleaners - UV Lights)</a></li>
    <li><a href="{{store url=equipment/ice-accessories}}">Ice Accessories</a></li>
    <li><a href="{{store url=equipment/manitowoc-parts}}">Manitowoc Parts</a></li>
    <li><a href="{{store url=equipment/merchandisers}}">Merchandisers</a></li>
    <li><a href="{{store url=equipment/nugget-ice-machines}}">Nugget Ice Machines</a></li>
    <li><a href="{{store url=equipment/package-units}}">Heart Section
</a></li>
    <li><a href="{{store url=equipment/prep-tables}}">Prep Tables</a></li>
    <li><a href="{{store url=equipment/ptac-units}}">PTAC Units</a></li>
    <li><a href="{{store url=equipment/reach-in-coolers}}">Reach-In Coolers</a></li>
    <li><a href="{{store url=equipment/reach-in-freezers}}">Reach-In Freezers</a></li>
    <li><a href="{{store url=equipment/refrigeration-condensing-units}}">Refrigeration Condensing Units</a></li>
    <li><a href="{{store url=equipment/refrigeration-evaporators}}">Refrigeration Evaporators</a></li>
    <li><a href="{{store url=equipment/servend-and-multiplex-parts}}">Servend and Multiplex Parts</a></li>
    <li><a href="{{store url=equipment/smoke-detectors}}">Smoke Detectors</a></li>
    <li><a href="{{store url=equipment/storage-bins}}">Storage Bins</a></li>
    <li><a href="{{store url=equipment/under-counter-ice-machines}}">Under-Counter Ice Machines</a></li>
    <li><a href="{{store url=equipment/unit-heaters}}">Unit Heaters</a></li>
    <li><a href="{{store url=equipment/wall-hung-units}}">Wall Hung Units</a></li>
    <li><a href="{{store url=equipment/water-filters}}">Water Filters</a></li>
    <li><a href="{{store url=equipment/water-source-units}}">Water Source Units</a></li>			
   
 
</ul>
 
 </div>
 </div>
)    
  }
}

  

  
    
  
export default Categories


