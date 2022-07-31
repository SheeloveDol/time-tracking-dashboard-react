import { Box, Button } from "@chakra-ui/react";

const HeaderCard = () => {
    return (
        <Box border='1px' w={['100%', '300px']}>
            <Box p='2rem' bgColor='blue.400'></Box>
            <Box p='1rem' bgColor='purple.300'>
                <Button>Daily</Button>
                <Button>Weekly</Button>
                <Button>Monthly</Button>
            </Box>
        </Box>
    )
}

export default HeaderCard;