import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Text } from 'react-native-elements';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import CardsFavoritos from '../../components/CardProduto';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonVoltarHome from '../../components/buttonVoltarHome';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import Produtos from '../Produtos';
import { FavoritosContext } from '../../context/FavoritosContext';
import Favoritos from '../Favoritos';

const DetalhesProduto = ({ route, navigation }) => {
  const { res, pagOrigem } = route.params;
  const [favoritoImage, setFavoritoImage] = useState(<></>);
  const [isFavorito, setIsFavorito] = useState(false);
  const { adicionarProduto, setProdutos, listarProdutos } =
    useContext(CarrinhoContext);
  const {
    adicionarFavorito,
    setFavoritos,
    listarFavoritos,
    favoritos,
    removerItemFavoritos,
  } = useContext(FavoritosContext);

  useEffect(() => {
    let contem = null;
    favoritos.forEach(item =>
      item.nomeProduto === res.nomeProduto ? (contem = item) : null,
    );
    if (contem === null) {
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
      navigation.navigate(pagOrigem);
      removerItemFavoritos(res.idProduto);
      setFavoritos(listarFavoritos);
      setIsFavorito(false);
      setFavoritoImage(
        <Image
          source={require('../../assets/coracaoVazio.png')}
          style={styles.imageLogoff}
        />,
      );
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
              style={{ width: 175, height: 175 }}
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
              <TouchableOpacity onPress={() => handleAdicionarFavorito()}>
                {favoritoImage}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  adicionarProduto(
                    res.sku,
                    res.nomeProduto,
                    res.descricaoProduto,
                    res.precoProduto,
                    res.imagemProduto,
                  );
                  setProdutos(listarProdutos);
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
});

export default DetalhesProduto;
