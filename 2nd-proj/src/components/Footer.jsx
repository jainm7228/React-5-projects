import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'}
          textAlign={['center','left']}>
            Subscribe to get update
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
            />

            <Button
              p={0}
              colorScheme="blue"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'c'}>
            VIDEO HUB
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a href="https://LinkedIn.com">LinkedIn</a>
          </Button>

          <Button variant={'link'} colorScheme="whiteAlpha">
            <a href="https://Instagram.com">Instagram</a>
          </Button>

          <Button variant={'link'} colorScheme="whiteAlpha">
            <a href="https://Github.com">Youtube</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
