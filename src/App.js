import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import Router from './routes';
import store from './redux/store';
import {LoadingAnimation} from './components';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <LoadingAnimation />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
