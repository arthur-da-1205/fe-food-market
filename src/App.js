import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {SignIn, SignUp, SplashScreen} from './pages';
import Router from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
