import React, { Suspense } from "react";
import MainLayout from "../layout/MainLayout";

const OurblogContent = React.lazy(() => import("../ui/BlogContent"));
const BlogSection = React.lazy(() => import("../section/BlogSection"));

const Blog = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading....</div>
        }
      >
        <OurblogContent></OurblogContent>
        <BlogSection></BlogSection>
      </Suspense>
    </MainLayout>
  );
};

export default Blog;
