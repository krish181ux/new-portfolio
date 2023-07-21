import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface ImageButtonProps {
    src: string;
    alt: string;
    onButtonClick: () => void;
    containerStyles?:string;
}