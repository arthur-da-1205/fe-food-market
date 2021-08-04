import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {EmptyOrder, Header, OrderTabSection, Space} from '../../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={{flex: 1}}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={{flex: 1}}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <Space height={24} />
          <View style={{flex: 1}}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
