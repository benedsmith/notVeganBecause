import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Block, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';
import theme from './src/theme';

const { width } = Dimensions.get('screen');

export default function App() {
  return (
    <View style={styles.container}>
    <Block center >
        <Block>
          <Text h1>Alternati(Ve)s</Text>
          <Text muted h3>Working title.</Text>
        </Block>
        <Block
        card
        style={[styles.card, styles.standardMargin, styles.standardPadding]}>
          <Text>We get it. Changing your diet isn't easy. We often hear 'I'm not vegan because I like Chicken too much'.</Text>
          <Text>Alternati(Ve)s was made to showcase nutritional plant-based alternatives to common meat products that are 'sticking points' to a plant-based diet. It's not all-or-nothing with plant-based diets, even a couple of meals a week can make a huge difference.</Text>
        </Block>
        <Button
        color={theme.COLORS.BLACK}
        shadowless>
        Get Started
        </Button>
    </Block>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBBB01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  standardPadding: {
    padding: theme.SIZES.BASE / 2,
  },
  standardMargin: {
    margin: theme.SIZES.BASE / 2,
  },
});
