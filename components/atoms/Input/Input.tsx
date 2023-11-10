import { InputType } from "./InputType";

export const Input=({type, name, placeholder, classname }: InputType) => {
    return <input type={type} name={name} placeholder={placeholder} className={classname}/>;
};
  