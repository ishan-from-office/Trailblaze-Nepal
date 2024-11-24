import React, { useState, useEffect } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import Checkbox from '@mui/material/Checkbox'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { Link } from 'react-router-dom'


import axios from 'axios';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const Filter = ({ receivingDataa, searchActivity, searchDestination, searchDate }) => {


  const [filter, setFilter] = useState(false)



  // *****************Fetching data from tours/list***************************


  const [tourData, setTourData] = useState([]); /// Sorted Data
  const [activityId, setActivityId] = useState([]);
  const [dateId, setDateId] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://destination.megabytetech.com/api/tours/list', {
          params: {
            activity_id: activityId.join(','), // Convert the array to a comma-separated string
            date_id: dateId.join(','), // Convert the array to a comma-separated string
          },
        });
        setTourData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [activityId, dateId]); // Include activityId as a dependency
  console.log('how much activity', activityId)
  const [activityIdChecked, setActivityIdChecked] = useState(false);


  // Function to handle checkbox click and update activityId state
  const handleCheckboxClick = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // If checked, add the activity_id to the activityId array
      setActivityId([...activityId, value]);
      setActivityIdChecked([...activityIdChecked, value]);

      return
    } else {
      // If unchecked, remove the activity_id from the activityId array
      setActivityId(activityId.filter((id) => id !== value));

      return
    }
  }
  receivingDataa(activityId, tourData)



  // Function to handle checkbox click and update dateId state
  const handleDateCheckboxClick = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // If checked, add the date_id to the dateId array
      setDateId([...dateId, value]);
      // console.log('Date checkbox', dateId)

      return
    } else {
      // If unchecked, remove the date_id from the dateId array
      setDateId(dateId.filter((id) => id !== value));
      // console.log('Date checkbox', dateId)
      return
    }
  }
  receivingDataa(dateId, tourData)



  if (activityId !== null && activityId.length === 0) {
    setActivityId([...activityId, searchActivity !== null ? searchActivity : '']);

    setActivityIdChecked(true); // Set the checked state to true
  }

  if (dateId !== null && dateId.length === 0) {
    setDateId([...dateId, searchDate !== null ? searchDate : '']);
    setActivityIdChecked(true); // Set the checked state to true
  }
  console.log('date id in filter', dateId)
  // const sendDataToTrip = (receiveFilterData) => {
  //   // Call the callback function with the data
  //   recieveFilterData(tourData);
  // };
  return (
    <>
      <div className="filter-title">
        <h1>Trip Filter </h1>
      </div>

      <div>
        <div className="filter-container mt-4">
          <div className="check-box">
            <div className="mobile-flter">
              <div
                className="d-flex aign-items-center justify-content-between"
                onClick={() => {
                  setFilter(!filter)
                }}
              >
                <h6>Departure Date</h6> <ExpandMoreOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="mobile-flter">
            <div
              className="d-flex align-items-center justify-content-between mb-1"
              onClick={() => {
                setFilter(!filter)
              }}
            >
              <div className="d-flex">
                <TravelExploreIcon className="me-2 ms-1" /> <h6>Tour</h6>
              </div>
              <ExpandMoreOutlinedIcon className="me-2" />
            </div>

          </div>
          <div className="check-box activities">
            <div className="mobile-flter">
              <div
                className="d-flex align-items-center justify-content-between mb-1"
                onClick={() => {
                  setFilter(!filter)

                }}
              >
                <div className="d-flex">
                  <DirectionsBikeIcon className="me-2" /> <h6>Activities</h6>
                </div>
                <ExpandMoreOutlinedIcon className="" />
              </div>
              {/* {closeFilter === 'third' && filter === true && (
                <div>
                  <div>
                    <Checkbox {...label} /> <span> Trekking</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>Peak Climbing</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>Tour and Sightseeing</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>Peak Climbing</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>White Water Rafting</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>Paragliding</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>Jungle Safari</span>
                  </div>
                  <div>
                    <Checkbox {...label} /> <span>Bunjee Jumping</span>
                  </div>
                  <div className="view-more ms-2">
                    <Link to={'/'}>View More</Link>
                  </div>
                </div>
              )} */}
            </div>
            <div className=" desktop-filter   mb-1">
              <div className="spesifice-date mb-2">
                <div className="d-flex align-items-center ">
                  <DirectionsBikeIcon className="me-2" /> <h6>Filter By Activities</h6>

                </div>
              </div>
              <div className="mt-2">
                <div>
                  <Checkbox {...label}
                    value='1'
                    onChange={handleCheckboxClick}
                  /> <span> Trekking</span>
                  <br />
                  <Checkbox {...label}
                    value='2'
                    onChange={handleCheckboxClick} /> <span> Expedition</span>
                  <br />
                  <Checkbox {...label}
                    value='3'
                    onChange={handleCheckboxClick} /> <span> Tour and Sight Seeing</span>
                  <br />
                  <Checkbox {...label}
                    value='4'
                    onChange={handleCheckboxClick} /> <span> White Water Rafting</span>
                  <br />
                  <Checkbox {...label}
                    value='5'
                    onChange={handleCheckboxClick} /> <span> Paragliding</span>
                  <br />
                  <Checkbox {...label}
                    value='6'
                    onChange={handleCheckboxClick} /> <span> Jungle Safari</span>
                  <br />
                  <Checkbox {...label}
                    value='7'
                    onChange={handleCheckboxClick} /> <span> Bunjee Jumping</span>
                  <br />
                </div>
                {/* <div className="view-more ms-2">
                  <Link to={'/'}>View More</Link>
                </div> */}
              </div>
              <div className="mt-2">
                <div className="spesifice-date mb-2">
                  {/* <CalendarMonthIcon className="date" />{' '} */}
                  {/* <span>Select specific Date</span> */}
                  <div className="d-flex align-items-center ">
                    <CalendarMonthIcon className="me-2" /> <h6>Filter By Month</h6>
                  </div>
                </div>
                <div>
                  <Checkbox value='1' onChange={handleDateCheckboxClick} {...label} /> <span>January </span>
                </div>
                <div>
                  <Checkbox value='2' onChange={handleDateCheckboxClick} {...label} /> <span>February </span>
                </div>
                <div>
                  <Checkbox value='3' onChange={handleDateCheckboxClick}  {...label} /> <span>March </span>
                </div>
                <div>
                  <Checkbox value='4' onChange={handleDateCheckboxClick}  {...label} /> <span>April </span>
                </div>
                <div>
                  <Checkbox value='5' onChange={handleDateCheckboxClick} {...label} /> <span>May </span>
                </div>
                <div>
                  <Checkbox value='6' onChange={handleDateCheckboxClick} {...label} /> <span>June </span>
                </div>
                <div>
                  <Checkbox value='7' onChange={handleDateCheckboxClick}  {...label} /> <span>July </span>
                </div>
                <div>
                  <Checkbox value='8' onChange={handleDateCheckboxClick} {...label} /> <span>August </span>
                </div>
                <div>
                  <Checkbox value='9' onChange={handleDateCheckboxClick} {...label} /> <span>September </span>
                </div>
                <div>
                  <Checkbox value='10' onChange={handleDateCheckboxClick}{...label} /> <span>October </span>
                </div>
                <div>
                  <Checkbox value='11' onChange={handleDateCheckboxClick} {...label} /> <span>November </span>
                </div>
                <div>
                  <Checkbox value='12' onChange={handleDateCheckboxClick} {...label} /> <span>December </span>
                </div>
                {/* <div className="view-more ms-2">
                  <Link to={'/'}>View More</Link>
                </div>
                <div className="view-more ms-2">
                  <Link to={'/'}>View More</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}


export default Filter
