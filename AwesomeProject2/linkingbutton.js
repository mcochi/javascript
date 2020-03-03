import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';

export default class MoreInfoButton extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <View style={styles.container}>
       <Button title="More Information" onPress={ ()=>{ Linking.openURL("https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/"+this.props.url.toLowerCase())}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});