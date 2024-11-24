import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  topDistination: [],

  message: null,
}

export const fetchTopPlace = createAsyncThunk('', async () => {
  const response = axios.get('api/topdestinations')
  return response
})
export const fetchTourList = createAsyncThunk('tour/fetchtours', async () => {
  const list = await axios.get('/api/tours/list')
  return list
})
export const fetchBanner = createAsyncThunk('home/setting', async () => {
  const setting = await axios.get('/api/settings')
  return setting
})
export const fetchReview = createAsyncThunk('clint/review', async () => {
  const clint = await axios.get('/api/clientreviews')
  return clint
})

// import for enquiry form
export const postQuery = createAsyncThunk('clint/query', async (query) => {

  const clint = await axios.post('/api/asks', {
    full_name: query.full_name,
    email: query.email,
    contact_number: query.contact_number,
    booking_details: query.booking_details,
    comments: query.comments,
    country: query.country,
    tour_id: query.tour_id,
  })
  if (clint.status === 200) { toast.success('Your Query Was Sent Sucessfully'); }
  <ToastContainer />
  return console.log(clint.status)
})

export const postEmail = createAsyncThunk('clint/query', async (email) => {

  const clint = await axios.post('/api/subscribes', { email: email })
  return clint
})

// For footer and contact page contact
export const postquery = createAsyncThunk('clint/query', async (enquery) => {
  const inquiry = await axios.post('/api/inquires', {
    name: enquery.fullname,
    email: enquery.email,
    phone_no: enquery.number,
    message: enquery.message,
  })
  return alert('your data was submitted', inquiry)
})

// For client review 
export const postReview = createAsyncThunk('clientReview/psotReview', async (review) => {
  const clientReview = await axios.post('/api/clientreviews', {
    name: review?.name,
    email: review?.email,
    country_name: review?.country_name,
    description: review?.description,
    tour_id: review?.tour_id,
    star_rating: review?.star_rating
  })
  if (clientReview.status === 200) { toast.success('Thank You For Your Feedback'); }
  <ToastContainer />
})

export const postBooking = createAsyncThunk('terk/booking', async (booking) => {

  const bookingDetails = await axios.post('/api/booking', {
    booking_price: booking.booking_price,
    no_of_travellers: booking.no_of_travellers,
    add_ons: booking.add_ons,
    passport_no: booking.passport_no,
    expiry_date: booking.expiry_date,
    tour_id: booking.tour_id,
    payment_status: booking.payment_status,
    mode: booking.mode,
    title: booking.title,
    first_name: booking.first_name,
    last_name: booking.last_name,
    email: booking.email,
    confirm_email: booking.confirm_email,
    date_of_birth: booking.date_of_birth,
    nationality: booking.nationality,
    country_code: booking.country_code,
    mobile_number: booking.mobile_number,
    pick_up_details: booking.pick_up_details,
    departure_id: booking.departure_id,
  })

  if (bookingDetails.status === 200) {
    toast.success('Your Form Has Been Submitted Sucessfully ');
  } else {
    toast.error('Opps! Something went wrong.');
  }
  <ToastContainer />
  return
});


export const tourSearch = createAsyncThunk(
  'tour/search',
  async ({ selectPlace, activity, date }) => {
    const getTourList = await axios.get('/api/toursearches', {
      params: {
        destination_id: selectPlace,
        activity_id: activity,
        start_date: moment(date).format('YYYY-MM-D'),
      },
    })
    return getTourList
  },
)
export const fetchMenu = createAsyncThunk('fetch/menu/fulfilled', async () => {
  const menu = await axios.get('/api/menus', {})
  return menu
})

const TopDistination = createSlice({
  name: 'top place',
  initialState,
  extraReducers: {
    [fetchTopPlace.pending]: (state, action) => { },
    [fetchTopPlace.fulfilled]: (state, action) => {
      state.topDistination = action.payload
      state.message = 'sucess'
    },
    [fetchTopPlace.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const bannerSetting = createSlice({
  name: 'setting',
  initialState: {
    setting: [],
    message: null,
  },
  extraReducers: {
    [fetchBanner.pending]: (state, action) => { },
    [fetchBanner.fulfilled]: (state, action) => {
      state.setting = action.payload
    },
    [fetchBanner.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const tourList = createSlice({
  name: 'tour list',
  initialState: {
    Tourlist: [],
  },
  extraReducers: {
    [fetchTourList.pending]: (state, action) => { },
    [fetchTourList.fulfilled]: (state, action) => {
      state.Tourlist = action.payload
      state.message = 'sucess'
    },
    [fetchTourList.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const clintReview = createSlice({
  name: 'clint review',
  initialState: {
    review: [],
  },
  extraReducers: {
    [fetchReview.pending]: (state, action) => { },
    [fetchReview.fulfilled]: (state, action) => {
      state.review = action.payload
      state.message = 'sucess'
    },
    [fetchReview.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const suscribEmail = createSlice({
  name: 'suscribemail',
  initialState: {
    message: '',
  },
  extraReducers: {
    [postEmail.pending]: (state, action) => { },
    [postEmail.fulfilled]: (state, action) => {
      state.message = action.payload
    },
    [postEmail.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const menu = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
  },
  extraReducers: {
    [fetchMenu.pending]: (state, action) => { },
    [fetchMenu.fulfilled]: (state, action) => {
      state.menu = action.payload
      state.message = 'sucess'
    },
    [fetchMenu.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const searchTour = createSlice({
  name: 'searchtour',
  initialState: {
    searchTour: [],
  },
  extraReducers: {
    [tourSearch.pending]: (state, action) => { },
    [tourSearch.fulfilled]: (state, action) => {
      state.searchTour = action.payload
    },
    [tourSearch.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const clientQuery = createSlice({
  name: 'clint',
  initialState: {
    isLoading: false,
    error: null,

    user: [],
    isSuccess: null,
  },
  reducers: {},
  extraReducers: {
    [postQuery.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [postQuery.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.isSuccess = action.payload;
    },

    [postQuery.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error.message;
    }
  }
})
const clientBook = createSlice({
  name: 'bookingDetails',
  initialState: {
    isLoading: false,
    error: null,
    user: [],
    isSuccess: null,
  },
  reducers: {},
  extraReducers: {
    [postBooking.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [postBooking.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.isSuccess = action.payload;
    },

    [postBooking.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error.message;
    }
  }

})


const inquireQuery = createSlice({
  name: 'clint',
  initialState: {
    isLoading: false,
    error: null,

    user: [],
    isSuccess: null,
  },
  reducers: {},
  extraReducers: {
    [postquery.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [postquery.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.isSuccess = action.payload;
    },

    [postquery.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error.message;
    }
  }
})

const postClientReview = createSlice({
  name: 'Post Review',
  initialState: {
    isLoading: false,
    error: null,

    user: [],
    isSuccess: null,
  },
  reducers: {},
  extraReducers: {
    [postquery.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [postquery.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.isSuccess = action.payload;
    },

    [postquery.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error.message;
    }
  }
})


export const ClientReview = postClientReview.reducer
export const inquiries = inquireQuery.reducer
export const BookPackage = clientBook.reducer
export const askQuery = clientQuery.reducer
export const Top = TopDistination.reducer
export const Tourlist = tourList.reducer
export const setting = bannerSetting.reducer
export const Review = clintReview.reducer
export const email = suscribEmail.reducer
export const filterTour = searchTour.reducer
export const Menu = menu.reducer
