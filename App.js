// import 'react-native-gesture-handler';
import React from 'react';
// import {Alert} from 'react-native';
import {} from 'react-native';
import ColorList from './components/ColorList';
import ColorInfo from './components/ColorInfo';
import WebPage from './components/WebPage';
import ProductPage from './components/ProductPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// class App extends React.Component {
//   render() {
//     return <ColorList onColorSelected={(color) => Alert.alert(color)} />;
//   }
// }

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ColorList}
          options={{title: 'Available Colors'}}
        />
        <Stack.Screen
          name="Details"
          component={ColorInfo}
          options={({route}) => ({title: route.params.color})}
        />
        <Stack.Screen
          name="Web"
          component={WebPage}
          options={{title: 'All Colours'}}
        />
        <Stack.Screen
          name="Products"
          component={ProductPage}
          options={{title: 'All Products'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
