import React from 'react';
import {HStack, Image, Text} from "@chakra-ui/react";

const AuthorBadge = ({date, author}) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            {author ? <>
                <Image
                    borderRadius="full"
                    boxSize="40px"
                    src={`storage/${author.avatar}`}
                    alt={`Avatar of ${author.name}`}
                />
                <Text fontWeight="medium">{author.name}</Text>
                <Text>—</Text>
                <Text>{date.toLocaleDateString()}</Text>
            </> : null}
        </HStack>
    );
}
;

export default AuthorBadge;
