import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-7">
          <h4 className="text-center mb-5 fs-5"><a style={{ textDecoration: "none"}} href="">Brokerage calculator</a></h4>
          <ul className="fs-6 mb-5 text-muted">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="fs-5"><a style={{ textDecoration: "none" }} href="">List of Charges</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;