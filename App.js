import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import Refractometer from './Refractometer';
import Dilution from './Dilution';
import CalculateAlc from './CalculateAlc';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HOME BREWER CALCULATOR"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Icon name="ios-beer" type="ionicon" color="#fff" />
            ),
            headerLeftContainerStyle: {
              marginLeft: 10,
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2089dc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 12
            },
          }}
        />
        <Stack.Screen
          name="REFRAKTOMETR"
          component={Refractometer}
          options={{
            headerBackImage: () => (
              <Icon name="back" type="entypo" color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#2089dc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="GĘSTOŚĆ"
          component={Dilution}
          options={{
            headerBackImage: () => (
              <Icon name="back" type="entypo" color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#2089dc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ALKOHOL"
          component={CalculateAlc}
          options={{
            headerBackImage: () => (
              <Icon name="back" type="entypo" color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#2089dc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
