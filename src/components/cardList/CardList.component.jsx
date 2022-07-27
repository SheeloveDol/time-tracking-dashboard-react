import { Box, Text, Grid } from "@chakra-ui/react";

const CardList = ({children}) => {
    return (
        <Grid border='1px' p='4rem' gap='1rem'>
            {children}
        </Grid>
    )
};

export default CardList;