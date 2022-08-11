import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';
import tw from 'twrnc';

export function SplashScreen({}) {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
