import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from "./bottom-tabs";
import CustomDrawer from "./customDrawer";
import { Text, HStack, Box } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


const Drawer = createDrawerNavigator();

function LogoTitle(props) {
    return (
        <HStack justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center" justifyContent="center" w="80%">
                <Text color="white" fontSize="20" fontWeight="bold">
                    News App
                </Text>
            </HStack>
            <HStack position="relative">
                <FontAwesomeIcon icon={faBell} color="white" size={18} />
                <Box
                    position="absolute" top="0px" right="0"
                    bg="primary.100" width="10px" height="10px" rounded="full" zIndex={1} _text={{
                }} />
            </HStack>
        </HStack>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{
                headerStyle: {
                    backgroundColor: 'tomato',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            >
                <Drawer.Screen name="News App" component={BottomTabs}
                               options={{headerTitle: (props) => <LogoTitle {...props} />}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;