import MainLayout from "../layout/MainLayout";
import React,{ Suspense } from "react";

const heading={
  image:"https://imageio.forbes.com/specials-images/imageserve/411354685/960x0.jpg?height=474&width=711&fit=bounds",
  title: "Galas IT Solution",
  description: "Galas IT Solution is a leading provider of digital marketing services, IT solutions, and staffing services that empower businesses to thrive in today’s digital landscape. With years of industry experience, we specialize in offering innovative and results-driven solutions tailored to meet the unique needs of our clients.Our core mission is to deliver value through expertise, ensuring that businesses achieve their goals through cutting-edge technology, data-driven marketing strategies, and expert talent acquisition. From SEO management to IT consulting, we provide comprehensive solutions that enhance your business performance and maximize ROI.",
}

const ServiceData=[{
  title: "Digital Marketing Services",
  description:["SEO Management – Improve your website's search engine ranking and drive organic traffic with our expert SEO services, designed to increase visibility on search engines like Google.",
  "PPC (Pay-Per-Click) Advertising – Create high-quality, targeted ads that drive traffic to your website, increasing website traffic and revenue.",
  "Content Marketing – Develop and manage content that resonates with your audience, driving traffic and increasing website traffic and revenue.",
  "Social Media Management – Build strong connections with your audience through tailored social media marketing strategies, boosting brand awareness and engagement.",
  "Email Campaign Management – Generate leads and improve customer retention through personalized email marketing campaigns that are crafted to drive action.",
  "Website Maintenance – Keep your website running smoothly with our website maintenance services, ensuring optimal performance, security, and user experience."]
},
{
  title:"IT Services",
  description:["IT Consulting – Empower your business with strategic IT consulting services, helping you implement scalable and efficient IT infrastructure.",
  "Mobile Application Development – Create impactful and user-friendly mobile apps that drive customer engagement on iOS and Android platforms.",
  "Web Development – Build fast, secure, and responsive websites with our comprehensive web development services, tailored to meet your business objectives.",
  "IT Project Management – Ensure the success of your projects with our expert IT project management services, from planning and execution to completion.",],
},
{
  title:"Staffing Services",
  description:["Permanent Staffing – Find the perfect fit for your long-term roles with our professional permanent staffing services, ensuring the right talent matches your organization’s needs.",
  "Contract Staffing – Meet your short-term or project-based staffing requirements with our contract staffing solutions, providing skilled professionals on demand.",
	"Contract to Hire – Evaluate potential hires before making permanent commitments with our flexible contract-to-hire services, ensuring you hire the best fit for your team."]

}
]

const Primary = [
  {
    title: "1.SEO Services",
    description: [
      "Ranking: High",
      "This is a high-ranking keyword with strong competition. Optimizing for this can drive traffic from businesses looking for SEO management."
    ]
  },
  {
    title:"2.PPC (Pay-Per-Click) Advertising",
    description:["Ranking: High",
      "A high-traffic keyword relevant to businesses seeking instant results from their marketing campaigns."
    ]
  },
  {
    title:"3.Content Creation",
    description:["Ranking: Medium",
      "This keyword is moderately competitive and relevant for businesses looking to enhance their content marketing strategies"
    ]
  },{
    title:"4.Social Media Marketing",
    description:["Ranking: High",
      "Highly popular with businesses focused on increasing brand awareness through platforms like Facebook, Instagram, and LinkedIn."
    ]
  },{
    title:"5.Email Marketing Campaigns",
    description:["Ranking: Medium",
      "A moderately competitive keyword aimed at businesses interested in personalized marketing strategieso	A moderately competitive keyword aimed at businesses interested in personalized marketing strategies"
    ]
  },{
    title:"6.Website Maintenance Services",
    description:["Ranking: Medium to Low",
      "This keyword has low competition but is niche, which means targeting it can drive specific, valuable traffic."
    ]
  },
  {
    title:"7.IT Consulting Services",
    description:["Ranking: High",
      "Competitive but highly relevant for attracting businesses in need of IT expertise and consulting services."
    ]
  },{
    title:"8.Mobile Application Development",
    description:["Ranking: High",
      "This keyword has a large volume of searches from businesses looking to create mobile apps for Android and iOS."
    ]
  },{
    title:"9.Web Development Services",
    description:["Ranking: High",
      "A competitive and frequently searched term, especially among businesses seeking to build or enhance their websites."
    ]
  },{
    title:"10.IT Project Management",
    description:["o	Ranking: Medium",
      "This is moderately competitive, relevant for attracting companies looking to outsource or manage complex IT projects."
    ]
  },{
    title:"11.Permanent Staffing Services",
    description:["Ranking: Medium",
      "A keyword that attracts businesses looking for long-term employee solutions."
    ]
  },{
    title:"12.Contract Staffing Services",
    description:["Ranking: Medium",
      "Relevant for companies needing short-term, flexible staffing solutions."
    ]
  },{
    title:"13.Contract to Hire Services",
    description:["Ranking: Low to Medium",
      "This niche keyword has less competition and targets businesses interested in temporary-to-permanent staffing options."
    ]
  }
];

const Secondary=[{
  title:"Search engine ranking",
  description:"Highly competitive but crucial for businesses looking to improve their SEO.",
},{
  title:"Organic traffic",
  description:"Medium competition, relevant for companies focused on improving their online visibility.",
},{
  title:"Lead generation",
  description:"High competition, relevant in the context of email marketing and PPC services.",
},{
  title:"Customer retention",
  description:"Low to medium competition, useful for businesses focusing on long-term client relationships via email marketing.",
},{
  title:"Responsive websites",
  description:"Low to medium competition, relevant for web development services targeting mobile optimization.",
}]

const Ranking=[{
  description:"High-ranking keywords are those with broad appeal and strong competition. They can drive significant traffic but will require substantial SEO efforts, like SEO services, PPC advertising, and web development."
},{
  description:"Medium-ranking keywords are moderately competitive but still valuable for driving niche traffic. Examples include email marketing campaigns and IT project management."
},{
  description:"Low-ranking keywords typically have less competition, making it easier to rank for them. Although traffic may be lower, they can attract highly targeted audiences. Examples include contract to hire services and website maintenance services."
}
]

const About = () => {
  return (
    <MainLayout>
      <Suspense
      fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <div className="about-us p-2 container mx-auto px-4">
        <div className="about-inner flex justify-center items-center flex-wrap gap-10 flex-col lg:flex-row p-2">
          <div className="about-img relative flex-1">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/411354685/960x0.jpg?height=474&width=711&fit=bounds"
              alt="About image showcasing companies description"
              className="rounded-2xl object-cover shadow-sm h-[75vh] w-full"
              loading="lazy"
            />
          </div>

          <div className="info mt-10 px-2 py-2 gap-4 flex flex-col">
            <h2 className="text-gray-50 p-2 text-center text-5xl font-semibold text-[#5C6FCD]">{heading.title}</h2>
            <p className="leading-1 mt-4 text-justify p-4 text-sky-200">{heading.description}</p>
          </div>
          <div className="mt-10">
            <h3 className="mt-4 text-center">Our Services Include:</h3>
            <div className="flex flex-wrap mt-20 gap-10 leading-8">
                {ServiceData.map(item=>{
                  return(
                    <div className="sm:w-full bg-[#fff] text-[#1e40af] font-semibold lg:w-[30vw] p-5 text-xs rounded-md hover:bg-[#1e40af] hover:text-[#fff] hover:rounded-[3vw]">
                      <h4>{item.title}</h4>
                      <ul>
                      {item.description.map((desc) => (
                        <li key={desc}>
                          {desc}
                        <br /> 
                        </li>
                      ))}
                      </ul>
                    </div>
                    )
                  })};
              </div>
          </div>

          <h4 className="my-20 font-semibold text-center">Primary Keywords</h4>
          <div className="primary group cursor-pointer flex flex-wrap gap-10 fit-content">
              {Primary.map(item=>{
                return(
                  <>
                  <div className="p-6 sm:text-xs mt-10 group-hover:blur-sm hover:!blur-none  group-hover:scale-[0.85] hover:!scale-100 rounded-lg w-[30vw]  bg-[#3b82f6] hover:bg-[#1e40af]">
                  <h5 className="sm:text-[2vw] font-semibold">{item.title}</h5>
                  <ul className="list-disc list-inside">
                  {item.description.map((desc) => (
                        <li key={desc}>{desc}<br /> 
                        </li>
                  ))}
                  </ul>
                  </div>
                  </>
                )
              })}
          </div>

          <h4 className="mt-4 flex items-center">Secondary Keywords:</h4>
          <p className="mt-4 mb-4 w-full text-center">These are the variations of the primary keywords, which may also rank and bring in additional traffic</p>
          <div className="mt-20 flex flex-wrap gap-10 items-center gap-10">
              {Secondary.map(item=>{
                return(
                  <>
                  <div className= "bg-[#fff] w-[28vw] text-[#151515] px-5 py-5 rounded-md hover:bg-[#1e40af] hover:text-sky-200">
                    <h5 className="font-semibold text-xl sm:text-[3vh] px-4">{item.title}</h5>
                    <p className="text-xs  px-4 leading-1 mt-2 sm:text-xs font-semibold">{item.description}</p>
                  </div>
                  </>
                )
              })}
          </div>
          <h4 className="mt-4 flex items-center justify-center">Ranking Potential:</h4>
          <div className="mt-20 group flex flex-wrap gap-20 p-6 items-center w-full justify-center w-full">
            {Ranking.map((item) => (
              <div className="bg-[#fff] w-[20vw] h-[18vw] text-[#151515] p-5 rounded-[8vh] group-hover:scale-[0.85] hover:!scale-100 hover:text-[#1e40af] hover:font-bold">
                <p className="text-md px-4 leading-1 mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Suspense>
    </MainLayout>
  );
};
export default About;

