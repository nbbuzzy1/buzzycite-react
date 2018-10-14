import React from 'react';

const CopyCitation = (props) => (
  <div>
    {props.citation && <button onClick={props.handleCopyCitation}>Copy citation</button>}
    <div id="fullCitation" contentEditable="true"></div>
  </div>
)

export default CopyCitation;