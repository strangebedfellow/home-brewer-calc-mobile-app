import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput, Surface } from 'react-native-paper';
import convertToPlato from './convertToPlato';
import { style, inputTheme } from './appStyles';

export default class Refractometer extends React.Component {
  constructor() {
    super();
    this.state = {
      ob: false,
      fb: false,
      formula: false,
    };
  }

  handleSubmit = () => {
    const { ob, fb } = this.state;
    this.setState({
      formula: convertToPlato(
        (
          1.0 -
          (0.0044993 * ob) / 1.04 +
          (0.011774 * fb) / 1.04 +
          0.00027581 * Math.pow(ob / 1.04, 2) -
          0.0012717 * Math.pow(fb / 1.04, 2) -
          0.00000728 * Math.pow(ob / 1.04, 3) +
          0.000063293 * Math.pow(fb / 1.04, 3)
        ).toFixed(4)
      ),
    });
  };

  render() {
    const { formula, ob, fb } = this.state;

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <View style={style.container}>
          <Image
            source={require('./assets/refractometer_icon.png')}
            style={style.imageStyle}
          />
          <Surface style={style.surface}>
            <Text style={style.header}>Korekta odczytu refraktometru</Text>
          </Surface>
          <TextInput
            theme={inputTheme}
            label="Gęstość początkowa (BRIX)"
            placeholder="np. 12"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ ob: text });
            }}
            style={style.inputs}
          />
          <TextInput
            theme={inputTheme}
            label="Gęstość końcowa (BRIX)"
            placeholder="np. 5"
            keyboardType="numeric"
            mode="outlined"
            onChangeText={(text) => {
              this.setState({ fb: text });
            }}
            style={style.inputs}
          />
          {/* Button disabled when inputs empty */}
          {!ob || !fb ? (
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
              <Text style={style.formula}>{formula} BLG</Text>
            ) : (
              <Text style={style.formula}>
                <Text style={{ color: 'rgba(255,255,255,0.1)' }}> ? BLG ?</Text>
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
