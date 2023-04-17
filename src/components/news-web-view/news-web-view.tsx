import React from 'react';
import { WebNewsProps } from "../../models/web-news.model";
import { WebView } from 'react-native-webview';
import { Modal } from "react-native";
import { Pressable, Spinner, Text } from "native-base";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const renderLoading = () => (
    <Spinner color="orange.600" size="lg" minH="800px"/>
);

const NewsWebView = ({isVisible, url, backPress}: WebNewsProps) => {

    return (
        <Modal visible={isVisible}>
            <Pressable onPress={() => backPress()} flexDirection="row" alignItems="center" justifyContent="flex-end"
                       p="12px">
                <FontAwesomeIcon icon={faMultiply} color="tomato"/>
                <Text color="orange.600" pl="6px">Close</Text>
            </Pressable>

            <WebView
                source={{uri: url}}
                renderLoading={renderLoading}
                startInLoadingState={true}
            />
        </Modal>
    );
}
export default NewsWebView;