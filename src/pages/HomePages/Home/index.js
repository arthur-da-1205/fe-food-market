import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  FoodCard,
  HomeHeader,
  HomeTabSection,
} from '../../../components/molecules';
import {Space} from '../../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeHeader />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            <Space width={16} />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </View>
        </ScrollView>
      </View>
      <Space height={24} />
      <View style={styles.tabViewContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodContainer: {flexDirection: 'row', marginVertical: 24},
  tabViewContainer: {flex: 1},
});
