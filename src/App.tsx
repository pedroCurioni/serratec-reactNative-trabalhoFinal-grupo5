import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {AuthProvider} from './context/AuthContext';
import {CarrinhoProvider} from './context/CarrinhoContext';
import CategoriaProvider from './context/CategoriaContext';
import {FavoritosProvider} from './context/FavoritosContext';
import { LogBox } from 'react-native';

export default () => {
  LogBox.ignoreAllLogs();
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <FavoritosProvider>
          <CategoriaProvider>
            <Routes />
          </CategoriaProvider>
        </FavoritosProvider>
      </CarrinhoProvider>
    </AuthProvider>
  );
};
