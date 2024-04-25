import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Viewmenu() {
    useEffect(() => {
        AOS.init({
            duration: '1000'
        });
    })
    return (
        <>
            <div className='views'></div>
            <div className='views2'  style={{transform:"scale(0.99023)",opacity:"0.96743"}}>
                {/* <div data-aos="fade-right"> */}
                    <div className='views3' style={{transform:"translateX(0px)",boxShadow:"rgba(0,0,0,0)0px 0px 40px"}}></div>
                {/* </div> */}
                {/* <div data-aos="fade-left"> */}
                    <div className='views4' style={{transform:"translateX(0px)",boxShadow:"rgba(0,0,0,0)0px 0px 40px"}}></div>
                {/* </div> */}
            </div>


        </>
    )
}

export default Viewmenu
