import * as React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';
import {useForm} from 'react-hook-form';
import {FormInput} from '../../components/form/Input';

export function SignInScreen() {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);

  // const { signIn } = React.useContext(AuthContext);

  return (
    <ScrollView style={tw`p-5`}>
      {/* <TextInput */}
      {/* <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        
      /> */}

      <Text>Email</Text>
      <FormInput
        name="email"
        control={control}
        style={tw`mb-2 text-xl border border-black rounded-lg p-2 bg-white`}
      />
      <Text>Password</Text>
      <FormInput
        name="password"
        control={control}
        style={tw`mb-2 text-xl border border-black rounded-lg p-2 bg-white`}
      />

      {/* <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={tw`mb-2 text-xl`}
      /> */}
      {/* <Button
        title="Sign in"
        onPress={() => console.log({username, password})}
      /> */}

      <TouchableOpacity
        style={tw`bg-blue-500  text-center rounded-lg py-2 mt-5`}
        // title="Submit"
        onPress={handleSubmit(onSubmit)}>
        <Text style={tw`text-white text-xl text-center`}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
