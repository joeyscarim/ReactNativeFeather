import * as React from 'react';

// packages
import tw from 'twrnc';
import {useForm} from 'react-hook-form';
import axios from 'axios';

// components
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {FormInput} from '../../components/form/FormInput';

//icons
import Feather from '../../assets/icons/feather.svg';

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async data => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: data.email,
        password: data.password,
      });
      const {token} = response.data;
      // setJwtToken(token);

      console.log('token set', token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={tw`p-5`}
      contentContainerStyle={tw.style(
        `flex items-center justify-center h-full`,
      )}>
      <View style={tw`rounded-full bg-blue-500 p-4 mb-3 shadow-sm`}>
        <Feather width={30} height={30} fill={'#fff'} />
      </View>

      <View style={tw`w-full mb-5`}>
        <Text style={tw`mb-1`}>Email</Text>
        <FormInput
          name="email"
          control={control}
          style={tw`mb-2 text-xl border border-gray-500 rounded-md p-2 bg-white mb-3`}
        />
        <Text style={tw`mb-1`}>Password</Text>
        <FormInput
          name="password"
          control={control}
          style={tw`mb-2 text-xl border border-gray-500 rounded-md p-2 bg-white mb-5`}
        />

        <TouchableOpacity
          style={tw`bg-blue-500  text-center rounded-lg py-2 shadow-md self-center px-10`}
          // title="Submit"
          onPress={handleSubmit(onSubmit)}>
          <Text style={tw`text-white text-xl text-center`}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Register');
        }}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
