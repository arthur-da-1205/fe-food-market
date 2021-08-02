import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  FoodCard,
  HomeHeader,
  HomeTabSection,
} from '../../../components/molecules';
import {Space} from '../../../components';
import {FoodDummy, FoodDummy2, FoodDummy3} from '../../../assets';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeHeader />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            <Space width={16} />
            <FoodCard
              image={FoodDummy}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy2}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy2}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy2}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy3}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy2}
              onPress={() => navigation.navigate('FoodDetail')}
            />
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
