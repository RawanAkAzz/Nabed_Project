import React, { Component } from "react";
import DoctorCards from "../Cards/doctorCards";

class GeneralServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [1]
    };
  }
  componentDidMount() {
    //is the best place to fetch data
    fetch("http://localhost:5001/Doctors")
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }));
  }
  render() {
    return (
      <div className="form-style-7">
        {this.state.doctors.map(doctor => {
          return (
            
            <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg"
                class="db w-100 br2 br--top"
                alt="Photo of a kitten looking menacing."
              />
              <div class="pa2 ph3-ns pb3-ns">
                <div class="dt w-100 mt1">
                  <center>
                    <div class="dtc">
                      <button type="button" class="btn btn-primary">
                        Primary
                      </button>
                      <h1 class="f5 f4-ns mv0">{doctor.name}</h1>
                    </div>
                  </center>
                </div>
                <center>
                  <p class="f6 lh-copy measure mt2 mid-gray">
                    {doctor.description}{" "}
                  </p>
                </center>
              </div>
              <center>
                <button>
                  <a
                    class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
                    href="/EditProfile"
                  >
                    Profile
                  </a>
                </button>
              </center>
            </article>
          );
        })}
      </div>
  
    );
  }
}

export default GeneralServices;
