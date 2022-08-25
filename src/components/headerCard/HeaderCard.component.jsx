import { Box, Flex, Button, Image, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import avatar from '../../assets/image-jeremy.png'
import TimePeriodContext from "../../context/TimePeriodContext";

const HeaderCard = () => {

    const { period, handleDailyClick, handleWeeklyClick, handleMonthlyClick } = useContext(TimePeriodContext)
    

    return (
        <Flex 
            borderRadius='xl'
            w={['327px', '327px', '327px', '255px']} 
            h={['203px', '203px', '203px', '518px']}
            direction='column'
            bgColor='#1C204B'
            mx='auto'
            >

            <Flex 
                borderRadius='xl'
                p='2rem' 
                bgColor='#5747EA'
                flex='2'
                direction='column'
            >
                
                    <Image 
                        borderRadius='full'
                        border='1px'
                        boxSize='75px' 
                        objectFit='cover'
                        src={avatar}
                        alt='Jeremy Robson'
                    />

                    <Box border='1px'>
                    
                    </Box>
                
            </Flex>x

            <Box  
                bgColor='#1C204B'
                flex='1'
                borderRadius='xl'>
                
                <Stack 
                
                    direction={['row',null, null, 'column']}
                    justify='space-evenly'
                >
                        { period === 'daily' ? <Text color='#fff'>Daily</Text> : <Text color='#7078C9' onClick={handleDailyClick}>Daily</Text> }
                        { period === 'weekly' ? <Text color='#fff'>Weekly</Text> : <Text color='#7078C9' onClick={handleWeeklyClick}>Weekly</Text> }
                        { period === 'monthly' ? <Text color='#fff'>Monthly</Text> : <Text color='#7078C9' onClick={handleMonthlyClick}>Monthly</Text> }
                </Stack>
            </Box>
        </Flex>
    )
}

export default HeaderCard;

//TODO: Need to add onClick function to each button.