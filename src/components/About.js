import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About FortyDays</h2>
               <p>
               
                 Fortydays is summer training that allows you to expand your knowledge and achive more success by understanding your professional skills with helpful supervisor , here we are K team. 
               
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>FortyDays</span>
                     <br></br>
                    <span><a href="https://fortydays.sa/"> fortydays.sa </a></span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
