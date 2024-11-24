import React, { useState } from 'react'
import InputField from '../reuableComponent/InputField'
import TextArea from '../reuableComponent/TextArea'
// import DatePickerComponent from '../utilities/DatePicker'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useDispatch } from 'react-redux'
// import { postQuery } from '../../redux/Reducer'
import { ToastContainer } from 'react-toastify';
// import { Hidden } from '@material-ui/core'
import ReactStars from 'react-rating-stars-component'
import { postReview } from '../../redux/Reducer'
const EnqueryForm = (props) => {

    const dispatch = useDispatch()
    const [starCount, setStarCount] = useState(5);

    const handleStarCount = (ss) => {
        setStarCount(ss);
        setReview({ ...review, 'star_rating': ss })
    };


    const [review, setReview] = useState({
        name: '',
        email: '',
        country_name: '',
        star_rating: '',
        description: '',
        tour_id: ` ${props?.tourId ? props.tourId : props?.bookingId}`,
    })

    const handleChnge = (e) => {
        const value = e.target.value
        setReview({ ...review, [e.target.name]: value })

    }
    const queryReview = (e) => {
        e.preventDefault()
        // if (
        //     review.name.trim() === '' ||
        //     review.email.trim() === '' ||
        //     review.tour_id.trim() === '' ||
        //     // review.star_rating.trim() === '' ||
        //     review.description.trim() === '' ||
        //     review.country_name.trim() === '') {
        //     toast.error('Please fill in all required fields.');
        //     return;
        // }
        let query = new FormData()
        query.append('name', review.name)
        query.append('email', review.email)
        query.append('country_name', review.country_name)
        query.append('description', review.description)
        query.append('tour_id', review.tour_id)
        query.append('star_rating', review.star_rating)
        dispatch(postReview(review))
    }



    return (
        <>
            <div className="enquery-form mt-3 ">
                <form action="" onSubmit={queryReview}>
                    <div className="mb-3 mt-4">

                        <InputField
                            type={'hidden'}
                            name='tour_id'
                            value={props?.tourId}
                            onChange={handleChnge}
                        />

                        <InputField
                            type={'text'}
                            name="name"
                            value={review.name}
                            Placeholder="Full Name"
                            inputCss="style-input"
                            onChange={handleChnge}
                        />
                    </div>
                    <div className="mb-3 mt-4">

                        <InputField
                            type={'text'}
                            name="email"
                            value={review.email}
                            Placeholder="E-mail"
                            inputCss="style-input"
                            onChange={handleChnge}
                        />
                    </div>
                    <div className="mb-3 mt-4">

                        <InputField
                            type={'text'}
                            name="country_name"
                            value={review.country_name}
                            Placeholder="Country Name"
                            inputCss="style-input"
                            onChange={handleChnge}
                        />
                    </div>

                    <div className="mb-3 mt-4">

                        <TextArea
                            placeholder="Write your description here ......  "
                            name="description"
                            value={review.description}
                            Placeholder="Description"
                            inputCss="style-input"
                            onChange={handleChnge}
                        />
                    </div>

                    <div className="mb-3 mt-4">


                        <label>Rating</label>
                        <ReactStars
                            name="star_rating"
                            classNames="custom-stars"
                            edit={true}
                            color="gray"
                            activeColor="#ffd700"
                            value={starCount}
                            size={window.innerWidth < 600 ? 30 : 30}
                            onChange={handleStarCount}
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
