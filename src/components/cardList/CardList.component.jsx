import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const CardList = ({children}) => {
    return (
        <SimpleGrid border='1px' p='4rem'>
            {children}
        </SimpleGrid>
    )
};

export default CardList;