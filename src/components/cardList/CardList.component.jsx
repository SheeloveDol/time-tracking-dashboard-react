import { Box, Text, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import HeaderCard from "../headerCard/HeaderCard.component";
import { useState } from "react";

const CardList = ({cardsData}) => { 

    const [period, setPeriod] = useState('weekly');

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
                                        {period === 'monthly' && item.timeframes.monthly.current} 
                                        {period === 'weekly' && item.timeframes.weekly.current} 
                                        {period === 'daily' && item.timeframes.daily}hrs
                                    </Text>

                                    <Box border='1px'>
                                        {period === 'monthly' && <Text>Last month - {item.timeframes.monthly.previous}</Text>}
                                        
                                        {period === 'weekly' && <Text>Last week - {item.timeframes.monthly.previous}</Text>}
                                        {period === 'daily' && <Text>Last day - {item.timeframes.monthly.previous}</Text>}
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