import { Box, Text, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import HeaderCard from "../headerCard/HeaderCard.component";
import { useContext } from 'react'
import TimePeriodContext from "../../context/TimePeriodContext";

const CardList = () => { 
    const { period, data } = useContext(TimePeriodContext)


    return (
        <Flex border='1px' p='1rem' columns={[1, 2]} minWidth={['374px','1094px']} direction={['column', 'row']} gap='1rem' justify-content='space-between' bgColor='hsl(226, 43%, 10%)'>
        
            <HeaderCard />

            <SimpleGrid  columns={[1, 3]} w='100%' gridGap='30px'>
                {
                    data.map( item => 
                        <Box key={item.id} borderRadius='xl' m='auto'bg={item.accentBgColor} borderColor='tomato.200' 
                            w={['327px', '255px']} border='2px'  h='239px' >

                            <Box mt='40px' w='100%' bg={item.cardBgColor} h='199px' borderRadius='lg' >
                                <Flex direction='column' w='80%' mx='auto'  color='white' pt='0.5rem'>
                                    <Flex p='.5rem'  color='white' m='auto' justify='space-between' w='100%'>
                                        <Box>
                                            <Text  fontSize='sm'>{item.title}</Text>
                                        </Box>
                                        <Box >
                                            <Text fontSize='lg'>...</Text>
                                        </Box>
                                    </Flex>
                                        
                                    <Flex  color='white' justify='space-between' direction={['row', 'column']}>
                                        <Text fontSize='6xl'>
                                            {period === 'monthly' && item.timeframes.monthly.current} 
                                            {period === 'weekly' && item.timeframes.weekly.current} 
                                            {period === 'daily' && item.timeframes.daily.current}hrs
                                        </Text>

                                        <Box >
                                            {period === 'daily' && <Text>Yesterday - {item.timeframes.daily.previous}hrs</Text>}
                                            {period === 'weekly' && <Text>Last week - {item.timeframes.weekly.previous}hrs</Text>}
                                            {period === 'monthly' && <Text>Last month - {item.timeframes.monthly.previous}hrs</Text>}
                                        </Box>
                                    </Flex>  
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