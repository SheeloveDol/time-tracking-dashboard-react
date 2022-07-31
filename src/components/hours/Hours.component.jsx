

const Hours = () => {
    return (
        <Flex border='1px' color='white' justify='space-between' direction={['row', 'column']}>
                              <Text fontSize='6xl'>{timeChange}hrs</Text>
                              <Box border='1px'>Last Week - {item.timeframes.daily.previous}</Box>
                          </Flex>
    )
}

export default Hours 