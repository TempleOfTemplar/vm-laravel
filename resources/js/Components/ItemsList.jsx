import React from 'react';
import {Box, Container, Heading, Image, Link, Text, useColorModeValue,} from '@chakra-ui/react';
import ToysBadges from "@/Components/ToysBadges";
import AuthorBadge from "@/Components/AuthorBadge";

const ItemsList = ({items}) => {
    return (
        <Container maxW={'7xl'} p="12">
            {items?.length ? items.map(item =>
                <Box key={item.id}
                     marginTop={{base: '1', sm: '5'}}
                     display="flex"
                     flexDirection={{base: 'column', md: 'row'}}
                     justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{base: '100%', sm: '85%'}}
                            zIndex="2"
                            marginLeft={{base: '0', sm: '5%'}}
                            marginTop="5%">
                            <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{base: '3', sm: '0'}}>
                        <ToysBadges toys={item.toys}/>
                        <Heading marginTop="1">
                            <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
                                {item.title}
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg" dangerouslySetInnerHTML={{__html: item.content}}>
                        </Text>
                        <AuthorBadge author={item.author} date={new Date('2021-04-06T19:01:27Z')}/>

                    </Box>
                </Box>) : null}
        </Container>
    );
};

export default ItemsList;
