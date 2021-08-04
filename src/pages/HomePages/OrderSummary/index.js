import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FoodDummy6} from '../../../assets';
import {
  Button,
  Header,
  ItemsDetail,
  ListFood,
  Space,
} from '../../../components';

const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <Space height={24} />
      <View style={styles.detailItemontainer}>
        <Text style={styles.textItemOrdered}>Item Ordered</Text>
        <ListFood
          image={FoodDummy6}
          items={3}
          foodName="Soup Ala Ala"
          price="1.000.000"
          type="order-summary"
        />
        <Space height={16} />
        <Text style={styles.textDetailTransaction}>Detail Transaction</Text>
        <Space height={8} />

        <ItemsDetail label="Soup Ala Ala" value="IDR. 70.000" />
        <ItemsDetail label="Driver" value="IDR. 40.000" />
        <ItemsDetail label="Tax 10%" value="IDR. 7.000" />
        <ItemsDetail
          label="Total Price"
          value="IDR. 117.000"
          valueColor="#1ABC9C"
        />
      </View>
      <Space height={24} />
      <View style={styles.deliverContainer}>
        <Text style={styles.textDeliver}>Deliver to :</Text>
        <Space height={8} />
        <ItemsDetail label="Name" value="Arthur Darwanto" />
        <ItemsDetail label="Phone no." value="081913581675" />
        <ItemsDetail label="Address" value="Jl. Jambu V" />
        <ItemsDetail label="House no." value="16" />
        <ItemsDetail label="City" value="Bangkalan" />
      </View>
      <Space height={24} />
      <View style={styles.btnCheckOut}>
        <Button
          textButton="Checkout Now"
          onPress={() => navigation.navigate('OrderSuccess')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  detailItemontainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  textItemOrdered: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  textDetailTransaction: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  deliverContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  textDeliver: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  btnCheckOut: {marginTop: 24, paddingHorizontal: 24},
});
