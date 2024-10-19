import MainLayout from "../layout/MainLayout";
import React,{ Suspense } from "react";
import Card from "../ui/Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../ui/Button";
import { useState } from "react";

const heading={
  image:"https://imageio.forbes.com/specials-images/imageserve/411354685/960x0.jpg?height=474&width=711&fit=bounds",
  description: "Galas IT Solution is a leading provider of digital marketing services, IT solutions, and staffing services that empower businesses to thrive in today’s digital landscape. With years of industry experience, we specialize in offering innovative and results-driven solutions tailored to meet the unique needs of our clients.Our core mission is to deliver value through expertise, ensuring that businesses achieve their goals through cutting-edge technology, data-driven marketing strategies, and expert talent acquisition. From SEO management to IT consulting, we provide comprehensive solutions that enhance your business performance and maximize ROI.",
}

const Service=[{
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

}]

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
    description:["Ranking: Medium",
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

const Ranking = [{
  description: "High-ranking keywords are those with broad appeal and strong competition. They can drive significant traffic but will require substantial SEO efforts, such as SEO services, PPC advertising, and web development. Investing in content quality, backlink strategies, and ongoing optimization is essential to compete effectively in this space. Additionally, businesses must stay current with search engine algorithms and trends to maintain visibility."
}, {
  description: "Medium-ranking keywords are moderately competitive but still valuable for driving niche traffic. They often represent specific interests or needs, allowing businesses to connect with target audiences more effectively. Examples include email marketing campaigns and IT project management. Leveraging targeted content marketing and social media engagement can enhance visibility for these keywords, making them a worthwhile investment for growing brands."
}, {
  description: "Low-ranking keywords typically have less competition, making it easier to rank for them. Although traffic may be lower, they can attract highly targeted audiences who are looking for specific solutions. Examples include contract-to-hire services and website maintenance services. Focusing on long-tail keywords and local SEO strategies can help businesses capitalize on these opportunities, leading to higher conversion rates despite the lower traffic volume."
}];

const About = () => {
  const [ServiceData,setServiceData]=useState(Service);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MainLayout>
      <Suspense
      fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
      <section className="product relative">
      <div className="section-space"></div>
      <div className="about-us p-2 container mx-auto px-4">
        <div className="product-inner container mx-auto px-4 flex flex-col">
          <div className="about-img relative flex-1">
            <img
              src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About image showcasing companies description"
              className="rounded-2xl object-cover shadow-sm h-[75vh] w-full"
              loading="lazy"
            />
          </div>

          <div className="product flex justify-center items-center p-2 lg:p-4 lg:gap-2">
            <article className="relative flex flex-col">
              <h2 className="content-heading text-center font-heading font-semibold mb-5">
                Galas IT <span className="text-blue-600">Solutions</span>
              </h2>
              <p className="text-xs text-center">
                {heading.description}
              </p>
            </article>
          </div>
          <div className="section-space"></div>
          <div className="container mx-auto services-card grid grid-cols-1 lg:grid-cols-1 gap-8">
            <h3  className="content-heading text-center font-heading font-semibold">Our Services Include:</h3>
            <section className="product relative text-black">
              <div className="services-card grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ServiceData.map((item, index) => (
                    <div
                    key={index}
                    className={`card-digital bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform-gpu`}
                  >
                    <div className="flex flex-col gap-4 h-full p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon
                          className={`w-6 h-6 ${isHovered ? "text-white" : "text-blue-600"}`}
                        />
                        <h4 id={item.title} className="card-heading font-semibold text-lg">
                          {item.title}
                        </h4>
                      </div>

                      <div className="feature flex flex-col gap-2">
                        <h5 className="font-medium text-md">Features</h5>
                        <ul className="important flex flex-col gap-2">
                          {item.description.map((feature, featureIndex) => (
                            <li
                              className="important-point flex items-center gap-2"
                              key={featureIndex}
                            >
                              <CheckCircleIcon
                                className={`w-6 h-6 ${isHovered ? "text-white" : "text-blue-600"}`}
                              />
                              <p className="text-sm">{feature}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="product-btn mt-auto">
                        <Button text="Learn More" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>


          <div>
            <div className="section-space"></div>
            <h2 className="content-heading text-center font-heading font-semibold">
              Primary<span className="text-[#3b82f6]"> Keywords</span> 
            </h2>
            <div className="section-space"></div>
            <section className="product relative text-black">
              <div className="services-card grid grid-cols-1 lg:grid-cols-4 gap-8">
              {Primary.map((item, index) => (
                <div key={index} className="card-digital rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform-gpu">
                  <div  className="flex flex-col gap-4 h-full p-4">
                    <h4 className="card-heading font-semibold text-lg">{item.title}</h4>
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
                </div>
              ))}
            </div>
          </section>
          </div>
          
          <div className="flex flex-wrap items-center justify-center p-10">
            <section className="product relative text-white">
              <div className="section-space"></div>
              <article className="relative flex flex-col">
                <h2 className="content-heading text-center font-heading font-semibold">
                  Secondary<span className="text-blue-500"> Keyword</span>
                </h2>
                <p className="text-xs text-center">
                These are variations of the primary keywords, which may also rank and bring in additional traffic.
                </p>
              </article>
              <div className="section-space"></div>
              <section className="services relative">
                <div className="services-card grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {Secondary.map((item, index) => (
                    <article className="card-content bg-white text-black flex flex-col gap-4 h-full p-4 card-digital rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform-gpu">
                      <div className="flex items-center gap-2">
                        <h4 id={item.title} className="card-heading font-semibold text-lg">
                          {item.title}
                        </h4>
                      </div>
                      <p id={item.description} className="font-normal text-sm flex-grow">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </section>
          </div>
        </div>


        <div className="section-space"></div>
        <div className="flex flex-wrap items-center bg-white justify-center p-10">
          <section className="product relative text-white">
            <article className="relative flex flex-col">
                  <h2 className="content-heading text-center text-black font-heading font-semibold">
                    Ranking <span className="text-blue-500">Potential</span>
                  </h2>
            </article>
            <div className="section-space"></div>
            <div className="services-card grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Ranking.map((item, index) => (
                <article className="card-content bg-white text-black flex flex-col gap-4 h-full p-4 card-digital rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform-gpu">
                  <div className="flex items-center gap-2">
                    <p className="font-normal text-sm flex-grow">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
      </section>
      </Suspense>
    </MainLayout>
  );
};
export default About;

