import React from "react"
import { Center, Text } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'


export default function HomeScreen() {
    return (
        <Center>
            <Text>Hello world</Text>
            <FontAwesomeIcon icon={faMugSaucer} />
        </Center>

    );
}