import React from 'react';
import {HStack, Tag} from "@chakra-ui/react";

const ToysBadges = ({toys}) => {
    return (
        <HStack spacing={2}>
            {toys?.length ? toys.map((toy) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={toy.id}>
                        {toy.title}
                    </Tag>
                );
            }) : null}
        </HStack>
    );
};

export default ToysBadges;
