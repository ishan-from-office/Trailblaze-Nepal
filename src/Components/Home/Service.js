/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import SellIcon from '@mui/icons-material/Sell'
import ServiceContent from './ServiceContent'
import { Container, Col, Row } from 'react-bootstrap'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const serviceData = [
  {
    title: 'Best Price Guarantee',
    icon: <SellIcon className="service-icon sell" />,
    content:
      ' Experience superior travel experience and unmatched value – Get the best, pay the least.',
  },
  {
    title: 'Easy & Quick Booking',
    icon: <BookOnlineIcon className="service-icon" />,
    content:
      'So that you spend less time organizing and more time savoring the moments that truly matter.',
  },
  {
    title: 'Your Passport to Paradise',
    icon: <AirplanemodeActiveIcon className="service-icon plane" />,
    content:
      'Embark on unforgettable adventures  that will leave you with lasting memories.',
  },
]

const Service = () => {
  const animation = useAnimation()

  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
      })
    }
  }, [inView])
  return (
    <>
      <section className="service" ref={ref}>
        <Container>
          <motion.div animate={animation}>
            <Row className="gy-5">
              {serviceData.map((item, index) => {
                return (
                  <Col md={6} lg={4} key={index}>
                    <motion.div>
                      <ServiceContent
                        title={item.title}
                        icon={item.icon}
                        content={item.content}
                      />
                    </motion.div>
                  </Col>
                )
              })}
            </Row>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

export default Service
