import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { NativeBaseProvider, Center, } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from "./src/styles/theme"
import Navigation from "./src/components/navigation/navigation";

export default function App() {
    useFonts({
        'MontRegular': require('./assets/fonts/MontRegular.ttf'),
    });
    return (
        <SafeAreaProvider>
            <NativeBaseProvider theme={theme}>
                <StatusBar translucent
                           backgroundColor="transparent"
                />
                <Navigation />
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
