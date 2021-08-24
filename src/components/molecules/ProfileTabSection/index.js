import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Button, Space} from '../../atoms';
//import {useNavigation} from '@react-navigation/native';
import ListMenu from '../ListMenu';

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

const Account = () => {
  const navigation = useNavigation();

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <View style={styles.tabContainer}>
      <ListMenu label="Edit Profil" />
      <ListMenu label="Home Address" />
      <ListMenu label="Security" />
      <ListMenu label="Payment" />
      <Space height={30} />
      <Button textButton="Sign Out" onPress={signOut} />
    </View>
  );
};

const FoodMarket = () => {
  //const navigation = useNavigation();
  return (
    <View style={styles.tabContainer}>
      <ListMenu label="Rate App" />
      <ListMenu label="Help Center" />
      <ListMenu label="Privacy & Policy" />
      <ListMenu label="Tems & Conditions" />
    </View>
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Account'},
    {key: 'second', title: 'Food Market'},
  ]);

  const renderScene = SceneMap({
    first: Account,
    second: FoodMarket,
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

export default ProfileTabSection;

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
