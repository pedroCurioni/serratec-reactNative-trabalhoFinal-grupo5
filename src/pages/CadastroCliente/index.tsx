/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import { Text, Input, Button, normalize } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import { AxiosInstance } from '../../api/AxiosInstance';

const CadastroCliente = ({navigation}:any) => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [imagem, setImagem] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isPopupError, setPopupError] = useState(false)
  const [isPopupSucess, setPopupSucess] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  function nomeNumRegex(str:string) {
    return /[0-9]/.test(str)
  }

  function verificarCredenciais() {
    setTimeout(function() {
      console.log(nome + '|' +  email + '|' + imagem + '|' + senha + '|' + confirmSenha)
      if(nome === ''  || email === '' || imagem === '' || senha === '' || confirmSenha === '') {
        setErrorMessage(e => 'Um de seus campos está vazio!')
        setPopupError(true)
        setLoading(false)
      } else if(nomeNumRegex(nome)) {
        setErrorMessage(e => 'Seu nome contém caracteres inválidos!')
        setPopupError(true)
        setLoading(false)
      } else if (senha.length < 5) {
        setErrorMessage(e => 'Sua senha é muito fraca!')
        setPopupError(true)
        setLoading(false)
      } else if(senha != confirmSenha) {
        setErrorMessage(e => 'Suas senhas não coincidem!')
        setPopupError(true)
        setLoading(false)
      } else {
        getDadosCategoria()
      }
    }, 1000)
  }

  const getDadosCategoria = async () => {
    try {
      const res = await AxiosInstance.post(
        '/autenticacao/registro',{ nomeUsuario: nome, email: email, fotoPerfil: imagem, senha: senha})
      console.log(res)
      setPopupSucess(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <HideKeyboard>
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon name='left' size={25} color='#EE4249' style={styles.botaoVoltar}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Complete seu cadastro para fazer o pedido</Text>
      </View>
      <View style={styles.boxInputs}>
        <Input      
          placeholder="Nome Completo"
          inputContainerStyle={styles.inputContainer}
          onChangeText={setNome}
        />
        <Input      
          placeholder="E-mail"
          inputContainerStyle={styles.inputContainer}
          onChangeText={setEmail}
        />
        <Input      
          placeholder="Endereço Imagem"
          inputContainerStyle={styles.inputContainer}
          onChangeText={setImagem}
        />
        <Input
          secureTextEntry={true}      
          placeholder="Digite sua senha"
          inputContainerStyle={styles.inputContainer}
          onChangeText={setSenha}
        />
        <Input     
           secureTextEntry={true}
          placeholder="Confirmar senha"
          inputContainerStyle={styles.inputContainer}
          onChangeText={setConfirmSenha}
        />
      </View>
      <View style={styles.boxLastBotao}>
        {isLoading ? <Button
          loading
          buttonStyle={styles.botaoConfirmar}
          titleStyle={styles.textoBotaoConfirmar}
          title="Cadastrar"
        /> : <Button
        buttonStyle={styles.botaoConfirmar}
        titleStyle={styles.textoBotaoConfirmar}
        title="Cadastrar"
        onPress={() => {setLoading(true); verificarCredenciais()}}
      />}
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopupError}
        onRequestClose={() => setPopupError(false)}>
        <View style={styles.boxModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloPopup}>Erro ao se registrar</Text>
            <Text style={styles.subTitlePopup}>{errorMessage}</Text>
            <Button
              title='Voltar'
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              onPress={() => {setPopupError(false); setErrorMessage(e => '')}}
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
            <Text style={styles.tituloPopup}>Sucesso ao se registrar</Text>
            <Icon
            name="check"
            style={{paddingTop: 20}}
            size={40}
            color="#EE4249"/>
            <Button
              title='Voltar'
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </Modal>

    </View>
  </HideKeyboard>
               
  );
};

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
  boxTitulo: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 70,
    marginHorizontal: 66
  },
  botaoVoltar: {
    position: 'absolute',
    left: -65,
    top: -7
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center'
  },
  boxInputs: {
    width: '90%'
  },
  inputContainer:{
    padding: 2,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cfcfcf',
    borderRadius: 10,
    margin: -8
  },
  boxLastBotao: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  },
  botaoConfirmar: {
    backgroundColor:'#EE4249',
    height: 72
  },
  textoBotaoConfirmar: {
    fontSize: 20,
    fontWeight: '700'
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

export default CadastroCliente;