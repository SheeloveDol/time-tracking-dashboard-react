import { Box } from "@chakra-ui/react";
import CardList from "./components/cardList/CardList.component";
import Card from "./components/card/Card.component";
import HeaderCard from "./components/headerCard/HeaderCard.component";

function App() {
  return (
    <Box>
      <CardList>
        <HeaderCard />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Box>
    // <Box  borderRadius='xl' m='auto' border='1px' bg='blue.400' borderColor='tomato.200' w='80%' h='250px'>
    //   <Box border='1px' borderColor='red.400' mt='2rem' bg='yellow.200' h='216px' borderRadius='xl'>
    //     Hello me!
    //   </Box>
    // </Box>
  );
}

export default App;
