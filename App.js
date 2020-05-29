import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';

import Routes from './src/routes';

console.tron.log('App started/reloaded!');

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
