import React from 'react';

const AddWestlawLexis = (props) => (
  <div>
    <div>
      <input className="text-input" type="number" id="westlaw" placeholder="Westlaw Number" onChange={props.handleWestlaw} />
    </div>
    <div>
      <input  className="text-input" type="number" id="lexis" placeholder="Lexis Number" onChange={props.handleLexis}/>
    </div>
  </div>
)

export default AddWestlawLexis;