import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SuccessOrderLogo} from '../../../assets';
import {Button, Space} from '../../../components';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <SuccessOrderLogo />
      <Space height={32} />
      <Text style={styles.title}>You've Made Order</Text>
      <Space height={6} />
      <Text style={styles.subtitle}>
        Just stay at home while we are preparing your best foods
      </Text>
      <Space height={30} />
      <View style={styles.btnContainer}>
        <Button
          textButton="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
        <Space height={12} />
        <Button
          textButton="View My Order"
          buttonColor="#8D92A3"
          onPress={() => navigation.navigate('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

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
