import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import s from "./components/Settings/SettingsScoreboard/SettingsScoreboard.module.css";

function App() {

    const [number, setNumber] = useState(0); // State для счетчика
    const [settingsMax, setSettingsMax] = useState(1); // максимальное число
    const [settingsMin, setSettingsMin] = useState(0); // минимальное число
    const [message, setMessage] = useState(''); // State для текста
    const [disabledCounter, setDisabledCounter] = useState(true); // disabled для кнопок счетчика
    const [disabledSettings, setDisabledSettings] = useState(true) // disabled для кнопок настроек
    const [collapsed, setCollapsed] = useState(true);

    const changeNumber = () => setNumber(number + 1); // функция изменения State для счетчика
    const resetNumber = () => setNumber(settingsMin) // функция для сброса счетчика

    const maxNum = settingsMax; // максимальное число
    const minNum = settingsMin; // минимальное число
    const errorText = 'Incorrect value'; // текст для ошибка
    let correctText = "enter value and press 'set'"; // текст для корректного ввода

    useEffect(() => {
        let startValue = localStorage.getItem('startValue');
        let maxValue = localStorage.getItem('maxValue');
        let message = localStorage.getItem('message');

        if (startValue) {
            setSettingsMin(JSON.parse(startValue));
            if (message === errorText) {
                setMessage(message)
                setDisabledCounter(true);
            }
            else {
                setNumber(JSON.parse(startValue));
                setDisabledCounter(false);
            }
        }

        if (maxValue) {
            setSettingsMax(JSON.parse(maxValue));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('message', message)
        localStorage.setItem('maxValue', JSON.stringify(maxNum));
        localStorage.setItem('startValue', JSON.stringify(minNum));
    }, [settingsMax, settingsMin, message]);


    const changeValueMax = (value: number) => {

        if (value < 0 || value === minNum || minNum > value) {
            setDisabledSettings(true);
            setDisabledCounter(true);
            setMessage(errorText)
        }
        else {
            setDisabledSettings(false);
            setMessage(correctText)
            setDisabledCounter(true);
        }

        setSettingsMax(value)
    };

    const changeValueMin = (value: number) => {

        if (value < 0 || value === maxNum || maxNum < value) {
            setDisabledSettings(true);
            setDisabledCounter(true);
            setMessage(errorText)
        }
        else {
            setDisabledSettings(false);
            setMessage(correctText)
            setDisabledCounter(true);
        }

        setSettingsMin(value);

    };

    const changeStartValue = () => {
        setNumber(settingsMin);
        setMessage('');
        setDisabledCounter(false);
        setDisabledSettings(true);
        setCollapsed(true);
    }

    const changeCollapsed = () => setCollapsed(!collapsed);

    return (
        <div className="wrapper">
            <div className="container">
                <div className="wrapperFlex">
                    {collapsed && <Counter
                        disabledCounter={disabledCounter}
                        message={message}
                        number={number}
                        changeNumber={changeNumber}
                        resetNumber={resetNumber}
                        maxNum={maxNum}
                        minNum={minNum}
                        errorText={errorText}
                        collapsed={collapsed}
                        changeCollapsed={changeCollapsed}
                    />}
                    {!collapsed && <Settings
                        changeValueMax={changeValueMax}
                        changeValueMin={changeValueMin}
                        changeStartValue={changeStartValue}
                        maxNum={maxNum}
                        minNum={minNum}
                        disabledSettings={disabledSettings}
                        message={message}
                        errorText={errorText}

                    />}
                </div>
            </div>
        </div>
    );
}

export default App;
