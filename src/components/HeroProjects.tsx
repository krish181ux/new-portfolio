"use client";
import React from 'react';
import Image from 'next/image'
import CustomButton from './CustomButton'
import ImageButton from './ImageButton';

const HeroProjects = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            My Working UI/UX Process
            </h1>

            <p className='hero__subtitle'>
            As with everything, I have a certain process I go through everytime I create a product.Beautiful design does not mean usable design. 
            This is something that sounds so trivial, yet is something very difficult to implement. This is where UX research for design is 
            very important.
            </p>
            <br></br>
            <p className='hero__subtitle'>
            In a nutshell, you start with Idea Validation, follow it up with UX validation with low fidelity (LoFi) 
            prototype and then use a  high fidelity (HiFi) prototype for UI validation along with further polish to the UX.
            </p>
            <br></br>
            <p className='hero__subtitle'>
            I follow 
            this design process at a glance for all of the case studies with some changes in techniques used depending on the case study. 
            One of the things that I am proud of is the multitude of tools that are used collaboratively during this process in a Seamless
            manner. Once the design process is done, we proceed with the development aspect of the project.
            </p>

        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/des_process.svg" alt="hero_projects"
                fill className='object-contain'/>
            </div>

        </div>
    </div>
  )
}

export default HeroProjects