import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import { Container, Content } from 'native-base';
import ViewPager from '@react-native-community/viewpager';

import ProfileView from './src/Components/Scenes/Profile/ProfileView';
import CameraView from './src/Components/Scenes/Camera/CameraView'
import FeedsView from './src/Components/Scenes/Feeds/FeedsView';



var styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default class App extends React.Component {

  render() {
    return (
      <Container>
        <ViewPager style={styles.viewPager} initialPage={1}>
          <View key="1">
            <ProfileView />
          </View>
          <View key="2" height={400}>
            <CameraView />
          </View>
          <View key="3">
            <FeedsView />
          </View>
        </ViewPager>
      </Container >
    );
  }
}