import React from 'react'
import { Container } from 'react-bootstrap'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link } from 'react-router-dom'




const Company = () => {
  return (
    <>
      <div className="company-detail">
        <Container>
          <h1 className='className="text-center mb-4 fw-light"' >
            <span className=''  >Trailblaze Nepal</span> - Best Travel
            <br /> and Trekking Agency in Nepal
          </h1>
          <p>
          Trailblaze Nepal is your go-to digital hub for adventurers ready to tackle the iconic trails of Nepal. 
          It’s not just a booking site; it’s like having a personal adventure buddy that helps you explore stunning treks, customize your ideal trips, and discover the hidden treasures of the Himalayas.
           Built with React.js and Redux, this app captures the beauty of Nepal while offering smooth functionality and a fresh user experience, reflecting my enthusiasm for creating engaging, user-focused web solutions.</p>
          <p>
          We’re committed to keeping you safe and comfortable as you explore this incredible country, from its majestic peaks to its tranquil rivers, all while soaking in the rich culture. As a licensed company, we guarantee the best prices, offer local insights, group discounts, and promote eco-friendly travel. Join Mission Summit and uncover the wonders of Nepal, where your dreams come to life in this extraordinary place.
           </p>

          <div className="com-btn text-center mt-5">
            <Link to={'/blog'} >
              <button className="vew-more">
                Explore Our Blog
                <ArrowRightAltIcon className="ar-icon right-arr" />
              </button>
            </Link>
          </div>
        </Container >
      </div >
    </>
  )
}

export default Company
