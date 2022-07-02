import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text } from 'react-native-elements';

const CardCategoria = ({ navigation, categoria }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../../assets/img.png')}
        style={styles.image}
      />
      <Text style={styles.text}>nomeCategoria</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25
  },
  image: {
    borderRadius: 10,
    height: 116,
    width: 370,
  },
  text: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CardCategoria;
