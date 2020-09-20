import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput, Surface } from 'react-native-paper';
import { style, inputTheme } from './appStyles';

export default class Dilution extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: false,
      worthVolume: false,
      currentGravity: false,
      targetGravity: false,
    };
  }

  handleSubmit = () => {
    const { worthVolume, currentGravity, targetGravity } = this.state;
    this.setState({
      formula: (
        (worthVolume * currentGravity) / targetGravity -
        worthVolume
      ).toFixed(2),
    });
  };

  render() {
    const { formula, worthVolume, currentGravity, targetGravity } = this.state;

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
       <View style={style.container}>
          <Image
            source={require('./assets/dilution_icon.png')}
            style={style.imageStyle}
          />
          <Surface style={style.surface}>
            <Text style={style.header}>Korekta gęstości brzeczki</Text>
          </Surface>
          <TextInput
            theme={inputTheme}
            label="Ilość brzeczki (L)"
            placeholder="np. 20"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ worthVolume: text });
            }}
            style={style.inputs}
          />
          <TextInput
            theme={inputTheme}
            label="Obecna gęstość (BLG)"
            placeholder="np. 16"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ currentGravity: text });
            }}
            style={style.inputs}
          />
          <TextInput
            theme={inputTheme}
            label="Oczekiwana gęstość (BLG)"
            placeholder="np. 12"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ targetGravity: text });
            }}
            style={style.inputs}
          />
          {/* Button disabled when inputs empty */}
          {!worthVolume || !currentGravity || !targetGravity ? (
            <Button
              disabled="true"
              title="Oblicz"
              onPress={this.handleSubmit}
            />
          ) : (
            <Button title="Oblicz" onPress={this.handleSubmit} />
          )}
          <View style={style.sqStyle}>
            {formula ? (
              <Text style={style.formula}>{formula} L</Text>
            ) : (
              <Text style={style.formula}>
                <Text style={{ color: 'rgba(255,255,255,0.1)', fontSize: 12 }}>
                  ? Ilość wody do dolania ?
                </Text>
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
