import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { combineTransition } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import { AxiosInstance } from '../../api/AxiosInstance';

const RecuperarSenha = ({ navigation }: any) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isPopupError, setPopupError] = useState(false);
  const [isPopupSucess, setPopupSucess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function nomeNumRegex(str: string) {
    return /[0-9]/.test(str);
  }

  function verificarCredenciais() {
    setTimeout(function () {
      console.log(nome + '|' + email + '|' + senha + '|' + confirmSenha);
      if (
        id === '' ||
        nome === '' ||
        email === '' ||
        senha === '' ||
        confirmSenha === ''
      ) {
        setErrorMessage('Um de seus campos está vazio!');
        setPopupError(true);
        setLoading(false);
      } else if (!nomeNumRegex(id)) {
        setErrorMessage('Seu id deve conter somente numeros!');
        setPopupError(true);
        setLoading(false);
      } else if (nomeNumRegex(nome)) {
        setErrorMessage('Seu nome contém caracteres inválidos!');
        setPopupError(true);
        setLoading(false);
      } else if (senha.length < 5) {
        setErrorMessage('Sua senha é muito fraca!');
        setPopupError(true);
        setLoading(false);
      } else if (senha != confirmSenha) {
        setErrorMessage('Suas senhas não coincidem!');
        setPopupError(true);
        setLoading(false);
      } else {
        console.log('Senha alterada');
        handleAlterarSenha();
      }
    }, 1000);
  }

  const handleAlterarSenha = async () => {
    try {
      const respostaRecuperarSenha = await AxiosInstance.post(
        '/autenticacao/recuperar-senha',
        {
          idUsuario: id,
          nomeUsuario: nome,
          email: email,
          senha: senha,
        },
      );
      console.log(respostaRecuperarSenha);
      setPopupSucess(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
        onChangeText={setConfirmSenha}
        inputContainerStyle={styles.inputContainer}
        value={confirmSenha}
        placeholderTextColor={'#a295a4'}
      />
      <View style={styles.containerButtons}>
        {isLoading ? (
          <Button
            loading
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="Alterar Senha"
          />
        ) : (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="Alterar Senha"
            onPress={() => {
              setLoading(true);
              verificarCredenciais();
            }}
          />
        )}
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopupError}
        onRequestClose={() => setPopupError(false)}>
        <View style={styles.boxModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloPopup}>Erro ao se alterar senha</Text>
            <Text style={styles.subTitlePopup}>{errorMessage}</Text>
            <Button
              title="Voltar"
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              onPress={() => {
                setPopupError(false);
                setErrorMessage(e => '');
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopupSucess}
        onRequestClose={() => setPopupSucess(false)}>
        <View style={styles.boxModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloPopup}>Sucesso ao alterar senha</Text>
            <Icon
              name="check"
              style={{ paddingTop: 20 }}
              size={40}
              color="#EE4249"
            />
            <Button
              title="Voltar"
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              onPress={() => navigation.navigate('Login')}
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
  boxModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modal: {
    marginTop: 290,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    padding: 35,
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
    marginTop: 30,
  },
  buttaoPopup: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    padding: 2,
    width: 90,
  },
});

export default RecuperarSenha;
