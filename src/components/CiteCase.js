import React from 'react';

const CiteCase = (props) => (
  <div>
    <div>
      <button onClick={props.handleCitation}>Cite</button>
      <h3><i>{props.parties}</i>{props.citation}</h3>
    </div>
  </div>
)

export default CiteCase;