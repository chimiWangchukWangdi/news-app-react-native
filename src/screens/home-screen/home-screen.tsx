import React, { useEffect, useState } from "react"
import {
    AspectRatio,
    Box,
    Heading,
    HStack,
    ScrollView,
    Text,
    Image,
    VStack,
    Link,
    Divider, Pressable, Spinner, Container, Center
} from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import StyledHomeScreen from "./home-screen.style";
import NewsWebView from "../../components/news-web-view/news-web-view";
import { AppDispatch } from "../../store/store"
import { useSelector } from "react-redux";
import {
    fetchAsyncNews,
    getAllNews,
    getLoadingState,
    getError
} from "../../features/app-reducer/news-slice/news-slice";

export default function HomeScreen() {
    const [webViewVisible, setWebViewVisible] = useState(false);
    const dispatch = AppDispatch();
    const newsData = useSelector(getAllNews);
    const isError = useSelector(getError);
    const isLoading = useSelector(getLoadingState);

    useEffect(() => {
        dispatch(fetchAsyncNews(''));
    }, [])

    return (
        <ScrollView p="12px">
            {newsData.map((hotNews, index) => (
                index === 0 &&
                <Box mb="18px" position="relative">
                    <AspectRatio ratio={16 / 9} bg="black.100">
                        <Image source={{
                            uri: hotNews.urlToImage
                        }} style={{opacity: 0.9}} alt="hot news image"/>
                    </AspectRatio>
                    <VStack position="absolute" left="6" right="6" bottom="30">
                        <Text color="white" bg="white:alpha.40" borderRadius="20px" py="4px" px="16px" width="150px">News
                            of
                            the day</Text>
                        <Heading color="white" pt="8px" size="lg" numberOfLines={2}
                                 ellipsizeMode="tail">{hotNews.title}</Heading>
                        <Link flex="1" alignItems="center"
                              href={hotNews.url}
                              isExternal>
                            <Text mt="2px" pr="6px" fontSize={12} fontWeight="medium" color="tomato">
                                Read More
                            </Text>
                            <FontAwesomeIcon icon={faArrowRight} color="tomato"/>
                        </Link>
                    </VStack>
                </Box>
            ))}

            <StyledHomeScreen size="md" pb="12px">Breaking News</StyledHomeScreen>
            {isLoading ? <Spinner color="orange.600" size="lg" minH="400px"/> : newsData.length ? <>
                {newsData.map((news, index) => (
                    <Box key={news.id}>
                        <HStack justifyContent="space-between" space="20px" pb="10px">
                            <VStack width="60%">
                                <Heading size="sm" numberOfLines={2} ellipsizeMode="tail">
                                    {news.title}
                                </Heading>
                                <Text fontSize="12px" fontWeight="500" color="gray:alpha.50">
                                    {news.publishedAt}
                                </Text>
                                <Text fontSize="14px" color="black:alpha.60" numberOfLines={1} ellipsizeMode="tail">
                                    {news.author === null ? "Author unidentified" : news.author}
                                </Text>
                                <Pressable onPress={() => setWebViewVisible(true)}>
                                    {({isFocused}) => {
                                        return <Text color={isFocused ? 'orange.300' : 'orange.600'} mt="2px" pr="6px"
                                                     fontSize={12} fontWeight="medium">
                                            Read More...
                                        </Text>
                                    }}
                                </Pressable>
                                <NewsWebView isVisible={webViewVisible} url={news.url}
                                             backPress={() => setWebViewVisible(false)}/>
                            </VStack>

                            <Image width="100px"
                                   borderRadius="10px"
                                   height="90px" resizeMode="cover"
                                   source={{uri: news.urlToImage}}
                                   alt="image"
                            />

                        </HStack>
                        {
                            index !== newsData.length - 1 ? <Divider mb="16px"/> : null
                        }
                    </Box>
                ))}
            </> : isError && <Center minH="600px">
                <Text color="error.600">{isError.message} </Text>
            </Center>

            }

        </ScrollView>
    );
}