import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const RecuperarSenha = ({ navigation }: any) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleAlterarSenha = () => {
    console.log(id);
    console.log(nome);
    console.log(senha);
    console.log(id);
  };

  return (
    <View style={styles.body}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('Login')}>
          <Icon
            name="left"
            size={25}
            color="#EE4249"
            style={styles.botaoVoltar}
          />
        </TouchableOpacity>
        <Text style={styles.titulo}>Recupere sua senha</Text>
      </View>
      <Input
        placeholder="Id"
        onChangeText={setId}
        inputContainerStyle={styles.inputContainer}
        value={id}
        placeholderTextColor={'#a49595'}
      />
      <Input
        placeholder="Nome"
        onChangeText={setNome}
        inputContainerStyle={styles.inputContainer}
        value={nome}
        placeholderTextColor={'#a295a4'}
      />
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        inputContainerStyle={styles.inputContainer}
        value={email}
        placeholderTextColor={'#a295a4'}
      />
      <Input
        secureTextEntry={true}
        placeholder="Digite sua nova senha"
        onChangeText={setSenha}
        inputContainerStyle={styles.inputContainer}
        value={senha}
        placeholderTextColor={'#a295a4'}
      />
      <Input
        secureTextEntry={true}
        placeholder="Confirmar nova senha"
        onChangeText={setConfirmaSenha}
        inputContainerStyle={styles.inputContainer}
        value={confirmaSenha}
        placeholderTextColor={'#a295a4'}
      />
      <View style={styles.containerButtons}>
        {isLoading === false ? (
          <Button
            buttonStyle={styles.button}
            title="Trocar senha"
            titleStyle={styles.buttonTitle}
            onPress={() => {
              handleAlterarSenha();
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
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTitulo: {
    flexDirection: 'row',
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
    marginHorizontal: 66,
  },
  touchableContainer: {
    width: 25,
    height: 25,
  },
  botaoVoltar: {
    position: 'absolute',
  },
  titulo: {
    color: '#000',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    width: '90%',
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

export default RecuperarSenha;
