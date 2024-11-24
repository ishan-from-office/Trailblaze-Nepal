import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postEmail } from '../../redux/Reducer'
const Suscribe = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const hanldeEmail = (e) => {
    e.preventDefault()

    dispatch(postEmail(email))
  }

  return (
    <>
      <div className="suscribe">
        <Container>
          <Row className="gy-3">
            <Col md={12} lg={8}>
              <h3>Subscribe Our E-Newsletter</h3>
              <p>
                Sign up for Deals and Discount. Get News, Notifications and
                Updates about the recent Events and Offers.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <form action="" onSubmit={hanldeEmail}>
                <div className="d-flex align-items-center justify-content-center">
                  <input
                    type="text"
                    name="email"
                    id=""
                    value={email}
                    className="suc-input"
                    placeholder="Enter your E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn-sus">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Suscribe
