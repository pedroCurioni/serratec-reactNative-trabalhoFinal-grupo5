import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardCarrinho = (props: any) => {
  const [quantidade, setQuantidade] = useState(0);

  const handleAdicionarQuantidade = () => {
    let novaQuantidade = quantidade + 1;
    setQuantidade(novaQuantidade);
  };
  const handleDiminuirQuantidade = () => {
    if (quantidade == 1) {
      console.log('Remover Item');
    } else {
      let novaQuantidade = quantidade - 1;
      setQuantidade(novaQuantidade);
    }
  };

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
        <Text style={styles.preco}>R$ {props.produto.preco}</Text>
      </View>
      <View style={styles.quantidadeContainer}>
        <TouchableOpacity>
          {quantidade > 1 ? (
            <Icon
              name="minus-circle-outline"
              type="material-community"
              size={22}
              color="#EE4249"
              onPress={() => handleDiminuirQuantidade()}
            />
          ) : (
            <Icon
              name="delete"
              size={22}
              color="#EE4249"
              onPress={() => handleDiminuirQuantidade()}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.quantidadeText}>{quantidade}</Text>
        <TouchableOpacity>
          <Icon
            name="plus-circle-outline"
            type="material-community"
            size={22}
            color="#EE4249"
            onPress={() => handleAdicionarQuantidade()}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 30,
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
