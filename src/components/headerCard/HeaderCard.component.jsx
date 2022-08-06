import { Box, Flex, Button } from "@chakra-ui/react";

const HeaderCard = () => {
    return (
        <Flex 
            border='1px' 
            w={['100%', '255px']} 
            h={['203px', '518px']}
            direction='column'
            >
            <Box 
                p='2rem' 
                bgColor='blue.400'
                flex='2'
                >

            </Box>
            <Box p='1rem' bgColor='purple.300'
            flex='1'>
                <Button>Daily</Button>
                <Button>Weekly</Button>
                <Button>Monthly</Button>
            </Box>
        </Flex>
    )
}

export default HeaderCard;