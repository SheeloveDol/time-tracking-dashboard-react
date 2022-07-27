import { Box } from "@chakra-ui/react";

const Card = () => {
    return (
        <Box borderRadius='xl' m='auto'
             border='1px' bg='blue. 400'
            borderColor='tomato.200' w='100%'
             h='160px'>
                <Box border='1px' borderColor='red.400'         mt='2rem'  bg='yellow.200' h='127px' borderRadius='xl'>
                    Hello me!
                </Box>
        </Box>
    )
};

export default Card;