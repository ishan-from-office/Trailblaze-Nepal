/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'

import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'

import { Link } from 'react-router-dom'
import { InView, useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useScroll } from '../Components/UseScroll'
import { testimonialsAnimations } from '../animation/Animation'
import { useDispatch, useSelector } from 'react-redux'
import { postquery } from '../redux/Reducer'

import axios from 'axios'
const Footer = () => {
  const dispatch = useDispatch()
  const [down, setDown] = useState(false)
  const [element, controls] = useScroll()
  const [arrow, setArrow] = useState('')
  const { ref, inView } = useInView()


  const [page, setPage] = useState()
  useEffect(() => {
    const response = axios.get('api/settings').then(({ data }) => {
      setPage(data)
    })
  }, [])


  const [partners, setPartners] = useState()

  useEffect(() => {
    async function fetchAffiliatedData() {
      try {
        const response = await axios.get('/api/affiliated');
        setPartners(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);

      }
    }

    fetchAffiliatedData();
  }, []);

  console.log('oooo', partners)


  const [enquery, SetEnquery] = useState({
    name: '',
    email: '',
    phone_no: '',
    message: '',
  })

  const handleChange = (e) => {
    const value = e.target.value
    SetEnquery({ ...enquery, [e.target.name]: value })
  }
  const handleQuery = (e) => {
    e.preventDefault()
    dispatch(postquery(enquery))
  }
  return (
    <>
      <footer className='sm-only'>
        <div className="footer sm">
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <h1>Mission Summit Treks</h1>
                <ul className="mt-4">
                  <li>Phone: +977-9866378822 </li>
                  <li>WhatsApp (Nepal)    : +977-9866378822 </li>
                  <li>Email: info.trailblazenepal@gmail.com</li>
                  <li>Address: New Thimi, Bhaktapur </li>

                </ul>
                <div className="icon-container" ref={element}>
                  <motion.div
                    variants={testimonialsAnimations}
                    animate={controls}
                    transition={{
                      delay: 0.1,
                      type: 'tween',
                      duration: 0.8,
                    }}
                    className="social-nedia-icon ms-0"
                  >
                    <a href={page?.whatsaap_link}>
                      <div className="icon-box">
                        <WhatsAppIcon />
                      </div>
                    </a>
                  </motion.div>
                  <motion.div
                    variants={testimonialsAnimations}
                    animate={controls}
                    transition={{
                      delay: 0.03,
                      type: 'tween',
                      duration: 0.8,
                    }}
                    className="social-nedia-icon"
                  >
                    <a href={page?.youtube_link}>
                      <div className="icon-box">
                        <YouTubeIcon />
                      </div>
                    </a>
                  </motion.div>
                  <motion.div
                    variants={testimonialsAnimations}
                    animate={controls}
                    transition={{
                      delay: 0.03,
                      type: 'tween',
                      duration: 0.8,
                    }}
                    className="social-nedia-icon"
                  >
                    <a href={page?.twitter_link}>
                      <div className="icon-box">
                        <TwitterIcon />
                      </div>
                    </a>
                  </motion.div>
                  <motion.div
                    variants={testimonialsAnimations}
                    animate={controls}
                    transition={{
                      delay: 0.03,
                      type: 'tween',
                      duration: 0.8,
                    }}
                    className="social-nedia-icon"
                  >
                    <a href={page?.instagram_link}>
                      <div className="icon-box">
                        <InstagramIcon />
                      </div>
                    </a>
                  </motion.div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="inquery-form">
                  <h1>Inquiry Form </h1>

                  <form action="" className="mt-4" onSubmit={handleQuery}>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="foot-input"
                      name="fullname"
                      onChange={handleChange}
                      value={enquery.fullname}
                    />
                    <input
                      type="text"
                      placeholder="Phone no."
                      name="number"
                      onChange={handleChange}
                      value={enquery.number}
                      className="foot-input"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="foot-input"
                      name="email"
                      onChange={handleChange}
                      value={enquery.email}
                    />
                    <textarea
                      name="message"
                      id=""
                      cols="10"

                      rows="4"
                      placeholder="Message"
                      className="foot-input"
                      onChange={handleChange}
                      value={enquery.message}
                    ></textarea>
                    <button className="btn-send">
                      Send
                      <EastOutlinedIcon className="ms-2" />
                    </button>
                  </form>
                </div>
                {/* <div className="mb-query">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        onClick={() => {
                          setDown(!down)
                          setArrow('first')
                        }}
                      >
                        Inquiry Form{' '}
                        <KeyboardArrowDownIcon
                          className={
                            down === true && arrow === 'first'
                              ? 'rotate down'
                              : 'down'
                          }
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        <form action="" className="mt-4">
                          <input
                            type="text"
                            placeholder="Your name"
                            className="foot-input"
                            name="name"
                            onChange={handleChange}
                            value={enquery.fullname}
                          />
                          <input
                            type="text"
                            placeholder="Phone no."
                            name="number"
                            onChange={handleChange}
                            value={enquery.number}
                            className="foot-input"
                          />
                          <input
                            type="text"
                            placeholder="Email"
                            className="foot-input"
                            name="email"
                            onChange={handleChange}
                            value={enquery.email}
                          />
                          <textarea
                            name="message"
                            id=""
                            cols="10"
                            value={enquery.message}
                            rows="4"
                            placeholder="Message"
                            className="foot-input"
                            onChange={handleChange}
                          ></textarea>
                          <button className="btn-send">
                            Send
                            <EastOutlinedIcon className="ms-2" />
                          </button>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div> */}
              </Col>
              <Col md={6} lg={3}>
                <div className="inquery-form">
                  <h1>Info Page</h1>
                  <ul className="mt-4">
                    <li>
                      <Link to={'/'}> Home</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Our Team </Link>
                    </li>
                    <li>
                      <Link to={''}>CSR</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Terms & Conditions </Link>
                    </li>
                    <li>
                      <Link to={''}>Make a Payment</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Why Us?</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Gallery</Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="mb-query">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        onClick={() => {
                          setDown(!down)
                          setArrow('second')
                        }}
                      >
                        Info Page
                        <KeyboardArrowDownIcon
                          className={
                            down === true && arrow === 'second'
                              ? 'rotate down'
                              : 'down'
                          }
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="mt-4">
                          <li>
                            <Link to={'/'}> Home</Link>{' '}
                          </li>

                          <li>
                            <Link to={''}>About Us</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Our Team </Link>
                          </li>
                          <li>
                            <Link to={''}>CSR</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Terms & Conditions </Link>
                          </li>
                          <li>
                            <Link to={''}>Make a Payment</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Why Us?</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Gallery</Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div> */}
              </Col>
              <Col md={6} lg={3}>
                <div className="travel-info ">
                  <ul className="mt-5">
                    <li>
                      <Link to={''}>Travel Info</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Blog </Link>
                    </li>
                    <li>
                      <Link to={''}>Best Deals </Link>
                    </li>
                    <li>
                      <Link to={''}>Contact Us </Link>
                    </li>
                    <li>
                      {' '}
                      <Link to={''}>FAQs </Link>
                    </li>
                    <li>
                      <Link to={''}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="brand-section">
          <Container>
            <div className="brand">
              <Row>
                <Col xs={6} md={8}>
                  <span className="mb-4">We accept</span>
                  <Row className="gy-3">
                    <Col md={2}>
                      <Link to={''}>
                        <img
                          src="https://www.travel2riga.com/images/uploaded/MasterCard_Logo.png"
                          alt=""
                          className="img-fluid"
                          loading="lazy"
                        />
                      </Link>
                    </Col>
                    <Col md={2}>
                      <Link to={''}>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
                          alt=""
                          className="img-fluid"
                          loading="lazy"
                        />
                      </Link>
                    </Col>


                  </Row>
                </Col>
                <Col xs={6} md={4}>
                  <span>Affiliated Partners </span>
                  <Row className="gy-3">
                    {partners?.map((item, index) => {
                      return (
                        <>
                          <Col md={2}>
                            <Link to={''}>
                              <img
                                src={item?.image}
                                alt=""
                                className="img-fluid"
                                loading="lazy"
                              />
                            </Link>
                          </Col>
                        </>
                      )
                    })}
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="bottom">
          <Container>
            <div className="footer-bottom">
              <h3>
                All Contents & Photographs Copyright © by Trailblaze Nepal | Developed By Ishan Koirala
              </h3>
            </div>
          </Container>
        </section>
      </footer>
    </>
  )
}

export default Footer
