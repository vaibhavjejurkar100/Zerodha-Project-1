import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}
) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-4 mt-5 p-5">
        <div className="col-1"></div>
          <h1 className="mt-5 p-3">{productName}</h1>
          <p> {productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>  
  );
}

export default RightSection;



// import React from "react";

// function RightSection() {
//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <div className="col-1 mt-5 p-5"></div>
//         <div className="col-4 mt-5 p-5">
//           <h1 className="mt-5 p-3">Console</h1>
//           <p>
//             The central dashboard for your Zerodha <br />
//             account. Gain insights into your trades and <br />
//             investments with in-depth reports and <br />
//             visualisations.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//         </div>
//         <div className="col-7">
//           <img src="media/images/console.png" />
//         </div>
//       </div>
      
//       <div className="container">
//         <div className="row mt-5">
//           <div className="col-1 mt-5 p-5"></div>
//           <div className="col-5 mt-4 p-5">
//             <h2 className="mb-4">Kite Connect API</h2>
//             <p>
//               Build powerful trading platforms and <br />
//               experiences with our super simple <br />
//               HTTP/JSON APIs. If you are a startup, build <br />
//               your investment app and showcase it to our <br />
//               clientbase.
//             </p>
//             <a href="" style={{ textDecoration: "none" }}>
//               Learn More{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//           </div>
//           <div className="col-6">
//             <img src="media/images/kiteconnect.png" />
//           </div>
//         </div>
//       </div>
//     </div>  
//   );
// }

// export default RightSection;