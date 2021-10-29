import React, {useState} from "react";
import s from './Button.module.css';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled, ...props}) => {

    const clickHandler = () => {
        callBack();
    }

    return (
        <button disabled={disabled}
                onClick={clickHandler}
                className={`${s.btn} ${disabled ? s.notActive : ''}`}
        >
            {name}
        </button>
    );
}