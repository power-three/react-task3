import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="contact">
<h2 id="Upload">Upload your CV</h2>
<form action="/myform" method="post">
<div className=" columns ">
<p>
First Name: <br />
<input type="text" name="test" />
</p>
</div>
<div className=" columns ">
<p>
Sconed Name: <br />
<input type="text" name="test" />
</p>
</div>

<input  type="file"  />
<button type="submit">Upload</button>
</form>
</div>
);
  }
}

