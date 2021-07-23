import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header, InputField, Select, Space} from '../../../components';

const SIgnUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's valid"
        onBack={() => {}}
      />
      <Space height={16} />
      <View style={styles.container}>
        <InputField label="Phone No." placeholder="Type your phone number" />
        <Space height={24} />
        <InputField label="Address" placeholder="Type your address" />
        <Space height={24} />
        <InputField label="House No." placeholder="Type your house number" />
        <Space height={24} />
        <Select />
        <Space height={32} />
        <Button
          textButton="Sign Up Now"
          onPress={() => navigation.replace('SignUpSuccess')}
        />
      </View>
    </View>
  );
};

export default SIgnUpAddress;

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
});
