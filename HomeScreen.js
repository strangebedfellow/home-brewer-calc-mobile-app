import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Surface, Card, Title, Paragraph } from 'react-native-paper';
import { style } from './appStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Card style={style.cardStyle}>
        <Card.Content style={{ alignItems: 'center', color: 'white' }}>
          <Title
            style={{
              color: 'white',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}>
            Witaj piwowarze domowy!
          </Title>
          <Paragraph
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'monospace',
            }}>
            Poniżej znajdziesz przydatne kalkulatory oraz przeliczniki,
            niezbędne w procesie warzenia piwa domowego.
          </Paragraph>
        </Card.Content>
      </Card>
      <TouchableOpacity
        onPress={() => navigation.navigate('REFRAKTOMETR')}
        style={style.surface}
        activeOpacity={0.75}>
        <Text style={style.header}>
          <Text>Korekta odczytu refraktometru</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('GĘSTOŚĆ')}
        style={style.surface}
        activeOpacity={0.75}>
        <Text style={style.header}>
          <Text>Korekta gęstości brzeczki</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ALKOHOL')}
        style={style.surface}
        activeOpacity={0.75}>
        <Text style={style.header}>
          <Text>Oblicz zawartość alkoholu</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
