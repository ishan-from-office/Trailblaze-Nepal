import React from 'react'
import { Container } from 'react-bootstrap'
import PaymentsIcon from '@mui/icons-material/Payments'
import PeopleIcon from '@mui/icons-material/People'
import { motion } from 'framer-motion'
import { duration } from 'moment/moment'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'

const About = () => {



  return (
    <>

      <div className="about-section">
        <div className="about-banner">
          <img
            className="img-fluid"
            src="https://www.luxuryholidaynepal.com/uploads/articles/images/Gokyo-lakes-trek-by-luxury-holidays-nepal.jpg"
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
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ x: 1 }}>
              About us
            </motion.h1>
          </div>
        </div>

        <Container>
          <div className="about-1 mt-5">
            <div className="about-1-sub">
              <span>OUR Tour Gallery</span>
              <div className="row  about-2  my-3">
                <div className="col-md-6">
                  <h2>HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET</h2>
                </div>
                <div className="col-md-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.Placeat nostrud natus tempora justo. Laboriosam, eget
                    mus nostrud natus tempora. Lorem ipsum dolor sit amet,
                    consec tetur adipiscing eliting dolor sit amet. Placeat
                    nostrud natus tempora justo nostrud natus tempora.
                  </p>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-4">
                  <div className="service-list d-flex align-items-center justify-content-between">
                    <div className="service-icon-box">
                      <div className="icon-box">
                        <PaymentsIcon className="icon" />
                      </div>
                    </div>
                    <div className="service-content ms-3">
                      <h5>AFFORDABLE PRICE</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-list d-flex align-items-center justify-content-between">
                    <div className="service-icon-box">
                      <div className="icon-box">
                        <PaymentsIcon className="icon" />
                      </div>
                    </div>
                    <div className="service-content ms-3">
                      <h5>BEST DESTINATION</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-list d-flex align-items-center justify-content-between">
                    <div className="service-icon-box">
                      <div className="icon-box">
                        <PaymentsIcon className="icon" />
                      </div>
                    </div>
                    <div className="service-content ms-3">
                      <h5>PERSONAL SERVICE</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vedio-content">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/csaQc_qpn8U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="about-3">
                <div className="about-content-3 text-center my-5">
                  <span className="text-center">OUR ASSOCAITES</span>
                  <h1 className="my-3">PARTNER'S AND CLIENTS</h1>
                  <p className="text-center ">
                    Mollit voluptatem perspiciatis convallis elementum corporis
                    quo veritatis aliquid blandit, blandit torquent, odit
                    placeat. Adipiscing repudiandae eius cursus? Nostrum magnis
                    maxime curae placeat.
                  </p>
                </div>
              </div>
              <div className="partner">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="https://demo.bosathemes.com/html/travele/assets/images/logo7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://demo.bosathemes.com/html/travele/assets/images/logo8.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://demo.bosathemes.com/html/travele/assets/images/logo10.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://demo.bosathemes.com/html/travele/assets/images/logo9.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="about-4 mt-5">
          <div className="about-4-img">
            <img
              src="https://demo.bosathemes.com/html/travele/assets/images/img26.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="about-4-content text-center">
              <div className="about-4-content-1">
                <span>CALLBACK FOR MORE</span>
                <h2>GO TRAVEL.DISCOVER. REMEMBER US!!</h2>
                <p>
                  CALLBACK FOR MORE GO TRAVEL.DISCOVER. REMEMBER US!! Mollit
                  voluptatem perspiciatis convallis elementum corporis quo
                  veritatis aliquid blandit, blandit torquent, odit placeat.
                  Adipiscing repudiandae eius cursus? Nostrum magnis maxime
                  curae placeat.
                </p>
              </div>
              <div className="about-4-content-2 mt-4">
                <div className="row ">
                  <div className="col-3">
                    <div className="about-4-box d-flex align-items-center justify-content-between">
                      <div className="about-4-icon">
                        <PeopleIcon className="icon-about-4" />
                      </div>
                      <div className="about-icon-content">
                        <h4>500K+</h4>
                        <p>Satisfied Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="about-4-box d-flex align-items-center justify-content-between">
                      <div className="about-4-icon">
                        <PeopleIcon className="icon-about-4" />
                      </div>
                      <div className="about-icon-content ">
                        <h4>500K+</h4>
                        <p>Awards Achieve</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="about-4-box d-flex align-items-center justify-content-between">
                      <div className="about-4-icon text-center">
                        <PeopleIcon className="icon-about-4" />
                      </div>
                      <div className="about-icon-content">
                        <h4>500K+</h4>
                        <p>Active Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="about-4-box d-flex align-items-center justify-content-between">
                      <div className="about-4-icon">
                        <PeopleIcon className="icon-about-4" />
                      </div>
                      <div className="about-icon-content">
                        <h4>100K+</h4>
                        <p>Tour Destnation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
