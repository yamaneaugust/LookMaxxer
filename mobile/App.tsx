import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  // Temporary test to see if app renders at all
  console.log('App component rendering');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LookMaxxer Loading...</Text>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    fontSize: 20,
    zIndex: 1000,
  },
});
