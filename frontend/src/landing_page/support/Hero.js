import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' id='supportHero'>
            <div className='row mb-5' id='supportWrapper'>
                <div className='col-2'></div>
                <div className='col-5'>
                    <h4 className='mt-5 mb-3'>Support Portal</h4>
                    <h3 className='fs-4 mt-5 mb-5'>Search for an answer or browse help topics to create a <br></br>ticket</h3>
                    <input placeholder='Eg: how do i activate F&O, why my ordered is getting rejected'></input><br></br><br></br>
                    <a href=''>Track Account Opening</a>&nbsp;&nbsp;&nbsp;
                    <a href=''>Track segment activation</a>&nbsp;&nbsp;&nbsp;
                    <a href=''>Intraday margins</a><br></br><br></br>
                    <a href=''>Kite user manual</a>
                </div>
                <div className='col-5 p-3'>
                    <h6 className='mt-5' style={{marginLeft: "300px"}}><a href="">Track Tickets</a></h6>
                    <h4 className='mt-5 pt-5'>Featured</h4>
                    <h6 className='p-3'>1. <a href="">Surveillance measure on scrips - July 2024</a></h6>
                    <h6 className='p-3 pt-0'>2. <a href="">Latest Intraday leverages and Square-off timings</a></h6>
                </div>
            </div>
        </div>
     );
}

export default Hero;