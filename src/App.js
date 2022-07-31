import { Box, SimpleGrid, Flex, Heading, Text } from "@chakra-ui/react";
import CardList from "./components/cardList/CardList.component";
import userData from "./data/userData";
import { useState } from 'react'


function App() {     
  const [data, setData] = useState(userData)

  return (

    <Box h='512px'>
        <CardList cardsData={data} />
    </Box>

  );
}

export default App;
