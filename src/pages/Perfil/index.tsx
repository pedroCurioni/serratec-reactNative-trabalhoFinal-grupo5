import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const Perfil = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [imagem, setImagem] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleAlterarDados = () => {
    console.log('nome: ', nome, 'email: ', email, 'imagem: ', imagem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon name="left" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Perfil</Text>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('Login')}>
          <Icon name="logout" size={25} color="#EE4249" />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/imagem_perfil.png')}
        style={styles.image}
      />
      <Input
        placeholder="Nome Completo"
        onChangeText={setNome}
        inputContainerStyle={styles.inputContainer}
        value={nome}
        placeholderTextColor={'#a49595'}
      />
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        inputContainerStyle={styles.inputContainer}
        value={email}
        placeholderTextColor={'#a295a4'}
      />
      <Input
        placeholder="Endereço imagem"
        onChangeText={setImagem}
        inputContainerStyle={styles.inputContainer}
        value={imagem}
        placeholderTextColor={'#a295a4'}
      />
      <View style={styles.containerButtons}>
        {isLoading === false ? (
          <Button
            buttonStyle={styles.button}
            title="Alterar Dados"
            titleStyle={styles.buttonTitle}
            onPress={() => {
              handleAlterarDados();
              setLoading(true);
            }}
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
  },
  titulo: {
    width: '80%',
    color: '#000',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cfcfcf',
    borderRadius: 10,
    margin: -8,
    marginHorizontal: 10,
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
});

export default Perfil;
