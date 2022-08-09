import * as React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from './src/screens/SplashScreen';
import {SignInScreen} from './src/screens/Auth/LoginScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

// https://reactnavigation.org/docs/tab-based-navigation

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function SignUpScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const isSignedIn = false;
  const isLoading = false;

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
    // return <SplashScreen
  }

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          {/* {SignInScreen} */}
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
