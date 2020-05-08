import React from 'react';
import { Provider } from 'react-redux';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Poppins from '~/assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from '~/assets/fonts/Poppins-SemiBold.ttf';
import store from '~/redux/store';
import Routes from '~/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins,
    PoppinsBold
  });

  return (
    fontsLoaded
      ? (
        <Provider store={store}>
          <Routes />
        </Provider>
      )
      : <AppLoading />
  );
}
