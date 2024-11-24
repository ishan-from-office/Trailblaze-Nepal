/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactStars from 'react-rating-stars-component';

const ClintReview = ({ clintReview }) => {
  const option = {
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  }
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 60) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const maxLength = 130
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated)
    console.log('toggled!');
  }


  const [isTruncated, setIsTruncated] = useState(true)


  return (
    <>
      <section className="slide-clint mt-5">
        <Container className="mt-5">
          <h1 className="text-center py-5">
            <span>Our happy</span> Clients
          </h1>

          <OwlCarousel className="owl-theme clint-review-carsouel" {...option}>
            {
              clintReview?.map((clint, index) => {
                return (
                  <div className="clint-box" key={index} >
                    <div className="clint- d-flex">
                      <div className="clint-img">
                        <img
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                          className="img-fluid"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="clint-detail ms-2 mt-3">
                        <h3>{clint.name}</h3>
                        <span>{clint.country_name}</span>

                        {clint.star_rating > 0 && (
                          <ReactStars
                            classNames="custom-stars"
                            edit={false}
                            color="gray"
                            activeColor="#ffd700"
                            value={clint.star_rating}
                            count={clint.star_rating}
                            isHalf={true}
                            size={window.innerWidth < 600 ? 20 : 20}
                          />

                        )}
                      </div>
                    </div>
                    {isTruncated ? (
                      <p >{`${clint?.description?.slice(0, maxLength)}...`}</p>
                    ) : (
                      <p >{clint?.description}</p>
                    )}
                    <button className='review-btn' onClick={() => toggleTruncate(clint?.index)}>
                      {isTruncated ? 'Read More' : 'Show Less'}
                    </button>

                  </div>
                )
              })}
          </OwlCarousel>
        </Container>
      </section>
    </>
  )
}

export default ClintReview
