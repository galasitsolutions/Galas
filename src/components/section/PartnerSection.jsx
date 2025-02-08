// import BrandLogo from "../../assets/img/icons/BrandLogo.png";
// import Cityvibe from "../../assets/img/icons/CityVibe1.png";
// import Ankikerris from "../../assets/img/icons/Ankikerris.png";
// export default function PartnerSection() {
// //   const partnerMembers = [
// //     {
// //       name: "Shashank Singh",
// //       position: "Founder and Director",
// //       image: Shashank,
// //     },
// //     {
// //       name: "Vanshika Mohan",
// //       position: "Vice-President (HR)",
// //       image: Vanshika,
// //     },
// //     {
// //       name: "Shubham Singh",
// //       position: "Chief Technology Officer",
// //       image: Shubham,
// //     },
// //     {
// //       name: "Ankit Upadhyay",
// //       position: "Project Manager",
// //       image: Ankit,
// //     },
// //     {
// //       name: "Gajendra Tripathi",
// //       position: "MERN Stack Developer",
// //       image: Gajendra,
// //     },
// //     {
// //       name: "Sakshi Singh",
// //       position: "Web Developer",
// //       image: Sakshi,
// //     },
// //   ];

//   return (
//     <>
//       <section id="team" className="team relative ">
//         <div className="section-space"></div>
//         <div className="team-inner container mx-auto px-6 flex flex-col items-center gap-8">
//           <div className="content flex flex-col justify-center items-center text-center w-full">
//             <p className="section-title pb-4">
//               <span className="line bg-blue-800 font-semibold"></span> Our Partners
//             </p>
//             <h2 className="content-heading font-heading font-semibold mb-4">
//               <span className="text-blue-500">
//                 Integrate. Collaborate. Challenge.
//               </span>
//             </h2>
//             <p className="text-xs">
//             produce solutions that
//               connect
//               communicate and inspire
//             </p>
//           </div>

//                 <section className=" container mx-auto rounded-lg h-64">
//                   <div className="flex flex-row justify-between rounded-lg h-full items-center p-4">
//                     <div className="basis-1/3 h-full flex justify-center items-center">
//                         <div className="bg-white rounded-lg p-8"><img src={Cityvibe} alt="" className="h-20 w-52 rounded-lg"/></div>
//                     </div>
//                     <div className="basis-1/3 h-full flex justify-center items-center">
//                     <div className="bg-white rounded-lg p-8"><img src={BrandLogo} alt="" className="h-20 w-26 rounded-lg"/></div>
//                     </div>
//                     <div className="basis-1/3 h-full flex justify-center items-center">
//                     <div className="bg-white rounded-lg p-8"><img src={Ankikerris} alt="" className="h-20 w-26 rounded-lg"/></div>
//                     </div>
//                   </div>
//                 </section>
//         </div>
//       </section>
//     </>
//   );
// }

import BrandLogo from "../../assets/img/icons/BrandLogo.png";
import Cityvibe from "../../assets/img/icons/cityvibe.png";
import Ankikerris from "../../assets/img/icons/Ankikerris2.png";
export default function PartnerSection() {
  //   const partnerMembers = [
  //     {
  //       name: "Shashank Singh",
  //       position: "Founder and Director",
  //       image: Shashank,
  //     },
  //     {
  //       name: "Vanshika Mohan",
  //       position: "Vice-President (HR)",
  //       image: Vanshika,
  //     },
  //     {
  //       name: "Shubham Singh",
  //       position: "Chief Technology Officer",
  //       image: Shubham,
  //     },
  //     {
  //       name: "Ankit Upadhyay",
  //       position: "Project Manager",
  //       image: Ankit,
  //     },
  //     {
  //       name: "Gajendra Tripathi",
  //       position: "MERN Stack Developer",
  //       image: Gajendra,
  //     },
  //     {
  //       name: "Sakshi Singh",
  //       position: "Web Developer",
  //       image: Sakshi,
  //     },
  //   ];

  return (
    <>
      <section id="team" className="team relative ">
        <div className="section-space"></div>
        <div className="team-inner container mx-auto px-6 flex flex-col items-center gap-8">
          <div className="content flex flex-col justify-center items-center text-center w-full">
            <p className="section-title pb-4">
              <span className="line bg-blue-800 font-semibold"></span> Our
              Partners
            </p>
            <h2 className="content-heading font-heading font-semibold mb-4">
              <span className="text-blue-500">
                Integrate. Collaborate. Challenge.
              </span>
            </h2>
            <p className="text-xs">
              produce solutions that connect communicate and inspire
            </p>
          </div>

          <section className="container mx-auto rounded-lg py-2">
            <div className="flex flex-row items-center">
              <div className="m-auto justify-center items-center">
                <div className="p-4 ">
                  <img
                    src={Cityvibe}
                    alt="Cityvibe"
                    className="h-20 w-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="m-auto  flex justify-center items-center">
                <div className="p-4">
                  <a
                    href="https://www.linkedin.com/company/silver-lynx/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={BrandLogo}
                      alt="BrandLogo"
                      className="h-10 w-auto rounded-lg"
                    />
                  </a>
                </div>
              </div>
              <div className="m-auto  flex justify-center items-center">
                <div className="p-4">
                  <img
                    src={Ankikerris}
                    alt="Ankikerris"
                    className="h-16 w-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
