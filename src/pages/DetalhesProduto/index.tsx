import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {Text} from 'react-native-elements';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import CardsFavoritos from '../../components/CardProduto';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonVoltarHome from '../../components/buttonVoltarHome';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import Produtos from '../Produtos';
import {FavoritosContext} from '../../context/FavoritosContext';
import Favoritos from '../Favoritos';

const DetalhesProduto = ({route, navigation}) => {
  const [isPopup, setPopup] = useState(false);
  const {res, pagOrigem} = route.params;
  const [favoritoImage, setFavoritoImage] = useState(<></>);
  const [isFavorito, setIsFavorito] = useState(false);
  const [isCarrinho, setIsCarrinho] = useState(false);
  const [messagePopup, setMessagePopup] = useState('');
  const {
    adicionarProduto,
    setProdutos,
    listarProdutos,
    produtos,
    aumentarQuantidade,
  } = useContext(CarrinhoContext);
  const {
    adicionarFavorito,
    setFavoritos,
    listarFavoritos,
    favoritos,
    removerItemFavoritos,
  } = useContext(FavoritosContext);

  useEffect(() => {
    let contemFavorito = null;
    favoritos.forEach(item =>
      item.sku === res.sku ? (contemFavorito = item) : null,
    );
    let contemCarrinho = null;
    produtos.forEach(item =>
      item.sku === res.sku ? (contemCarrinho = item) : null,
    );
    if (contemCarrinho !== null) {
      setIsCarrinho(true);
    }
    if (contemFavorito === null) {
      setIsFavorito(false);
      setFavoritoImage(
        <Image
          source={require('../../assets/coracaoVazio.png')}
          style={styles.imageLogoff}
        />,
      );
    } else {
      setIsFavorito(true);
      setFavoritoImage(
        <Image
          source={require('../../assets/coracaoCheio.png')}
          style={styles.imageLogoff}
        />,
      );
    }
  }, [res]);

  const handleAdicionarFavorito = () => {
    if (isFavorito) {
      if (pagOrigem === 'FavoritosTabScreen') {
        navigation.navigate(pagOrigem);
        removerItemFavoritos(res.sku);
      } else {
        removerItemFavoritos(res.sku);
        setIsFavorito(false);
        setFavoritoImage(
          <Image
            source={require('../../assets/coracaoVazio.png')}
            style={styles.imageLogoff}
          />,
        );
      }
    } else {
      adicionarFavorito(
        res.sku,
        res.nomeProduto,
        res.descricaoProduto,
        res.precoProduto,
        res.imagemProduto,
      );
      setFavoritos(listarFavoritos);
      setIsFavorito(true);
      setFavoritoImage(
        <Image
          source={require('../../assets/coracaoCheio.png')}
          style={styles.imageLogoff}
        />,
      );
    }
  };

  const handleAdicionarCarrinho = () => {
    if (isCarrinho) {
      aumentarQuantidade(res.sku);
      setProdutos(listarProdutos);
    } else {
      adicionarProduto(
        res.sku,
        res.nomeProduto,
        res.descricaoProduto,
        res.precoProduto,
        res.imagemProduto,
      );
      setProdutos(listarProdutos);
    }
  };
  function loadPopup() {
    setPopup(true);
    setTimeout(function () {
      setPopup(false);
    }, 1500);
  }

  const navigate = () => {
    navigation.navigate(pagOrigem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigate()}>
          <Icon
            name="left"
            size={25}
            color="#EE4249"
            style={styles.botaoVoltar}
          />
        </TouchableOpacity>
        <Text style={styles.tituloFavorito}>Detalhes do produto</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.imageLogoff}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxProduto}>
        <View style={styles.boxConteudo}>
          <View style={styles.boxImagem}>
            <Image
              style={{width: 175, height: 175}}
              source={{
                uri: res.imagemProduto,
              }}
            />
          </View>
          <View style={styles.boxInformacao}>
            <View style={styles.boxInfoCima}>
              <View style={styles.boxDescicao}>
                <Text style={styles.nomeProduto}>{res.nomeProduto}</Text>
                <Text style={styles.descricaoProduto}>
                  {res.descricaoProduto}
                </Text>
              </View>
              <Text style={styles.precoProduto}>R$ {res.precoProduto}</Text>
            </View>
            <View style={styles.boxInfoBaixo}>
              <TouchableOpacity
                onPress={() => {
                  handleAdicionarFavorito();
                  loadPopup();
                  isFavorito
                    ? setMessagePopup(e => 'Favorito retirado com sucesso')
                    : setMessagePopup(e => 'Item adicionado aos favoritos!');
                }}>
                {favoritoImage}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleAdicionarCarrinho();
                  loadPopup();
                  isCarrinho
                    ? setMessagePopup(
                        e => 'Adicionando mais uma unidade ao seu carrinho',
                      )
                    : setMessagePopup(e => 'Produto adicionado com sucesso');
                  setIsCarrinho(true);
                }}>
                <Image
                  source={require('../../assets/botaoAdicionar.png')}
                  style={styles.imageLogoff}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ButtonVoltarHome navigation={navigation} />
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
    flex: 1,
    backgroundColor: '#fff',
  },
  boxTitulo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  tituloFavorito: {
    fontSize: 23,
    fontWeight: '700',
  },
  botaoLogout: {
    paddingLeft: 160,
  },
  botaoVoltar: {
    paddingLeft: 10,
  },
  imageLogoff: {
    width: 40,
    height: 40,
    margin: 10,
  },
  boxProduto: {
    width: '100%',
    height: '79%',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
    flexDirection: 'row',
  },
  boxDescicao: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nomeProduto: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
  },
  descricaoProduto: {
    textAlign: 'center',
    color: 'grey',
    fontWeight: '500',
  },
  precoProduto: {
    fontSize: 21,
    fontWeight: '700',
    color: '#EE4249',
  },
  modal: {
    marginTop: 500,
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

export default DetalhesProduto;
