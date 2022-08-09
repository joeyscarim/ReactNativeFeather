import * as React from 'react';
import {Text, View, Button, TextInput, ActivityIndicator} from 'react-native';
import tw from 'twrnc';

export function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);

  return (
    <View style={tw``}>
      {/* <TextInput */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={tw`mb-2 text-xl`}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={tw`mb-2 text-xl`}
      />
      <Button
        title="Sign in"
        onPress={() => console.log({username, password})}
      />
    </View>
  );
}
