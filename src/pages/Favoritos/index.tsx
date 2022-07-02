import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import CardsFavoritos from '../../components/cardsFavoritos';

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
        <Text style={styles.tituloFavorito}>Favoritos</Text>
        <IconMat name='logout' size={25} color='#EE4249' style={styles.botaoLogout}/>
      </View>
      <FlatList
        data={produtos}
        contentContainerStyle={{paddingTop: 30, alignItems: 'center'}}
        keyExtractor={item => item.id}
        numColumns= {numColums}
        renderItem={({item}) => <CardsFavoritos  imagem={item.imagem} preco={item.preco} descricao={item.descricao} nome={item.nome}/>}
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
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15
  },
  tituloFavorito: {
    fontSize: 26,
    fontWeight: '700',
  },
  botaoLogout: {
    paddingLeft: 160
  },
  botaoVoltar: {
    paddingLeft: 25
  }
});

export default Favoritos;