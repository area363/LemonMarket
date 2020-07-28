
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
  Image
} from 'native-base';
import appStyles from '../appStyles';
import { View, Image as Image1, Text as Text1, ActivityIndicator } from 'react-native';
import moment from 'moment';
import { Card, Overlay, Button } from 'react-native-elements';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }
  viewOverlay() {
    this.setState({ isVisible: true })
  }
  render() {

    if (this.state.isVisible !== true) {
      return (
        <ListItem avatar onPress={() => this.viewOverlay()}>
          <Left>
            <Thumbnail square large source={{ uri: this.props.item.photo }} />
          </Left>
          <Body >
            <Text>{this.props.item.itemTitle}</Text>
            <Text style={{ fontWeight: 'bold' }}>${this.props.item.price}</Text>
            <View key={this.props.item._id}
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text note>{moment(this.props.item.date).calendar()}</Text>
            </View>
          </Body>
          <Right>
          </Right>
        </ListItem>
      )
    } else {
      return (

        <Overlay
          onBackdropPress={() => this.setState({ isVisible: false })}
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          width="300"
          height="300"
        >
          <Card containerStyle={{
            padding: 10,
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 14
          }} titleStyle={{ fontSize: 25 }} title={this.props.item.itemTitle}>
            <View key={this.props.item._id}>
              <Image1
                source={{ uri: this.props.item.photo }}
                style={{ marginTop: 0, marginLeft: 80, width: 120, height: 120 }}
                PlaceholderContent={<ActivityIndicator />} />
              <Text1 style={{ fontSize: 20, fontWeight: 'bold' }}>${this.props.item.price}</Text1>
              <Text1 >{this.props.item.description}</Text1>
            </View>
            <Button buttonStyle={{ backgroundColor: '#f7db35', marginTop: 5 }} titleStyle={{ color: 'black' }} title='Message Seller!' />
          </Card>
        </Overlay >

      )
    }
  }
}

export default List;