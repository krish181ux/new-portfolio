"use client";
import React from 'react'
import Image from 'next/image'
import { ImageButtonProps } from '@/types';

const ImageButton = ({src,alt,
onClick}: ImageButtonProps) => {
  return (
    <button>
      type = "button"
      <img src = {src} alt = {alt} onClick={onClick}/>
    </button>
    
  )
}

export default ImageButton