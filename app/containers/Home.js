import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import ReactNative from 'react-native';
import { appStyle } from '../styles';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;
import { Container, Header, Title, Content, Footer, Button, Left, Right, Body, Icon, Form, Item, Input } from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent  onPress={ () => this.props.navigateBack() }>
                      <Icon name='arrow-back' />
                  </Button>
              </Left>
              <Body>
                  <Title>Home</Title>
              </Body>
              <Right>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Right>
          </Header>
          <Content>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
            </View>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    navigationParams: state.navigationParams
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
