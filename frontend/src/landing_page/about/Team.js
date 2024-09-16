import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5">
        <div className="col-6"></div>
        <div className="col-1">
        <h1 className="text-center mb-4">People</h1>
        </div>
      </div>
      <div className="row p-3text-muted" style={{ lineHeight: "1.8", fontSize: "1.05em"}}>
        <div className="col-6 p-3 text-center">
          <img style={{ borderRadius: "100%", width: "50%"}}src="media/images/nitinKamath.jpg" alt="nitin Kamath Image" />
          <h4 className="mt-5">Nitin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/>
            hurdles he faced during his decade long stint as a trader. Today,<br/>
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee<br/>
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href= "https://nithinkamath.me" style={{ textDecoration: "none" }}>Homepage</a> / <a style={{textDecoration: "none"}} href="">TradingQnA</a> / <a href="https://x.com/nithin0dha?lang=en" style={{textDecoration: "none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;