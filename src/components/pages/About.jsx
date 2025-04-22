import React, { Suspense } from "react";
import MainLayout from "../layout/MainLayout";

const AboutTopSec = React.lazy(() => import("../section/AboutTopSec"));
const AboutServices = React.lazy(() => import("../section/AboutServices"));
const Industries = React.lazy(() => import("../section/Industries"));
const Contact = React.lazy(() => import("../section/ContactUs"));
// const PrimaryKeySection = React.lazy(() => import("../section/PrimaryKeySection"));
// const SecondaryKeySection = React.lazy(() => import("../section/SecondaryKeySec"));
// const RankingSec= React.lazy(() => import("../section/RankingSec"));

const Blog = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading....</div>
        }
      >
        <AboutTopSec></AboutTopSec>
        <AboutServices></AboutServices>
        <Industries></Industries>
        <Contact></Contact>
        {/* <PrimaryKeySection></PrimaryKeySection>
        <SecondaryKeySection></SecondaryKeySection>
        <RankingSec></RankingSec> */}
      </Suspense>
    </MainLayout>
  );
};

export default Blog;
