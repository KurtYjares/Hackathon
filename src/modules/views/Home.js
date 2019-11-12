import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
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
        <View style={styles.inputContainer}>
          <TextInput
            value={title}
            placeholder="Title of the book"
            style={styles.textInput}
            onChangeText={value => this.setState({title: value})}
          />
          <TextInput
            value={author}
            placeholder="Name of the Author"
            style={styles.textInput}
            onChangeText={value => this.setState({author: value})}
          />
          <Button
            onPress={() => {
              Alert.alert('Pushed to database');
              firebase
                .firestore()
                .collection('books')
                .doc()
                .set({
                  title: this.state.title,
                  author: this.state.author,
                });
            }}
            title="Add the book"
            color="#841584"
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SecondScreen');
            }}>
            <Text style={{marginTop: '20%', textAlign: 'center'}}>
              Press Me
            </Text>
          </TouchableOpacity>
        </View>
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
    height: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 13,
    borderWidth: 1,
    borderBottomColor: '#111111',
  },
});
