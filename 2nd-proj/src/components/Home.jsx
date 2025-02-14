import { Box, Heading, Image, Container, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: ' 4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={"auto"}
        >
          Services
        </Heading>
        <Stack
        h={"full"}
        p={"4"}
        alignItems={'center'}
        direction={['column','row']}

        >
            <Image src={img5} h={["40","400"]} filter={'hue-rotate(-210deg)'}/>

            <Text letterSpacing={'widest'} lineHeight={'190%'} 
            p={["4","16"]}
            textAlign={'center'}

            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam repellat commodi earum labore. Quisquam deserunt dolorum magnam perspiciatis nihil voluptatem, excepturi praesentium quam deleniti natus ratione officia assumenda recusandae iure, rerum fugiat tempora ab sapiente ipsa in, debitis accusamus voluptate exercitationem enim? Laborum deleniti tempore odit amet, magnam voluptatem nam sint excepturi ab iste quisquam quis in eum voluptates. Amet facilis neque, blanditiis saepe deserunt atque itaque aliquid, distinctio laboriosam nulla autem tenetur nihil exercitationem repellat. Dolores, error tenetur, modi aspernatur reprehenderit eius incidunt ratione beatae labore maxime pariatur nisi optio doloremque veritatis, nesciunt fugiat illo voluptatum aut nobis? Impedit.
            </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading
        bgColor={'blackAlpha.600'}
        color={'white'}
        pos={'absolute'}
        {...headingOptions}
      >
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading
        bgColor={'blackAlpha.600'}
        color={'white'}
        pos={'absolute'}
        {...headingOptions}
      >
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        pos={'absolute'}
        {...headingOptions}
      >
        Controll the World
      </Heading>
    </Box>
    <Box w='full' h='100vh'>
      <Image src={img4} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        pos={'absolute'}
        {...headingOptions}
      >
        Play the Future
      </Heading>
    </Box>

  </Carousel>
);

export default Home;
