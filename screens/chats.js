import React, { Component } from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';
import appStyles from '../appStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/joel.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Joel</Text>
              <Text note>Hey, can I have that free desk?...</Text>
            </Body>
            <Right>
              <Text note style={{ fontWeight: 'bold' }}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>1</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/nic.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Nicolas</Text>
              <Text note>I need that Totoro painting for my collection</Text>
            </Body>
            <Right>
              <Text note style={{ fontWeight: 'bold' }}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>4</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/quinn.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Quinn</Text>
              <Text note>I'd love to purchase that fedora for my upcoming vacation</Text>
            </Body>
            <Right>
              <Text note>
                3:43 pm
              </Text>
              {/* <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}></Text>
              </Badge> */}
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/john.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>John</Text>
              <Text note>Could you lower the guitar desk table price by $10? I'm interested</Text>
            </Body>
            <Right>
              <Text note>
                3:43 pm
              </Text>
              {/* <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}></Text>
              </Badge> */}
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/danica.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Danica</Text>
              <Text note>Hey can I buy that beanie sometime tomorrow?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/robert.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Robert</Text>
              <Text note>Where do I need to come to get that door?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/shaw.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Shaw</Text>
              <Text note>I do have many board games but I wouldn't mind buying a few more!</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/tony.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Tony</Text>
              <Text note>Hey totally interested in that WT. Can you teach me how to set it up?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/chris.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Chris</Text>
              <Text note>Are you just selling that one big Sirarcha or all of them?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/warner.png',
                }}
              />
            </Left>
            <Body>
              <Text>Warner</Text>
              <Text note>When can I pick up those T-shirts?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/zach.png',
                }}
              />
            </Left>
            <Body>
              <Text>Zach</Text>
              <Text note>This chair was exactly what I was looking for!</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/zaim.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Zaim</Text>
              <Text note>Hey when are you available to sell that coding interview book?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/chelese.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Chelese</Text>
              <Text note>Hi how's the fan power on that neck cooler?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/jing.png',
                }}
              />
            </Left>
            <Body>
              <Text>Jing</Text>
              <Text note>Can I come pick up the cat tower today?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/orlando.png',
                }}
              />
            </Left>
            <Body>
              <Text>Orlando</Text>
              <Text note>How old is that rotary hammer?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/vasan.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Vasan</Text>
              <Text note>Can you reserve the MJ canvas for me? I'll be coming back to town in the weekend.</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/shraya.png',
                }}
              />
            </Left>
            <Body>
              <Text>Shraya</Text>
              <Text note>I want those stickers!</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/michael.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Michael</Text>
              <Text note>Hey how's high does that standing desk go?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/kana.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Kana</Text>
              <Text note>Could you tell me the size of the dog bed?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://sdcproject.s3.ap-northeast-2.amazonaws.com/friends/don.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Don</Text>
              <Text note>How are you selling Apple Glasses? Didn't know they were even out</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}