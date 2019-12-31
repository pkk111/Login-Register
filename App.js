/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import ValidationComponent from 'react-native-form-validator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      email: '',
      number: '',
      register: true,
    };
    this.signin = this.signin.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
    this.state.email = this.__email._lastNativeText;
    this.state.password = this.__password._lastNativeText;
    if (this.state.email == undefined) this.state.email = '';
    if (this.state.password == undefined) this.state.password = '';
    this.validate({
      email: {required: true, email: true},
      password: {required: true, minlength: 3, maxlength: 12},
    });
    if (this.isFormValid()) {
      //Sign in Operation
      alert(
        'YourEmail is' +
          this.state.email +
          '\n Password is ' +
          this.state.password,
      );
    } else {
      alert(this.getErrorMessages());
    }
  }

  register() {
    this.setState((state, props) => {
      if (state.register) return (state.register = false);
      return (state.register = true);
    });
  }

  signin() {
    this.state.name = this._name._lastNativeText;
    this.state.username = this._username._lastNativeText;
    this.state.number = this._number._lastNativeText;
    this.state.email = this._email._lastNativeText;
    this.state.password = this._password._lastNativeText;
    if (this.state.name == undefined) this.state.name = '';
    if (this.state.username == undefined) this.state.username = '';
    if (this.state.number == undefined) this.state.number = '';
    if (this.state.email == undefined) this.state.email = '';
    if (this.state.password == undefined) this.state.password = '';
    this.validate({
      name: {name: true},
      username: {required: true},
      email: {email: true, required: true},
      password: {minlength: 3, maxlength: 7, required: true},
      number: {numbers: true},
    });
    if (this.isFormValid()) {
      //Sign in Operation
      alert(
        'YourEmail is' +
          this.state.email +
          '\n Password is ' +
          this.state.password,
      );
    } else {
      alert(this.getErrorMessages());
    }
  }

  render() {
    if (this.state.register) {
      return (
        <SafeAreaView style={styles.container}>
          <TextInput
            ref={input => (this.__email = input)}
            keyboardType="email-address"
            style={styles.inputfeild}
            placeholder="Email Address"
          />
          <TextInput
            ref={input => (this.__password = input)}
            style={styles.inputfeild}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Text
            style={styles.switcher}
            onPress={this.register}
            activeOpacity={0.5}
            suppressHighlighting={false}>
            Register
          </Text>
          <TouchableOpacity onPress={this.login}>
            <View style={styles.click}>
              <Text style={styles.buttonText}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          ref={input => (this._name = input)}
          keyboardType="ascii-capable"
          style={styles.inputfeild}
          placeholder="Name"
        />
        <TextInput
          ref={input => (this._username = input)}
          keyboardType="default"
          style={styles.inputfeild}
          placeholder="Username"
        />
        <TextInput
          ref={input => (this._email = input)}
          keyboardType="email-address"
          style={styles.inputfeild}
          placeholder="Email Address"
        />
        <TextInput
          ref={input => (this._number = input)}
          keyboardType="phone-pad"
          style={styles.inputfeild}
          placeholder="Contact Number"
        />
        <TextInput
          ref={input => (this._password = input)}
          style={styles.inputfeild}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Text
          style={styles.switcher}
          onPress={this.register}
          activeOpacity={0.5}
          suppressHighlighting={false}>
          Sign In
        </Text>
        <TouchableOpacity onPress={this.signin}>
          <View style={styles.click}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 5,
    backgroundColor: '#CCCCCC',
  },
  inputfeild: {
    fontSize: 28,
    margin: 10,
    borderBottomWidth: 2,
    borderColor: 'black',
    padding: 5,
    borderBottomColor: 'grey',
  },
  click: {
    marginHorizontal: 30,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderStartColor: '#666',
    borderStartWidth: 3,
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
  switcher: {
    marginHorizontal: 40,
    alignSelf: 'flex-end',
    fontSize: 18,
    fontStyle: 'italic',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default App;
