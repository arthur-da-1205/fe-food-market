import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SuccessSignUpLogo} from '../../../assets';
import {Button, Space} from '../../../components';

const SignUpSuccess = () => {
  return (
    <View style={styles.pageContainer}>
      <SuccessSignUpLogo />
      <Space height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Space height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some food as a self reward</Text>
      <Space height={30} />
      <View style={styles.buttonCOntainer}>
        <Button textButton="Find Foods" />
      </View>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  pageContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subtitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonCOntainer: {width: '100%', paddingHorizontal: 70},
});
