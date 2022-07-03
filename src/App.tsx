import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {AuthContext, AuthProvider} from './context/AuthContext';
import { CarrinhoProvider } from './context/CarrinhoContext';

export default () => {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <Routes />
      </CarrinhoProvider>
    </AuthProvider>
  );
};
