import React from 'react';

import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native';

export const FormInput = ({control, style, name}) => {
  // <Controller
  // <TextInput

  return (
    <Controller
      control={control}
      rules={{
        required: true,
        // secureTextEntry: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={style}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          //   {{...textInputP}}
        />
      )}
      name={name}
    />
  );
};
