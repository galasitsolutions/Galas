import React from 'react';
import NewProduct from '../../../public/newProduct1.jpg';
import galas from "../../assets/img/icons/galas.webp"
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Wromise from "../../assets/img/icons/2.png";
import ChatApp from "../../assets/img/icons/chatapp2.png";

function ProductSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    <div className="section-space"></div>
    <section className="container mx-auto px-4 flex flex-wrap gap-10 flex-col lg:flex-row justify-start items-stretch">
      <div className=" info-box flex flex-1 justify-start">
        <article className="content flex flex-col items-start gap-4">
          <div className="post"> 
          <p className="section-title p-4">
          <span className="line bg-blue-800 font-semibold"></span>Upcoming Product
        </p>
            <h2 id="hero-heading" className=" font-heading font-semibold  mb-4">
            <span className=" text-blue-600  ">Discover Innovation with Our </span>
                Latest Product Release
              </h2>
            <p className="test-base flex justify-start ">
              Effortlessly Adaptable for Seamless Integration with All Future Innovations</p>
            <br />
            <div>
              <ul className='important flex flex-col gap-2' >
                <li className='important-point flex gap-2.5 justify-start items-center' >
                  <CheckCircleIcon  className={`text-blue-400 ${isHovered ? "text-white" : "text-blue-400"}`}/>
                   Fast Performance
                   </li>
                <li className='important-point flex gap-2.5 justify-start items-center' >
                  <CheckCircleIcon  className={`text-blue-400 ${isHovered ? "text-white" : "text-blue-400"}`}/> 
                  Sleek Design</li>
                <li className='important-point flex gap-2.5 justify-start items-center' >
                  <CheckCircleIcon  className={`text-blue-400 ${isHovered ? "text-white" : "text-blue-400"}`}/>
                   Advanced Security</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <section className="basis-2/5 lg:flex-1 flex flex-col rounded-lg">
        <div className="product-gallery container flex flex-col  rounded-lg">
          <div className="product">
          <div className="unit">
              <img src={NewProduct} className='cat-log' alt="" />
            </div>
            <div className="unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
            </div>
          </div>
          <div className="product">
          <div className="bg-white rounded-lg p-2 unit flex justify-center items-center">
              <img src={Wromise} className='w-auto h-15' alt="Product" />
            </div>
            <div className="bg-white rounded-lg p-4 unit flex justify-center items-center">
              <img src={galas} className='w-auto h-15' alt="Product" />
            </div>
            <div className="bg-white rounded-lg p-2 unit flex justify-center items-center">
              <img src={ChatApp} className='w-auto h-15' alt="Product" />
            </div>
          </div>
          <div className="product">
            <div className="cat rounded-lg unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
            </div>
            <div className="cat rounded-lg unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
            </div>
          </div>
        </div>
      </section>
    </section>
    <div className="section-space"></div>
    </>
  );
}

export default ProductSection;

// import React from 'react';
// import NewProduct from '../../../public/newProduct1.jpg';
// import galas from "../../assets/img/icons/galas.webp"
// import { useState } from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Wromise from "../../assets/img/icons/wromise.png";
// import ChatApp from "../../assets/img/icons/chatapp2.png";

// function ProductSection() {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <>
//     <div className="section-space"></div>
//     <section className="container mx-auto px-4 flex flex-wrap gap-10 flex-col lg:flex-row justify-start items-stretch">
//       <div className=" info-box flex flex-1 justify-start">
//         <article className="content flex flex-col items-start gap-4">
//           <div className="post"> 
//           <p className="section-title p-4">
//           <span className="line bg-blue-800 font-semibold"></span>Upcoming Product
//         </p>
//             <h2 id="hero-heading" className=" font-heading font-semibold  mb-4">
//             <span className=" text-blue-600  ">Discover Innovation with Our </span>
//                 Latest Product Release
//               </h2>
//             <p className="test-base flex justify-start ">
//               Effortlessly Adaptable for Seamless Integration with All Future Innovations</p>
//             <br />
//             <div>
//               <ul className='important flex flex-col gap-2' >
//                 <li className='important-point flex gap-2.5 justify-start items-center' >
//                   <CheckCircleIcon  className={`text-blue-400 ${isHovered ? "text-white" : "text-blue-400"}`}/>
//                    Fast Performance
//                    </li>
//                 <li className='important-point flex gap-2.5 justify-start items-center' >
//                   <CheckCircleIcon  className={`text-blue-400 ${isHovered ? "text-white" : "text-blue-400"}`}/> 
//                   Sleek Design</li>
//                 <li className='important-point flex gap-2.5 justify-start items-center' >
//                   <CheckCircleIcon  className={`text-blue-400 ${isHovered ? "text-white" : "text-blue-400"}`}/>
//                    Advanced Security</li>
//               </ul>
//             </div>
//           </div>
//         </article>
//       </div>
//       <section className="basis-2/5 lg:flex-1 flex flex-col rounded-lg">
//         <div className="product-gallery container flex flex-col  rounded-lg">
//           <div className="product">
//           <div className="unit w-52 h-18">
//               {/* <img src={NewProduct} className='cat-log' alt="" /> */}
//             </div>
//             <div className="unit w-52 h-18">
//               {/* <img src={NewProduct} className='cat-log' alt="Product" /> */}
//             </div>
//           </div>
//           <div className="product">
//           <div className=" rounded-lg p-2 unit">
//               <img src={Wromise} className='w-52 h-18' alt="Product" />
//             </div>
//             <div className=" rounded-lg p-2 unit">
//               <img src={galas} className='w-40 h-18' alt="Product" />
//             </div>
//             <div className=" rounded-lg p-2 unit">
//               <img src={ChatApp} className='w-36 h-18' alt="Product" />
//             </div>
//           </div>
//           {/* <div className="product">
//             <div className="cat rounded-lg unit">
//               <img src={NewProduct} className='cat-log' alt="Product" />
//             </div>
//             <div className="cat rounded-lg unit">
//               <img src={NewProduct} className='cat-log' alt="Product" />
//             </div>
//           </div> */}
//         </div>
//       </section>
//     </section>
//     <div className="section-space"></div>
//     </>
//   );
// }

// export default ProductSection;
