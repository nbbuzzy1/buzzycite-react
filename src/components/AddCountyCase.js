import React from 'react';

const AddCountyCase = (props) => (
  <div>
    <div>
      <input value={props.county} required type="text" id="county" placeholder="County" onChange={props.handleCounty} />
    </div>
    <div>
      <input value={props.caseNo} required type="text" id="caseNo" placeholder="Case Number" onChange={props.handleCaseNo}/>
    </div>
  </div>
)

export default AddCountyCase;