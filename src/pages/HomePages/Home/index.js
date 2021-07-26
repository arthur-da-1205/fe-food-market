import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';

import {FoodDummy, ProfileDummy} from '../../../assets';
import FoodCard from '../../../components/molecules/FoodCard';
import {Space} from '../../../components';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={{backgroundColor: 'white'}}
    tabStyle={styles.tab}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.labelTab}>{route.title}</Text>
    )}
  />
);

const FirstRoute = () => <View style={styles.newTaste} />;

const SecondRoute = () => <View style={styles.popular} />;

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: FirstRoute,
  });

  return (
    <View style={styles.page}>
      <View style={styles.appNameContainer}>
        <View>
          <Text style={styles.title}>Food Market</Text>
          <Text style={styles.subtitle}>Let's get some food!</Text>
        </View>
        <Image source={ProfileDummy} style={styles.photo} />
      </View>
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
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  appNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  photo: {
    borderRadius: 8,
    height: 50,
    width: 50,
  },
  foodContainer: {flexDirection: 'row', marginVertical: 24},
  tabViewContainer: {flex: 1},
  newTaste: {flex: 1, backgroundColor: 'white'},
  popular: {flex: 1, backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
  },
  tab: {width: 'auto'},
});
