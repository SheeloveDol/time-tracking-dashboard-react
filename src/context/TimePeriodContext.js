import { createContext, useState } from "react";
import userData from '../data/userData';

const TimePeriodContext = createContext();

export const TimePeriodProvider = ({ children }) => {
    const [ period, setPeriod ] = useState('weekly')
    const [data, setData] = useState(userData) 

    const handleDailyClick = () => {
        setPeriod('daily')
    }
    const handleWeeklyClick = () => {
        setPeriod('weekly')
    }
    const handleMonthlyClick = () => {
        setPeriod('monthly')
    }
    return <TimePeriodContext.Provider 
        value={{
            period,
            data,
            handleDailyClick,
            handleWeeklyClick,
            handleMonthlyClick,
        }}>
        {children}
    </TimePeriodContext.Provider>
}

export default TimePeriodContext