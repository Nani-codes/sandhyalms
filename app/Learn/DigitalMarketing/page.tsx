import React from 'react'
import Intro from './intro/intro'
import SWOT from './SWOT/Swot'
import Website from './Website/Website'
function page() {
  return (
    <div style={{display:"flex", margin:"auto", flexWrap:"wrap", justifyContent:"center",alignItems:"center"}}>
        <Intro></Intro>
        <SWOT></SWOT>
        <Website></Website>
    </div>
  )
}

export default page