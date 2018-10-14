import React from 'react';

const AddRegionalAppVolume = (props) => (
  <div>
    <div>
      <input value={props.regionalVolume} type="number" id="regionalVolume" placeholder="Regional Volume" onChange={props.handleRegionalVolume}/>
    </div>
    <div>
      <select id="regionalReporter" onChange={props.handleRegionalReporter}>
        <option value="">Regional Reporter</option>
        <option value="N.E.3d">N.E.3d</option>
        <option value="N.E.2d">N.E.2d</option>
        <option value="N.E.">N.E.</option>
      </select>
    </div>
    <div>
      <input value={props.regionalFirstPage} type="number" id="regionalFirstPage" placeholder="Regional First Page" onChange={props.handleRegionalFirstPage}/>
    </div>
  </div>
)

export default AddRegionalAppVolume;