import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const buttonVoltarHome = ({ navigation }) => {
  return (
    <Button
      buttonStyle={styles.button}
      title="Voltar"
      titleStyle={styles.buttonTitle}
      onPress={() => { navigation.navigate('Home') }}
    />
  )
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EE4249',
    padding: 10,
    height: 72,
    width: '100%'
  },
  buttonTitle: {
    fontSize: 20
  }
});

export default buttonVoltarHome;