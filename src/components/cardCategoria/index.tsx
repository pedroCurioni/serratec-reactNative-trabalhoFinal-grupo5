import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { CategoriaContext } from '../../context/CategoriaContext';

const CardCategoria = (props: any) => {

  const [nomeImagem, setNomeImagem] = useState(props.categoria.nomeImagem)
  const { handleCategoria } = useContext(CategoriaContext);

  const handlePress = () => {
    handleCategoria(props.categoria)
    props.navigation.navigate('Categoria')
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{ uri: nomeImagem }}
        style={styles.image}
      />
      <Text style={styles.text}>{props.categoria.nomeCategoria}</Text>
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
