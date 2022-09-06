import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import avatar from '../../assets/image-jeremy.png';
import TimePeriodContext from "../../context/TimePeriodContext";

const HeaderCard = () => {

    const { period, handleDailyClick, handleWeeklyClick, handleMonthlyClick, toggleColorAndPointer } = useContext(TimePeriodContext)
    

    return (
        <Flex
            borderRadius='xl'
            w={['327px', null, null, '255px']} 
            h={['203px', '203px', '203px', '518px']}
            direction='column'
            bgColor='#1C204B'
            mx='auto'
            >

            <Stack 
                borderRadius='xl'
                p='2rem' 
                bgColor='#5747EA'
                flex='2'
                direction={['row', null, null, 'column']}
                spacing={['1rem', null, null, '2rem']}
            >
                
                    <Image 
                        borderRadius='full'
                        border='4px'
                        borderColor='white'
                        boxSize='75px' 
                        objectFit='cover'
                        src={avatar}
                        alt='Jeremy Robson'
                    />

                    <Stack>
                        <Text 
                            color='hsl(236, 100%, 87%)'
                            fontSize='lg'
                            
                        >
                            Report for
                        </Text>

                        <Text 
                            color='white'
                            fontSize={['xl', null, null, '4xl']}
                        >
                            Jeremy Robson
                        </Text>
                    </Stack>
                
            </Stack>

            <Box  
                
                bgColor='hsl(235, 46%, 20%)'
                flex='1'
                // border='1px'
                // borderColor='white'
                borderRadius='xl'
                mx='2rem' 
                // my='1.5rem'
                pt={['1rem', null, null, '2.5rem']}   
            >
                
                <Stack 
                    _hover={{ cursor: 'pointer', color: '#fff' }}
                    direction={['row',null, null, 'column']}
                    justify='space-between'
                >
                        { 
                            period === 'daily' ? <Text  color='#fff' >Daily</Text> : <Text _hover={{ color: '#fff' }} color='#7078C9' onClick={handleDailyClick} >Daily</Text> 
                        }
                        { 
                            period === 'weekly' ? <Text color='#fff'>Weekly</Text> : <Text _hover={{ color: '#fff' }} color='#7078C9' onClick={handleWeeklyClick} >Weekly</Text> 
                        }
                        { 
                            period === 'monthly' ? <Text color='#fff'>Monthly</Text> : <Text _hover={{ color: '#fff' }} color='#7078C9' onClick={handleMonthlyClick} >Monthly</Text> 
                        }
                </Stack>
            </Box>
        </Flex>
    )
}

export default HeaderCard;

//TODO: Need to add onClick function to each button.