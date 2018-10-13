import React from 'react';

const AddOhioAppVolume = (props) => (
  <div>
    <div>
      <input type="number" id="ohioAppVolume" placeholder="Ohio Volume" onChange={props.handleOhioVolume}/>
    </div>
    <div>
      <select id="ohioAppReporter" onChange={props.handleOhioReporter}>
        <option value="">Ohio Reporter</option>
        <option value="Ohio St.3d">Ohio App.3d</option>
        <option value="Ohio St.2d">Ohio App.2d</option>
        <option value="Ohio St.">Ohio App.</option>
      </select>
    </div>
    <div>
      <input type="number" id="ohioAppFirstPage" placeholder="Ohio First Page" onChange={props.handleOhioFirstPage}/>
    </div>
  </div>
)

export default AddOhioAppVolume;