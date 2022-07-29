import { Box, Text, Flex } from "@chakra-ui/react";

const CardList = ({children}) => {
    return (
        <Flex border='1px' p='1rem' columns={[1, 2]} maxWidth='850px' direction={['column', 'row']} gap='1rem' justify-content='space-between' bgColor='hsl(226, 43%, 10%)'>
            {children}
        </Flex>
    )
};

export default CardList;