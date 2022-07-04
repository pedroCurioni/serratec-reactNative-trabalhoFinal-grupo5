import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { CategoriaContext } from '../../context/CategoriaContext';

const Home = ({ navigation }) => {

  const [categoria, setCategoria] = useState(undefined)

  const { handleCategoria } = useContext(CategoriaContext);

  const handlePress = (categoria: any) => {
    handleCategoria(categoria)
    navigation.navigate('Categoria')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitulo}>
        <Text style={styles.titulo}>FiveMarket</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>Encontre o que você procura...</Text>
      <View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.buttonNavigate} onPress={() => handlePress({ idCategoria: 4, nomeCategoria: 'Congelados' })}>
            <View style={styles.buttonContainer}>
              <Image source={require('../../assets/congelados.png')} style={styles.imageButton}></Image>
              <Text style={styles.legenda}>Congelados</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavigate} onPress={() => handlePress({ idCategoria: 3, nomeCategoria: 'Bebidas' })}>
            <View style={styles.buttonContainer}>
              <Image source={require('../../assets/bebidas.png')} style={styles.imageButton} ></Image>
              <Text style={styles.legenda}>Bebidas</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.buttonNavigate} onPress={(() => { navigation.navigate('Categorias') })}>
            <View style={styles.buttonContainer}>
              <Image source={require('../../assets/categorias.png')} style={styles.imageButton} ></Image>
              <Text style={styles.legenda}>Categorias</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavigate} onPress={(() => { navigation.navigate('Produtos') })}>
            <View style={styles.buttonContainer} >
              <Image source={require('../../assets/produtos.png')} style={styles.imageButton} ></Image>
              <Text style={styles.legenda}>Produtos</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View >
      <Text style={styles.description}>Destaques</Text>
      <ScrollView style={styles.promocoesContainer} horizontal={true}>
        <View style={styles.promocaoContainer}>
          <Image source={require('../../assets/promo1.png')} style={styles.promocaoImage} />
        </View>
        <View style={styles.promocaoContainer}>
          <Image source={require('../../assets/promo2.png')} style={styles.promocaoImage} />
        </View>
        <View style={styles.promocaoContainer}>
          <Image source={require('../../assets/promo3.png')} style={styles.promocaoImage} />
        </View>
        <View style={styles.promocaoContainer}>
          <Image source={require('../../assets/promo4.png')} style={styles.promocaoImage} />
        </View>
      </ScrollView>
    </ScrollView >
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
  titulo: {
    color: '#000',
    fontSize: 22,
    paddingTop: 7,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  logoff: {

  },
  imageLogoff: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: -5
  },
  description: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  buttonNavigate: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    width: 120,
    height: 122,
    alignContent: 'center',
    justifyContent: 'center'
  },
  imageButton: {
    width: 90,
    height: 70,
    marginLeft: 15,
  },
  legenda: {
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
  },
  promocoesContainer: {
    marginLeft: 12,
  },
  promocaoContainer: {
    margin: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center'
  },
  promocaoImage: {
    width: 348,
    height: 295,
    borderRadius: 10
  }
});

export default Home;