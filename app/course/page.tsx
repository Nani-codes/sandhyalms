// app/external/page.js
import React from 'react';

const ExternalPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://nani-codes.github.io/lmsmockdeploy/"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="External Content"
      />
    </div>
  );
};

export default ExternalPage;
