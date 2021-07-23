import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, InputField, Space} from '../../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Space height={16} />
      <View style={styles.container}>
        <InputField
          label="Email Address"
          placeholder="Type your email address"
        />
        <Space height={24} />
        <InputField label="Password" placeholder="Type your password" />
        <Space height={24} />
        <Button textButton="Sign In" />
        <Space height={12} />
        <Button
          textButton="Create New Account"
          buttonColor="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    flex: 1,
  },
  page: {flex: 1},
});
