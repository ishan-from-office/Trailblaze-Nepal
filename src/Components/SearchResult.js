import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import DoneIcon from '@mui/icons-material/Done'
import StarIcon from '@mui/icons-material/Star'
import ReactStar from 'react-rating-stars-component'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useSelector } from 'react-redux'
const SearchResult = () => {
  const searchData = useSelector((data) => data.filter.searchTour.data)

  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 20,
  }
  return (
    <>
      <Container>
        {searchData?.length !== 0 ? (
          <div>
            {searchData?.map((data, index) => {
              return (
                <div key={index} className="package search triplist my-5">
                  <div className="img position-relative">
                    <Link to={``}>
                      <img
                        src={window.baseURL + data?.image}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <button className="feature-btn">
                      <StarIcon className="me-2" />
                      BEST PRICE
                    </button>
                  </div>
                  <div className="view-detail">
                    <Row>
                      <Col md={8} lg={8}>
                        <div className="img-content">
                          <h5>{data?.title}</h5>
                          <div className="d-flex align-items-center">
                            <ReactStar {...options} />{' '}
                            <span> of 337 reviews</span>
                          </div>
                          <Row>
                            <Col xs={6} md={5}>
                              <div className="d-flex align-items-end ">
                                <DoneIcon className="tick" />{' '}
                                <p>Free cancellation </p>
                              </div>
                              <div className="tour-type">
                                <ul>
                                  <li>Activities </li>
                                  <li>Accommodation </li>
                                  <li>Transport </li>
                                  <li>Start </li>
                                  <li>Ends </li>
                                </ul>
                              </div>
                            </Col>
                            <Col xs={6} md={7}>
                              <div className="text-start">
                                <div className="d-flex align-items-end">
                                  <DoneIcon className="tick" />
                                  <p>Trip customizable</p>
                                </div>
                                <div className="tour-event">
                                  <ul>
                                    <li> 2</li>
                                    <li> Guest House & Hotel</li>
                                    <li> erfred</li>
                                    <li>Kathmandu, Nepal</li>
                                    <li>Kathmandu, Nepal</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            <Col></Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md={4} lg={4} className="text-end">
                        <div className="expedition-box ">
                          <button className="view-btn">
                            <Link to={''}>View Details</Link>
                          </button>
                          <div className="mt-2 next-p">
                            <p> Next Departures </p>
                            <div className="mt-2">
                              <span>
                                <AccessTimeIcon className="me-2" />
                                jun7
                              </span>
                              <div className="mt-2">
                                {' '}
                                <span>
                                  <AccessTimeIcon className="me-2" />
                                  jun7
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="price">
                            <div>
                              <p className="me-3 mb-2">12 Days </p>
                              <span>USD ${data.current_price}</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <>
            <div className="tour-empty">
              <h3>This Tour is not available</h3>
            </div>
            <Link to={'/home'}>
              <Link className="back-navigate" to={'/home'}>
                Back to Home
              </Link>
            </Link>
          </>
        )}
      </Container>
    </>
  )
}

export default SearchResult
