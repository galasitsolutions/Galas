import MainLayout from "../layout/MainLayout";
import React,{ Suspense } from "react";

const About = () => {
  return (
    <MainLayout>
      <Suspense
      fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <div className="container px-6 py-2 flex flex-col items-center justify-center w-full overflow-hidden">
          <div className="image container h-[39vw] w-full overflow-hidden">
            <img className="h-full w-full overflow-hidden" src="https://st5.depositphotos.com/9999814/68282/i/450/depositphotos_682823060-stock-photo-group-diverse-office-worker-employee.jpg" />
          </div>
          <div className="info mt-10 px-2 py-2">
            <h3 className="text-gray-50 p-2 text-center font-semibold">About Us</h3>
            <p className="leading-1 mt-4 text-justify p-4 text-sky-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolor recusandae modi quis porro, esse fugit minima obcaecati aliquam repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus ipsa eaque est velit eius possimus quisquam quia fuga, explicabo corrupti vitae aliquam totam soluta, molestias repudiandae ex recusandae fugiat debitis cum at illum. Quam assumenda suscipit deleniti incidunt, enim distinctio eius beatae, voluptates delectus ab id eveniet mollitia amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur sunt nostrum similique aliquam unde esse cum obcaecati deleniti neque. Omnis illum optio corrupti aut quod provident placeat doloribus corporis quia voluptate, pariatur ut. Ullam magnam qui, modi earum ex aliquid! Inventore assumenda itaque cumque cupiditate velit, ex debitis facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores a illum veniam, nobis tempore voluptates laudantium odit sequi aspernatur, excepturi possimus est quae consequuntur commodi repellendus pariatur nulla libero. Nemo nihil vitae soluta voluptates fugit labore! Fugit inventore veniam beatae ratione sed? Eum, voluptate iure sunt asperiores ullam ut sint.</p>
          </div>
        </div>
      </Suspense>
    </MainLayout>
  );
};

export default About;

