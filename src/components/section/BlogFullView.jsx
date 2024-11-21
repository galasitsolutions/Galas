import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
    Try,
    WhatsApp as WhatsAppIcon,
  } from "@mui/icons-material";
import BlogContentBox from '../ui/BlogContentBox';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogFullView({title,content}) {
    const { id } = useParams();
    const [blogs,setBlogs] = useState ({})

    useEffect(()=>{
        const fetchBlog = async () =>{
            try {
                const { data } = await axios.get(`https://galasback.onrender.com/api/post/${id}`,{
                    headers:{"Content-Type": "multipart/form-data"},
                });
                console.log(data);
                setBlogs(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchBlog();
    }, [id])

  return (
    <div className="flex flex-wrap font-sans ">
      {/* Sidebar */}
      <aside className="w-1/4 p-5 bg-gray-100 flex flex-col">
        
        <BlogContentBox/>
        
        <div className="mt-6">
          <p className="font-bold">Share Article</p>
          <div className="flex space-x-3 mt-2 text-gray-600 cursor-pointer">
            <i><FacebookIcon /></i>
            <i><InstagramIcon /></i>
            <i><LinkedInIcon /></i>
            <i><WhatsAppIcon /></i>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-5">
        <section className="mb-6">
          <h4 className="text-gray-700" id={title} >{title}</h4>
           <hr style={{borderColor: '#666',borderWidth:'1',borderStyle:'solid'}} /><br />
          <p className="text-gray-700" id={content}>
            {content}
          </p>
        </section>
      </main>
    </div>
  );
};


BlogFullView.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


export default BlogFullView