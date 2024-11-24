import React, { useState } from 'react'
import InputField from '../reuableComponent/InputField'
import TextArea from '../reuableComponent/TextArea'
// import DatePickerComponent from '../utilities/DatePicker'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useDispatch } from 'react-redux'
import { postQuery } from '../../redux/Reducer'
import { ToastContainer, toast } from 'react-toastify';
// import { Hidden } from '@material-ui/core'
const EnqueryForm = (props) => {

  const dispatch = useDispatch()

  const [user, setUser] = useState({
    full_name: '',
    email: '',
    contact_number: '',
    comments: '',
    booking_details: '',
    tour_id: ` ${props?.tourId ? props.tourId : props?.bookingId}`,

  })

  const handleChnge = (e) => {
    const value = e.target.value
    setUser({ ...user, [e.target.name]: value })
  }
  const queryForm = (e) => {
    e.preventDefault()
    if (
      user.full_name.trim() === '' ||
      user.email.trim() === '' ||
      user.contact_number.trim() === '' ||
      user.comments.trim() === '' ||
      user.booking_details.trim() === '' ||
      user.country.trim() === '') {
      toast.error('Please fill in all required fields.');
      return;
    }
    let query = new FormData()

    query.append('full_name', user.full_name)
    query.append('email', user.email)
    query.append('contact_number', user.contact_number)
    query.append('comments', user.comments)
    query.append('booking_details', user.booking_details)
    query.append('country', user.country)
    query.append('tour_id', user.tour_id)

    dispatch(postQuery(user))
  }


  return (
    <>
      <div className="enquery-form mt-3 ">
        <form action="" onSubmit={queryForm}>
          <div className="mb-3 mt-4">

            <InputField
              type={'hidden'}
              name='tour_id'
              value={props.tourId}
              onChange={handleChnge}
            />
            <InputField
              type={'text'}
              name="full_name"
              value={user.full_name}
              Placeholder="Full Name"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>
          <div className="mb-3 mt-4">

            <InputField
              type={'text'}
              name="email"
              value={user.email}
              Placeholder="E-mail"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>
          <div className="mb-3 mt-4">

            <InputField
              type={'text'}
              name="contact_number"
              value={user.contact_number}
              Placeholder="Phone Number"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>
          <div className="mb-3 mt-4">

            <InputField
              type={'text'}
              name="country"
              value={user.country}
              Placeholder="Country Name"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>

          <div className="mb-3 mt-4">

            <TextArea
              placeholder="Write your query here ......  "
              name="comments"
              value={user.comments}
              onChange={handleChnge}
            />
          </div>

          <div className="mb-3 mt-4">

            <InputField
              type={'date'}
              name="booking_details"
              value={user.booking_details}
              Placeholder="Date YYYY-MM-DD"
              onChange={handleChnge}
              icon={<CalendarMonthIcon />}
            />
          </div>
          <button type="submit" className="contact-send" >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default EnqueryForm
