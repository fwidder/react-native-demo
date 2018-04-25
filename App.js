import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableHighlight
} from 'react-native';
import data from './demodata.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.head}>Demo App</Text>
        </View>
        <View style={styles.content}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => (
              <View>
                <TouchableHighlight
                  onPress={() => {
                    Alert.alert(rowData.sender, rowData.message);
                  }}>
                  <Text style={styles.row}>
                    {rowData.sender} -> {rowData.reciever}: {rowData.message}
                  </Text>
                </TouchableHighlight>
                <View style={styles.seperator} />
              </View>
            )}
          />
        </View>
        <View style={styles.footer}>
          <TextInput style={styles.input} placeholder="Type here!" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  seperator: {
    height: 20
  },
  row: {
    fontSize: 30
  },
  input: {
    flex: 1,
    fontSize: 30
  },
  head: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 45
  },
  container: {
    height: window.height,
    width: window.width,
    backgroundColor: '#000',
    justifyContent: 'space-between'
  },
  header: {
    flex: 3,
    backgroundColor: 'lightgrey'
  },
  content: {
    width: window.width,
    flex: 20,
    backgroundColor: 'powderblue'
  },
  footer: {
    flex: 2,
    backgroundColor: 'lightgrey'
  }
});
