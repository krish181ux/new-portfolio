"use client";
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { SkillProps } from '@/types';
import CustomButton from './CustomButton';
import SkillDetails from './SkillDetails';

 interface SkillCardProps{
     skill:SkillProps;
 }

const SkillCard = ({skill}: SkillCardProps) => {
     
    const {main, desc, subSkills} = skill;

    const [isOpen, setIsOpen] = useState(false);

    //const imgName = main.toLowerCase;

    const imageURL = `/${main}.png`;

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {main}
            </h2>
        </div>           
        <p  className='flex mt-6 text-[18px]'>
            <span>
                {desc}
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={imageURL} alt = 'skill image' fill priority 
            className='object-contain'
            />
        </div>
        <div className='relative w-full mt-2'>
            {/* <div className='flex group-hover:invisible
            w-full justify-between text-gray'>
                <div className='flex flex-col justify-center
                items-center gap-2'>
                    <Image src="/info.svg" alt='More Information'
                    width={20} height={20}
                    />
                    <p className='text-[14px]'>
                        View Info
                    </p>
                </div>
                <div className='flex flex-col justify-center
                items-center gap-2'>
                    <Image src="/gear.svg" alt='More Information'
                    width={20} height={20}
                    />
                    <p className='text-[14px]'>
                        Avail Service
                    </p>
                </div>
            </div> */}
            <div className='card-card__btn-container'>
                <CustomButton
                title='More Info'
                containerStyles='w-full py-[16px]
                rounded-full bg-primary-blue'
                textStyles='text-white text-[14px] leading-
                [17px] font-bold'
                rightIcon='/right-arrow.svg'
                handleClick={() => setIsOpen(true)}
                >
                </CustomButton>
            </div>
        </div>

        <SkillDetails isOpen={isOpen} 
        closeModal={() => setIsOpen(false)} skill={skill}  />
    </div>
  )
}

export default SkillCard


// {subSkills.map(
//     (subSkill,index) => (
//             <span key = {index}>{subSkill.point}</span>
//         )
//     )}