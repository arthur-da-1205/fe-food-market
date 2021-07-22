import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  textButton,
  buttonColor = '#FFC700',
  textColor = '#020202',
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.buttonStyle(buttonColor)}>
        <Text style={styles.buttonLabel(textColor)}>{textButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonLabel: textColor => ({
    textAlign: 'center',
    color: textColor,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  }),
  buttonStyle: buttonColor => ({
    backgroundColor: buttonColor,
    borderRadius: 30,
    padding: 12,
  }),
});
