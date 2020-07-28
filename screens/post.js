import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import { TextInput } from 'react-native';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome'
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
} from 'native-base';
import appStyles from '../appStyles';
export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      userName: 'Don Seo',
      itemTitle: '',
      price: 0,
      description: '',
      photo: ''
    };
  }

  handleInputChange(name, value) {
    if (name === 'price') {
      value = Number(value);
    }
    this.setState({
      [name]: value
    })
    console.log(this.state);
  }

  handleInputSubmit() {
    console.log(this.state)
    if (this.state.itemTitle === "") {
      alert("Please enter your item title!");
      return;
    }
    if (this.state.price === "") {
      alert("Please enter your price!");
      return;
    }
    if (typeof this.state.price !== "number") {
      alert("Please enter a number!");
      return;
    }
    if (this.state.description === "") {
      alert("Please enter your description!");
      return;
    }
    if (this.state.photo === "") {
      alert("Please enter your photo url!");
      return;
    }
    axios.post('http://10.0.2.2:3000/item', { userName: this.state.userName, itemTitle: this.state.itemTitle, price: this.state.price, description: this.state.description, photo: this.state.photo })
      .then(res => {
        console.log(res.data);
        alert("Item Posted!");
      })
      .then(
        this.props.change()
      )
    // alert("Item Posted!");
    return;
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem itemDivider style={{ height: 10 }}>
            <Text note style={{ fontSize: 12 }}>
              Item Title
            </Text>
          </ListItem>
          <Input
            name='itemTitle'
            placeholderTextColor="lightgrey"
            placeholder='Title for your item'
            onChangeText={(txt) => this.handleInputChange("itemTitle", txt)} />
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{ fontSize: 12 }}>
              Price
            </Text>
          </ListItem>
          <Input
            name='price'
            placeholderTextColor="lightgrey"
            placeholder='$ Enter price'
            onChangeText={(txt) => this.handleInputChange("price", txt)}
          />
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{ fontSize: 12 }}>
              Description
            </Text>
          </ListItem>
          <Input name='description' style={{
            marginLeft: 30,
            height: 150,
            width: 350,
            // borderWidth: 3,
            borderBottomColor: 'black'

          }}
            onChangeText={(txt) => this.handleInputChange("description", txt)}
            placeholderTextColor="lightgrey"
            placeholder='Describe your Item'
            multiline={true}
          />
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{ fontSize: 12 }}>
              Photo
            </Text>
          </ListItem>
          <Input
            name='photo'
            placeholderTextColor="lightgrey"
            placeholder='Photo Url'
            onChangeText={(txt) => this.handleInputChange("photo", txt)}
          />
          <Button onPress={this.handleInputSubmit.bind(this)} titleStyle={{ color: "black" }} buttonStyle={{ backgroundColor: '#f7db35', marginLeft: 50, height: 50, width: 300 }}
            title="Post Item!"
          />
        </Content>
      </Container>
    );
  }
}