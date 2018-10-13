import React from 'react';

const AddParties = (props) => (
  <div>
    <div>
      <input type="text" id="partyOne" placeholder="Party One" onChange={props.handlePartyOne}/>
    </div>
    <div>
      <input type="text" id="partyTwo" placeholder="Party Two" onChange={props.handlePartyTwo}/>
    </div>
  </div>
)

export default AddParties;