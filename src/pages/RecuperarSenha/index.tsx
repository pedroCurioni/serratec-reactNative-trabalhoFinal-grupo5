import React, {useState} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  StyleSheet,
  View,
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>{'Recupere sua senha'}</Text>
      </View>
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        inputContainerStyle={styles.inputContainer}
        value={email}
        placeholderTextColor={'#a49595'}
      />
      <Input
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={setSenha}
        inputContainerStyle={styles.inputContainer}
        value={senha}
        placeholderTextColor={'#a295a4'}
      />
      {isLoading === false ? (
        <Button
          buttonStyle={styles.button}
          title="Login"
          titleStyle={styles.buttonTitle}
          // onPress={() => {
          //   handleLogin(email, senha);
          //   setLoading(true);
          // }}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  tituloContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo: {
    color: '#000',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  inputContainer: {
    boderColor: '#cfcfcf',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: '#fff',
    padding: 5,
    margin: -8,
  },
  button: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    padding: 18,
    marginTop: 70,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecuperarSenha;
