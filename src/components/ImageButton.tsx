"use client";
import React from 'react'
import Image from 'next/image'
import { ImageButtonProps } from '@/types';
// import styles from './ImageButton.module.css';

const ImageButton = ({src,alt,
onButtonClick,containerStyles}: ImageButtonProps) => {
  return (
    // <div className={styles.container}>
    //   <img src={src} alt={alt}/>
    //   <button onClick={onButtonClick} className={styles.button}>
    //       Hire Me
    //   </button>
    // </div>
    <button type='button' onClick={onButtonClick}
    className={`custom-btn ${containerStyles}`}>
      <img src={src} alt={alt}/>
    </button>
  )
}

export default ImageButton