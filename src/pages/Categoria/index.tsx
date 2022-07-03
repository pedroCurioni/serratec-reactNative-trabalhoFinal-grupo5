import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { ProdutoType } from '../../models/ProdutoType';
import { AxiosInstance } from '../../api/AxiosInstance';
import { AuthContext } from '../../context/AuthContext'
import { CategoriaContext } from '../../context/CategoriaContext';
import { Button } from 'react-native-elements/dist/buttons/Button';
import CardProduto from '../../components/CardProduto';
import { Icon, Image } from 'react-native-elements';
import ButtonVoltarHome from '../../components/buttonVoltarHome';

const Categoria = ({ route, navigation }) => {

  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const [listaProdutosCategoria, setListaProdutosCategoria] = useState<ProdutoType[]>([]);
  const { user } = useContext(AuthContext);
  const [isLoadingRecentes, setIsLoadingRecentes] = useState(true);
  const { idCategoria, nomeCategoria, handleCategoria } = useContext(CategoriaContext);
  const numColums = 3;

  const getDadosProduto = async () => {
    AxiosInstance.get(
      '/produto',
      { headers: { "Authorization": `Bearer ${user.token}` } }
    ).then(result => {
      console.log('Dados dos produtos:' + JSON.stringify(result.data));
      setProduto(result.data);
      setIsLoadingRecentes(false);
    }).catch((error) => {
      console.log("Erro ao carregtar a lista de produtos - " + JSON.stringify(error))
    })
  }

  const limparContext = () => {
    handleCategoria(undefined)
  }

  useEffect(() => {
    getDadosProduto();
    return () => limparContext();
  }, []);

  useEffect(() => {
    setListaProdutosCategoria(produto.filter(prod => prod.idCategoria === idCategoria));
  }, [produto, idCategoria])

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon name="left" type="antdesign" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Text style={styles.titulo}>{nomeCategoria}</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>

      {isLoadingRecentes ?
        <ActivityIndicator size='large' color='#fff' />
        :
        <FlatList
          data={listaProdutosCategoria}
          contentContainerStyle={{ paddingTop: 30, alignItems: 'center' }}
          numColumns={numColums}
          renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('DetalhesProduto', { res: item, pagOrigem: 'Produtos' })}><CardProduto imagem={item.imagemProduto} preco={item.precoProduto} descricao={item.descricaoProduto} nome={item.nomeProduto} /></TouchableOpacity>}
        />
      }
      <ButtonVoltarHome navigation={navigation} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 410,
    backgroundColor: '#fff'
  },
  boxTitulo: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  touchableContainer: {
    width: 26,
    height: 26,
  },
  titulo: {
    width: '80%',
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#EE4249',
    padding: 18,
    marginTop: 70
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  recentesContainer: {
    paddingBottom: 10,
    alignItems: 'center'
  },
  recenteContainer: {
    borderRadius: 5,
    padding: 10,
    width: 300,
    height: 400,
    alignItems: 'center'
  },
  textCardTitle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 10,
    height: 40
  },
  textCardDescription: {
    color: '#000000',
    textAlign: 'center',
    paddingLeft: 10
  },
  logoff: {

  },
  imageLogoff: {
    width: 40,
    height: 40,
    marginRight: 10
  }
});

export default Categoria;
