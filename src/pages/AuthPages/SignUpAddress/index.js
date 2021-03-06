import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Header, InputField, Select, Space} from '../../../components';
import {signUpAction} from '../../../redux/action/auth';
import {setLoading} from '../../../redux/action/global';
import {useForm} from '../../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Surabaya',
  });

  const dispatch = useDispatch();

  const {registerReducer, photoReducer} = useSelector(state => state);
  console.log('P= ', photoReducer);
  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch(setLoading(true));
    console.log('form', data);
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it's valid"
          onBack={() => {}}
        />
        <Space height={16} />
        <View style={styles.container}>
          <InputField
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Space height={24} />
          <InputField
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Space height={24} />
          <InputField
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Space height={24} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Space height={32} />
          <Button textButton="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
