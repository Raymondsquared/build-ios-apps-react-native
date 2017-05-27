import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

class LoginPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../images/Octocat.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  logo: {
      width: 66,
      height: 55
  }
});


export default LoginPage;