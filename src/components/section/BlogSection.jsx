import axios from "axios";
import FeatureCard from "../ui/FeatureCard";
import { useEffect, useState } from "react";

export default function BlogSection() {
    const [blogData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    const getApiData = async () => {
        try {
            const res = await axios.get("https://galasback.onrender.com/api/post/all-blogs");
            setMyData(res.data);
            console.log(res);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <div className="section-space" aria-hidden="true"></div>
            <section className="outer-blog container mx-auto">
                <div className="section-space"></div>
                <section className="feature relative px-4 bg-neutral-200 text-black">
                    <div className="section-space"></div>
                    <div className="feature-inner container mx-auto flex flex-col">
                        <div className="feature flex justify-start px-4 items-start lg:gap-2">
                            <article className="relative flex mb-6 px-2 flex-col">
                                <h6 className="section-title p-4r text-gray-500 text-start font-bold">
                                    Features
                                </h6>
                            </article>
                        </div>
                        <div>
                            <section className="features relative px-4">
                                {isError && <h2>{isError}</h2>}
                                <div className="feature-card grid px-2 grid-cols-1 lg:grid-cols-4 gap-8">
                                    {blogData.slice(4,8).map((post) => {
                                        const { _id,imageUrl, title, content, author,createdAt } = post;
                                        return (
                                            <FeatureCard
                                                key={_id}
                                                imageUrl={imageUrl}
                                                title={title}
                                                content={content}
                                                author={author}
                                                createdAt={createdAt}
                                            >
                                                {title}
                                            </FeatureCard>
                                        );
                                    })}
                                </div>
                                <div className="section-space"></div>
                            </section>
                        </div>
                    </div>
                    <div className="section-space-inner"></div>
                </section>
            </section>
        </>
    );
}