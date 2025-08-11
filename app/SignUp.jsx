import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { colors } from '../constants/colors';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const showToast = (type, message) => {
    Toast.show({
      type,
      text1: message,
      position: 'top',
      visibilityTime: 2000,
    });
  };

  const handleSignUp = async () => {
    if (!name || !email || !password || !passwordConfirmation) {
      showToast('error', 'All fields are required');
      return;
    }

    if (password !== passwordConfirmation) {
      showToast('error', 'Passwords do not match');
      return;
    }

    try {
      await axios.post('http://10.2.1.198:8000/api/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }, {
        headers: { Accept: 'application/json' }
      });

      showToast('success', 'Account created successfully');
      setTimeout(() => router.push('/Login'), 1500); // Delay so toast is visible

    } catch (error) {
      if (error.response) {
        showToast('error', error.response.data.message || 'Something went wrong');
      } else {
        showToast('error', 'Failed to connect to the server');
      }
    }
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex flex-col justify-center items-center gap-6 flex-1 w-full mt-5 px-2`}>
        <Image
          style={tw`h-60 w-60 mb-1`}
          resizeMode="contain"
          source={require('../assets/images/icon.png')}
        />

        <TextInput
          style={tw`text-center text-black w-full bg-blue-200 px-3 py-4 text-sm rounded-full`}
          placeholder="Enter Your Username..."
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={tw`text-center text-black w-full bg-blue-100 px-3 py-4 text-sm rounded-full`}
          placeholder="Enter Your Email Address..."
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={tw`text-center text-black w-full bg-blue-200 px-3 py-4 text-sm rounded-full`}
          placeholder="Enter Your Password..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={tw`text-center text-black w-full bg-blue-200 px-3 py-4 text-sm rounded-full`}
          placeholder="Confirm Your Password..."
          secureTextEntry
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />

        <TouchableOpacity
          onPress={handleSignUp}
          style={[
            tw`px-4 py-2 rounded-full mb-2 w-full`,
            { backgroundColor: colors.primary1, borderColor: colors.primary1, borderWidth: 1 },
          ]}
        >
          <Text style={tw`text-lg text-white font-bold text-center`}>SignUp</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row items-center justify-center my-2`}>
          <Text>Have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/Login')}>
            <Text style={tw`text-blue-800 ml-2 font-bold`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Toast container */}
      <Toast />
    </SafeAreaView>
  );
};

export default SignUp;
