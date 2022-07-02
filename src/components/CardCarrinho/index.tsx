import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardCarrinho = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: props.produto.imagem,
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nome}>{props.produto.nome}</Text>
        <Text style={styles.descricao}>{props.produto.descricao}</Text>
        <Text style={styles.preco}>{props.produto.preco}</Text>
      </View>
      <View style={styles.quantidadeContainer}>
        <TouchableOpacity>
          <Icon name="delete" size={22} color="#EE4249" />
        </TouchableOpacity>
        <Text style={styles.quantidadeText}>2</Text>
        <TouchableOpacity>
          <Icon name="pluscircle" type="antdesign" size={22} color="#EE4249" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  textContainer: {
    width: '45%',
    marginLeft: 25,
    justifyContent: 'center',
  },
  nome: {
    fontWeight: 'normal',
  },
  descricao: {
    marginTop: 1,
    color: '#757575',
    fontWeight: '100',
  },
  preco: {
    marginTop: 15,
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidadeText: {
    marginHorizontal: 15,
    color: '#EE4249',
  },
});

export default CardCarrinho;
