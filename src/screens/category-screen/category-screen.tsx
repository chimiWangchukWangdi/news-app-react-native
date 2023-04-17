import React, { useState } from "react"
import { Box, Flex, Heading, HStack, Input, Pressable, ScrollView, Text, VStack } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { customTheme } from "../../styles/theme";
import Health from "../../components/health/health";
import { FlatList, SectionList } from "react-native";

const carouselItem = [
    {itemName: "Health"},
    {itemName: "Food"},
    {itemName: "Politics"},
    {itemName: "Art"},
    {itemName: "Technology"},
]

export default function CategoryScreen() {
    const [categoryData, setCategoryData] = useState([]);
    const HandleCategory = () => {

    }
    return (
        <Box px="12px" py="16px">
            <Heading>Discover</Heading>
            <Text color="black:alpha.60" pt="4px" pb="18px">News from all over the world</Text>
            <HStack w="100%" pb="24px">
                <Input placeholder="Search and Discover" bg="white" width="100%" borderRadius="10px" py="12px" px="14px"
                       fontSize="14" InputLeftElement={<Box pl="12px"><FontAwesomeIcon icon={faSearch}
                                                                                       color={customTheme.colors.darkblue["100"]}/></Box>}/>
            </HStack>
            <ScrollView horizontal persistentScrollbar={true}>
                {carouselItem.map((categories, index) => (
                    <Pressable key={index} pr={`${carouselItem.length - 1 !== index ? "10px" : "0"}`} mb="4px" onPress={HandleCategory}>
                        <Heading color="black:alpha.70">{categories.itemName}</Heading>
                    </Pressable>
                ))}
            </ScrollView>

            {/*<FlatList data={categoryData} renderItem={} />*/}


        </Box>

    );
}