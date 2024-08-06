import React from 'react'
import Affiliate from './Affiliate/Affiliate'
import SWOT from './SWOT/Swot'
import Website from './Website/Website'
function page() {
  return (
    <div style={{display:"flex", margin:"auto", flexWrap:"wrap", justifyContent:"center",alignItems:"center"}}>
        <Affiliate></Affiliate>
        <SWOT></SWOT>
        <Website></Website>
    </div>
  )
}

export default page