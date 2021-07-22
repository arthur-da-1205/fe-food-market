import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header, InputField, Space} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Register and Eat" onBack={() => {}} />
      <Space height={16} />
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View style={styles.photoBorder}>
            <View style={styles.photo}>
              <Text style={styles.textPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <InputField label="Full Name" placeholder="Type your full name" />
        <Space height={24} />
        <InputField
          label="Email Address"
          placeholder="Type your email address"
        />
        <Space height={24} />
        <InputField label="Password" placeholder="Type your password" />
        <Space height={24} />
        <Button
          textButton="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    flex: 1,
  },
  page: {flex: 1},
  photoContainer: {alignItems: 'center', marginTop: 16, marginBottom: 24},
  photoBorder: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    height: 110,
    width: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: 90,
    width: 90,
    borderRadius: 90,
    padding: 24,
    backgroundColor: '#F0F0F0',
  },
  textPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
