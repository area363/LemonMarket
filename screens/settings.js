import React, { Component } from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Content,
  Text,
  Container,
  Fab,
  Icon,
  Button,
  Separator,
} from 'native-base';
import appStyles from '../appStyles';
import { View } from 'react-native';
export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/don.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Don Seo</Text>
              <Text note>Hack Reactor City</Text>
            </Body>
          </ListItem>
          <Separator style={{ marginTop: 15, height: 1 }}></Separator>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="person"
                  style={{
                    color: '#f7db35'
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
              <Text note>Privacy, security, change number</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="chat"
                  style={{
                    color: '#f7db35'
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Chats</Text>
              <Text note>Theme, wallpapers, chat history</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="notifications"
                  style={{
                    color: '#f7db35'
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Text>My Community</Text>
              <Text note>My sales, purchases, favorites</Text>
            </Body>
          </ListItem>

          <ListItem icon style={{ marginTop: 20 }} noBorder>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="help"
                  style={{ color: '#f7db35' }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Help</Text>
              <Text note>FAQ, contact us, privacy policy</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="mail"
                  style={{
                    color: '#f7db35'
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Invite friends</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="settings"
                  style={{
                    color: '#f7db35'
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Settings</Text>
              <Text note>Notifications, language, others</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}