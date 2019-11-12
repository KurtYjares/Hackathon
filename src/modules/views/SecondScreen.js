import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class Home extends Component {
  state = {
    title: '',
    author: '',
  };

  render() {
    const {title, author} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text>owo</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    margin: 30,
  },
  textInput: {
    height: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: '#111111',
  },
});
