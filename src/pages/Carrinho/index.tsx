import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useEvent} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import CardCarrinho from '../../components/CardCarrinho';
import Separador from '../../components/Separador';
const Carrinho = ({navigation}) => {
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    let novoValor = 0;
    produtos.forEach(res => {
      novoValor += res.preco;
    });
    setValorTotal(novoValor);
  }, []);

  const produtos = [
    {
      id: '0',
      preco: 11.99,
      nome: 'Sorvete',
      descricao: 'Unidade 900ml',
      imagem: 'https://i.imgur.com/mJL5hao.png',
    },
    {
      id: '1',
      preco: 25.99,
      nome: 'Energético Monster',
      descricao: 'Unidade 900ml',
      imagem: 'https://i.imgur.com/SwWp69v.png',
    },
    {
      id: '2',
      preco: 20.99,
      nome: 'Skol',
      descricao: 'Unidade 900ml',
      imagem: 'https://i.imgur.com/Z83tdHE.png',
    },
    {
      id: '3',
      preco: 20.99,
      nome: 'Pizza Mussarela',
      descricao: '1 unidade',
      imagem: 'https://i.imgur.com/LEDrUlQ.png',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitulo}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('HomeTabScreen')}>
          <Icon name="left" size={25} color="#EE4249" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Carrinho</Text>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('Login')}>
          <Icon name="logout" size={25} color="#EE4249" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitulo}>Items</Text>

      <View style={styles.itemsContainer}>
        <FlatList
          data={produtos}
          renderItem={({item}) => (
            <CardCarrinho navigation={navigation} produto={item} />
          )}
          ItemSeparatorComponent={Divider}
        />
      </View>
      <Text style={styles.subtitulo}>Resumo dos valores</Text>
      <View style={styles.valoresContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalValor}>R$ {valorTotal}</Text>
        </View>
      </View>

      <View style={styles.containerButtons}>
        <Button
          buttonStyle={styles.button}
          title="Continuar Comprando"
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('HomeTabScreen')}
        />
        <Button
          buttonStyle={styles.button}
          title="Finalizar Pedido"
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('PedidoFinalizado')}
        />
      </View>
    </ScrollView>
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
    marginBottom: 45,
    marginTop: 20,
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
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    marginHorizontal: 20,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemsContainer: {
    marginHorizontal: 24,
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
});

export default Carrinho;
