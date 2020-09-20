import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput, Surface } from 'react-native-paper';
import { style, inputTheme } from './appStyles';
import convertToSg from './convertToSg';

export default class CalculateAlc extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: false,
      og: false,
      fg: false,
      fermentationDegree: false,
    };
  }

  handleSubmit = () => {
    const { og, fg } = this.state;
    this.setState({
      formula: (
        ((76.08 * (convertToSg(og) - convertToSg(fg))) /
          (1.775 - convertToSg(og))) *
        (convertToSg(fg) / 0.794)
      ).toFixed(2),
      fermentationDegree:
        ((convertToSg(og) - convertToSg(fg)) / (convertToSg(og) - 1)) * 100,
    });
  };

  render() {
    const { formula, fermentationDegree, og, fg } = this.state;

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <View style={style.container}>
          <Image
            source={require('./assets/alcohol_icon.png')}
            style={style.imageStyle}
          />
          <Surface style={style.surface}>
            <Text style={style.header}>Oblicz zawartość alkoholu</Text>
          </Surface>
          <TextInput
            theme={inputTheme}
            label="Gęstość początkowa (BLG)"
            placeholder="np. 12"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ og: text });
            }}
            style={style.inputs}
          />
          <TextInput
            theme={inputTheme}
            label="Gęstość końcowa (BLG)"
            placeholder="np. 3"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ fg: text });
            }}
            style={style.inputs}
          />
          {/* Button disabled when inputs empty */}
          {!og || !fg ? (
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
              <Text style={style.formula}>{formula} %</Text>
            ) : (
              <Text style={style.formula}>
                <Text style={{ color: 'rgba(255,255,255,0.1)', fontSize: 12 }}>
                  {' '}
                  ? ABV - objętościowo ?
                </Text>
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
