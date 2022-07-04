import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import CardProduto from '../../components/CardProduto';
import Icon2 from 'react-native-vector-icons/AntDesign'
import ButtonVoltarHome from '../../components/buttonVoltarHome';
import { AxiosInstance } from '../../api/AxiosInstance';
import { AuthContext } from '../../context/AuthContext';
import { ProdutoType } from '../../models/ProdutoType';

const Produtos = ({ navigation }) => {

  const numColums = 3;
  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const [pagina, setPagina] = useState(0);
  const quantidade = 9;
  const [search, setSearch] = useState('');
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fimLista, setFimLista] = useState(false);

  const getDadosProduto = async () => {
    AxiosInstance.get(
      `/produto?pagina=${pagina}&qtdRegistros=${quantidade}`,
      { headers: { "Authorization": `Bearer ${user.token}` } }
    ).then(result => {
      setProduto(result.data);
      setPagina(pagina + 1);
      setLoading(false);
    }).catch((error) => {
      console.log("Erro ao carregtar a lista de produtos - " + JSON.stringify(error))
      setLoading(false);
      setFimLista(true);
    })
  }

  const getDadosProdutoBusca = async () => {
    AxiosInstance.get(
      `/produto/busca?keyword=${search}`,
      { headers: { "Authorization": `Bearer ${user.token}` } }
    ).then(result => {
      setProduto(result.data);
    }).catch((error) => {
      console.log("Erro ao carregtar a lista de produtos - " + JSON.stringify(error))
    })
  }

  const pesquisarProduto = (search: string) => {
    if (search !== '') {
      getDadosProdutoBusca();
    } else {
      getDadosProduto();
    }
  }

  const loadApi = async () => {
    if (loading) return;
    setLoading(true);
    getDadosProduto();
    ;
  }

  useEffect(() => {
    pesquisarProduto(search);
  }, [search])

  useEffect(() => {
    loadApi();
  }, []);

  useEffect(() => {
    if (fimLista) {
      navigation.navigate('ListaProdutosFim');
    }
  }, [fimLista]);

  return (
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon2 name='left' size={25} color='#EE4249' style={styles.botaoVoltar} />
        </TouchableOpacity>
        <Text style={styles.tituloFavorito}>Produtos</Text>
        <TouchableOpacity style={styles.logoff} onPress={() => console.log('Logoff')}>
          <Image source={require('../../assets/logout.png')} style={styles.imageLogoff} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBox}>
        <Input
          placeholder="Digite o nome de um produto"
          onChangeText={setSearch}
          inputContainerStyle={styles.inputContainer}
          value={search}
          rightIcon={
            <Icon
              name="search"
              color="#EE4249"
              type="font-awesome"
              size={20}
              containerStyle={styles.iconContainer}
              tvParallaxProperties={undefined}
            />
          }
        />
      </View>
      {loading && !fimLista ?
        <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />
        : <FlatList
          data={produto}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 150 }}
          numColumns={numColums}
          renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('DetalhesProduto', { res: item, pagOrigem: 'Produtos' })}>
            <CardProduto produto={item} />
          </TouchableOpacity>}
          onEndReached={loadApi}
        />
      }
      <ButtonVoltarHome navigation={navigation} />
    </View>
  );
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
    marginHorizontal: 10
  },
  tituloFavorito: {
    fontSize: 26,
    fontWeight: '700',
  },
  botaoLogout: {
    paddingLeft: 160
  },
  botaoVoltar: {
    paddingLeft: 10
  },
  logoff: {

  },
  imageLogoff: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  searchBox: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: -10
  },
  inputContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    height: 50
  },
  iconContainer: {
    paddingRight: 10
  },
});

export default Produtos;