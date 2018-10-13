import React from 'react';

const RemoveCitation = (props) => (
  <div>
    {props.citation && <button onClick={props.handleRemoveCitation}>Remove citation</button>}
  </div>
)

export default RemoveCitation;