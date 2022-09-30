import { Box } from '@chakra-ui/react'
import React from 'react'
import Grids from './Grids'
import Plan from './Plan'
import Pricing from './Pricing'

const Home = () => {
  return (
    <Box >
      <Pricing/>
      <Grids/>
      <Plan/>
    </Box>
  )
}

export default Home
