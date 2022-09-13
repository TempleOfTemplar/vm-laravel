import {Box, Drawer, DrawerContent, useColorModeValue, useDisclosure,} from '@chakra-ui/react';
import React, {useState} from 'react';
import MobileNav from "@/Components/MobileNav";
import Sidebar from "@/Components/Sidebar";
import AddTaskModal from "@/Components/addTaskModal";

const AuthSuccessLayout = ({auth, sideNavChildren, children }) => {
    console.log("auth", auth);
    const {user} = auth;
    const [ isAddTaskModalOpen, setIsAddTaskModalOpen ] = useState()

    function onOpen() {
        setIsAddTaskModalOpen(true);
    }
    function onClose() {
        setIsAddTaskModalOpen(false);
    }
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            {/* mobilenav */}
            <MobileNav user={user} onOpen={onOpen}/>
            <Box ml={{base: 0, md: 0}} p="4">
                {children}
            </Box>
            <AddTaskModal isOpen={isAddTaskModalOpen} onClose={onClose}/>
        </Box>
    );
};

export default AuthSuccessLayout;
