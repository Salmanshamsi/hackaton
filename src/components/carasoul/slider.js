import React from 'react'
import "./slider.css"
import { CCarousel,CCarouselItem,CImage  } from '@coreui/react'
import imag1 from "./images/1.jpg"
import imag2 from "./images/2.jpg"
import imag3 from "./images/3.jpg"

const Slider = () => {
  return (

      <div className='slideraa' >
        <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={imag1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={imag2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={imag3} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      </div>

  )
}

export default Slider