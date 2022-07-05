import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import CardProduto from '../../components/CardProduto';
import Icon from 'react-native-vector-icons/AntDesign';
import {FavoritosContext} from '../../context/FavoritosContext';
import CardFavorito from '../../components/CardFavorito';
import { useFocusEffect } from '@react-navigation/native';

const Favoritos = ({navigation}) => {
  const [isPopup, setPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState('');
  const {
    setFavoritos,
    listarFavoritos,
    favoritos,
    resetFavoritos,
    contarQuantidadeFavoritos,
  } = useContext(FavoritosContext);
  let [quantidade, setQuantidade] = useState(0);

  function loadPopup() {
    setPopup(true);
    setTimeout(function () {
      setPopup(false);
    }, 1500);
  }

  useFocusEffect(
    React.useCallback(() => {
      setFavoritos(listarFavoritos());
    }, []),
  );

  useEffect(() => {
    setQuantidade(contarQuantidadeFavoritos());
    if(contarQuantidadeFavoritos() == 0){
        navigation.navigate('FavoritosVazio');
    }
  }, [favoritos]);

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
          onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.imageLogoff}
          />
        </TouchableOpacity>
      </View>
      {quantidade <= 0 ? (
        <View>
        </View>
      ) : (
        <View>
          <FlatList
            data={favoritos}
            extraData={favoritos}
            contentContainerStyle={{paddingTop: 30, alignItems: 'center'}}
            numColumns={numColums}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetalhesProduto', {
                    res: item,
                    pagOrigem: 'FavoritosTabScreen',
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
            onPress={() => {
              resetFavoritos();
              setFavoritos(listarFavoritos);
              loadPopup();
              setMessagePopup(e => 'Lista de favoritos reiniciada!');
            }}
          />
        </View>
      )}

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopup}
        onRequestClose={() => setPopup(false)}>
        <View style={styles.modal}>
          <Text>{messagePopup}</Text>
        </View>
      </Modal>
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
  modal: {
    marginTop: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 40,
    paddingVertical: 7,
    padding: 35,
    borderWidth: 1,
    borderColor: '#EE4249',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Favoritos;
