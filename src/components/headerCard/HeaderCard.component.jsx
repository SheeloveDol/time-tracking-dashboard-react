import { Box, Flex, Button, Image, Stack, Text } from "@chakra-ui/react";

import avatar from '../../assets/image-jeremy.png'

const HeaderCard = () => {

    const period = 'daily'

    return (
        <Flex 
            w={['100%', '255px']} 
            h={['203px', '518px']}
            direction='column'
            borderRadius='xl'
            bgColor='#1C204B'
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

            <Box p='1rem' bgColor='#1C204B'
            flex='1'>
                <Stack direction={['row', 'column']}>
                    { period === 'daily' ? <Text color='#fff'>Daily</Text> : <Text color='#7078C9' >Daily</Text> }
                    { period === 'weekly' ? <Text color='#fff'>Weekly</Text> : <Text color='#7078C9' >Weekly</Text> }
                    { period === 'monthly' ? <Text color='#fff'>Monthly</Text> : <Text color='#7078C9' >Monthly</Text> }
                </Stack>
            </Box>
        </Flex>
    )
}

export default HeaderCard;