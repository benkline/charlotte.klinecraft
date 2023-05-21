import './App.css'

import { 
  ChakraProvider, 
  Box,
  Center,
  Circle, 
  Square, 
  HStack,
  VStack,
  StackDivider,
  Heading,
  Text,
} from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Heading as='h1' size='2xl' noOfLines={1}>
        Charlotte's Exhibition Website
      </Heading>
      <Text fontSize='1xl'>
        This website is a call to action for you to learn more about my project reporting on Microplastics.
      </Text>

      <VStack
        py='1rem'
        spacing={4}
        align='stretch'
      >
        <Box h='40px' bg='yellow.200'>
          What are they?
        </Box>
        <Text>
          The weather and water degrade plastic trash into smaller and smaller sizes.
          Microplastics are pieces of plastic that are less than 5 milimeters long. They eventually degrade into nanoplastics that you can't see at all. 
        </Text>
        <Box h='40px' bg='tomato'>
          Are they harmful?
        </Box>
        <Text>
          Microplastics are harmful because they can cause cancer, chronic inflation, DNA damage, neurotoxicity, chronic toxicity, genetic toxicity, and other unknown effects.Microplastics are somewhere in our bodies and they have been found in human blood, lung tissue, breast milk, and Collins.Unfortunately, 94% of drinking water in the USA is contaminated by microplastic, 83% worldwide, and 40% of plastic is in landfill.14% is actually recycled and only 2% is useful and can be turned into somethinUnfortunately, 94% of drinking water in the USA is contaminated by microplastic, 83% worldwide, and 40% of plastic is in landfill.14% is actually recycled and only 2% is useful and can be turned into something new.“As a pollutant, microplastics can be harmful to the environment.”These horrible plastics.Wait who are these plastics!Well, let me introduce polypropylene,pvc, polyamide, polstgerne, polycarbonate,polyethelenphathalate.fancy names what are they?plastics.
        </Text>
        <Text>
          if you want more info, I suggest
          <a href="www.webmd.com/a-to-z-guides/news/20221028/microplastics-health-risks-what-do-we-really-know#:~:text=Microplastics%20as%20Carriers&text=%E2%80%9CThese%20chemicals%20are%20known%20environmental,inflammation%2C%20or%20other%20unknown%20effects. Vestergaard, Jannik. LifeStraw. lifestraw.com/blogs/news/what-you-need-to-know-about-microplastics"> this webmd link</a>
        </Text>
        <Box h='40px' bg='pink.100'>
          What can I do to help?
        </Box>
        <Text>We really need to do something about this. We don't just swallow them, they are swallowing us! And there's no time to sit around and do nothing! So are you going to go home and watch tv, or are you gonna make history!
          Because we need everybody!!!
        </Text>
        <Text>The world needs to stop 'single use plastic'. That is plastic that is only used once, like plastic bags, cups, food containers, etc... </Text>
        <Text>The world needs to limit our use of all plastics. Clothes, TV's, almost anything you think of probably has plastic, but could have used something else like wood or metal.</Text>
        
      </VStack>
    </ChakraProvider>
  )
}

export default App
