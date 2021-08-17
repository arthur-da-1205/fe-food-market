import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, hideMessage} from 'react-native-flash-message';

import {Button, Header, InputField, Select, Space} from '../../../components';
import {useForm} from '../../../utils';

const SIgnUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Surabaya',
  });

  const dispatch = useDispatch();

  const registerReducer = useSelector(state => state.registerReducer);

  const toastMessage = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
  };

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch({type: 'SET_LOADING', value: true});
    console.log('form', data);
    axios
      .post('http://167.172.70.208:8082/api/register', data)
      .then(res => {
        console.log('Success: ', res.data);
        dispatch({type: 'SET_LOADING', value: false});
        toastMessage('Success Register', 'success');
        navigation.replace('SignUpSuccess');
      })
      .catch(err => {
        console.log('Failed', err.response.data.message);
        dispatch({type: 'SET_LOADING', value: false});
        toastMessage(err?.response?.data?.message);
      });
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
