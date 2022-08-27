import { createContext, useState } from "react";
import userData from '../data/userData';

const TimePeriodContext = createContext();

export const TimePeriodProvider = ({ children }) => {
    const [ period, setPeriod ] = useState('weekly')
    const [ data, setData ] = useState(userData) 

    const handleDailyClick = () => {
        setPeriod('daily')
    }

    const handleWeeklyClick = () => {
        setPeriod('weekly')
    }

    const handleMonthlyClick = () => {
        setPeriod('monthly')
    }
    
    const toggleColorAndPointer = (e) => {
        e.target.style.cursor = 'pointer'
    }

    const debuggingFunction = () => {
        setData(userData);
    }



    return <TimePeriodContext.Provider 
        value={{
            period,
            data,
            handleDailyClick,
            handleWeeklyClick,
            handleMonthlyClick,
            toggleColorAndPointer,
            debuggingFunction
        }}>
        {children}
    </TimePeriodContext.Provider>
}

export default TimePeriodContext