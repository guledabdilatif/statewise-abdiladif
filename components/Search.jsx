import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Search = ({ search, setSearch }) => {
  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={tw`flex flex-row items-center justify-between w-full bg-gray-200 mt-5 rounded-lg px-4 py-2`}>
      <View style={tw`flex-1 flex flex-row items-center justify-start`}>
        <Image source={icons.search} style={tw`w-5 h-5 mr-2`} />
        <TextInput
          value={search}
          style={tw`flex text-black-300 text-sm ml-2`}
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} style={tw`w-5 h-5`} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
