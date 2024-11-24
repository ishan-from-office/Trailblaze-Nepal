import React, { useState } from 'react'
// import { Row, Col } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import Lightbox from 'react-image-lightbox'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import Gallery from 'react-photo-gallery'

const option = {
  margin: 4,
  responsiveClass: true,
  nav: true,
  dots: false,
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
      items: 1,
    },
  },
}
const ImageListm = ({ popularTour, gallery }) => {

  const [isViewerOpen, setIsViewerOpen] = useState(false)




  return (
    <>
      <OwlCarousel className="owl-theme  modal-img-slide" {...option}>
        {gallery?.map((source, index) => {

          return (
            <div className="modal-img" key={`modal_${index}`}>
              <img
                style={{
                  height: '400px'
                }}
                src={window.baseURL + source?.image}
                alt=""

                className="img-fluid"


              />
            </div>
          )
        })}
        {isViewerOpen && (
          <Lightbox
            // mainSrc={modalImage[currentImage]}
            onCloseRequest={() => setIsViewerOpen(false)}
          />
        )}
      </OwlCarousel>
    </>
  )
}

export default ImageListm
