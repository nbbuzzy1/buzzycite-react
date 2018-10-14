import React from 'react';

const AddRegionalVolume = (props) => (
  <div>
    <div>
      <input value={props.regionalVolume} required type="number" id="regionalVolume" placeholder="Regional Volume" onChange={props.handleRegionalVolume}/>
    </div>
    <div>
      <select required id="regionalReporter" onChange={props.handleRegionalReporter}>
        <option value="">Regional Reporter</option>
        <option value="N.E.3d">N.E.3d</option>
        <option value="N.E.2d">N.E.2d</option>
        <option value="N.E.">N.E.</option>
      </select>
    </div>
    <div>
      <input value={props.regionalFirstPage} required type="number" id="regionalFirstPage" placeholder="Regional First Page" onChange={props.handleRegionalFirstPage}/>
    </div>
  </div>
)

export default AddRegionalVolume;