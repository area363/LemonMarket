import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Body,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Badge,
  Icon
} from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import ChatsScreen from './screens/chats';
import PostScreen from './screens/post';
import ItemsScreen from './screens/item';
import SettingsScreen from './screens/settings';
import { StatusBar } from 'react-native';
import appStyles from './appStyles';
import axios from 'axios';

const Stack = createStackNavigator();
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: false
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#f7db35');
      StatusBar.setBarStyle('dark-content');
    }, 30);
  }
  push(value) {
    console.log('hi')
  }

  changePostState() {
    this.setState({
      post: !this.state.post
    });
  }
  render() {
    if (this.state.post === false) {
      return (
        <Container>
          <Header noLeft style={appStyles.headerBackgroundColor}>
            <Body>
              <Title style={appStyles.appTitle}>Lemon <Icon style={{ color: 'black' }} type="FontAwesome5" name="lemon" /></Title>
            </Body>
            <Right>
              <Button icon transparent>
                <Icon style={{ color: 'black' }} type="MaterialIcons" name="search" />
              </Button>
              <Button icon transparent>
                <Icon style={{ color: 'black' }} type="MaterialIcons" name="more-vert" />
              </Button>
            </Right>
          </Header>

          <Tabs
            tabContainerStyle={{
              elevation: 0,
            }}
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={appStyles.tabBarUnderLine}
            tabBarActiveTextColor="red"
            initialPage={1}
            page={1}
            tabBarBackgroundColor="#f7db35"
            ref={c => this.tabs = c}>

            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Icon style={{ color: 'black' }} type="MaterialIcons" name="photo-camera" />
                </TabHeading>
              }>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  flex: 1,
                }}>
                Camera Screen
            </Text>
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>FOR SALE</Text>
                </TabHeading>
              }>
              <ItemsScreen />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>POST ITEM</Text>
                </TabHeading>
              }>
              <PostScreen change={this.changePostState.bind(this)} post={this.push.bind(this)} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>INBOX</Text>
                  <Badge style={appStyles.badge}>
                    <Text style={appStyles.badgeText}>2</Text>
                  </Badge>
                </TabHeading>
              }>
              <ChatsScreen />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>MY LEMON</Text>
                </TabHeading>
              }>
              <SettingsScreen />
            </Tab>
          </Tabs>
        </Container>
      );
    } else {
      return (

        <Container>
          <Header noLeft style={appStyles.headerBackgroundColor}>
            <Body>
              <Title style={appStyles.appTitle}>Lemon <Icon style={{ color: 'black' }} type="FontAwesome5" name="lemon" /></Title>

            </Body>
            <Right>
              <Button icon transparent>
                <Icon style={{ color: 'black' }} type="MaterialIcons" name="search" />
              </Button>
              <Button icon transparent>
                <Icon style={{ color: 'black' }} type="MaterialIcons" name="more-vert" />
              </Button>
            </Right>
          </Header>

          <Tabs
            tabContainerStyle={{
              elevation: 0,
            }}
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={appStyles.tabBarUnderLine}
            tabBarActiveTextColor="red"
            initialPage={1}
            page={1}
            tabBarBackgroundColor="#f7db35"
            ref={c => this.tabs = c}>

            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Icon style={{ color: 'black' }} type="MaterialIcons" name="photo-camera" />
                </TabHeading>
              }>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  flex: 1,
                }}>
                Camera Screen
              </Text>
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>FOR SALE</Text>
                </TabHeading>
              }>
              <ItemsScreen items={this.state.items} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>POST ITEM</Text>
                </TabHeading>
              }>
              <PostScreen change={this.changePostState.bind(this)} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>INBOX</Text>
                  <Badge style={appStyles.badge}>
                    <Text style={appStyles.badgeText}>2</Text>
                  </Badge>
                </TabHeading>
              }>
              <ChatsScreen />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#f7db35' }}>
                  <Text style={appStyles.tabsText}>MY LEMON</Text>
                </TabHeading>
              }>
              <SettingsScreen />
            </Tab>
          </Tabs>
        </Container>)
    }
  }
}