import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';

export default class HomeScreen extends Component {
  _onPressButton = () => {
    // this.props.navigation.navigate('Read');
    // this.props.navigation.navigate('Details')
    this.props.navigation.navigate('Scan');
    // this.props.navigation.navigate('NotFind')
  };

  onPressLearnMore() {
    this.props.navigation.navigate('Read');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={{paddingTop: 30}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.lighter,
            }}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                source={require('../assets/images/scanning.png')}
                style={{width: 200, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
