import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <h1>Pick Court</h1>
    <div>
      <Link to="/SupremePost">Ohio Supreme Court Post May 1, 2002</Link>
    </div>
    <div>
      <Link to="/SupremePre">Ohio Supreme Court Pre May 1, 2002</Link>
    </div>
    <div>
      <Link to="/AppealPostPrint">Ohio Court of Appeals Post Print-Published May 1, 2002</Link>
    </div>
    <div>
      <Link to="/AppealPostNonPrint">Ohio Court of Appeals Post Non-Print-Published May 1, 2002</Link>
    </div>
    <div>
      <Link to="/AppealPrePrint">Ohio Court of Appeals Pre Print-Published May 1, 2002</Link>
    </div>
    <div>
      <Link to="/AppealPreNonPrint">Ohio Court of Appeals Pre Non-Print-Published May 1, 2002</Link>
    </div>
  </div>
);

export default DashboardPage;