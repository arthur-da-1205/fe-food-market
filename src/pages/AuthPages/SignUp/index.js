import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import {Button, Header, InputField, Space} from '../../../components';
import {useForm} from '../../../utils';

const SignUp = ({navigation}) => {
  // const globalState = useSelector(state => state.globalReducer);
  // console.log('global: ', globalState);

  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

  const addPhoto = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('Response= ', response);

      if (response.didCancel || response.error) {
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign Up" subTitle="Register and Eat" onBack={() => {}} />
        <Space height={16} />
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.photoContainer}>
              <View style={styles.photoBorder}>
                <View style={styles.photo}>
                  <Text style={styles.textPhoto}>Add Photo</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <InputField
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Space height={24} />
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
          <Button textButton="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
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
