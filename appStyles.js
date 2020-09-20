import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#282828',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'rgba(32, 137, 220, 0.8)',
  },
  inputs: {
    marginBottom: 10,
    fontSize: 15,
    width: '65%',
  },
  surface: {
    marginBottom: 20,
    backgroundColor: '#282828',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(32, 137, 220, 0.2)',
    width: '95%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formula: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(32, 137, 220, 0.8)',
    alignItems: 'center',
  },
  sqStyle: {
    width: '75%',
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'rgba(32, 137, 220, 0.2)',
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 0,
    backgroundColor: '#282828',
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    height: 150,
    width: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 20,
  },
});

export const inputTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2089dc',
    background: '#282828',
    placeholder: '#eaeaea',
    text: '#eaeaea',
  },
};
