import { Box, SimpleGrid } from "@chakra-ui/react";
import CardList from "./components/cardList/CardList.component";
import Card from "./components/card/Card.component";
import HeaderCard from "./components/headerCard/HeaderCard.component";
import userData from "./data/userData";
import { useState } from 'react'


function App() {

  const [data, setData] = useState(userData)



  return (
    <Box>
      <CardList>
        <HeaderCard />
        <SimpleGrid  columns={[1, 2, 3]} w='100%' gap='1rem'>
          {
            userData.map(item => 
              <Box key={item.id} borderRadius='xl' m='auto'
              bg={item.accentBgColor}
            borderColor='tomato.200' w='100%'
             h='160px'>
                <Box mt='40px' w='100%' bg={item.cardBgColor} h='120px' borderRadius='lg' >
                    
                </Box>
        </Box>
            )
          }
      
        </SimpleGrid>
      </CardList>
    </Box>

  );
}

export default App;
