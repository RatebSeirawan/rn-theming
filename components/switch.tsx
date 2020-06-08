import * as React from 'react';
import {Switch as RNSwitch} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';


export const Switch: React.FC<{}> = () => {
    const {setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <RNSwitch value={isDark} onValueChange={toggleScheme}/>
    );
}
