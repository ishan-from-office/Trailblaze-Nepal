import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useScroll } from '../UseScroll'
import { topPlaceContent } from '../../animation/Animation'
import { topDist } from '../../animation/Animation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopPlace } from '../../redux/Reducer'
import axios from 'axios'
const Top = () => {
  // eslint-disable-next-line no-unused-vars
  const { topDistination } = useSelector((data) => data.Tours)
  const distpatch = useDispatch()
  useEffect(() => {
    distpatch(fetchTopPlace())

    // eslint-disable-next-line no-unused-vars
    const response = axios.get('api/topdestinations').then((data) => {
      return setDestination(data.data)
    })
  }, [distpatch])
  const [element, controls] = useScroll()
  const [destinations, setDestination] = useState()

  return (
    <>
      <section className="top-destination pt-5" ref={element}>
        <h1 className="mb-4">
          <span>Top</span> Destinations
        </h1>
        <Container >
          <Row className="gy-4">
            {destinations?.slice(0, 3)?.map((item) => {
              return (
                <Col md={6} lg={4} key={item.id}>
                  <div className="dist-box">
                    <Link to={'/triplist'}>
                      <motion.div
                        className="img-box"
                        variants={topDist}
                        animate={controls}
                        transition={{
                          duration: 0.8,
                        }}
                      >
                        <img
                          src={window.baseURL + item?.image}
                          alt=""
                          className="img-fluid"
                          loading="lazy"
                        />
                        <div className="top-dist-content">
                          <div className="title-place">
                            <motion.div
                              animate={controls}
                              variants={topPlaceContent}
                            >
                              <h2> {item.title}</h2>
                              <span>Holiday Package</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Top
