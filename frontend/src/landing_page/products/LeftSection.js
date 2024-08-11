import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-5 mt-5 mb-5">
          <img src={imageURL}/>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
          <h1 className="mt-5 mb-4">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <br></br>
          <div>
            <a href={googlePlay} style={{ textDecoration: "none" }}>
               <img src="media/images/googlePlayBadge.svg" />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={appStore} style={{ textDecoration: "none" }}>
              <img src="media/images/appstoreBadge.svg" /> 
            </a>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>  
  );
}

export default LeftSection;





// import React from "react";

// function LeftSection() {
//   return (
//     <div className="container">
//       <div className="row mt-5 border-top">
//         <div className="col-1"></div>
//         <div className="col-5 mt-5 mb-5">
//           <img src="media/images/kite.png" />
//         </div>
//         <div className="col-2"></div>
//         <div className="col-4 mt-5">
//           <h1 className="mt-5 mb-4">Kite</h1>
//           <p>
//             Our ultra-fast flagship trading platform with <br />
//             streaming market data, advanced charts, an <br />
//             elegant UI, and more. Enjoy the Kite <br />
//             experience seamlessly on your Android and <br />
//             iOS devices.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <a href="" style={{ textDecoration: "none" }}>
//             Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//           <br></br>
//           <br></br>
//           <img src="media/images/googlePlayBadge.svg" />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <img src="media/images/appstoreBadge.svg" />
//         </div>
//       </div>
//     <div className="container">
//     <div className="row mt-5">
//       <div className="col-1"></div>
//       <div className="col-5 mt-5 mb-5">
//         <img src="media/images/coin.png" />
//       </div>
//       <div className="col-2"></div>
//       <div className="col-4 mt-5">
//         <h1 className="mt-5 mb-4">Coin</h1>
//         <p>
//           Buy direct mutual funds online, commission-
//           <br />
//           free, delivered directly to your Demat <br />
//           account. Enjoy the investment experience <br />
//           on your Android and iOS devices.
//         </p>
//         <a href="" style={{ textDecoration: "none" }}>
//           Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//         </a>
//         <br></br>
//         <br></br>
//         <img src="media/images/googlePlayBadge.svg" />
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <img src="media/images/appstoreBadge.svg" />
//       </div>
//     </div>
//   </div>
//   <div className="container">
//         <div className="row mt-5">
//           <div className="col-1"></div>
//           <div className="col-5 mt-5 mb-5">
//             <img src="media/images/varsity.png" />
//           </div>
//           <div className="col-2"></div>
//           <div className="col-4 mt-5">
//             <h1 className="mt-5 mb-4">Varsity mobile</h1>
//             <p>
//               An easy to grasp, collection of stock market <br />
//               lessons with in-depth coverage and <br />
//               illustrations. Content is broken down into <br />
//               bite-size cards to help you learn on the go.
//             </p>
//             <a href="" style={{ textDecoration: "none" }}>
//               Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <a href="" style={{ textDecoration: "none" }}>
//               Learn More{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//             <br></br>
//             <br></br>
//             <img src="media/images/googlePlayBadge.svg" />
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <img src="media/images/appstoreBadge.svg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSection;