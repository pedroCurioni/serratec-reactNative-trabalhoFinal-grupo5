import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

const FavoritosVazio = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Icon
          name="alert"
          color="#e05456"
          type="material-community"
          size={100}
          tvParallaxProperties={undefined}
        />
        <Text style={styles.circleText}>Seus favoritos estão vazios</Text>
      </View>
      <Text style={styles.text}>
        Naveguer por nossa loja {'\n'}e encontre os melhores produtos
        disponiveis
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Voltar para a loja"
        titleStyle={styles.buttonTitle}
        onPress={() => {
          navigation.navigate('HomeTabScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE4249',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10000,
    width: 300,
    height: 300,
  },
  circleText: {
    textAlign: 'center',
    color: '#EE4249',
    fontSize: 30,
    fontWeight: 'bold',
  },
  containerButtons: {
    alignItems: 'center',
  },
  text: {
    margin: 10,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#ffffff',
  },
  buttonTitle: {
    color: '#EE4249',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoritosVazio;
