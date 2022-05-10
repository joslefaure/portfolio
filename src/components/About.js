import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="./images/profile_pic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span><i class="fa fa-user" style={{color: "white"}}></i>{" "}{resumeData.name}</span>
                     <br></br>
       						   <span><i class="fa fa-map-marker" style={{color: "white"}}> </i>
                       {" "}{resumeData.address}
                    </span>
                    <br></br>
                    <span><i class="fa fa-bookmark" aria-hidden="true" style={{color: "white"}}></i>{" "}{resumeData.website}</span>
                    <br></br>
                    <span><i class="fa fa-envelope" aria-hidden="true" style={{color: "white"}}> </i>{" "}{resumeData.mail}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}