import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import CategoriaProvider from './context/CategoriaContext';

export default () => {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <CategoriaProvider>
          <Routes />
        </CategoriaProvider>
      </CarrinhoProvider>
    </AuthProvider>
  );
};
