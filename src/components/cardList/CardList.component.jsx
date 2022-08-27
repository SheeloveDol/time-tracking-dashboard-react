import { Box, Text, Flex, Image, Grid, GridItem } from "@chakra-ui/react";
import HeaderCard from "../headerCard/HeaderCard.component";
import { useContext } from 'react'
import TimePeriodContext from "../../context/TimePeriodContext";

const CardList = () => { 
    const { period, data, toggleColorAndPointer} = useContext(TimePeriodContext)


    return (
        <Grid 
            templateRows={[null, null, null, 'repeat(2, 1fr)']}
            templateColumns={[null, null, null, 'repeat(4, 1fr)']}
            mx='auto'
            my='auto'
            px='auto'
            gap='1.5rem'
            py={['3rem', null, null, '0rem']}
            bgColor='hsl(226, 43%, 10%)'
         >
            <GridItem
                w={['327px', null, null, '255px']}
                rowSpan={[1, null, null, 2]}
                h={['203px', null, null, '518px' ]}
                background='blue.100'
                mx='auto'
                bgColor='hsl(226, 43%, 10%)'
            >
                <HeaderCard />
            </GridItem>

            {
                data.map( item => 
                    <GridItem 
                        key={item.id} 
                        bg={item.accentBgColor} 
                        borderRadius='xl' 
                        // borderColor='tomato.200' 
                        m='auto' 
                        w={['327px', null, null, '255px']}
                        h={[null, null, null, '244px' ]}
                        justify='normal'
                        // border='2px'  
                        
                    >
                        <Box
                            ml={['12rem', null, null, '10rem']}
                        >
                            <Image
                                w={['90px', null, null, '100px']}
                                h='45px'
                                ml={['2.5rem', null, null, '0']}
                                objectFit='none'
                                src={item.image}
                            />
                        </Box>

                        <Box 
                            bg={item.cardBgColor} 
                            onMouseOver={toggleColorAndPointer}
                            h={['132.8px', null, null, '202.52px' ]}

                            borderRadius='lg' 
                        >   
                            

                            <Box
                                // border='1px'
                                // borderColor='red.300'
                                w='80%'
                                mx='auto'
                                paddingTop={['1.5rem', null, null, '1rem']}
                            >
                            
                                <Flex 
                                    direction='column' 
                                    // w='80%' 
                                    mx='auto'  
                                    color='white' 
                                    // pt='0.5rem'
                                >
                                    <Flex 
                                        pt='.5rem'  
                                        color='white' 
                                        m='auto' 
                                        justify='space-between' 
                                        w='100%'
                                    >
                                        <Box>
                                            <Text 
                                                as='b' 
                                                fontSize='md'
                                            >
                                                {item.title}
                                            </Text>
                                        </Box>

                                        <Box >
                                            <Text
                                                as='b'
                                                fontSize='lg'
                                                color='#7078C9'
                                            >
                                                ...
                                            </Text>
                                        </Box>
                                    </Flex>
                                        
                                    <Flex  
                                        color='white' 
                                        justify='space-between' 
                                        direction={['row', null, null, 'column']}
                                        // alignItems={['flex-end', null, null, null]}
                                    >
                                        <Box>
                                            <Text fontSize={['3xl', null, null, '6xl']}>
                                                {period === 'monthly' && item.timeframes.monthly.current} 
                                                {period === 'weekly' && item.timeframes.weekly.current} 
                                                {period === 'daily' && item.timeframes.daily.current}hrs
                                            </Text>
                                        </Box>

                                        <Box >
                                            {period === 'daily' && <Text pt={['15px', null, null, '0px']} color='#BBC0FF'>Yesterday - {item.timeframes.daily.previous}hrs</Text>}
                                            {period === 'weekly' && <Text pt={['15px', null, null, '0px']} color='#BBC0FF'>Last week - {item.timeframes.weekly.previous}hrs</Text>}
                                            {period === 'monthly' && <Text pt={['15px', null, null, '0px']} color='#BBC0FF'>Last month - {item.timeframes.monthly.previous}hrs</Text>}
                                        </Box>
                                    </Flex>  
                                </Flex>
                            </Box>

                        </Box>

                    </GridItem>
                )
            }
               
        </Grid>
    )
};

export default CardList;