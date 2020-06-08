import React from 'react';
import {View, ViewStyle, StatusBar} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';

export const Screen: React.FC<{}> = (props) => {
    const {children} = props;
    const {colors, isDark} = useTheme();

    const containerStyle = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    } as ViewStyle;

    return (
        <>
            <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"}/>
            <View style={containerStyle}>
                {children}
            </View>
        </>
    );
}