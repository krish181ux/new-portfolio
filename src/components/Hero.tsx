"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'
import ImageButton from './ImageButton';

const Hero = () => {
    const hireMe = () => {
        console.log('Hired !!!');
    }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Crafting Seamless Experiences: Bridging Research, Design, and Development
            </h1>

            <p className='hero__subtitle'>
            Namaste , I'm Krishna : A UI/UX Engineer. I can perform UX Research, follow it up with UX & UI Design 
            and conclude it with Development of the digital product.
            </p>

            {/* <CustomButton 
                title="My Resume"
                containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                handleClick={handleScroll}
            /> */}

            <ImageButton
                src='/circular_butt.png'
                alt='Hire Me button'
                onButtonClick={hireMe}
                // containerStyles='width:16px; height:16px;'
            />




        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero"
                fill className='object-contain'/>
                {/* <div className='hero__image-overlay'/> */}
            </div>

        </div>
    </div>
  )
}

export default Hero