import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { Text, Input, Icon, Image, Card } from 'react-native-elements';
import { AxiosInstance } from '../../api/AxiosInstance';
import { AuthContext } from '../../context/AuthContext'

const Perfil = ({navigation}) => {

    return (   
      <View style={styles.container}>
        <Text style={styles.text}>Perfil</Text> 
      </View>         
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#000',
        marginLeft: 15
    },
});

export default Perfil;