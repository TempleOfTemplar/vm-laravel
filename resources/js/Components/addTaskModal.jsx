import React from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

const AddTaskModal = ({isOpen, onClose}) => {
    const initialRef = React.useRef(null)
    return (
        <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Название</FormLabel>
                        <Input ref={initialRef} placeholder='First name'/>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name'/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddTaskModal;
