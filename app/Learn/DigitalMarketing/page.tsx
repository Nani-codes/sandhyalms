import React from 'react'
import Affiliate from './Affiliate/Affiliate'
import SWOT from './SWOT/Swot'
import Website from './Website/Website'
function page() {
  return (
    <div style={{display:"flex", margin:"auto",justify:"space-between"}}>
        <Affiliate></Affiliate>
        <SWOT></SWOT>
        <Website></Website>
    </div>
  )
}

export default page