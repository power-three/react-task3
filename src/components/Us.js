import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row Ghaidaa">

            <div className="three columns header-col">
               <h1><span> Ghaidaa </span> </h1>

            </div>

         <div className="nine columns main-col">
              <span><a href="https://github.com/GhaidaaS"> github.com/GhaidaaS </a> </span>
            </div>
         </div>
        <div className="row Mariam">
        <div className="three columns header-col">
        <h1><span>Mariam</span></h1>
        </div>
        <div className="nine colums main-col">
              <span><a href=   "https://github.com/mariams/"> github.com/mariams</a></span>
         </div>
            </div>
         <div className="row Abdullah">

            <div className="three columns header-col">
               <h1><span>Abdullah</span></h1>
            </div>

            <div className="nine columns main-col">
           <span><a href="https://github.com/aljued"> github.com/aljued </a></span>

   				<div className="bars">

   				</div>
   			</div>
         </div>
      </section>
    );
  }
}