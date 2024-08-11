import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h4 className='mb-5 mt-5 text-muted'>Want to know more about our technology stack? Check out the <a style={{textDecoration: "none" }} href="">Zerodha.tech</a> blog.</h4>
                <h1 className='mt-5 mb-4'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='row text-center'>
                <div className='col-1'></div>
                <div className='col-3 p-3 mt-5'>
                    <img className="mb-1" style={{width: "65%"}} src="media/images/smallcaseLogo.png"/>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img className="mb-1"style={{width: "45%"}} src="media/images/streakLogo.png"/>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-3 p-3 mt-5'>
                    <img className="mb-4"style={{width: "70%"}} src="media/images/sensibullLogo.svg"/>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-1'></div>
                </div>
                <div className='row text-center'>
                <div className='col-1'></div>
                <div className='col-3 p-3 mt-5'>
                    <img className="mb-1"style={{width: "75%"}} src="media/images/zerodhaFundhouse.png"/>
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img className="mb-1"style={{width: "45%"}} src="media/images/streakLogo.png"/>
                    <p className='text-small text-muted'>Fundamental research platform</p>
                </div>
                <div className='col-3 p-3 mt-5'>
                    <img className="mb-2"style={{width: "50%"}} src="media/images/dittoLogo.png"/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <div className='col-1'></div>
                </div>
            
        
            <button 
                    className='p-2 btn btn-primary fs-5 mb-5 mt-4'
                    style={{ width: "20%", margin: "0 auto"}}
                >
                  signup Now
            </button>
        </div>
    </div>
     );
}

export default Universe;