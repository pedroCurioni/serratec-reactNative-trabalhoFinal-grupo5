import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, Modal } from 'react-native';
import { Text, Input, Button, Image } from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [isPopupError, setPopupError] = useState(false)

  const handleLogin = async (email: string, senha: string) => {
    console.log(`Email: ${email} - Senha: ${senha}`)

    const respostaLogin = await login(email, senha);
    setLoading(false);
    if (!respostaLogin) {
      setPopupError(true)
    } else {
      navigation.navigate('Home');
      cleanInput();
    }
  }

  const handleCadastro = () => {
    navigation.navigate('CadastroCliente');
    cleanInput();
  }

  const handleSenha = () => {
    navigation.navigate('RecuperarSenha');
    cleanInput();
  }

  const cleanInput = () =>{
    setEmail('');
    setSenha('');
  }

  return (
    <View style={styles.body}>
      <View style={styles.containerApresentacao}>
        <Text style={styles.titulo}>{'Você está no'}</Text>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <Input
        placeholder="Email"
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
      <View style={styles.containerButtons}>
        <Button
          buttonStyle={styles.button2}
          title="Cadastrar"
          titleStyle={styles.buttonTitle2}
          onPress={() => { handleCadastro() }}
        />

        {isLoading === false ? <Button
          buttonStyle={styles.button}
          title="Login"
          titleStyle={styles.buttonTitle}
          onPress={() => { handleLogin(email, senha); setLoading(true) }}
        /> : <Button
          loading
          buttonStyle={styles.button}
          title="Login"
          titleStyle={styles.buttonTitle}
        />}
      </View>
      <Button
        buttonStyle={styles.button3}
        title="Esqueci minha senha"
        titleStyle={styles.buttonTitle3}
        onPress={() => { handleSenha() }}
      />
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopupError}
        onRequestClose={() => setPopupError(false)}>
        <View style={styles.boxModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloPopup}>Houve um erro ao tentar logar</Text>
            <Button
              title='Voltar'
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              onPress={() => setPopupError(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  containerApresentacao: {
    alignItems: 'center',
    margin: 10,
  },
  titulo: {
    color: '#000',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  inputContainer: {
    padding: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cfcfcf',
    borderRadius: 10,
    margin: -8
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    padding: 10,
    width: 180,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#EE4249',
  },
  button2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 180,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#EE4249',
  },
  button3: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EE4249',
  },
  buttonTitle3: {
    fontSize: 17,
    color: '#EE4249',
    textDecorationLine: 'underline'
  },
  boxModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  modal: {
    marginTop: 290,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  tituloPopup: {
    fontSize: 18,
    fontWeight: '700',
  },
  subTitlePopup: {
    marginTop: 9,
    fontSize: 15,
    fontWeight: '500',
  },
  boxBotaoPopup: {
    marginTop: 30
  },
  buttaoPopup: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    padding: 2,
    width: 90,
  },
});

export default Login;
