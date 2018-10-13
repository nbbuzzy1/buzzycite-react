import React from 'react';

const AddOhioVolume = (props) => (
  <div>
    <div>
      <input type="number" id="ohioVolume" placeholder="Ohio Volume" onChange={props.handleOhioVolume}/>
    </div>
    <div>
      <select id="ohioReporter" onChange={props.handleOhioReporter}>
        <option value="">Ohio Reporter</option>
        <option value="Ohio St.3d">Ohio St.3d</option>
        <option value="Ohio St.2d">Ohio St.2d</option>
        <option value="Ohio St.">Ohio St.</option>
      </select>
    </div>
    <div>
      <input type="number" id="ohioFirstPage" placeholder="Ohio First Page" onChange={props.handleOhioFirstPage}/>
    </div>
  </div>
)

export default AddOhioVolume;