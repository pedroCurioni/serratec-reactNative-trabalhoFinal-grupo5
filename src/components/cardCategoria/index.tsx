import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image, Text} from 'react-native-elements';

const CardCategoria = ({navigation, categoria}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/congelados.png')}
        style={styles.image}
      />
      <Text style={styles.text}>nomeCategoria</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 116,
    width: 350,
  },
  text: {
    textAlign: 'center',
  },
});

export default CardCategoria;
