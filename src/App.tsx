import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {AuthProvider} from './context/AuthContext';
import {CarrinhoProvider} from './context/CarrinhoContext';
import CategoriaProvider from './context/CategoriaContext';
import {FavoritoProvider} from './context/FavoritosContext';

export default () => {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <FavoritoProvider>
          <CategoriaProvider>
            <Routes />
          </CategoriaProvider>
        </FavoritoProvider>
      </CarrinhoProvider>
    </AuthProvider>
  );
};
