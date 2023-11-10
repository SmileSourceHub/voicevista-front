import { MouseEventHandler } from "react";

export type ButtonType = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    classname?: string,
    children: string;
}