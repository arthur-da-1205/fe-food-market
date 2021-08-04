import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

import {EmptyOrderLogo} from '../../../assets';
import {Button, Space} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pageContainer}>
      <EmptyOrderLogo />
      <Space height={32} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Space height={6} />
      <Text style={styles.subtitle}>
        Seems like you have not ordered any food yet. Let's find some foods
      </Text>
      <Space height={30} />
      <View style={styles.btnContainer}>
        <Button
          textButton="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btnContainer: {width: '100%'},
});
