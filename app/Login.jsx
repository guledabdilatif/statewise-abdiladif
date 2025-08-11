import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { colors } from '../constants/colors';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Toast from 'react-native-toast-message';
// Optional: to store token for later use
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (type, message) => {
    Toast.show({
      type,
      text1: message,
      position: 'top',
      visibilityTime: 2000,
    });
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showToast('error', 'Email and password are required');
      return;
    }

    try {
      const response = await axios.post(
        'http://10.2.1.198:8000/api/login',
        { email, password },
        { headers: { Accept: 'application/json' } }
      );

      // Save token locally for future API calls
      await AsyncStorage.setItem('authToken', response.data.token);

      showToast('success', 'Login successful');
      setTimeout(() => router.push('/Index'), 1500);

    } catch (error) {
      if (error.response) {
        showToast('error', error.response.data.message || 'Invalid credentials');
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

        <TouchableOpacity
          onPress={handleLogin}
          style={[
            tw`px-4 py-2 rounded-full mb-2 w-full`,
            { backgroundColor: colors.primary1, borderColor: colors.primary1, borderWidth: 1 },
          ]}
        >
          <Text style={tw`text-lg text-white font-bold text-center`}>Login</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row items-center justify-center my-2`}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/SignUp')}>
            <Text style={tw`text-blue-800 ml-2 font-bold`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Toast />
    </SafeAreaView>
  );
};

export default Login;
