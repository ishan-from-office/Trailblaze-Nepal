import React from 'react'
import Trip from '../Components/tripList/Trip'
import { useLocation } from 'react-router-dom';
const TripListPage = () => {
  const location = useLocation();
  const data = location.state

  return (
    <>
      <Trip searchData={data} />
    </>
  )
}

export default TripListPage
