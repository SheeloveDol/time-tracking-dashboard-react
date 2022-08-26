import { Box, Grid } from "@chakra-ui/react";
import CardList from "./components/cardList/CardList.component";
import userData from "./data/userData";
import { useState } from 'react'
import { TimePeriodProvider } from './context/TimePeriodContext'

function App() {   
  const [data, setData] = useState(userData) 
  
    

    return (
      <TimePeriodProvider>
        <Grid
          // border='2px'
          // borderColor='red'
          w={['100vw', null, null, '1290px']}
          h={['100%', null, null, '100vh']}
          m='auto'
          bgColor='hsl(226, 43%, 10%)'
        >
            <CardList />
        </Grid>
      </TimePeriodProvider>

    );
}
export default App;
