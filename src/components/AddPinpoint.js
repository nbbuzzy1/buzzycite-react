import React from 'react';

const AddPinpoint = (props) => (
  <div>
    <input value={props.pinpointNumber} type="text" placeholder="Pinpoint" onChange={props.handlePinpoint} />
  </div>
)

export default AddPinpoint;