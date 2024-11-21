import MainLayout from "../layout/MainLayout";
import React, { Suspense } from "react";
import AboutSection from "../section/AboutSection";

const heading = {
  image: "https://imageio.forbes.com/specials-images/imageserve/411354685/960x0.jpg?height=474&width=711&fit=bounds",
  title: "Galas IT Solution",
  description: "Galas IT Solution is a leading provider of digital marketing services, IT solutions, and staffing services that empower businesses to thrive in today’s digital landscape. With years of industry experience, we specialize in offering innovative and results-driven solutions tailored to meet the unique needs of our clients.Our core mission is to deliver value through expertise, ensuring that businesses achieve their goals through cutting-edge technology, data-driven marketing strategies, and expert talent acquisition. From SEO management to IT consulting, we provide comprehensive solutions that enhance your business performance and maximize ROI.",
}

const ServiceData = [{
  title: "Digital Marketing Services",
  description: ["SEO Management – Improve your website's search engine ranking and drive organic traffic with our expert SEO services, designed to increase visibility on search engines like Google.",
    "PPC (Pay-Per-Click) Advertising – Create high-quality, targeted ads that drive traffic to your website, increasing website traffic and revenue.",
    "Content Marketing – Develop and manage content that resonates with your audience, driving traffic and increasing website traffic and revenue.",
    "Social Media Management – Build strong connections with your audience through tailored social media marketing strategies, boosting brand awareness and engagement.",
    "Email Campaign Management – Generate leads and improve customer retention through personalized email marketing campaigns that are crafted to drive action.",
    "Website Maintenance – Keep your website running smoothly with our website maintenance services, ensuring optimal performance, security, and user experience."]
},
{
  title: "IT Services",
  description: ["IT Consulting – Empower your business with strategic IT consulting services, helping you implement scalable and efficient IT infrastructure.",
    "Mobile Application Development – Create impactful and user-friendly mobile apps that drive customer engagement on iOS and Android platforms.",
    "Web Development – Build fast, secure, and responsive websites with our comprehensive web development services, tailored to meet your business objectives.",
    "IT Project Management – Ensure the success of your projects with our expert IT project management services, from planning and execution to completion.",],
},
{
  title: "Staffing Services",
  description: ["Permanent Staffing – Find the perfect fit for your long-term roles with our professional permanent staffing services, ensuring the right talent matches your organization’s needs.",
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
    title: "2.PPC (Pay-Per-Click) Advertising",
    description: ["Ranking: High",
      "A high-traffic keyword relevant to businesses seeking instant results from their marketing campaigns."
    ]
  },
  {
    title: "3.Content Creation",
    description: ["Ranking: Medium",
      "This keyword is moderately competitive and relevant for businesses looking to enhance their content marketing strategies"
    ]
  }, {
    title: "4.Social Media Marketing",
    description: ["Ranking: High",
      "Highly popular with businesses focused on increasing brand awareness through platforms like Facebook, Instagram, and LinkedIn."
    ]
  }, {
    title: "5.Email Marketing Campaigns",
    description: ["Ranking: Medium",
      "A moderately competitive keyword aimed at businesses interested in personalized marketing strategieso	A moderately competitive keyword aimed at businesses interested in personalized marketing strategies"
    ]
  }, {
    title: "6.Website Maintenance Services",
    description: ["Ranking: Medium to Low",
      "This keyword has low competition but is niche, which means targeting it can drive specific, valuable traffic."
    ]
  },
  {
    title: "7.IT Consulting Services",
    description: ["Ranking: High",
      "Competitive but highly relevant for attracting businesses in need of IT expertise and consulting services."
    ]
  }, {
    title: "8.Mobile Application Development",
    description: ["Ranking: High",
      "This keyword has a large volume of searches from businesses looking to create mobile apps for Android and iOS."
    ]
  }, {
    title: "9.Web Development Services",
    description: ["Ranking: High",
      "A competitive and frequently searched term, especially among businesses seeking to build or enhance their websites."
    ]
  }, {
    title: "10.IT Project Management",
    description: ["Ranking: Medium",
      "This is moderately competitive, relevant for attracting companies looking to outsource or manage complex IT projects."
    ]
  }, {
    title: "11.Permanent Staffing Services",
    description: ["Ranking: Medium",
      "A keyword that attracts businesses looking for long-term employee solutions."
    ]
  }, {
    title: "12.Contract Staffing Services",
    description: ["Ranking: Medium",
      "Relevant for companies needing short-term, flexible staffing solutions."
    ]
  }, {
    title: "13.Contract to Hire Services",
    description: ["Ranking: Low to Medium",
      "This niche keyword has less competition and targets businesses interested in temporary-to-permanent staffing options."
    ]
  }
];

const Secondary = [{
  title: "Search engine ranking",
  description: "Highly competitive but crucial for businesses looking to improve their SEO.",
}, {
  title: "Organic traffic",
  description: "Medium competition, relevant for companies focused on improving their online visibility.",
}, {
  title: "Lead generation",
  description: "High competition, relevant in the context of email marketing and PPC services.",
}, {
  title: "Customer retention",
  description: "Low to medium competition, useful for businesses focusing on long-term client relationships via email marketing.",
}, {
  title: "Responsive websites",
  description: "Low to medium competition, relevant for web development services targeting mobile optimization.",
}]

const Ranking = [{
  description: "High-ranking keywords are those with broad appeal and strong competition. They can drive significant traffic but will require substantial SEO efforts, such as SEO services, PPC advertising, and web development. Investing in content quality, backlink strategies, and ongoing optimization is essential to compete effectively in this space. Additionally, businesses must stay current with search engine algorithms and trends to maintain visibility."
}, {
  description: "Medium-ranking keywords are moderately competitive but still valuable for driving niche traffic. They often represent specific interests or needs, allowing businesses to connect with target audiences more effectively. Examples include email marketing campaigns and IT project management. Leveraging targeted content marketing and social media engagement can enhance visibility for these keywords, making them a worthwhile investment for growing brands."
}, {
  description: "Low-ranking keywords typically have less competition, making it easier to rank for them. Although traffic may be lower, they can attract highly targeted audiences who are looking for specific solutions. Examples include contract-to-hire services and website maintenance services. Focusing on long-tail keywords and local SEO strategies can help businesses capitalize on these opportunities, leading to higher conversion rates despite the lower traffic volume."
}];

const About = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >

        <div className="about-us container mx-auto px-4">
          <div className="about-inner flex justify-start items-start flex-wrap flex-col lg:flex-row p-2">

            <div className="section-space"></div>

            <div className="flex flex-col lg:flex-row p-2">

              <div className="flex flex-col justify-start p-2 gap-10">
                <div className="flex flex-col justify-start flex-wrap">
                  <h1 className="text-start font-semibold p-2">{heading.title}</h1>
                  <p className="p-2 text-slate-200">{heading.description}</p>
                </div>
              </div>
              <div className="about-img relative item-center flex flex-col pl-20">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="About image showcasing companies description"
                    className="rounded-2xl object-cover shadow-sm aspect-squre shadow-sm sm:h-[50vh] md:h-[50vh]"
                    loading="lazy"
                    width={3500}
                    height={1000}
                  />
                </div>
                <div className="section-space"></div>
              </div>
            </div>

            <div className="container mx-auto services-card grid grid-cols-1 lg:grid-cols-1 gap-8">
              <h3 className="mt-4 text-center">Our Services Include:</h3>
              <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ServiceData.map(item => {
                  return (
                    <div className=" p-2 rounded-lg gap-10 bg-white text-black hover:bg-[#1e40af] hover:text-[#fff]">
                      <h4 className="font-bold">{item.title}</h4>
                      <ul>
                        {item.description.map((desc) => (
                          <li className="important-point pt-2 flex items-center gap-2" key={desc}>
                            <p className="font-normal text-sm flex-grow">{desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>

            <h2 className="font-semibold p-2 text-center w-full text-[#fff]">
              <span className="text-[#3b82f6]">Primary</span> Keywords
            </h2>
            <div className="primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Primary.map((item, index) => (
                <div key={index} className="rounded-lg shadow-lg bg-white text-black hover:bg-[#1e40af] hover:text-[#fff] h-64 flex flex-col">
                  <h4 className="p-2 font-bold">{item.title}</h4>
                  <div className="flex-grow flex justify-center">
                    <ul className="list-disc p-1 list-inside">
                      {item.description.map((desc, descIndex) => (
                        <li className="flex items-center gap-2" key={descIndex}>
                          <p className="font-normal text-sm flex-grow">{desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center p-10">
              <h2 className="font-semibold text-center w-full text-[#fff]">
                <span className="text-[#3b82f6]">Secondary</span> Keywords
              </h2>
              <p className="w-full text-center text-md">
                These are the variations of the primary keywords, which may also rank and bring in additional traffic
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black pt-10">
                {Secondary.map((item, index) => (
                  <div key={index} className="bg-[#fff] text-[#151515] rounded-lg shadow-lg overflow-hidden h-64 hover:bg-[#1e40af] hover:text-[#fff] flex flex-col justify-between">
                    <h4 className="font-bold pt-2 text-center">{item.title}</h4>
                    <p className="font-normal p-2 text-sm flex-grow">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="flex flex-wrap bg-white items-center justify-center p-10">
            <h2 className="font-semibold text-center w-full text-black">
              <span className="text-[#3b82f6]">Ranking</span> Potential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black pt-10">
              {Ranking.map((item, index) => (
                <div key={index} className="bg-[#fff] text-[#151515] rounded-lg shadow-lg overflow-hidden hover:bg-[#1e40af] hover:text-[#fff] flex flex-col justify-between h-64">
                  <h4 className="font-bold pt-2 text-center">{item.title}</h4>
                  <p className="font-normal text-sm p-2 flex-grow">{item.description}</p>
                </div>
              ))}
            </div> */}
            {/* </div> */}
          </div>
        </div>
      </Suspense>
    </MainLayout>
  );
};
export default About;

