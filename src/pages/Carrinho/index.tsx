import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Divider, Image, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import CardCarrinho from '../../components/CardCarrinho';
import ValorCarrinho from '../../components/ValorCarrinho';
import {CarrinhoContext} from '../../context/CarrinhoContext';
const Carrinho = ({navigation}) => {
  const [valorTotal, setValorTotal] = useState('');
  const {listarProdutos, produtos, setProdutos, contarQuantidadeProdutos} =
    useContext(CarrinhoContext);
  let [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    setProdutos(listarProdutos);
  }, []);

  useEffect(() => {
    let valor = 0;
    produtos.forEach(res => {
      valor += res.preco_produto * res.quantidade;
    });
    setValorTotal((valor + 9).toFixed(2).replace('.', ','));
    setQuantidade(contarQuantidadeProdutos());
  }, [produtos]);

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
        <Text style={styles.titulo}>Carrinho</Text>
        <TouchableOpacity
          style={styles.logoff}
          onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.imageLogoff}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatListStyle}
        ListHeaderComponent={
          <View>
            {quantidade == 1 ? (
              <Text style={styles.subtitulo}>{quantidade} Item </Text>
            ) : (
              <Text style={styles.subtitulo}>{quantidade} Items </Text>
            )}
          </View>
        }
        ListFooterComponent={
          <ValorCarrinho navigation={navigation} valorTotal={valorTotal} />
        }
        data={produtos}
        renderItem={({item}) => (
          <CardCarrinho navigation={navigation} produto={item} />
        )}
        ItemSeparatorComponent={Divider}
        extraData={produtos}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxTitulo: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
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
  subtitulo: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemsContainer: {
    flex: 1,
    marginHorizontal: 24,
  },
  flatListStyle: {
    padding: 20,
  },
  valoresContainer: {
    marginHorizontal: 25,
    marginBottom: 50,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#EE4249',
  },
  totalText: {
    width: '49%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalValor: {
    width: '49%',
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  containerButtons: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#EE4249',
    borderRadius: 10,
    padding: 10,
    width: 333,
    marginBottom: 13,
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

export default Carrinho;
