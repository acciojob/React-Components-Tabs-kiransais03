import React, { useState } from 'react';

const Tab = ()=>{

    let [text,setText] = useState("Pages Go Here")

    return (<div className='tabs'>
        <div className='tabs-top'>
            <div id="Home-Tab" className='tab' onClick={()=>{setText("Home Tab")}}>Home</div>
            <div  id="About-Tab" className='tab' onClick={()=>{setText("About Tab")}}>About</div>
            <div  id="Features-Tab" className='tab' onClick={()=>{setText("Features Tab")}}>Features</div>
        </div>
        <div className='viewport'>{text}</div>
    </div>)
}


export default Tab;