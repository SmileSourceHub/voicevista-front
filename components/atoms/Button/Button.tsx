import { ButtonType } from "./ButtonType";

export const Button = ({ onClick, classname, children }: ButtonType) => {
    return <button type='submit' onClick={onClick} className={classname}>{children}</button>;
};