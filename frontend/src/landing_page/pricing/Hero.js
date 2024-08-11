import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 p-5 border-bottom'>
                <h1 className='mb-3' style={{fontSize: "47px"}}>Pricing</h1>
                <h4 className='mb-5 text-muted p-4'>Free equity investments and flat ₹20 intraday and F&O trades</h4>
            </div>
            <div className='row mt-5 fs-6 border-bottom text-center'>
                <div className='col-4 p-2'>
                    <img className="mb-3" style={{ width: "60%", marginLeft: "150px"}} src="media/images/pricingEquity.svg"/>
                    <h2 className='fs-4 mb-4' style={{marginLeft: "150px"}}>Free equity delivery</h2>
                    <p className='mb-5' style={{marginLeft: "120px"}}>All equity delivery investments (NSE, BSE), <br></br>are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-2'>
                <img className="mb-3" style={{ width: "60%"}} src="media/images/intradayTrades.svg"/>
                <h2 className='fs-4 mb-4'>Intraday and F&O trades</h2>
                <p className='mb-5'>Flat ₹ 20 or 0.03% (whichever is lower) per <br></br>executed order on intraday trades across <br></br>equity, currency, and commodity trades. <br></br>Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-2'>
                <img className="mb-3"style={{ width: "60%", marginRight: "150px"}} src="media/images/pricingEquity.svg"/>
                <h2 className='fs-4 mb-4' style={{marginRight: "150px"}}>Free direct MF</h2>
                <p className='mb-5' style={{marginRight: "120px"}}>All direct mutual fund investments are <br></br>absolutely free — ₹ 0 commissions & DP <br></br>charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;