import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactStar from 'react-rating-stars-component'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PopUpModel from '../reuableComponent/PopUpModel'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import { Link } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import { motion } from 'framer-motion'
import { useScroll } from '../UseScroll'
import { featureAnimation } from '../../animation/Animation'
import Vedio from './Vedio'
import ImageList from './ImageList'


const Feature = ({ featureTour }) => {
  const [isOpen, setIsOpen] = useState(false)

  // eslint-disable-next-line no-unused-vars
  function openModal() {
    setIsOpen(!isOpen)
  }

  console.log('feature tour', featureTour)

  const [, setCount] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 2) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // const handleCloseVideo = () => setShowVideo(false)


  const [show, setShow] = useState(false)
  const [showvideo, setShowVideo] = useState(false)

  const [url, setUrl] = useState(null)
  const [galleries, setGalleries] = useState(null)
  const handleClose = () => setShow(false)


  // popup logic
  const handleShow = (gallery) => {
    setShow(true)
    setGalleries(gallery);
  }








  const handleShowVideo = (index) => {
    setShowVideo(true)

    setUrl(index);
  }






  const handleCloseVideo = () => setShowVideo(false)


  const [element, controls] = useScroll()
  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#FB8500',
    value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 26,
    count: 5,

  }

  const [rating, setRating] = useState(0);
  const ratingOptions = {
    edit: false,
    count: 5,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: rating, // Initial value
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 28,
  };

  const handleRatingChange = (value) => {
    setRating(value); // Update the rating value in the state
  };
  useEffect(() => {


  }, [options.value]);
  console.log('feature', featureTour)
  return (
    <>
      <motion.section
        className="feature"
        ref={element}
        animate={controls}
        transition={{
          staggerChildren: 0.3,
        }}
      >
        <PopUpModel
          show={show}
          handleclose={handleClose}
          header="Trip Images"
          body={<ImageList gallery={galleries} />}
          className="img-popup"
        />

        <PopUpModel
          show={showvideo}
          handleclose={handleCloseVideo}

          header="Trip Trailer"
          body={<Vedio url={url} />}
          className="img-popup"
        />
        <h1 className="text-center mb-4 fp-bold"> Feature Holidays Package </h1>
        <Container className="">
          <div className='iphone-se'>
            <Row className="">
              {featureTour?.data?.map((data, index) => {
                const options = {
                  edit: false,
                  color: '#DEDDDC',
                  activeColor: '#fb8500',
                  value: data?.overall_rating,
                  isHalf: true,
                  size: window.innerWidth < 600 ? 20 : 20,
                  count: 5,
                }
                return (
                  <>
                    <Col md={6} lg={4} key={index}>
                      <motion.div
                        className="feature-box"
                        variants={featureAnimation}
                      >

                        <div className="feature-img" >
                          <Link to={`/tour/${data?.slug}`}>
                            <img
                              src={window.baseURL + data?.image}
                              alt=""
                              className="img-fluid"
                              loading="lazy"
                              style={{ objectFit: 'cover', width: '100%', height: '332px' }}
                            />
                          </Link>
                          <button className="feature-btn">FEATURED</button>
                          <div className="feature-content">
                            <div className="star d-flex align-item-center justify-content-between">
                              <div className="star-box d-flex align-item-center justiy-content-center">
                                <ReactStar{...options} />{' '}
                                <span className="mt-2 ms-1">{data?.overall_rating}</span>
                              </div>
                              <div className="feature-icon d-flex">

                                <div className="box-cover">
                                  <FilterOutlinedIcon className="icon-top " onClick={() => handleShow(data?.tourgallaries)} />
                                  <div className="box">{data?.tourgallaries?.length}</div>
                                </div>

                                <div onClick={() => {
                                  setShowVideo(true)
                                }}>
                                  <div onClick={() => handleShowVideo(data?.video_url)}>
                                    <VideocamOutlinedIcon className="icon-top ms-3 " />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Link to={`/tour/${data.slug}`}>
                              <div className="tour-title">
                                <h2>{data?.title}</h2>
                              </div>
                            </Link>
                            <span>From ${data?.current_price}</span>
                            <span style={{ marginLeft: '20px', }}>$<strike>{data.previous_price}</strike> </span>
                            <div className="tour-explor d-flex align-items-center justify-content-between">
                              <div className="icon-text d-flex">
                                <div>
                                  {' '}
                                  <AccessTimeOutlinedIcon className="icon" />{' '}
                                  {Math.ceil((new Date(data?.departures[0]?.end_date) - new Date(data?.departures[0]?.start_date)) / (1000 * 60 * 60 * 24) + 1)} days{' '}
                                </div>
                                <div className="ms-4">
                                  {' '}
                                  <PeopleAltOutlinedIcon className="icon" /> {data?.group_size}
                                </div>
                              </div>
                              <Link to={`/tour/${data?.slug}`}>
                                <span>
                                  Explore <EastOutlinedIcon />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>

                      </motion.div>
                    </Col>
                  </>
                )
              }
              )}
            </Row>
          </div>
          <div className="more-feature">
            <Link to={'/triplist'}>
              <button className="vew-more">
                view more <EastIcon className="right-arr" />
              </button>
            </Link>
          </div>
        </Container>
      </motion.section>
    </>
  )
}

export default Feature
