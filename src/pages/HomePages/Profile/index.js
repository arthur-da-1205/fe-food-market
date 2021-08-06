import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {ProfileTabSection, Space} from '../../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.photoContainer}>
        <View style={styles.photoBorder}>
          <Image source={ProfileDummy} style={styles.photo} />
        </View>
        <Space height={16} />
        <Text style={styles.text}>Nama User</Text>
        <Space height={6} />
        <Text style={styles.email}>User@user.com</Text>
      </View>
      <Space height={24} />
      <ProfileTabSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  photoContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 46,

    marginBottom: 24,
  },
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
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    paddingBottom: 26,
  },
});
