import React from 'react';

function FailBanner({answer}) {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>;
}

export default FailBanner;
