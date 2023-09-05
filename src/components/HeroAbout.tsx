"use client";
import React from 'react';
import Image from 'next/image'
import CustomButton from './CustomButton'
import ImageButton from './ImageButton';

const HeroAbout = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            
            <p className='hero__stitle'>
            Hello Visitor !!!
            </p>
            <br></br>

            <h1 className='hero__title'>
            I am a digital nerd who is obsessed with user experience, especially in software.
            </h1>

            <p className='hero__subtitle'>
            I am a happy-go-lucky guy from India who likes to enjoy little things in life. My journey into the world of 
            software started with an avid curiosity about the customization of my PC that later grew into me becoming a UX engineer. 
            I am heavily inspired by the book <strong>Don’t Make Me Think</strong> by <strong>Steve Krug</strong> which was written in the initial days of booming web 
            design that stands relevant even today. I strongly believe in human centered design and that it is the 
            most efficient way to create a product, be it physical or digital.
            </p>

        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/self_portrait.jpg" alt="hero_self_portrait"
                fill className='object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default HeroAbout