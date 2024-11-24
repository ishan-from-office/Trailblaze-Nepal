import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done'
import ReactStar from 'react-rating-stars-component'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import StarIcon from '@mui/icons-material/Star'
import ReactPaginate from 'react-paginate'
import Select from '../reuableComponent/Select'
import { fetchTourList } from '../../redux/Reducer'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import axios from 'axios'

let pageCount = 3
const TripCtalog = (props) => {
  const { slug } = useParams()


  const data = useSelector((data) => data.listTour.Tourlist.data)

  const dispatch = useDispatch()
  const location = useLocation()


  const [tours, setTour] = useState()
  var destinationtours = props.tour


  useEffect(() => {
    if (destinationtours?.length === 0) {
      dispatch(fetchTourList())
      setTour(data?.data)
    } else {
      setTour(destinationtours)
    }
  }, [dispatch, destinationtours])

  const [select, SetSelected] = useState()
  const handleSelectChange = (selectedValue) => {
    SetSelected(selectedValue)
  }
  const [value, setValue] = useState('default')



  // const [rating, setRating] = useState(0);
  // const ratingOptions = {
  //   edit: false,
  //   count: 5,
  //   color: '#DEDDDC',
  //   activeColor: '#fb8500',
  //   value: rating, // Initial value
  //   isHalf: true,
  //   size: window.innerWidth < 600 ? 20 : 28,
  // };

  // const handleRatingChange = (value) => {
  //   setRating(value); // Update the rating value in the state
  // };
  // useEffect(() => {


  // }, [options.value]);

  const today = new Date().toISOString().split('T')[0];
  const [tour, setTourL] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://destination.megabytetech.com/api/tours/list');
      setTourL(response.data);
    };
    fetchData();
  }, []); // Empty dependency array to fetch data only once on mount

  const [page, setPage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://destination.megabytetech.com/api/tours/list?page=1');
      setPage(response.data);
      console.log('tour', page);
    };
    fetchData();
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault()


  }


  const HandlePageClick = (data) => {


  }
  const customHrefBuilder = ({ type, selected }) => {
    if (type === 'previous') {
      // Link for the "Previous" button
      return 'https://destination.megabytetech.com/api/tours/list?page=1';
    }
    if (type === 'next') {
      // Link for the "Next" button
      return 'https://destination.megabytetech.com/api/tours/list?page=1'; // Assuming you want the next page
    }
    // For other page links
    return `/page/${selected}`;
  };

  const option = [
    { value: 'SortBy:popularity', label: 'SortBy:popularity' },
    { value: 'SortBy:rice', label: 'SortBy:rice' },
    { value: 'SortBy:Rating', label: 'SortBy:Rating' },
  ]


  console.log('rating', tours?.data)
  return (
    <>

      <div className="d-flex align-items-center justify-content-between title-trip py-3">
        <h1>{props.place} Tours and Trips 2023/2024 </h1>
        <h1></h1>{' '}
        <div className="select-box">
          {/* <Select
            data={arrayOfData}
            onChange={handleSelectChange}
            Icon={<ArrowDropDownIcon className="down-icon" />}
            selectcss="select-title"
            Placeholder="Sort By:"
          />{' '} */}
        </div>
      </div>
      <div className="content">
        <p>
          Nepal, the heart of the Himalayas, boasts plenty of amazing tours.
          Visit Sherpa villages while trekking the Everest Base Camp trek.
          Experience Boudhanath Stupa and Pashupatinath temple on a sightseeing
          tour in Kathmandu, Nepal’s capital and cultural hub. Or, enjoy more
          nature and see rhinos, tigers and elephants on a jungle safari in
          Chitwan National Park.
        </p>
        <h6 className="mt-4">
          {tours?.data?.length} trips in Nepal
        </h6>

        <b>{props?.searchData !== null ? 'Your Search Tags' : ''}</b>



        <h6>
          {props?.searchData?.searchInfo?.activities !== null &&
            props?.searchData?.activityId !== null
            ? <p> {props?.searchData?.searchInfo?.activities[(props?.searchData?.activityId) - 1]?.title}</p>
            : ''}
        </h6>
        <h6>

          {{} + props?.searchData?.searchInfo?.destinations !== null &&
            props?.searchData?.destination !== null
            ? <p>{props?.searchData?.searchInfo?.destinations[(props?.searchData?.destination) - 2]?.title} </p>
            : ''}
        </h6>

        {tours?.data?.length == 0 ? <b>Sorry! No trips were found for these search tags <br /> Try Using The Filter To Your Left</b> : <p><b style={{ color: '#fb8500' }}>Great!</b> You Found a Trip</p>}
      </div >

      {tours?.data?.map((item, index) => {

        const options = {
          edit: false,
          color: '#DEDDDC',
          activeColor: '#fb8500',
          value: item?.overall_rating,
          isHalf: true,
          size: window.innerWidth < 600 ? 20 : 20,
          count: 5,
        }


        return (
          <>
            <div
              className={index === 0 ? 'package mt-1' : 'package mt-5'}
              key={index}
            >
              <div className="img position-relative">
                <Link to={`/tour/${item?.slug}`}>
                  <img
                    src={window.baseURL + item?.image}
                    alt=""
                    className="img-fluid img-style"
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
                      <h5>{item?.title}</h5>
                      <div className="d-flex align-items-center">
                        <ReactStar {...options} /> <span> of {item.no_of_reviews} reviews</span>
                      </div>
                      <Row>
                        <Col xs={6} md={5}>
                          <div className="d-flex align-items-end ">
                            <DoneIcon className="tick mb-1 mr-2" />{' '}
                            <p>Free cancellation </p>
                          </div>
                          <div className="tour-type">
                            <ul>
                              <li>Activities </li>
                              <li>Accommodation </li>
                              <li>Transport </li>
                              {item?.departures?.map((departure, index) => {
                                if (departure?.start_date > today) {
                                  return (
                                    < li key={index}>
                                      <li>Starts</li>
                                      <li>Ends </li>
                                    </li>
                                  );
                                }
                              })}

                            </ul>
                          </div>
                        </Col>
                        <Col xs={6} md={7}>
                          <div className="text-start">
                            <div className="d-flex align-items-end">
                              <DoneIcon className="tick mb-1 mr-2" />
                              <p>Trip customizable</p>
                            </div>
                            <div className="tour-event">
                              <ul>
                                <li>{item?.activity_name}</li>
                                <li>{item.accommodation}</li>
                                <li>{item?.transport}</li>
                                <ul>
                                  {item?.departures?.map((departure, index) => {
                                    if (departure?.start_date > today) {
                                      return (
                                        <li key={index}>
                                          <div>
                                            <li>{departure?.start_date}</li>
                                            <li>{departure?.end_date}</li>
                                          </div>
                                        </li>
                                      );
                                    }
                                  })}
                                </ul>
                                {/* <li>{item?.departures[0]?.start_date}</li>
                                <li>{item?.departures[0]?.end_date}</li> */}


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
                        <Link to={`/tour/${item?.slug}`}>View Details</Link>
                      </button>
                      <div className="mt-2 next-p">
                        <p> Next Departures </p>
                        <div className="mt-2">
                          <span>
                            <AccessTimeIcon className="me-2" />
                            {item?.departures[0]?.start_date}
                          </span>
                          <div className="mt-2">
                            {' '}
                            <span>
                              <AccessTimeIcon className="me-2" />
                              {item?.departures[1]?.start_date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="price">
                        <div>
                          <p className="me-3 mb-2"> {Math.ceil((new Date(item?.departures[0]?.end_date) - new Date(item?.departures[0]?.start_date)) / (1000 * 60 * 60 * 24))} Days </p>
                          <span>USD ${item.current_price}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </>
        )
      })}
      {/* <div className="mt-5">
        <ReactPaginate
          breakLabel="..."
          className="pagination"
          nextLabel="next >"
          onPageChange={HandlePageClick}
          hrefBuilder={customHrefBuilder}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div> */}
    </>
  )
}

export default TripCtalog
