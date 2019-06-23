import React, { Component } from "react";
// import { storage } from "../firebase/firebase";
import { MDBInput } from "mdbreact";


class ProfilePage extends Component {
     constructor(props){
     super(props);
      this.state = {
        
        users :[
          {
        image: null,
        url: '',
        progress: 0,
        name: "ali",
        description: "jdfd sifg ",
        email: "hngfh",
        phoneNumber: "079723456235",
        Location: "amman"
  },
        {
          image: null,
          url: '',
          progress: 0,
          name: "gtwetb ht",
          fbAccount: "tb ny",
          description: "dft",
          email: "fd bh",
          phoneNumber: "07864523553",
          Location: "arbed"
           }
      
      
      ]
      }
    }
    componentDidMount() {
      fetch("http://localhost:5001/Doctors")
      .then(response => response.json())
      .then(users => this.setState({ users }));
      console.log("users")
    }
    // onChange(e) {
    //   if (e.target.files[0]) {
    //     const image = e.target.files[0];
    //     this.setState(() => ({ image }));
    //   }
    // }
  
    // onUpload() {
    //   const { image } = this.state;
    //   const upload = storage.ref(`images/${image}`).put(image);
    //   upload.on(
    //     'state_changed',
    //     (snapshot) => {
    //       const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
    //       this.setState({ progress });
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       // storage.ref('images').child(image.name).getDownloadURL().then((url) => {
    //       //   setTimeout(() => {
    //       //     this.setState({ url, progress: 0 }, () => this.props.onChange(this.state.url));
    //       //   }, 1000);
    //       // });
    //     }
    //   );
    // }
  
    render() {
      // const style = {
      //   float: 'left',
      //  // display: 'flex',
      //   //alignItems: 'center',
      //   justifyContent: 'left'
      // };
      return (
        <div className="form-row mb-3 col-auto mb-6 "> 
         <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fa fa-user prefix"></i>
            </span>
          </div>
          <h1 type="text" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon" ></h1>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            {/* <span className="input-group-text" id="basic-addon"> */}
              {/* <i className="fa fa-user prefix"></i> */}
            {/* </span> */}
          </div>
          {/* <h1 type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon" >{user.name}</h1> */}
          <MDBInput label="E-mail address" outline icon="envelope" />

        </div>
     </div>
     
      );
}
  
}
  export default ProfilePage;
  
//       //    <div className="left" style ={style}>
//       //   <progress value ={this.state.progress} max ="100"/>
//       //       <input type="file" onChange = {this.onChange}/>
//       //         <button onUpload= {this.onUpload} type="button">
//       //           Upload Photo
//       //         </button>
//       //       <img src = {this.state.url || 'https://via.placeholder'
//       //   }  height = "200" width = "200" />
//       //  </div> 
//      
//       {/* <div className="input-group"> */}
//       {/* <div className="input-group-prepend"> */}
//         {/* <span className="input-group-text" id="basic-addon">
//           <i className="fa fa-user prefix"></i>
//         </span> */}
//       </div>
//<input type="text" className="form-control" placeholder="Username" aria-label="Username" >{user.name}</input> 
       
//     // </div>
//     
// </div>

// //  </div>
    
// )
//   }