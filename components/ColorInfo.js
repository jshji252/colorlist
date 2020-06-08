import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ColorTools from 'color';

const ColorInfo = ({route}) => {
  const color = ColorTools(route.params.color);
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={[styles.text, {color: color.negate()}]}>{color.hex()}</Text>
      <Text style={[styles.text, {color: color.negate()}]}>
        {color.rgb().string()}
      </Text>
      <Text style={[styles.text, {color: color.negate()}]}>
        {color.hsl().string()}
      </Text>
    </View>
  );
};

ColorInfo.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.color,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '800',
    margin: 10,
  },
});

export default ColorInfo;
