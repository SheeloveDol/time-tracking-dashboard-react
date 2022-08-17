import { Box, SimpleGrid, Flex, Heading, Text } from "@chakra-ui/react";
import CardList from "./components/cardList/CardList.component";
import userData from "./data/userData";
import { useState } from 'react'
import { TimePeriodProvider } from './context/TimePeriodContext'

function App() {   
  const [data, setData] = useState(userData) 
  
    

    return (
      <TimePeriodProvider>
        <Box h='512px'>
            <CardList />
        </Box>
      </TimePeriodProvider>

    );
}
export default App;
