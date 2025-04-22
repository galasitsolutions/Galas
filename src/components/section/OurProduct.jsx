import React from 'react';
import GalasEntertainment from '../../assets/img/icons/galas.webp';
import Sledge from "../../assets/img/icons/BrandLogo.png";
import Wromis from "../../assets/img/icons/wromise.png";
import Image from "../../assets/img/product/work.webp";

const OurProduct = () => {
  return (
    <>
    <div className="section-space"></div>
    <section className=" text-white container mx-auto pr-4">
      <div className='flex lg:flex-row flex-col justify-between'>
    <div className="flex flex-col gap-12 lg:w-1/2 ">
    <div className='flex flex-col gap-4 pl-4'>
      <h2 className="content-heading font-heading font-semibold">Our Latest <span style={{ color: "#2563eb" }}> Projects</span></h2>
      <a href="/about" className="text-sm text-gray-300 hover:text-blue-400 inline-block">See more projects →</a>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae magnam est, rem, quos quod quidem, veritatis facere dolorem quis et ipsum incidunt omnis quibusdam dolor modi voluptatibus autem voluptates!</p>
      </div>
      <div className="overflow-hidden">
        <div className="relative w-full ">
          <img
            src={Image}
            alt="Office"
            className="relative md:-left-32 w-full h-full rounded-tr-full rounded-tl-full md:[clip-path:polygon(0%_0%,100%_0%,100%_30%,50%_100%,0%_100%)]"
            
          />
          <div className="absolute md:top-[175px] top-[110px] md:-left-8 left-20 w-7/12 md:h-2/3 h-3/5 bg-[#151515] rounded-tr-full rounded-tl-full "></div>
        </div>
      </div>
    </div>
    <div className="section-space"></div>
    <div className="flex flex-col gap-2 lg:w-1/2 pl-4">
      {/* Card 1 */}
      <div className="bg-[#1f1f1f] rounded-xl border border-[#2a2a2a] p-6 hover:shadow-lg transition duration-300 flex md:flex-row flex-col gap-8">
        <div className='md:w-1/2 flex items-center'>
        <img src={Wromis} alt="Wromise" className="w-full rounded-md" /></div>
        <div className='md:w-1/2 flex flex-col gap-1'>
        <p className="text-blue-400 text-sm">Dating App</p>
        <h3 className="text-xl font-semibold">Wromie</h3>
        <p className="text-gray-400 text-sm line-clamp-5">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus impedit aperiam asperiores omnis quos iure minima recusandae autem officia. Ullam quae at illo recusandae vero numquam 
        </p></div>
      </div>
      <div className="flex md:flex-row flex-col gap-2">
      {/* Card 2 */}
      <div className="bg-[#1f1f1f] flex items-center flex-col gap-6 rounded-xl border border-[#2a2a2a] p-6 hover:shadow-lg transition duration-300 md:w-1/2">
      <div className='flex p-4 basis-1/2 justify-center'>
        <img src={Sledge} alt="Sledge" className="w-[70%] rounded-md" /></div>
        <div className='flex flex-col gap-1 basis-1/2'>
        <p className="text-purple-400 text-sm">An meating and community web app</p>
        <h3 className="text-xl font-semibold">Sledge</h3>
        <p className="text-gray-400 text-sm line-clamp-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut ea libero temporibus, quis quisquam reiciendis optio dolores magnam mollitia animi rem fugit culpa dicta distinctio voluptate 
        </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1f1f1f] flex flex-col gap-4 rounded-xl border border-[#2a2a2a] p-6 hover:shadow-2xl transition duration-300 md:w-1/2">
      <div className='flex p-4 basis-1/2 justify-center'>
        <img src={GalasEntertainment} alt="Galas Entertainment" className="w-[80%] rounded-md" /></div>
        <div className='flex flex-col gap-1'>
        <p className="text-orange-400 text-sm">Entertainment web of Galas</p>
        <h3 className="text-xl font-semibold">Galas Entertainment</h3>
        <p className="text-gray-400 text-sm line-clamp-5">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, at optio, voluptatibus, ipsam amet nisi tempore est fugiat dolores modi nulla quis ut sunt odio. Et eius numquam quaerat dicta?
        </p>
        </div>
      </div>
      </div>
    </div>
    </div>
  </section>
  </>
  );
};

export default OurProduct;
