import React, {useState} from "react";
import s from './Counter.module.css';
import {Scoreboard} from "../Scoreboard/Scoreboard";
import {Button} from "../Button/Button";

type CounterPropsType = {
    number: number
    changeNumber: () => void
    resetNumber: () => void
    maxNum: number
    minNum: number
    message: string
    disabledCounter: boolean
    errorText: string
    collapsed: boolean
    changeCollapsed: () => void
}

export const Counter: React.FC<CounterPropsType> = (
    {
        number, changeNumber, resetNumber,
        maxNum, minNum, message, disabledCounter,
        errorText, collapsed, changeCollapsed
    }) => {

    return (
        <div className={s.counter}>
            <Scoreboard number={number} maxNum={maxNum} message={message} errorText={errorText}/>
            <div className={s.buttonsWrapper}>
                <Button disabled={disabledCounter || maxNum === number} name={'inc'}  callBack={changeNumber}/>
                <Button disabled={disabledCounter || number === minNum} name={'reset'}  callBack={resetNumber}/>
                <Button disabled={false} name={'set'} callBack={changeCollapsed}/>
            </div>
        </div>
    );
}