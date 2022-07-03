import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CarrinhoContext} from '../../context/CarrinhoContext';

const CardCarrinho = ({produto}) => {
  const {
    removerItemCarrinho,
    listarProdutos,
    aumentarQuantidade,
    diminuirQuantidade,
    setProdutos,
  } = useContext(CarrinhoContext);

  const handleAdicionarQuantidade = () => {
    aumentarQuantidade(produto.id_produto);
    setProdutos(listarProdutos);
  };

  const handleDiminuirQuantidade = () => {
    if (produto.quantidade == 1) {
      removerItemCarrinho(produto.id_produto);
      setProdutos(listarProdutos);
    } else {
      diminuirQuantidade(produto.id_produto);
      setProdutos(listarProdutos);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: produto.imagem_produto,
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nome}>{produto.nome_produto}</Text>
        <Text style={styles.descricao}>{produto.descricao_produto}</Text>
        <Text style={styles.preco}>R$ {produto.preco_produto}</Text>
      </View>
      <View style={styles.quantidadeContainer}>
        <TouchableOpacity>
          {produto.quantidade > 1 ? (
            <Icon
              name="minus-circle-outline"
              type="material-community"
              size={22}
              color="#EE4249"
              onPress={() => handleDiminuirQuantidade()}
            />
          ) : (
            <Icon
              name="delete"
              size={22}
              color="#EE4249"
              onPress={() => handleDiminuirQuantidade()}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.quantidadeText}>{produto.quantidade}</Text>
        <TouchableOpacity>
          <Icon
            name="plus-circle-outline"
            type="material-community"
            size={22}
            color="#EE4249"
            onPress={() => handleAdicionarQuantidade()}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  textContainer: {
    width: '45%',
    marginLeft: 25,
    justifyContent: 'center',
  },
  nome: {
    fontWeight: 'normal',
  },
  descricao: {
    marginTop: 1,
    color: '#757575',
    fontWeight: '100',
  },
  preco: {
    marginTop: 15,
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidadeText: {
    marginHorizontal: 15,
    color: '#EE4249',
  },
});

export default CardCarrinho;
