import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../../assets';

const HomeHeader = () => {
  return (
    <View style={styles.appNameContainer}>
      <View>
        <Text style={styles.title}>Food Market</Text>
        <Text style={styles.subtitle}>Let's get some food!</Text>
      </View>
      <Image source={ProfileDummy} style={styles.photo} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  appNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  photo: {
    borderRadius: 8,
    height: 50,
    width: 50,
  },
});
