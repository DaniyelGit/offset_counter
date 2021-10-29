import React from "react";
import s from './Scoreboard.module.css';

type ScoreboardPropsType = {
    number: number
    maxNum: number
    message: string
    errorText: string
}

export const Scoreboard: React.FC<ScoreboardPropsType> = (
    {
        number, maxNum, message, errorText, ...props
    }) => {

    let error = message === errorText ? s.textError : s.text
    console.log('Scoreboard')
    return (
        <div className={s.scoreboard}>
          <span className={number === maxNum ? s.max : ''}>
             {
                 message
                     ? <span className={`${s.textScoreboard} ${error}`}>
                         {message}
                       </span>
                     : number
             }
          </span>
        </div>
    );
}