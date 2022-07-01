/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { Text, Input, Icon, Image, Card } from 'react-native-elements';

const CadastroCliente = ({navigation}) => {

  return (   
      <View>
        <View style={styles.container}>
          <Text >Complete seu cadastro para fazer o pedido</Text>
        </View>
      </View>           
  );
};

export const styles = StyleSheet.create({
  container: {
      marginTop: 60,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default CadastroCliente;