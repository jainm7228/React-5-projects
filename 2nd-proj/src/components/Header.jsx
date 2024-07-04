import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      
      zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'blue'}
        size={'sm'}
        p={'0'}
        h={'10'}
        w={'10'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack onClick={onClose}
               
            >
                <Button variant={'ghost'} colorScheme='blue'>

                    <Link to='/'>Home</Link>

                </Button>
                <Button variant={'ghost'} colorScheme='blue'>

                    <Link to='/videos'>Videos</Link>

                </Button>
                <Button variant={'ghost'} colorScheme='blue'>

                    <Link to='/videos?category=free'>Free Video</Link>

                </Button>
                <Button variant={'ghost'} colorScheme='blue'>

                    <Link to='/upload'>Upload video</Link>

                </Button>
                <Button variant={'ghost'} colorScheme='blue'>

                    <Link to='/premimum'>Get Premium</Link>

                </Button>
            </VStack>

            <HStack pos={"absolute"} bottom={"10"}
            left={"0"}
            w={"full"}
            justifyContent={"space-evenly"}
            onClick={onClose}
            >

                <Button  colorScheme='blue'>
                    <Link to='/login'>Log In</Link>
                </Button>
                <Button  colorScheme='blue' variant={"outline"}>
                    <Link to='/signup'>Sign Up</Link>
                </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
