import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {SplashScreen} from './src/screens/SplashScreen';
import {LoginScreen} from './src/screens/Auth/LoginScreen';
import {useAuthStore} from './src/lib/useAuth';
import {NotificationsPage} from './src/screens/notifications';

import tw from 'twrnc';

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

// icons
import Bell from './src/assets/icons/bell.svg';
import House from './src/assets/icons/house.svg';
import Gear from './src/assets/icons/gear.svg';

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

function SettingsScreen({navigation}) {
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
  const jwtToken = useAuthStore(state => state.jwtToken);
  const isLoading = useAuthStore(state => state.isLoading);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {jwtToken ? (
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                size = 20;

                if (route.name === 'Home') {
                  return <House width={size} height={size} fill={color} />;
                } else if (route.name === 'Settings') {
                  return <Gear width={size} height={size} fill={color} />;
                } else if (route.name === 'Notifications') {
                  return <Bell width={size} height={size} fill={color} />;
                }
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
              name="Notifications"
              component={NotificationsPage}
              options={{
                headerTitleAlign: 'left',
                headerTitleStyle: tw`text-2xl ml-2`,
              }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
