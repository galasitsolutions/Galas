import React from 'react';
import NewProduct from '../../../public/newProduct1.jpg'

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ProductSection() {
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
                <li className='important-point flex gap-2.5 justify-start items-center' ><CheckCircleIcon/> Fast Performance</li>
                <li className='important-point flex gap-2.5 justify-start items-center' ><CheckCircleIcon/> Sleek Design</li>
                <li className='important-point flex gap-2.5 justify-start items-center' ><CheckCircleIcon/> Advanced Security</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <section className="basis-2/5 lg:flex-1 flex flex-col rounded-lg">
        <div className="product-gallery container flex flex-col  rounded-lg">
          <div className="product">
            <div className="unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
            </div>
            <div className="unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
            </div>
          </div>
          <div className="product">
            <div className="unit">
              <img src={NewProduct} className='cat-log' alt="" />
            </div>
            <div className=" unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
            </div>
            <div className=" unit">
              <img src={NewProduct} className='cat-log' alt="Product" />
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
