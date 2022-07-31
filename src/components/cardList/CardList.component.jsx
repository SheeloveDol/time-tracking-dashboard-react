import { Box, Text, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import HeaderCard from "../headerCard/HeaderCard.component";

const CardList = ({cardsData}) => {

    const  monthly = false;
    const daily = false;
    const weekly = true;

    return (
        <Flex border='1px' p='1rem' columns={[1, 2]} minWidth={['374px','1094px']} direction={['column', 'row']} gap='1rem' justify-content='space-between' bgColor='hsl(226, 43%, 10%)'>
        
            <HeaderCard />
            
            <SimpleGrid  columns={[1, 3]} w='100%' gridGap='30px'>
                {
                    cardsData.map( item => 
                        <Box key={item.id} borderRadius='xl' m='auto'bg={item.accentBgColor} borderColor='tomato.200' 
                            w={['327px', '255px']} border='2px'  h='239px' >

                            <Box mt='40px' w='100%' bg={item.cardBgColor} h='199px' borderRadius='lg' >
                                <Flex p='.5rem' w='80%' color='white' m='auto' justify='space-between'>
                                    <Box>
                                        <Text  fontSize='sm'>{item.title}</Text>
                                    </Box>
                                    <Box >
                                        <Text fontSize='lg'>...</Text>
                                    </Box>
                                </Flex>
                                    
                                <Flex border='1px' color='white' justify='space-between' direction={['row', 'column']}>
                                    <Text fontSize='6xl'>
                                        {monthly && item.timeframes.monthly.current} 
                                        {weekly && item.timeframes.weekly.current} 
                                        {daily && item.timeframes.daily}hrs
                                    </Text>
                                    <Box border='1px'>
                                        Last Week - {monthly && item.timeframes.monthly.previous}
                                        {weekly && item.timeframes.monthly.previous}
                                        {daily && item.timeframes.monthly.previous}
                                    </Box>
                                </Flex>  
                            </Box>

                        </Box>
                    )
                }
            </SimpleGrid>    
        

        </Flex>
    )
};

export default CardList;