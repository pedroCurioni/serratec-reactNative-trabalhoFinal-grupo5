import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {CarrinhoContext} from '../../context/CarrinhoContext';

const CardProduto = ({produto}) => {
  const {adicionarProduto, setProdutos, listarProdutos, produtos, aumentarQuantidade} =
    useContext(CarrinhoContext);
  const [isCarrinho, setIsCarrinho] = useState(false);

  useEffect(() => {
    let contemCarrinho = null;
    produtos.forEach(item =>
      item.sku === produto.sku ? (contemCarrinho = item) : null,
    );
    if (contemCarrinho !== null) {
      setIsCarrinho(true);
    }
  }, [produto]);

  const handleAdicionarCarrinho = () => {
    if (isCarrinho) {
      aumentarQuantidade(produto.sku);
      setProdutos(listarProdutos);
    } else {
      adicionarProduto(
        produto.sku,
        produto.nomeProduto,
        produto.descricaoProduto,
        produto.precoProduto,
        produto.imagemProduto,
      );
      setProdutos(listarProdutos);
      setIsCarrinho(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxImagem}>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={handleAdicionarCarrinho}>
          <Icon name="pluscircle" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: produto.imagemProduto,
          }}
        />
      </View>
      <View style={styles.boxTexto}>
        <View style={styles.boxCima}>
          <Text style={styles.stylePreco}>
            R$ {parseFloat(produto.precoProduto).toFixed(2).replace('.', ',')}
          </Text>
          <Text style={styles.styleNome}>{produto.nomeProduto}</Text>
        </View>
        <View style={styles.boxBaixo}>
          <Text style={styles.styleDescricao}>{produto.descricaoProduto}</Text>
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

export default CardProduto;
