import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../../context/AuthContext';

const Perfil = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

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
        <Text style={styles.titulo}>Perfil</Text>
        <TouchableOpacity
          style={styles.logoff}
          onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.imageLogoff}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: `${user.imagem}` }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Id: {user.id}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Nome: {user.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Email: {user.email}</Text>
      </View>

      <View style={styles.containerButtons}>
        {isLoading === false ? (
          <Button
            buttonStyle={styles.button}
            title="Alterar senha"
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('RecuperarSenha')}
          />
        ) : (
          <ActivityIndicator size="large" color="#EE4249" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  boxTitulo: {
    flexDirection: 'row',
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
    marginTop: 20,
    marginHorizontal: 50,
  },
  touchableContainer: {
    width: 26,
    height: 26,
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 25,
    borderRadius: 100
  },
  titulo: {
    width: '80%',
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  textContainer: {
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    margin: 10,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center'
  },
  containerButtons: {
    alignItems: 'center',
  },
  button: {
    marginTop: 15,
    width: 300,
    backgroundColor: '#EE4249',
    borderRadius: 10,
    padding: 10,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#EE4249',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
});

export default Perfil;
