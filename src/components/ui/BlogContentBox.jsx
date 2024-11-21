import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogContentBox() {
  const [blogData, setBlogData] = useState([]);
  const [isError, setIsError] = useState(null);

  const getBlogs = async () => {
    try {
      const res = await axios.get(
        "https://galasback.onrender.com/api/post/all-blogs"
      );
      setBlogData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Other Blogs...</h3>
      {isError && <p className="text-red-500">{isError}</p>}
      {!isError && blogData.length === 0 && <p>No blogs available.</p>}
      <ul className="list-none p-0">
        {blogData.map((post) => {
          const { _id, imageUrl, createdAt, title, content } = post;
          return (
            <li key={_id} className="mb-2">
              <Link
                to={`/blog/${_id}`}
                className="text-blue-600 cursor-pointer"
              >
                {title}...
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogContentBox;
