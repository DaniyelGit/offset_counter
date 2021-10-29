import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type InputPropsType = {
    message: string
    errorText: string
    value: number
    callBack: (value: number) => void
}

export const Input: React.FC<InputPropsType> = ({message, errorText, value, callBack}) => {

    let error = message === errorText ? s.inputError : '';

    const onChangeHandlerForInput = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(Number(e.currentTarget.value));
    }

    return (
        <input className={`${s.input} ${error}`} type="number" value={value} onChange={onChangeHandlerForInput}/>
    );
}