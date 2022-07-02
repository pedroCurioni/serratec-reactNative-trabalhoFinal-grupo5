import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import CardsFavoritos from '../../components/cardsFavoritos';
import Icon2 from 'react-native-vector-icons/AntDesign'
import ButtonVoltarHome from '../../components/buttonVoltarHome';

const Produtos = ({ navigation }) => {

  const numColums = 3;

  const [search, setSearch] = useState('');

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
    },
    {
      id: '4',
      preco: 20.99,
      nome: 'Pizza Mussarela',
      descricao: '1 unidade',
      imagem: 'https://i.imgur.com/LEDrUlQ.png'
    },
    {
      id: '5',
      preco: 20.99,
      nome: 'Pizza Mussarela',
      descricao: '1 unidade',
      imagem: 'https://i.imgur.com/LEDrUlQ.png'
    },
  ]

  const pesquisarCategoria = (search: string) => {
    if (search !== '') {

    } else {

    }
  }

  useEffect(() => {
    pesquisarCategoria(search);
  }, [search])

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon2 name='left' size={25} color='#EE4249' style={styles.botaoVoltar} />
        </TouchableOpacity>
        <Text style={styles.tituloFavorito}>Produtos</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBox}>
        <Input
          placeholder="Digite o nome de um produto"
          onChangeText={setSearch}
          inputContainerStyle={styles.inputContainer}
          value={search}
          rightIcon={
            <Icon
              name="search"
              color="#EE4249"
              type="font-awesome"
              size={20}
              containerStyle={styles.iconContainer}
              tvParallaxProperties={undefined}
            />
          }
        />
      </View>
      <FlatList
        data={produtos}
        contentContainerStyle={{ alignItems: 'center' }}
        keyExtractor={item => item.id}
        numColumns={numColums}
        renderItem={({ item }) => <CardsFavoritos imagem={item.imagem} preco={item.preco} descricao={item.descricao} nome={item.nome} />}
      />
      <ButtonVoltarHome navigation={navigation} />
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
    marginHorizontal: 10
  },
  tituloFavorito: {
    fontSize: 26,
    fontWeight: '700',
  },
  botaoLogout: {
    paddingLeft: 160
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
  searchBox: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: -10
  },
  inputContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    height: 50
  },
  iconContainer: {
    paddingRight: 10
  },
});

export default Produtos;