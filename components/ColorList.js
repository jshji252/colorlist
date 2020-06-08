import React from 'react';
import {View, StyleSheet, FlatList, AsyncStorage} from 'react-native';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
import PropTypes from 'prop-types';

export default class ColorList extends React.Component {
  constructor(props) {
    super(props);
    const availableColors = [];
    this.state = {
      //   backgroundColor: 'blue',
      availableColors,
    };
    // this.changeColor = this.changeColor.bind(this);
    this.newColor = this.newColor.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('@ColorListStore:Colors', (err, data) => {
      if (err) {
        console.error('Error loading colors:', err);
      } else {
        const availableColors = JSON.parse(data);
        this.setState({
          availableColors,
        });
      }
    });
  }
  saveColors(colors) {
    //first arg: storage, 2nd: data, in JSON string
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors)); //works Globally
  }

  //   changeColor(backgroundColor) {
  //     this.setState({backgroundColor});
  //   }

  newColor(color) {
    const availableColors = [...this.state.availableColors, color];
    this.setState({
      availableColors,
    });
    this.saveColors(availableColors);
  }
  render() {
    const {navigate} = this.props.navigation;
    const {backgroundColor} = this.state;
    return (
      <>
        <ColorForm onNewColor={this.newColor} />
        <View style={[styles.containerMain, {backgroundColor}]}>
          <FlatList
            data={this.state.availableColors}
            renderItem={({item}) => (
              <ColorButton
                backgroundColor={item}
                onSelect={() => navigate('Details', {color: item})}
              />
            )}
          />
        </View>
      </>
    );
  }
}

//setting basic function just in case
ColorList.defaultProps = {
  onColorSelected: (f) => f,
};
//type validation
ColorList.propTypes = {
  onColorSelected: PropTypes.func,
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: 10,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
