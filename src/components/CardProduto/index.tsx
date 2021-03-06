import {useFocusEffect} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {CarrinhoContext} from '../../context/CarrinhoContext';

const CardProduto = ({produto}) => {
  const {
    adicionarProduto,
    setProdutos,
    listarProdutos,
    produtos,
    aumentarQuantidade,
  } = useContext(CarrinhoContext);
  const [isCarrinho, setIsCarrinho] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      if (listarProdutos() !== 0) {
        let contemCarrinho = null;
        produtos.forEach(item =>
          item.sku === produto.sku ? (contemCarrinho = item) : null,
        );
        if (contemCarrinho !== null) {
          setIsCarrinho(true);
        }
      }
    }, []),
  );

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

  function loadPopup() {
    setPopup(true);
    setTimeout(function () {
      setPopup(false);
    }, 1500);
  }
  return (
    <View style={styles.container}>
      <View style={styles.boxImagem}>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => {
            handleAdicionarCarrinho();
            loadPopup();
            setMessagePopup(e => 'Produto adicionado ao carrinho!');
          }}>
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

export default CardProduto;
