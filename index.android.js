'use strict';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';
class reactnativedemo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>我是react native界面</Text>
            </View>
        )
      }
    }

    var styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        hello: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
     });

AppRegistry.registerComponent('reactnativedemo', () => reactnativedemo);