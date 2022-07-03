import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

const ValorCarrinho = ({navigation, valorTotal}) => {
  return (
    <View>
      <Text style={styles.subtitulo}>Resumo dos valores</Text>
      <View style={styles.valoresContainer}>
        <Text></Text>
        <View style={styles.freteContainer}>
          <Text style={styles.freteText}>Taxa de entrega</Text>
          <Text style={styles.freteValor}>R$ 9.00</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalValor}>R$ {valorTotal + 9}</Text>
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
    marginBottom: 45,
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
  flatListStyle: {},
  valoresContainer: {
    marginHorizontal: 25,
    marginBottom: 50,
  },
  freteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  freteText: {
    width: '49%',
    fontSize: 16,
    color: '#333',
  },
  freteValor: {
    width: '49%',
    fontSize: 16,
    textAlign: 'right',
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
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
    color: '#000',
  },
  totalValor: {
    width: '49%',
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#000',
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
    width: 300,
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

export default ValorCarrinho;
