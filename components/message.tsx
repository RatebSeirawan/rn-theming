import * as React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';

export const Message: React.FC<{}> = () => {
    const {colors, isDark} = useTheme();
    
    const text = isDark ? 'Dark mode 🌙' : 'Light mode 🌞';

    const textStyle = {
        fontSize: 18,
        color: colors.text,
    } as TextStyle;

    const containerStyle = {
        margin: 24,
        padding: 12,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.primary,
    } as ViewStyle;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};
