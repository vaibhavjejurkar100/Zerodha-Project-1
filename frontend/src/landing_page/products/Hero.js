import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 p-5 border-bottom'>
                <h1 className='mb-3' style={{fontSize: "47px"}}>Technology</h1>
                <h4 className='mb-4 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mb-5'>Check out our <a style= {{ textDecoration: "none" }} href="">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;