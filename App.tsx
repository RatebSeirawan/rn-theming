import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './theme/ThemeProvider';
import {Screen, Switch, Message} from './components';

export default function App() {
  return (
    <AppearanceProvider>
      <ThemeProvider>
      <Screen>
        <Switch />
        <Message />
      </Screen>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
