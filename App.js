/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Video  from 'react-native-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onBuffer() {
    // print('On Buffer called')
    console.log('On Buffer called');
    
  }

  onEnd() {
    console.log('On End called')
  }

  onError() {
    console.log('On Error called')
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
        <Video 
          source={{uri: 'https://cdn.cloud.altbalaji.com/content/2017-11/3889-5a18cf486adab/manifest.m3u8',
          fpsCertificateUrl: `http://api.vodafoneplay.in/licenseproxy/v2/fairplayCertificate/?&content_id=109901&timestamp=${new Date().getTime()}`,
          fpsDrmToken: 'e1ff151c5380bc67e9ab29c3b9e6410b484e6c4022a181968ef58f278f30e19a'}}
          ref={(ref) => {
            this.player = ref
          }}
          onBuffer={this.onBuffer}
          onEnd={this.onEnd}
          onError = {this.onError}
          style={styles.backgroundVideo}
        />
      </View>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
