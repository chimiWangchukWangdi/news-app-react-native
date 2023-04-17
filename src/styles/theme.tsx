import { extendTheme } from 'native-base';

export const customTheme = extendTheme({
    fonts: {
        body: 'MontRegular',
    },
    colors: {
        darkblue: {
            100: 'rgb(14,46,77)',
        },
        yellow: '#f4b316',
    }
});