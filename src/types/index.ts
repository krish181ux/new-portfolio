import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
    children?: React.ReactNode;
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface ImageButtonProps {
    src: string;
    alt: string;
    onButtonClick: () => void;
    containerStyles?:string;
}

export interface SearchMProps{
    mskill: string;
    setmskill: (mskill: string) => void;
}

export interface SkillProps{
    main: string;
    desc: string;
    subSkills: {point: string}[];
}