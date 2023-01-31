import React, { useState } from 'react'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'
import { SliderData } from './Data/SliderData'
import styles from '../styles/ImgSlider.module.css'

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1) 
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1) 
}

if(!Array.isArray(slides) || slides.length<=0){
    return null;
}

  return (
    <section className={styles.slider}>
        <ArrowLeftCircleFill className={styles.leftArr} onClick={prevSlide}/>
        <ArrowRightCircleFill className={styles.rightArr} onClick={nextSlide} />
        {SliderData.map((slide,index) => {
            return (
                <div className={styles.imgTextSlider} key={index}>
                    {index === current && (<>
                        <img src={slide.image} className={styles.imageSlide}/>
                   <div className={styles.judulSlider}>{slide.judul}</div>
                   <div className={styles.textSlider}>{slide.text}</div></>
                    )}
                </div>
            )
        })}
    </section>
  )
}

export default ImageSlider