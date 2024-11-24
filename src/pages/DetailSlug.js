import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Trip from '../Components/tripList/Trip'
import axios from 'axios'
import $ from 'jquery'

import Blog from '../Components/Blog'
import ClintReview from '../Components/Home/ClintReview'
import Popular from '../Components/Home/Popular'
import Feature from '../Components/Home/Feature'
import { Helmet } from 'react-helmet-async'


const DetailSlug = () => {
  const { slug } = useParams()
  const [page, setPage] = useState()

  const [meta, setMeta] = useState()
  useEffect(() => {
    const response = axios.get('/api/menudetail/' + slug).then(({ data }) => {
      setPage(data)
      setMeta(data)
    })
  }, [slug])


  console.log('aaa', meta?.meta_title)

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
        <meta name="keywords" content={meta?.meta_keywords} />
        <meta name="description" content={meta?.meta_description} />
      </Helmet>
      <div className='blog'>
        <Container className='blog'>
          <div>
            <h1 className="fw-bold mt-3 text-center  " >{page?.name}</h1>
            <div className='about-style' dangerouslySetInnerHTML={{ __html: [page?.content] }} />
          </div>
          <Popular popularTour={popularTour} />
          <div >
            <h1 className="fw-bold mt-3 text-center" >{page?.subtitle[0]?.name}</h1>
            <div className='about-style' dangerouslySetInnerHTML={{ __html: [page?.subtitle[0]?.content] }} />
          </div>
          <Container>
            <div >
              <h1 className="fw-bold mt-3 text-center" >{page?.subtitle[1]?.name}</h1>
              <div className='about-style' dangerouslySetInnerHTML={{ __html: [page?.subtitle[1]?.content] }} />
            </div>
            <Blog />
          </Container>
          <Container>
            {page?.subtitle?.slice(2, page?.subtitle?.length).map((item, index) => {
              return (
                <Container>
                  <div >
                    <h1 className="fw-bold mt-3 text-center" >{item?.name}</h1>
                    <div className='about-style' dangerouslySetInnerHTML={{ __html: [item?.content] }} />
                  </div>
                </Container>
              )
            })}
          </Container>
        </Container>
      </div>
    </>
  )
}
export default DetailSlug;