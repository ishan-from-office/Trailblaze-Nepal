import React, { useState, useEffect, lazy } from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Banner from '../Components/Home/Banner'
import Service from '../Components/Home/Service'
import axios from 'axios'
import SliderComponent from '../Components/Home/Popular'
import Feature from '../Components/Home/Feature'
import Booking from '../Components/Home/Booking'
import Company from '../Components/Home/Company'
import Top from '../Components/Home/Top'
import Suscribe from '../Components/Home/Suscribe'
import ClintReview from '../Components/Home/ClintReview'
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../Components/utilities/ScrollTop'
const HomePage = () => {
  const [popularTour, setPopular] = useState()
  const [featureTour, setFeatureTour] = useState()
  const [clientReview, setClientReview] = useState()
  const [meta, setMeta] = useState()

  useEffect(() => {
    fetchClientReview()
    fetchPopular()
    fetchFeature()
    fetchMeta()


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

  const fetchMeta = async () => {
    try {
      const response = await axios.get('/api/settings')
      setMeta(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='this is the home page' />
        <title>{meta?.meta_title}</title>
        <meta name='title' content={meta?.meta_title} />
        <meta name='keywords' content={meta?.meta_keyword} />
      </Helmet>
      <Banner clintReview={clientReview} />

      <Service />

      <SliderComponent
        popularTour={popularTour}
      />
      <Feature featureTour={featureTour} popularTour={popularTour} />

      <Booking featureTour={featureTour} clintReview={clientReview} />
      <Company />
      <Top />
      <ClintReview clintReview={clientReview} />
      <Suscribe />
      <ScrollToTopButton />
    </>
  )
}

export default HomePage;