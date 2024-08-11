import React from 'react';
 
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 13+ crore customers trust zerodha with 3.5+<br></br>
                       lakh crores worth of equity investments.
                    </p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks spam, "gamification", or annoying push<br></br>
                       notifications, High quality apps that you use at your pace, the<br></br> 
                       way you like.
                    </p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in<br></br> 
                       30+ fintech startups offer you tailored services specific to<br></br>
                       your needs.
                    </p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge with Kill Switch, we don't just<br></br>
                       facilitate trasactions, but actively help you do better with<br></br> 
                       your money.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src="media/images/ecosystem.png" style={{width: "90%" }}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our products{" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>Try Kite demo{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>   
                </div>
            </div>
        </div>
     );
}

export default Stats;