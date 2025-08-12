import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import { LogOut } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import { icons } from '../../../constants/icons';
// import { images } from '../../../constants/images';
import { colors } from '../../../constants/colors';
import { User } from 'lucide-react-native';

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState({ name: '', email: '' });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        router.replace('/Login');
        return;
      }

      const response = await axios.get('http://10.2.1.181:8000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      setUser(response.data);
    } catch (error) {
      Toast.show({ type: 'error', text1: 'Session expired, please login again' });
      await AsyncStorage.removeItem('authToken');
      router.replace('/Login');
    }
  };

  const handleUpdatePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Toast.show({ type: 'error', text1: 'All fields are required' });
      return;
    }
    if (newPassword !== confirmPassword) {
      Toast.show({ type: 'error', text1: 'Passwords do not match' });
      return;
    }

    try {
      const token = await AsyncStorage.getItem('authToken');
      await axios.post(
        'http://10.2.1.181:8000/api/update-password',
        {
          old_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: confirmPassword,
        },
        { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } }
      );

      Toast.show({ type: 'success', text1: 'Password updated successfully' });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.response?.data?.message || 'Password update failed',
      });
    }
  };

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        await axios.post(
          'http://10.2.1.181:8000/api/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        );
      }
    } catch (error) { }
    await AsyncStorage.removeItem('authToken');
    Toast.show({ type: 'success', text1: 'Logged out successfully' });
    router.replace('/Login');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-5`}>
      {/* Header */}
      <View style={tw`flex-row items-center mb-8`}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.backArrow} style={tw`w-6 h-6`} />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold ml-4`}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={tw`items-center mb-6`}>
        <View style={tw`w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4`}>
          <User size={58} color="blue" /> {/* size & color adjustable */}
        </View>
        <Text style={tw`text-2xl font-bold mb-1`}>{user.name}</Text>
        <Text style={tw`text-lg text-gray-600 mb-4`}>{user.email}</Text>
      </View>

      {/* Update Password Section */}
      <TextInput
        style={tw`w-full bg-blue-200 px-4 py-3 mb-3 rounded-full text-black`}
        placeholder="Old Password"
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <TextInput
        style={tw`w-full bg-blue-200 px-4 py-3 mb-3 rounded-full text-black`}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={tw`w-full bg-blue-200 px-4 py-3 mb-5 rounded-full text-black`}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        onPress={handleUpdatePassword}
        style={[tw`px-4 py-3 rounded-full mb-8 w-full`, { backgroundColor: colors.primary1 }]}
      >
        <Text style={tw`text-lg text-white font-bold text-center`}>Update Password</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        onPress={handleLogout}
        style={tw`bg-red-500 px-6 py-3 rounded-full`}
      >
        <Text style={tw`text-white text-lg font-bold text-center flex flex-row items-center justify-center gap-1 `}>
          <LogOut size={24} color="#fff" />
          <Text>Logout</Text>
        </Text>
      </TouchableOpacity>

      <Toast />
    </SafeAreaView>
  );
};

export default Profile;
