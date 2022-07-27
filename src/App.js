import { Box, SimpleGrid } from "@chakra-ui/react";
import CardList from "./components/cardList/CardList.component";
import Card from "./components/card/Card.component";
import HeaderCard from "./components/headerCard/HeaderCard.component";

function App() {
  return (
    <Box>
      <CardList>
        <HeaderCard />
        <SimpleGrid  columns={[1, 2, 3]} w='100%' gap='1rem'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </CardList>
    </Box>

  );
}

export default App;
