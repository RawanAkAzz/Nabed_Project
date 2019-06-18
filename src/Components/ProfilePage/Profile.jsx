import React, { Component } from "react";
import { storage } from "../firebase/firebase";

class ProfilePage extends Component {
     constructor(props){
      super(props);
      this.state = {
        image: null,
        url: '',
        progress: 0
      };
    }
    componentDidMount() {
      this.setState({
        url: this.props.url
      });
    }
    onChange(e) {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
      }
    }
  
    onUpload() {
      const { image } = this.state;
      const upload = storage.ref(`images/${image}`).put(image);
      upload.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
          this.setState({ progress });
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage.ref('images').child(image.name).getDownloadURL().then((url) => {
            setTimeout(() => {
              this.setState({ url, progress: 0 }, () => this.props.onChange(this.state.url));
            }, 1000);
          });
        }
      );
    }
  
    render() {
      const style = {
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      };
  
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button type="button" id="inputGroupFileAddon01" onClick={this.onUpload.bind(this)}>
                Upload Photo
              </button>
            </div>
            <div className="custom-file">
              <input
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                type="file"
                accept="image/*"
                data-max-size="5000"
                onChange={this.onChange.bind(this)}
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01" value="">
                Choose your image
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img
                src={
                  this.props.url ||
                  'https://via.placeholder'
                }
                alt="uploaded images"
                height="100"
                width="100"
              />
            </div>
            <div className="col-sm-4">
              <progress value={this.state.progress} max="100" />
            </div>
            <div className="col-sm-4" />
          </div>
        </div>
      );
    }
  }
  
  
  export default ProfilePage;
  
  