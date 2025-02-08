import axios from "axios";
import FeatureCard from "../ui/FeatureCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function BlogSection() {
  const [page, setPage] = useState(1);

  const fetchBlogs = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://galasback.onrender.com/api/post/all-blogs?page=${pageParam}&limit=8`
    );
    return res.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 8) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  return (
    <>
      <div className="section-space" aria-hidden="true"></div>
      <section className="outer-blog bg-neutral-200 text-black">
        <div className="section-space"></div>
        <section className="feature relative px-4">
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
                {error && <h2>{error.message}</h2>}
                <div className="feature-card grid px-2 grid-cols-1 lg:grid-cols-4 gap-8">
                  {data?.pages.map((page) =>
                    page.map((post) => {
                      const {
                        _id,
                        imageUrl,
                        title,
                        content,
                        author,
                        createdAt,
                      } = post;
                      return (
                        <Link to={`/blog/${_id}`} key={_id}>
                          <FeatureCard
                            imageUrl={imageUrl}
                            title={title}
                            content={content}
                            author={author}
                            createdAt={createdAt}
                          >
                            {title}
                          </FeatureCard>
                        </Link>
                      );
                    })
                  )}
                </div>
                {isFetching && <p>Loading...</p>}
                {hasNextPage && !isFetchingNextPage && (
                  <button
                    onClick={() => fetchNextPage()}
                    className="load-more-button"
                  >
                    Load More
                  </button>
                )}
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
