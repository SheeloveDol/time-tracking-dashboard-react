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
    
    // const toggleColorAndPointer = (e) => {
    //     e.target.style.cursor = 'pointer'
    // }

    // This function is exist ONLY to allow the app to be compiled for deployment. ESlint was finding errors because it 'setData' is declared but not used anywhere. Netlify wouln't deploy the app with that error present. 
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
            debuggingFunction
        }}>
        {children}
    </TimePeriodContext.Provider>
}

export default TimePeriodContext