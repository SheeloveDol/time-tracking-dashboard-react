import { Box } from "@chakra-ui/react";

const HeaderCard = () => {
    return (
        <Box border='1px' w={['100%', '300px']}>
            <Box p='2rem' bgColor='blue.50'></Box>
            <Box p='1rem' bgColor='purple.100'></Box>
        </Box>
    )
}

export default HeaderCard;