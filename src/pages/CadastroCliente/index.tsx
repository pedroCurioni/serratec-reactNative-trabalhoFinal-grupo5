/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { Text, Input, Image, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

const CadastroCliente = ({navigation}:any) => {

  return (   
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
            />
            <Input      
              placeholder="E-mail"
              inputContainerStyle={styles.inputContainer}
            />
            <Input      
              placeholder="Endereço Imagem"
              inputContainerStyle={styles.inputContainer}
            />
            <Input      
              placeholder="Digite sua senha"
              inputContainerStyle={styles.inputContainer}
            />
            <Input      
              placeholder="Confirmar senha"
              inputContainerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.boxLastBotao}>
            <Button
              buttonStyle={styles.botaoConfirmar}
              titleStyle={styles.textoBotaoConfirmar}
              title="Cadastrar"
            />
          </View>
          
        </View>        
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  boxTitulo: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 135,
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
  }
});

export default CadastroCliente;