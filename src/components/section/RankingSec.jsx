import React from "react";
import RankingCard from "../ui/RankingCard";

const Ranking = [{
    icons: <span>📈</span>,
    title: "High-ranking keywords",
    desc: "High-ranking keywords are those with broad appeal and strong competition. They can drive significant traffic but will require substantial SEO efforts, such as SEO services, PPC advertising, and web development\n Investing in content quality, backlink strategies, and ongoing optimization is essential to compete effectively in this space. Additionally, businesses must stay current with search engine algorithms and trends to maintain visibility"
}, {
    icons: <span>📊</span>,
    title: "Medium-ranking keywords",
    desc: "Medium-ranking keywords are moderately competitive but still valuable for driving niche traffic. They often represent specific interests or needs, allowing businesses to connect with target audiences more effectively\n Examples include email marketing campaigns and IT project management. Leveraging targeted content marketing and social media engagement can enhance visibility for these keywords, making them a worthwhile investment for growing brands"
}, {
    icons: <span>📉</span>,
    title: "Low-ranking keywords",
    desc: "Low-ranking keywords typically have less competition, making it easier to rank for them. Although traffic may be lower, they can attract highly targeted audiences who are looking for specific solutions\n Examples include contract-to-hire services and website maintenance services. Focusing on long-tail keywords and local SEO strategies can help businesses capitalize on these opportunities, leading to higher conversion rates despite the lower traffic volume"
}];

const RankingSec = () => {

    return ( 
             <div className="flex flex-wrap bg-neutral-200 text-black items-center justify-center p-10">
                <h2 className="content-heading text-center font-heading font-semibold">
                <span className="text-blue-500">Ranking</span>  Potential  </h2>

                <div className="section-space"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black pt-10">
                {Ranking.map((item, index)=>{
                    const paragraphs = item.desc.split("\n");
                    return(
                    <RankingCard 
                    key={index} // Use unique identifier for key
                    icons={item.icons}
                    title={item.title}
                    desc={paragraphs}
                    />);
                })
                }
            </div>
            <div className="section-space"></div>
        </div>

    );
};

export default RankingSec;