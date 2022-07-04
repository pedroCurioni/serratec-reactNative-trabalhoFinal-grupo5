import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CarrinhoContext } from '../../context/CarrinhoContext';

const CardFavorito = ({ produto }) => {
  const { adicionarProduto, setProdutos, listarProdutos } =
    useContext(CarrinhoContext);

  return (
    <View style={styles.container}>
      <View style={styles.boxImagem}>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => {
            adicionarProduto(
              produto.sku,
              produto.nome_produto,
              produto.descricao_produto,
              produto.preco_produto,
              produto.imagem_produto,
            );
            setProdutos(listarProdutos);
          }}>
          <Icon name="pluscircle" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: produto.imagem_produto,
          }}
        />
      </View>
      <View style={styles.boxTexto}>
        <View style={styles.boxCima}>
          <Text style={styles.stylePreco}>
            R$ {parseFloat(produto.preco_produto).toFixed(2).replace('.', ',')}
          </Text>
          <Text style={styles.styleNome}>{produto.nome_produto}</Text>
        </View>
        <View style={styles.boxBaixo}>
          <Text style={styles.styleDescricao}>{produto.descricao_produto}</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 250,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    padding: 5,
  },
  boxImagem: {
    width: '100%',
    height: '60%',
  },
  boxTexto: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-start',
  },
  botaoAdicionar: {
    zIndex: 2,
    position: 'absolute',
    top: 115,
    left: 88,
  },
  boxCima: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-start',
  },
  boxBaixo: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
  },
  stylePreco: {
    color: 'black',
    fontWeight: '900',
  },
  styleNome: {
    color: 'black',
  },
  styleDescricao: {},
});

export default CardFavorito;
