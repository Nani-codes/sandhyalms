import React from 'react'

function page() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src="https://nani-codes.github.io/introtodm/" 
        title="External Site" 
        width="100%" 
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  )
}

export default page