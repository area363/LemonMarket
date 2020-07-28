import React, { Component, useState } from 'react';
import 'react-native-get-random-values';
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
import List from '../components/List';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView, View
} from 'react-native';
import axios from 'axios';


export default class ItemsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      items: []
    }
  }
  componentDidMount() {
    axios.get('http://10.0.2.2:3000/item')
      .then(result => {
        console.log(new Date());
        this.setState({
          refreshing: false,
          items: result.data
        })
      })
    console.log(new Date());
  }
  fetch() {
    axios.get('http://10.0.2.2:3000/item')
      .then(result => {
        console.log(new Date());
        this.setState({
          refreshing: false,
          items: result.data
        })
      })
    console.log(new Date());
  }
  _onRefresh() {
    this.fetch();
  }
  push(value) {
    console.log('hi')
  }

  render() {
    return (
      <Container>
        <Content refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)} />}
        >
          {this.state.items.map(item => {
            return (
              <List item={item} key={item._id} />
            )
          }
          )}
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://coastalfurniture.co.uk/wp-content/uploads/2018/03/IMG_2753.jpg' }} />
            </Left>
            <Body>
              <Text>Giving away this nice desk for free!</Text>
              <Text style={{ fontWeight: 'bold' }}>Free</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 08:20 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://render.fineartamerica.com/images/rendered/default/canvas-print/8/7/mirror/break/images-medium-5/totoro-batman-and-los-angeles-jessmyne-stephenson-canvas-print.jpg' }} />
            </Left>
            <Body>
              <Text>I have too many Totoro paintings at home</Text>
              <Text style={{ fontWeight: 'bold' }}>$16</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 08:17 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWorXbxafNZ0w-NZi0uFTqSw8_L-h3d-myPA&usqp=CAU' }} />
            </Left>
            <Body>
              <Text>Camper's beanie to keep you warm!</Text>
              <Text style={{ fontWeight: 'bold' }}>$4</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 08:15 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://i.pinimg.com/736x/b7/40/0b/b7400b4147a362e94750d937fa9927c5.jpg' }} />
            </Left>
            <Body>
              <Text>Getting rid of this classic wooden door</Text>
              <Text style={{ fontWeight: 'bold' }}>Free</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 08:05 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://i.etsystatic.com/16590452/d/il/fa10d8/1436530740/il_340x270.1436530740_je4l.jpg?version=0' }} />
            </Left>
            <Body>
              <Text>Guitar Table</Text>
              <Text style={{ fontWeight: 'bold' }}>$60</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 08:01 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1B7-pEwWKVpb8qjeQX1qehhM6Uty24n7K4A&usqp=CAU' }} />
            </Left>
            <Body>
              <Text>All Board Games Must Go!</Text>
              <Text style={{ fontWeight: 'bold' }}>$5</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:55 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://ae01.alicdn.com/kf/HTB1AhYVJFXXXXXYXXXXq6xXFXXXL/Mini-Vertical-Axis-Wind-Generators-10W-Max-15W-Vertical-Axis-Wind-Turbines-DC-12V-Output-Education.jpg' }} />
            </Left>
            <Body>
              <Text>Selling my wind turbine used for camping cars</Text>
              <Text style={{ fontWeight: 'bold' }}>$250</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:54 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://cdn.shopify.com/s/files/1/0397/8853/products/sriracha-136oz-sriracha-2_600x.jpg?v=1516385688' }} />
            </Left>
            <Body>
              <Text>10lb Sriracha for Sale!</Text>
              <Text style={{ fontWeight: 'bold' }}>$15</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:52 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://fupping.com/wp-content/uploads/2019/09/61lgVYlw2uL._SL1500_.jpg' }} />
            </Left>
            <Body>
              <Text>Selling my office chair!</Text>
              <Text style={{ fontWeight: 'bold' }}>$75</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:47 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://mloofhqoyevt.i.optimole.com/w:auto/h:auto/q:auto/http://parati.shop/wp-content/uploads/2019/09/Real-Boss-kiss-white-couple-tshirt-for-wife-and-husband-men-women-clothes-funny-tee-vegan-1.jpg' }} />
            </Left>
            <Body>
              <Text>Funny Couple T-Shirt!</Text>
              <Text style={{ fontWeight: 'bold' }}>$7</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:44 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://149367133.v2.pressablecdn.com/wp-content/uploads/2019/06/190603-GadgetMatch-Computex-2019-WUDI-IDI-Neck-Fan-Bluetooth-Speaker-2-1000x600.jpg' }} />
            </Left>
            <Body>
              <Text>Neck Cooler for Summer</Text>
              <Text style={{ fontWeight: 'bold' }}>$25</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:40 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://media.karousell.com/media/photos/products/2018/11/26/cracking_the_coding_interview_6th_edition_1543161763_8cf8b09e_progressive.jpg' }} />
            </Left>
            <Body>
              <Text>Cracking the Coding Interview</Text>
              <Text style={{ fontWeight: 'bold' }}>$12</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:35 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://www.villagemaidcheese.co.uk/wp-content/uploads/2017/11/Wigmore_2019.png' }} />
            </Left>
            <Body>
              <Text>Selling our world famous cheese!</Text>
              <Text style={{ fontWeight: 'bold' }}>$8</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:33 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://www.cozycatfurniture.com/image/catalog/forest-style-large-cat-tower-tree.jpg' }} />
            </Left>
            <Body>
              <Text>Selling our cat tower</Text>
              <Text style={{ fontWeight: 'bold' }}>$15</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:32 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://cdn.protoolreviews.com/wp-content/uploads/2016/06/Bosch-RH1255VC-2-Inch-SDS-Max-Rotary-Hammer-Feature.jpg' }} />
            </Left>
            <Body>
              <Text>BOSCH Rotary Hammer!</Text>
              <Text style={{ fontWeight: 'bold' }}>$300</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:30 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://coder-coder.com/wp-content/uploads/2019/03/Able-Desk-Co-Standing-Desk-Standing-1-768x1024.jpg' }} />
            </Left>
            <Body>
              <Text>Selling my standing desk</Text>
              <Text style={{ fontWeight: 'bold' }}>$100</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:21 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://i.ebayimg.com/images/g/uzEAAOSwd-heC5Y4/s-l400.jpg' }} />
            </Left>
            <Body>
              <Text>Michael Jordan Canvas!</Text>
              <Text style={{ fontWeight: 'bold' }}>$35</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:17 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://media.karousell.com/media/photos/products/2019/10/14/stickers__sticker_sheets__puffy_stickers__cute_stickers__kawaii_stickers_1571045209_90c4061c_progressive.jpg' }} />
            </Left>
            <Body>
              <Text>Selling cute stickers</Text>
              <Text style={{ fontWeight: 'bold' }}>$3</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:16 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://i.ebayimg.com/images/g/t6UAAOSwNtldsZAn/s-l300.jpg' }} />
            </Left>
            <Body>
              <Text>Selling my comfy dog bed</Text>
              <Text style={{ fontWeight: 'bold' }}>$15</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:12 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail square large source={{ uri: 'https://www.patentlyapple.com/.a/6a0120a5580826970c0264e2e7d150200d-pi' }} />
            </Left>
            <Body>
              <Text>New Apple Glasses!</Text>
              <Text style={{ fontWeight: 'bold' }}>$900</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text note>Yesterday, 07:05 pm</Text>
              </View>
            </Body>
            <Right>
            </Right>
          </ListItem>
        </Content >
      </Container >
    );
  }
}