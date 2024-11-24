/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScroll } from '../Components/UseScroll'
import axios from 'axios'
import Popular from '../Components/Home/Popular'
import ClintReview from '../Components/Home/ClintReview'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


const BlogDetailSlug = () => {
    const { slug } = useParams()

    const [page, setPage] = useState(null);
    const [meta, setMeta] = useState(null);
    const [element, controls] = useScroll();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/blog/' + slug);
                setPage(response.data);
                setMeta(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [slug]);


    const [popularTour, setPopular] = useState()
    const [featureTour, setFeatureTour] = useState()
    const [clientReview, setClientReview] = useState()

    useEffect(() => {
        fetchClientReview()
        fetchPopular()
        fetchFeature()
    }, [])

    const fetchClientReview = async () => {
        try {
            const response = await axios.get('/api/clientreviews')
            setClientReview(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchFeature = async () => {
        try {
            const response = await axios.get('/api/tours/featuredHolidays')
            setFeatureTour(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const fetchPopular = async () => {
        try {
            const response = await axios.get('/api/tours/popular')
            setPopular(response.data)
        }
        catch (error) {
            console.log(error)
        }
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
            <div className="company-detail" >
                <Container className='text-center'  >
                    <div className="container text-center  blog-container " style={{ alignItems: 'center' }}>

                        <h1 className="text-center mb-4 fw-light" >{page?.title}</h1>
                        <img
                            src={window.baseURL + page?.image}
                            alt='Blog Post'
                            className=" rounded img-fluidrounded mx-auto d-block blog-img text-center center"
                            loading="lazy"
                        ></img>
                        <div className='blog-desc' dangerouslySetInnerHTML={{ __html: [page?.description] }} />
                        <div className="text-center">
                            <Link to={'/blog'}>
                                <button className="vew-more mb-5 text-center ">Back To Blog</button>
                            </Link>
                        </div>



                    </div>
                </Container>
                <ClintReview clintReview={clientReview} />
            </div>
        </>
    )
}
export default BlogDetailSlug
