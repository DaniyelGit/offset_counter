import React from "react";
import s from './Settings.module.css';
import {Button} from "../Button/Button";
import {SettingsScoreboard} from "./SettingsScoreboard/SettingsScoreboard";

type SettingPropsType = {
    changeValueMax: (value: number) => void
    changeValueMin: (value: number) => void
    changeStartValue: () => void
    maxNum: number
    minNum: number
    disabledSettings: boolean
    message: string
    errorText: string
}

export const Settings: React.FC<SettingPropsType> = (
    {
        changeValueMax, changeValueMin, changeStartValue, maxNum,
        minNum, disabledSettings, message, errorText
    }) => {


    return (
        <div className={s.settings}>
            <SettingsScoreboard
                changeValueMax={changeValueMax}
                changeValueMin={changeValueMin}
                maxNum={maxNum}
                minNum={minNum}
                message={message}
                errorText={errorText}
            />
            <div className={s.buttonsWrapper}>
                <Button name={'set'} callBack={changeStartValue} disabled={disabledSettings}/>
            </div>
        </div>
    );
}