import axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Header, InputField, Space} from '../../../components';
import {useForm} from '../../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
    axios
      .post('http://167.172.70.208:8082/api/login', form)
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('failed', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Space height={16} />
      <View style={styles.container}>
        <InputField
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Space height={24} />
        <InputField
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Space height={24} />
        <Button textButton="Sign In" onPress={onSubmit} />
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
