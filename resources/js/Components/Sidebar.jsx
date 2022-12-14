import React from 'react';
import {Box, CloseButton, Flex, Text, useColorModeValue,} from '@chakra-ui/react';

const Sidebar = ({ onClose, children, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {children}
            {/*{LinkItems.map((link) => (*/}
            {/*    <NavItem key={link.name} icon={link.icon}>*/}
            {/*        {link.name}*/}
            {/*    </NavItem>*/}
            {/*))}*/}
        </Box>
    );
};

export default Sidebar;
