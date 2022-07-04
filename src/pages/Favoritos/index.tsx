import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import CardProduto from '../../components/CardProduto';
import Icon from 'react-native-vector-icons/AntDesign';
import {FavoritoContext} from '../../context/FavoritosContext';

const Favoritos = ({navigation}) => {
  const {
    adicionarFavorito,
    setFavoritos,
    listarFavoritos,
    favoritos,
    resetFavoritos,
  } = useContext(FavoritoContext);

  const numColums = 3;

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon
            name="left"
            size={25}
            color="#EE4249"
            style={styles.botaoVoltar}
          />
        </TouchableOpacity>
        <Text style={styles.tituloFavorito}>Favoritos</Text>
        <TouchableOpacity
          style={styles.logoff}
          onPress={() => console.log('Logoff')}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.imageLogoff}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtos}
        contentContainerStyle={{paddingTop: 30, alignItems: 'center'}}
        numColumns={numColums}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetalhesProduto', {
                res: item,
                pagOrigem: 'Produtos',
              })
            }>
            <CardProduto produto={item} />
          </TouchableOpacity>
        )}
      />
      <Button
        buttonStyle={styles.button}
        title="Limpar Favoritos"
        titleStyle={styles.buttonTitle}
        onPress={resetFavoritos()}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxTitulo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloFavorito: {
    fontSize: 24,
    fontWeight: '700',
  },
  botaoVoltar: {
    paddingLeft: 10,
  },
  logoff: {},
  imageLogoff: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    marginHorizontal: 60,
    marginBottom: 20,
    height: 60,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Favoritos;
