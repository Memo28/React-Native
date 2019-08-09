/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/components/suggestion-list'

const App = () => {
  return (
    <Home>
      <Header>
        <Text>Ola</Text>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionList/>
    </Home>
  );
};
export default App;
