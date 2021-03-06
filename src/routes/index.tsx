import React, {useContext} from 'react';
import {Icon, withBadge} from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Home from '../pages/Home';
import CadastroCliente from '../pages/CadastroCliente';
import RecuperarSenha from '../pages/RecuperarSenha';
import Perfil from '../pages/Perfil';
import Carrinho from '../pages/Carrinho';
import Favoritos from '../pages/Favoritos';
import Produtos from '../pages/Produtos';
import PedidoFinalizado from '../pages/PedidoFinalizado';
import Categorias from '../pages/Categorias';
import Categoria from '../pages/Categoria';
import DetalhesProduto from '../pages/DetalhesProduto';
import {CarrinhoContext} from '../context/CarrinhoContext';
import ListaProdutosFim from '../pages/ListaProdutosFim';
import CarrinhoVazio from '../pages/CarrinhoVazio';
import FavoritosVazio from '../pages/FavoritosVazio';

const TabNavigation = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  const {contarQuantidadeProdutos} = useContext(CarrinhoContext);
  const BadgeIcone = withBadge(contarQuantidadeProdutos())(Icon);
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderBottomWidth: 0,
          borderTopWidth: 2,
          height: 60,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 16,
          color: '#000',
        },
      }}>
      <TabNavigation.Screen
        name="HomeTabScreen"
        component={Home}
        options={{
          tabBarLabel: 'Loja',
          tabBarIcon: ({focused}) => (
            <Icon
              name="store"
              color={focused ? '#e05456' : '#bab8b8'}
              type="material-community"
              size={35}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="CarrinhoTabScreen"
        component={Carrinho}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarBadge: contarQuantidadeProdutos(),
          tabBarIcon: ({focused}) => (
            <Icon
              name="cart"
              color={focused ? '#e05456' : '#bab8b8'}
              type="material-community"
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="FavoritosTabScreen"
        component={Favoritos}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart"
              color={focused ? '#e05456' : '#bab8b8'}
              type="material-community"
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />

      <TabNavigation.Screen
        name="PerfilTabScreen"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused}) => (
            <Icon
              name="account-circle"
              color={focused ? '#e05456' : '#bab8b8'}
              type="material-community"
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
};

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <StackNavigation.Screen name="Login" component={Login} />
        <StackNavigation.Screen name="Home" component={BottomTabNavigator} />
        <StackNavigation.Screen
          name="CadastroCliente"
          component={CadastroCliente}
        />
        <StackNavigation.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
        />
        <StackNavigation.Screen name="Produtos" component={Produtos} />
        <StackNavigation.Screen
          name="PedidoFinalizado"
          component={PedidoFinalizado}
        />
        <StackNavigation.Screen
          name="ListaProdutosFim"
          component={ListaProdutosFim}
        />
        <StackNavigation.Screen
          name="DetalhesProduto"
          component={DetalhesProduto}
        />
        <StackNavigation.Screen name="Categorias" component={Categorias} />
        <StackNavigation.Screen name="Categoria" component={Categoria} />
        <StackNavigation.Screen
          name="CarrinhoVazio"
          component={CarrinhoVazio}
        />
        <StackNavigation.Screen
          name="FavoritosVazio"
          component={FavoritosVazio}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
