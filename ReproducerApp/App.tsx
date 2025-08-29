import { AppRegistry, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          fullScreenGestureEnabled: __DEV__,
        }}
      >
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Two({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text onPress={() => navigation.push('One')}>Goto One</Text>
    </View>
  );
}

function One({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text onPress={() => navigation.push('Two')}>Goto Two</Text>
    </View>
  );
}

export default App;
