import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrump from '../utilities/BreadCrump';
import Filter from './Filter';
import Filtermonth from './Filtermonth';
import TripCtalog from './TripCtalog';
import Suscribe from '../Home/Suscribe';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { fetchTourList } from '../../redux/Reducer';
// import { useDispatch } from 'react-redux';

import axios from 'axios';
const Trip = (props) => {
  const { slug } = useParams();
  const [tours, setTour] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://destination.megabytetech.com/api/tours/list');
      setTour(response.data);
    };
    fetchData();
  }, []);

  const [activityId, setActivityId] = useState(null);



  // Define a callback function to receive activityId from Filter component
  const receivingDataa = (receivedActivityId, receiveFilterData) => {
    // Process the received data here
    // Set the received activityId in the state
    setActivityId(props?.searchData !== null ? props?.searchData?.activityId : receivedActivityId);
    setTour(receiveFilterData)
  };
  const [clientReview, setClientReview] = useState();



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://destination.megabytetech.com/api/clientreviews');
      setClientReview(response.data);
    };
    fetchData();
  }, []);




  return (
    <>
      <div className="breadcrump">
        <BreadCrump />
      </div>
      <Container>

        <div className="expedition">

          <div className="filter-box no-tablet">

            {/* Pass the callback function to the Filter component */}

            <Filter receivingDataa={receivingDataa} searchActivity={props?.searchData?.activityId} searchDestination={props?.searchData?.destination} searchDate={props?.searchData?.searchDate} className='no-tablet' />

          </div>

          <div className="triplist">

            <TripCtalog tour={tours} searchInfo={props?.searchData?.searchInfo} searchDate={props?.searchData?.searchDate} place={slug} searchData={props.searchData} activityId={activityId} clientReview={clientReview} />

          </div>

        </div>

      </Container>

      <Suscribe />
    </>
  );
};
export default Trip;
