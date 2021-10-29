import React, {ChangeEvent} from "react";
import s from './SettingsScoreboard.module.css';
import {Input} from "../Input/Input";

type SettingsScoreboardPropsType = {
    changeValueMax: (value: number) => void
    changeValueMin: (value: number) => void
    maxNum: number
    minNum: number
    message: string
    errorText: string
}

export const SettingsScoreboard: React.FC<SettingsScoreboardPropsType> = (
    {
        changeValueMax, changeValueMin, maxNum, minNum,
        message, errorText
    }) => {


    const changeValueMaxForInputHandler = (value: number) => {
        changeValueMax(value);
    }
    const changeValueMinForInputHandler = (value: number) => {
        changeValueMin(value);
    }


    return (
        <div className={s.settingsScoreboard}>
            <div className={s.settingsValue}>
                <span>max value:</span>
                <Input
                    message={message}
                    errorText={errorText}
                    value={maxNum}
                    callBack={changeValueMaxForInputHandler}
                />
            </div>
            <div className={s.settingsValue}>
                <span>start value:</span>
                <Input
                    message={message}
                    errorText={errorText}
                    value={minNum}
                    callBack={changeValueMinForInputHandler}
                />
            </div>
        </div>
    );
}