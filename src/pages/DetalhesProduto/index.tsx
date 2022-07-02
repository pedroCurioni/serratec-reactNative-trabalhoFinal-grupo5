import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import CardsFavoritos from '../../components/cardsFavoritos';
import Icon from 'react-native-vector-icons/AntDesign'
import ButtonVoltarHome from '../../components/buttonVoltarHome';
import {coracaoVazio}  from '../../assets/coracaoVazio.png'

const DetalhesProduto = ({ route, navigation }) => {

  const {res, pagOrigem} = route.params
  const [isFavorito, setFavorito] = useState(false)

  const navigate = () => {
    navigation.navigate(pagOrigem)
  }

  return(
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigate()}>
          <Icon name='left' size={25} color='#EE4249' style={styles.botaoVoltar} />
        </TouchableOpacity>
        <Text style={styles.tituloFavorito}>Detalhes do produto</Text>
        <TouchableOpacity onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxProduto}>
        <View style={styles.boxConteudo}>
          <View style={styles.boxImagem}>
            <Image style={{width: 175, height: 175}}
              source={{
              uri: res.imagem,
            }}/>
          </View>
          <View style={styles.boxInformacao}>
              <View style={styles.boxInfoCima}>
                <View style={styles.nomeDescicao}>
                  <Text style={styles.nomeProduto}>{res.nome}</Text>
                  <Text style={styles.descricaoProduto}>{res.descricao}</Text>
                </View>
                <Text style={styles.precoProduto}>R$ {res.preco}</Text>
              </View>
              <View style={styles.boxInfoBaixo}>
                <TouchableOpacity onPress={() => setFavorito(e => !isFavorito)}>
                  {isFavorito ? <Image source={require('../../assets/coracaoCheio.png')} style={styles.imageLogoff}/> : 
                  <Image source={require('../../assets/coracaoVazio.png')} style={styles.imageLogoff}/>}
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../assets/botaoAdicionar.png')} style={styles.imageLogoff}/>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
      <ButtonVoltarHome navigation={navigation} />
    </View>
  )
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  boxTitulo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15
  },
  tituloFavorito: {
    fontSize: 23,
    fontWeight: '700',
  },
  botaoLogout: {
    paddingLeft: 160
  },
  botaoVoltar: {
    paddingLeft: 10
  },
  imageLogoff: {
    width: 40,
    height: 40,
    margin: 10
  },
  boxProduto: {
    width: '100%',
    height: '79%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxConteudo: {
    width: '100%',
    height: 290,
    flexDirection: 'row',
  },
  boxImagem: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxInformacao: {
    width: '50%',
    height: '100%',
  },
  boxInfoCima: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxInfoBaixo: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nomeDescicao: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nomeProduto: {
    fontSize: 19,
    fontWeight: '700',
  },
  descricaoProduto: {
    color: 'grey',
    fontWeight: '500',
  },
  precoProduto: {
    fontSize: 21,
    color: '#EE4249'
  }
});

export default DetalhesProduto;