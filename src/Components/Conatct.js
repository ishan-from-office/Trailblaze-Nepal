import { React, useState, useEffect } from 'react'

import { useScroll } from './UseScroll'

import InputField from './reuableComponent/InputField'
import { useDispatch, useSelector } from 'react-redux'
import { postquery } from '../redux/Reducer'


const Conatct = () => {
  const [element, controls] = useScroll()
  const dispatch = useDispatch()


  const [enquery, SetEnquery] = useState({
    name: '',
    email: '',
    phone_no: '',
    message: '',
  })

  const handleChange = (e) => {
    const value = e.target.value
    SetEnquery({ ...enquery, [e.target.name]: value })
  }
  const handleQuery = (e) => {
    e.preventDefault()
    dispatch(postquery(enquery))
  }


  return (
    <>
      <section className="conatct">
        {/* <div className="contact-banner about-banner">
          <img
            src="https://www.discoveryworldtrekking.com/media/2619/nepal-trek.png"
            alt=""
            className="img-fluid"
          />
          <div className="bottom-img">
            <img
              src="https://www.discoveryworldtrekking.com/frontend/assets/images/banner-trekker.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div> */}
        <div className="container">
          <div className="contact-1">
            <div className="contact-1-inner">
              <h1 className="text-center">Contact us</h1>
              <div className="row">
                <div className="col-md-6">

                  {/************************************** Info Section********************************* */}
                  <h5>Mission Summit</h5>

                  {/* <p>Mailing Address: Post Box:21576, Kaldhara Marg, Thamel</p> */}
                  <ul>
                    <li>
                      <span>Whatsapp:</span>+977-9808262524
                    </li>
                    <li>
                      <span> E-Mail:</span> info.missionsummit@gmail.com
                    </li>

                    <li>
                      <span> Location:</span>Bihani Basti Goldhunga-05, Tarakeshwar 44600 , Nepal, Near Nepal Yoga Home [Opening hours – 8 Am
                      to 7 Pm]
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Any Quries? Let US Know</h5>
                  <form action="" onSubmit={handleQuery}>
                    <div className="mt-4">
                      <label htmlFor="">
                        Full Name <span>*</span>
                      </label>
                      <InputField
                        type="text"
                        Placeholder="Your name"
                        inputCss="contact-input"
                        name="fullname"
                        onChange={handleChange}
                        value={enquery.fullname}
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="">
                        Email Address <span>*</span>
                      </label>
                      <InputField
                        type="text"
                        Placeholder="Email"
                        className="foot-input"
                        inputCss="contact-input"
                        name="email"
                        onChange={handleChange}
                        value={enquery.email}
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="">
                        Contact Number<span>*</span>
                      </label>

                      <InputField
                        type="text"
                        Placeholder="Contact Number"
                        inputCss="contact-input"
                        name="number"
                        onChange={handleChange}
                        value={enquery.number}
                      />
                    </div>
                    <div className="mt-4 ">
                      <label htmlFor="">
                        Your message<span>*</span>
                      </label>
                      <div>
                        <textarea
                          name="message"
                          id=""
                          cols="10"
                          inputCss="contact-input"
                          rows="4"
                          Placeholder="Message"
                          className="contact-input"
                          onChange={handleChange}
                          value={enquery.message}

                        //onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <button className="contact-send ">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container mt-5">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  title='location'
                  height="500"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.878471885815!2d85.28365137551108!3d27.751894176157098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1f0b5b1cbba3%3A0xa699ccd1b23175a3!2sMission%20Summit%20Treks%20%26%20Expedition!5e0!3m2!1sen!2snp!4v1695814642355!5m2!1sen!2snp"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Conatct
