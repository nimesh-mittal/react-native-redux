import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import ReactNative from 'react-native';
import { appStyle } from '../styles';
const {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} = ReactNative;
import { Container, Title, Content, Button, Icon, Form, Item, Input, InputGroup, Grid, Col } from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'test',
      password: 'test_pwd'
    }
  }
  loginPressed() {
    this.props.authenticate({username: this.state.username, password: this.state.password}).then (resp => {
      if(resp !== null) {
        this.props.navigate({key: 'Home', username: this.props.loggedInUser.username});
      }
    });
  }
  render() {
    return (
      <Container>
        <View style={styles.shadow}>
          <Content>
            <View style={styles.formContainer}>
              <Form>
                <View style={styles.inputContainer}>
                <Item>
                  <Icon active name='mail' style={{color: '#CCCCCC', paddingLeft: 10}}/>
                  <Input placeholder="Email address" onChangeText={ username => this.setState({ username }) } placeholderTextColor='#CCCCCC' style={{color: '#CCCCCC'}}/>
                </Item>
                </View>
                <Item>
                  <Icon active name='lock' style={{color: '#CCCCCC', paddingLeft: 10, paddingRight: 10}}/>
                  <Input placeholder="Password" secureTextEntry={true} onChangeText={ password => this.setState({ password }) } placeholderTextColor='#CCCCCC' style={{color: '#CCCCCC'}}/>
                </Item>
              </Form>
                <View style={styles.btnContainer}>
                  <View style={styles.loginBtn}>
                    <Button block info onPress={ () => this.loginPressed() }>
                      <Text style={styles.buttonText}>Sign in</Text>
                    </Button>
                  </View>
                  <View>
                    <Button block primary iconLeft capitalize={false}>
                      <Icon name='logo-facebook' />
                      <Text style={styles.buttonText}>Sign in with Facebook</Text>
                    </Button>
                  </View>
                  <View style={styles.googleBtn}>
                    <Button block danger iconLeft capitalize={false}>
                      <Icon name='logo-google' style={{paddingRight: 15}}/>
                      <Text style={styles.buttonText}>Sign in with Google</Text>
                    </Button>
                  </View>
                  <Grid>
                      <Col><Text style={styles.addonLinks}>Forgot password?</Text></Col>
                      <Col><Text style={[styles.addonLinks, styles.flotRight]}>New user?</Text></Col>
                  </Grid>
                </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 140,
    paddingLeft: 10,
    paddingRight: 20,
  },
  btnContainer: {
    paddingLeft: 30,
    paddingRight: 20,
    marginTop: 25
  },
  loginBtn: {
    marginBottom: 60
  },
  googleBtn: {
    marginTop: 10,
    marginBottom: 30
  },
  inputContainer: {
    marginBottom: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'#263242',
  },
  addonLinks: {
    color: '#CCCCCC',
    fontSize: 15
  },
  flotLeft: {
    alignSelf: 'flex-start'
  },
  flotRight: {
    alignSelf: 'flex-end'
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
