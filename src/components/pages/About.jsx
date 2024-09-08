import MainLayout from "../layout/MainLayout";
import React,{ Suspense } from "react";

const About = () => {
  return (
    <MainLayout>
      <Suspense
      fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <div className="container px-6 py-2 flex flex-col items-center justify-center w-full overflow-hidden">
          <div className="image container h-[39vw] w-full overflow-hidden">
            <img className="h-full w-full object-cover" src="https://st5.depositphotos.com/9999814/68282/i/450/depositphotos_682823060-stock-photo-group-diverse-office-worker-employee.jpg" />
          </div>
          <div className="info mt-10 px-2 py-2 gap-4 flex flex-col">
            <h2 className="text-gray-50 p-2 text-center text-5xl font-semibold">About Galas IT Solution</h2>
            <p className="leading-1 mt-4 text-justify p-4 text-sky-200">Galas IT Solution is a leading provider of digital marketing services, IT solutions, and staffing services that empower businesses to thrive in today’s digital landscape. With years of industry experience, we specialize in offering innovative and results-driven solutions tailored to meet the unique needs of our clients.Our core mission is to deliver value through expertise, ensuring that businesses achieve their goals through cutting-edge technology, data-driven marketing strategies, and expert talent acquisition. From SEO management to IT consulting, we provide comprehensive solutions that enhance your business performance and maximize ROI.</p>
          </div>
          <h3 className="mt-4 text-center">Our Services Include:</h3>
          <div className="flex mt-10 items-center justify-center">
            <div className="flex flex-wrap gap-10 leading-8">
              <div className= "sm:w-full bg-slate-800 lg:w-[30vw] px-5 py-5 rounded-md">
                <h4 className="font-semibold">Digital Marketing Services</h4>
                <ul className="list-disc list-inside">
                  <li className="mt-2 text-xs">SEO Management – Improve your website's search engine ranking and drive organic traffic with our expert SEO services, designed to increase visibility on search engines like Google.</li>
                  <li className="mt-2 text-xs">PPC (Pay-Per-Click) Advertising – Maximize your returns with targeted PPC campaigns, ensuring higher conversion rates and better ROI.</li>
                  <li className="mt-2 text-xs">Content Creation – Enhance your online presence with high-quality, SEO-optimized content that resonates with your audience and strengthens your brand.</li>
                  <li className="mt-2 text-xs">Social Media Management – Build strong connections with your audience through tailored social media marketing strategies, boosting brand awareness and engagement.</li>
                  <li className="mt-2 text-xs">Email Campaign Management – Generate leads and improve customer retention through personalized email marketing campaigns that are crafted to drive action.</li>
                  <li className="mt-2 text-xs">Website Maintenance – Keep your website running smoothly with our website maintenance services, ensuring optimal performance, security, and user experience.</li>
                </ul>
              </div>
              <div className="sm:w-full bg-slate-800 lg:w-[30vw] items-end rounded-md px-5 py-5">
                <h4 className="font-semibold">IT Services</h4>
                <ul className="list-disc text-xs list-inside">
                  <li className="mt-2">IT Consulting – Empower your business with strategic IT consulting services, helping you implement scalable and efficient IT infrastructure.</li>
                  <li className="mt-2">Mobile Application Development – Create impactful and user-friendly mobile apps that drive customer engagement on iOS and Android platforms.</li>
                  <li className="mt-2">Web Development – Build fast, secure, and responsive websites with our comprehensive web development services, tailored to meet your business objectives.</li>
                  <li className="mt-2">IT Project Management – Ensure the success of your projects with our expert IT project management services, from planning and execution to completion.</li>
                </ul>
              </div>
              <div className="sm:w-full bg-slate-800 lg:w-[30vw] items-end rounded-md px-5 py-5">
                <h4 className="font-semibold">Staffing Services</h4>
                <ul className="list-disc text-xs list-inside">
                  <li className="mt-2">Permanent Staffing – Find the perfect fit for your long-term roles with our professional permanent staffing services, ensuring the right talent matches your organization’s needs.</li>
                  <li className="mt-2">Contract Staffing – Meet your short-term or project-based staffing requirements with our contract staffing solutions, providing skilled professionals on demand.</li>
                  <li className="mt-2">Web Development – Build fast, secure, and responsive websites with our comprehensive web development services, tailored to meet your business objectives.</li>
                  <li className="mt-2">Contract to Hire – Evaluate potential hires before making permanent commitments with our flexible contract-to-hire services, ensuring you hire the best fit for your team.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
      </Suspense>
    </MainLayout>
  );
};
export default About;

