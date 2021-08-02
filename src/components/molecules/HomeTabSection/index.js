import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ListFood from '../ListFood';

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

const newTaste = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
    </View>
  );
};

const Popular = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
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
    first: newTaste,
    second: Popular,
    third: newTaste,
  });

  return (
    <TabView
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
