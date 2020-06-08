import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const WebPage = ({route}) => (
  <WebView
    style={styles.container}
    source={{uri: route.params.uri}}
    contentInset={{top: -650}}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebPage;
