"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Namaste , I'm Krishna : A UI/UX Engineer
            </h1>

            <p className='hero__subtitle'>
            I can perform UX Research, follow it up with UX & UI Design 
            and conclude it with Development of the digital product.
            </p>

            <CustomButton 
                title="My Resume"
                containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero"
                fill className='object-contain'/>
                <div className='hero__image-overlay'/>
            </div>

        </div>
    </div>
  )
}

export default Hero