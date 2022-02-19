import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card() {
  return (
    <Center mt={16} py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Twitter
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @Twitter
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          What's happening?!

        </Text>

        <Stack mt={8} direction={'column'} spacing={4}>
          <Link
            href={`https://twitter.com/${null}`}
            isExternal
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              align='center'
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center >
  );
}
