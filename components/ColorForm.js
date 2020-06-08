import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Keyboard} from 'react-native';

export default class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtColor: '',
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    this.props.onNewColor(this.state.txtColor.toLowerCase());
    this.setState({txtColor: ''});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your favourite color"
          onChangeText={(txtColor) => this.setState({txtColor})}
          value={this.state.txtColor}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Text style={styles.button} onPress={this.submit}>
            Add
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// ColorForm.propTypes = {
//   onNewColor: React.PropTypes.func.isRequired,
// };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    paddingTop: 20,
    height: 70,
    justifyContent: 'center',
  },
  txtInput: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'snow',
  },
  button: {
    backgroundColor: 'darkblue',
    margin: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },
});
