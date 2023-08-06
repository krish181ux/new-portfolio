"use client";

import { SkillProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition} from '@headlessui/react';

interface SkillDetailsProps {
    isOpen:boolean;
    closeModal: () => void;
    skill: SkillProps;
}

const SkillDetails = ({isOpen, closeModal, skill}: 
    SkillDetailsProps) => {
        const imageURL = `/${skill.main}.png`;
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className='relative z-10' 
            onClose={closeModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black
                    bg-opacity-25' />
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center
                    justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='relatice w-full
                            max-w-lg max-h-[90vh] overflow-y-auto
                            transform rounded-2xl bg-white p-6 text-left
                            shadow-xl transition-all flex flex-col
                            gap-5'>
                                <button
                                type='button'
                                className='absolute top-2 right-2 z-10
                                w-fit p-2 bg-primary-blue-100 rounded-full'
                                onClick={closeModal}
                                >
                                    <Image
                                    src='/close.svg'
                                    alt='close'
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                    />

                                </button>
                                <div className='flex-1 flex flex-col gap-3'>
                                    <div className='relative w-full h-40
                                    bg-pattern bg-cover bg-center rounded-lg'>
                                        <Image src={imageURL} alt = 'skill image' fill priority 
                                            className='object-contain'
                                            />
                                    </div>
                                    {/* <div className='flex gap-3'>
                                        <div className='flex-1 relative w-full h-24
                                        bg-primary-blue-100 rounded-lg'>

                                            <Image src="/hero.png" alt = 'skill image' fill priority 
                                            className='object-contain'
                                            />

                                        </div>
                                        <div className='flex-1 relative w-full h-24
                                        bg-primary-blue-100 rounded-lg'>

                                            <Image src="/hero.png" alt = 'skill image' fill priority 
                                            className='object-contain'
                                            />

                                        </div>
                                        <div className='flex-1 relative w-full h-24
                                        bg-primary-blue-100 rounded-lg'>

                                            <Image src="/hero.png" alt = 'skill image' fill priority 
                                            className='object-contain'
                                            />

                                        </div>

                                    </div> */}
                                </div>
                                <div className='flex-1 flex flex-col
                                gap-2'>
                                    <h2 className='font-semibold
                                    text-xl capitalize'>
                                        {skill.main}
                                    </h2>
                                    <h4 className='text-gray'>Sub Skills</h4>
                                    <div className='mt-3 flex flex-wrap
                                    gap-4'>
                                        {/* {Object.entries(skill).map(([key,
                                            value]) => (
                                                <div className='flex justify-between
                                                gap-5 w-full text-right' key={key}> 
                                                    <h4>{key}</h4>
                                                    <p>{value}</p>
                                                </div>
                                            ))} */}
                                            <div className='flex justify-between gap-5 
                                            w-full text-center'>
                                                {skill.subSkills.map(
                                                    (subSkill,index) => (
                                                            <span key = {index}>{subSkill.point}</span>
                                                        )
                                                    )}
                                            </div>
                                    </div>

                                </div>
                            </Dialog.Panel>

                        </Transition.Child>

                    </div>
                </div>

            </Dialog>

        </Transition>
    </>
  )
}

export default SkillDetails