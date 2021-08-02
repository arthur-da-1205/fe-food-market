import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {FoodDummy, IconBackWhite} from '../../../assets';
import {Button, Counter, Rating} from '../../../components';

const FoodDetail = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={FoodDummy}
        style={{height: 330, paddingTop: 26, paddingLeft: 22}}>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginTop: -40,
          paddingTop: 26,
          paddingHorizontal: 16,
          flex: 1,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 14,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                  color: '#020202',
                }}>
                Food Name
              </Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#8D92A3',
              marginBottom: 16,
            }}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#020202',
              marginBottom: 4,
            }}>
            Ingredients:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#8D92A3',
              marginBottom: 16,
            }}>
            Seledri, Sayur, Daging dan Keju
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Poppins-Regular',
                color: '#8D92A3',
              }}>
              Label Price
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
                color: '#020202',
              }}>
              Rp. xxx.xxx.xxx
            </Text>
          </View>
          <View style={{width: 163}}>
            <Button textButton="Order Now" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({});
