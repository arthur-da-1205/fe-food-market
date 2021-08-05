import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

import {FoodDummy, FoodDummy2, FoodDummy3} from '../../../assets';
import ListFood from '../ListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarContainer}
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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.tabContainer}>
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
      />
    </View>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.tabContainer}>
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
      <ListFood
        foodName="Soup Ala Ala"
        items={3}
        price="1.000.000"
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        date="August 4th, 14:43"
        status="Canceled"
      />
    </View>
  );
};

const OrderTabSetion = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    first: InProgress,
    second: PastOrder,
  });

  return (
    <TabView
      style={styles.tabViewContainer}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default OrderTabSetion;

const styles = StyleSheet.create({
  newTaste: {flex: 1, backgroundColor: 'white'},
  popular: {flex: 1, backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
  },
  tab: {width: 'auto'},
  tabBarContainer: {backgroundColor: 'white', elevation: 0, shadowOpacity: 0},
  tabViewContainer: {backgroundColor: 'white'},
  tabContainer: {paddingTop: 8, paddingHorizontal: 24},
});
