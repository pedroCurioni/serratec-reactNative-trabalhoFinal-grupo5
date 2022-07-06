import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, View, Modal} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CarrinhoContext} from '../../context/CarrinhoContext';

const CardCarrinho = ({produto, navigation}) => {
  const [isPopup, setPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState('');
  const {
    removerItemCarrinho,
    listarProdutos,
    aumentarQuantidade,
    diminuirQuantidade,
    setProdutos,
    contarQuantidadeProdutos,
  } = useContext(CarrinhoContext);

  const handleAdicionarQuantidade = () => {
    aumentarQuantidade(produto.sku);
    setProdutos(listarProdutos);
  };

  const handleDiminuirQuantidade = () => {
    if (produto.quantidade == 1) {
      removerItemCarrinho(produto.id_produto);
      setProdutos(listarProdutos);
      if (contarQuantidadeProdutos() == 0) {
        navigation.navigate('CarrinhoVazio');
      }
    } else {
      diminuirQuantidade(produto.sku);
      setProdutos(listarProdutos);
    }
  };

  function loadPopup() {
    setPopup(true);
    setTimeout(function () {
      setPopup(false);
    }, 1500);
  }

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
              onPress={() => {
                handleDiminuirQuantidade();
                loadPopup();
                setMessagePopup(e => 'Item removido!');
              }}
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
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopup}
        onRequestClose={() => setPopup(false)}>
        <View style={styles.modal}>
          <Text>{messagePopup}</Text>
        </View>
      </Modal>
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
  modal: {
    marginTop: 550,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 40,
    paddingVertical: 7,
    padding: 35,
    borderWidth: 1,
    borderColor: '#EE4249',
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
});

export default CardCarrinho;
