import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

const Home = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitulo}>
        <Text style={styles.titulo}>Five Market</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>

      </View>
      <Text style={styles.description}>Encontre o que você procura...</Text>
      <View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.buttonNavigate}>
            <View style={styles.buttonContainer}>
              <Image source={require('../../assets/congelados.png')} style={styles.imageButton}></Image>
              <Text style={styles.legenda}>Congelados</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavigate}>
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
        <View style={styles.promocaoContainer}></View>
        <View style={styles.promocaoContainer}></View>
        <View style={styles.promocaoContainer}></View>
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
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titulo: {
    color: '#000',
    fontSize: 20,
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
    marginRight: 20
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
    width: 340,
    height: 206,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#000',
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default Home;