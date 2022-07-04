import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import CardProduto from '../../components/CardProduto';
import Icon from 'react-native-vector-icons/AntDesign'

const Favoritos = ({ navigation }) => {

  const numColums = 3;

  const produtos = [
    {
      id: '0',
      preco: 11.99,
      nome: 'Sorvete',
      descricao: 'Unidade 900ml',
      imagem: 'https://i.imgur.com/mJL5hao.png'
    },
    {
      id: '1',
      preco: 25.99,
      nome: 'Energético Monster',
      descricao: 'Unidade 900ml',
      imagem: 'https://i.imgur.com/SwWp69v.png'
    },
    {
      id: '2',
      preco: 20.99,
      nome: 'Skol',
      descricao: 'Unidade 900ml',
      imagem: 'https://i.imgur.com/Z83tdHE.png'
    },
    {
      id: '3',
      preco: 20.99,
      nome: 'Pizza Mussarela',
      descricao: '1 unidade',
      imagem: 'https://i.imgur.com/LEDrUlQ.png'
    }
  ]

  console.log(produtos.length)

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon name='left' size={25} color='#EE4249' style={styles.botaoVoltar} />
        </TouchableOpacity>
        <Text style={styles.tituloFavorito}>Favoritos</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtos}
        contentContainerStyle={{ paddingTop: 30, alignItems: 'center' }}
        numColumns={numColums}
        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('DetalhesProduto', { res: item, pagOrigem: 'Produtos' })}><CardProduto produto={item} /></TouchableOpacity>}
      />
      <Button
        buttonStyle={styles.button}
        title="Limpar Favoritos"
        titleStyle={styles.buttonTitle}
        onPress={() => console.log('Limpar favoritos')}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    paddingLeft: 10
  },
  logoff: {

  },
  imageLogoff: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  button: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    marginHorizontal: 60,
    marginBottom: 20,
    height: 60
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default Favoritos;