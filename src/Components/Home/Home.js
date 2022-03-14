import React from 'react'
import HomeBg from './1.jpg';

const Home = () => {
    return (
        <div style={{paddingBottom:'2%', height:'92vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', background:`rgba(0,0,0,0.7) url(${HomeBg}) no-repeat center center/cover` , backgroundBlendMode:'darken', overflowX:'hidden'}}>
            <h4 style={{color:'white'}}>Welcome to</h4>
            <h1 style={{color:'white'}}>ASME Campus Chapter</h1>
            <h4 style={{color:'white'}}>MESCOE</h4>
        </div>
    )
}

export default Home;