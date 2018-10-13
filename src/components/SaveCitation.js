import React from 'react';

const SaveCitation = (props) => (
  <div>
    {props.citation && <button onClick={props.handleSaveCitation}>Save citation</button>}
  </div>
)

export default SaveCitation;