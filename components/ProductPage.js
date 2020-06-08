import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productImages: [],
      fetching: false,
    };
  }
  componentDidMount() {
    this.setState({fetching: true});
    fetch('http://hplussport.com/api/products.php')
      .then((response) => response.json())
      .then((products) => products.map((product) => product.image))
      .then((productImages) => this.setState({productImages, fetching: false}))
      .catch((err) => console.error('error fetching products', err));
    //success - then; fail - catch;
  }

  render() {
    return (
      <ScrollView horizontal={true}>
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          animating={this.state.fetching}
        />
        {this.state.productImages.map((uri, i) => (
          <Image style={styles.thumb} key={i} source={{uri}} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  thumb: {
    width: 375,
    resizeMode: 'cover',
  },
});
