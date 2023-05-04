import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './Data'
import './Rewiev.css'
import React, { useState } from 'react'
// import {FaChebronLeft , FaChevroneRight , FaQupteRight} from "react-icons/fa"
function Review() {
  const [index ,setIndex] =useState(0);
  const {name , job , image , text} = people[index];
  const checkNumber =(number)=>{
    if(number > people.length -1){
        return 0
    }
    if(number < 0){
        return people.length - 1
    }
    return number
  }
const nextPerson =()=>{
    setIndex((index)=>{
        let newIndex = index + 1
        return checkNumber(newIndex) ;
    })
  
    
}
const prevPerson =()=>{
    setIndex((index)=>{
        let newIndex = index - 1
         return checkNumber(newIndex) ;
        ;
    })
}

const randomPerson =()=>{
    let random = Math.trunc(Math.random() *4 )
    return setIndex(random)
}

    return (
    <section className='review'>
    <div className="img-container">
        <div className="image-underBg"></div>
        <img src={image} alt={name} className='person-img' />
        <span className='quoto-icon'>
        <FaQuoteRight className='imgIcon' />
        </span>
    </div>
    <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="button-container">
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button onClick={nextPerson}>
                <FaChevronRight className='next-btn' />
            </button>
        </div>
            <button className='random-btn' onClick={randomPerson}>Random Person</button>
    </section>
  )
}

export default Review;