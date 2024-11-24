import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { topPlaceContent } from '../animation/Animation'
import { topDist } from '../animation/Animation'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Blog = () => {


  const [blog, setBlog] = useState()
  const [meta, setMeta] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get('/api/blogs/list');
      setBlog(response.data)
      setMeta(response.data)
    }
    fetchBlog();
  })

  const [sliceTwo, setSliceTwo] = useState(6)

  const loadBlog = () => {

    setSliceTwo(sliceTwo + 6)
  }


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta?.meta_title}</title>
        <meta name="title" content={meta?.meta_title} />
        <meta name="keywords" content={meta?.meta_keyword} />
        <meta name="description" content={meta?.meta_description} />
      </Helmet>
      <section className="blog" >
        {/* <div className="about-banner">
          <img
            className="img-fluid"
            src="https://www.discoveryworldtrekking.com/media/2619/nepal-trek.png"
            alt=""
          />
          <div className="bottom-img">
            <img
              src="https://www.discoveryworldtrekking.com/frontend/assets/images/banner-trekker.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="about-content">
            <h1 initial={{ opacity: 0 }} whileInView={{ x: 1 }}></h1>
          </div>
        </div> */}
        <div className="container">
          <h1 className="text-center mt-5">Explore Our Blogs</h1>
          <div className="row gy-5 my-5">

            {blog?.slice(0, sliceTwo).map((item, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card" style={{ width: '100%', height: '100%' }}>

                    <motion.div
                      className="img-box"
                      variants={topDist}

                      transition={{
                        duration: 0.8,
                      }}
                    >
                      <Link to={`/blog/${item?.slug}`}>
                        <img
                          className="card-img-top img-fluid"
                          alt="..."
                          src={window.baseURL + item?.image}
                          style={{ height: '250px' }}
                        />
                      </Link>
                      <motion.div

                        variants={topPlaceContent}
                      >
                        <div className="card-body">
                          <h5 className="card-title">{item?.title}</h5>
                          <p className="card-text" >
                            {item?.description.replace(/(<([^>]+)>)/gi, '')}
                          </p>
                          <button className=" btn-continue">
                            <Link to={`/blog/${item?.slug}`}>Continue Reading...</Link>
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
            <div className="text-center">
              <button onClick={loadBlog} className="vew-more">Load more Blog</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
