import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import CardCategoria from '../../components/cardCategoria';
import ButtonVoltarHome from '../../components/buttonVoltarHome';
import { AxiosInstance } from '../../api/AxiosInstance';
import { AuthContext } from '../../context/AuthContext';
import { CategoriaType } from '../../models/CategoriaType';

const Categorias = ({ route, navigation }) => {

  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  const { user } = useContext(AuthContext);
  const [isLoadingCategorias, setIsLoadingCategorias] = useState(true);

  const getDadosCategoria = async () => {
    AxiosInstance.get(
      '/categoria',
      { headers: { "Authorization": `Bearer ${user.token}` } }
    ).then(result => {
      console.log('Dados das categorias:' + JSON.stringify(result.data));
      setCategoria(result.data);
      setIsLoadingCategorias(false);
    }).catch((error) => {
      console.log("Erro ao carregtar a lista de categorias - " + JSON.stringify(error))
    })
  }

  useEffect(() => {
    getDadosCategoria();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon name="left" type="antdesign" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Categorias</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => navigation.navigate('Login')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatListStyle}
        data={categoria}
        renderItem={res => (
          <CardCategoria navigation={navigation} categoria={res.item} />
        )}
      />
      <ButtonVoltarHome navigation={navigation} />
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
    marginBottom: 20,
    marginTop: 10,
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  flatListStyle: {
    padding: 20,
  },
  logoff: {

  },
  imageLogoff: {
    width: 40,
    height: 40,
    marginRight: 10
  }
});

export default Categorias;
