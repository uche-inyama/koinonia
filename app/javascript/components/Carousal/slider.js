import React, { useState } from 'react'
import styled from 'styled-components'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './arrow'

const Slider = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  overflow: hidden; 
`

const slider = (props) => {
  const width = 210
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  const nextSlide = () => {

    if (activeIndex === props.slides.length - 4) return;

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width
    })
  }

  const prevSlide = () => {

    if (activeIndex === 0) return;
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width
    })
  }

  return (
    <Slider>
      <SliderContent translate={translate}
        transition={transition}
        width={width * props.slides.length}
      >
        {props.slides.map(slide => (
          <Slide key={slide} content={slide} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={nextSlide} />
      <Arrow direction="right" handleClick={prevSlide} />
    </Slider>
  )
}

export default slider
