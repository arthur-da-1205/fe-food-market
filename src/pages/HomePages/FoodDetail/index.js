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

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <ImageBackground source={FoodDummy} style={styles.imageBanner}>
        <TouchableOpacity style={styles.backBtn}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.descContainer}>
        <View style={styles.textContainer}>
          <View style={styles.textAlign}>
            <View>
              <Text style={styles.foodLabel}>Food Name</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.foodDesc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.ingredientsLabel}>Ingredients:</Text>
          <Text style={styles.ingredientsDetail}>
            Seledri, Sayur, Daging dan Keju
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.priceFlex}>
            <Text style={styles.priceLabel}>Label Price</Text>
            <Text style={styles.priceTotal}>Rp. xxx.xxx.xxx</Text>
          </View>
          <View style={styles.btnOrder}>
            <Button
              textButton="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  imageBanner: {height: 330, paddingTop: 26, paddingLeft: 22},
  backBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  textContainer: {flex: 1},
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  foodLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  foodDesc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  ingredientsLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  ingredientsDetail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceFlex: {flex: 1},
  priceLabel: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  btnOrder: {width: 163},
});
