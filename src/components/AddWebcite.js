import React from 'react';

const AddWebcite = (props) => (
  <div>
    <div>
      <input value={props.webcite} required type="number" id="webcite" placeholder="Webcite" onChange={props.handleWebcite}/>
    </div>
  </div>
)

export default AddWebcite;