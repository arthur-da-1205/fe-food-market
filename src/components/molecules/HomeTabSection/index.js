import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

import {FoodDummy, FoodDummy2, FoodDummy3} from '../../../assets';
import ListFood from '..';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={{backgroundColor: 'white', elevation: 0, shadowOpacity: 0}}
    tabStyle={styles.tab}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
    </View>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    first: NewTaste,
    second: Popular,
    third: NewTaste,
  });

  return (
    <TabView
      style={{backgroundColor: 'white'}}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  newTaste: {flex: 1, backgroundColor: 'white'},
  popular: {flex: 1, backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
  },
  tab: {width: 'auto'},
});
