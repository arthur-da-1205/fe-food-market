import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  textButton,
  buttonColor = '#FFC700',
  textColor = '#020202',
}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle(buttonColor)}>
      <Text style={styles.buttonLabel(textColor)}>{textButton}</Text>
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
