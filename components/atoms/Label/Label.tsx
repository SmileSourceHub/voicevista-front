import { LabelType } from "./LabelType";

export const Label = ({ name, classname, children }: LabelType) => {
    return <label htmlFor={name} className={classname}>{children}</label>;
};