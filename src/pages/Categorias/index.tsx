import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CardCategoria from '../../components/cardCategoria';

const Categorias = ({navigation}) => {
  const categorias = [
    {
      idCategoria: 1,
      nomeCategoria: 'Alimentos básicos',
      nomeImagem: null,
    },
    {
      idCategoria: 2,
      nomeCategoria: 'Material de Limpeza',
      nomeImagem: null,
    },
    {
      idCategoria: 3,
      nomeCategoria: 'Bebidas',
      nomeImagem: null,
    },
    {
      idCategoria: 4,
      nomeCategoria: 'Congelados',
      nomeImagem: null,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon name="left" type="antdesign" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Carrinho</Text>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('Login')}>
          <Icon name="logout" size={25} color="#EE4249" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categorias}
        renderItem={res => (
          <CardCategoria navigation={navigation} categoria={res} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxTitulo: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
    marginTop: 20,
    marginHorizontal: 10,
  },
  touchableContainer: {
    width: 26,
    height: 26,
  },
  titulo: {
    width: '80%',
    color: '#000',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default Categorias;