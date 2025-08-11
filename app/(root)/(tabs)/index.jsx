import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Card, FeatureCard } from '../../../components/Cards';
import Filters from '../../../components/Filters';
import Search from '../../../components/Search';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://10.2.1.198:8000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchProperties();
  }, []);

  // Filter properties by search term
  const filteredProperties = properties.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  const featured = filteredProperties.filter((item) => item.is_featured);
  const recommended = filteredProperties.filter((item) => item.is_recommended);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView contentContainerStyle={tw`pb-32`} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`px-5`}>
          <View style={tw`flex-row justify-between items-center mt-5`}>
            <View style={tw`flex-row items-center`}>
              <Image source={images.avatar} style={tw`w-12 h-12`} />
              <View style={tw`ml-3`}>
                <Text style={tw`text-base font-semibold`}>John Doe</Text>
                <Text style={tw`text-sm text-gray-500`}>johndoe@example.com</Text>
              </View>
            </View>
            <Image source={icons.bell} style={tw`w-6 h-6`} />
          </View>

          <Search search={search} setSearch={setSearch} />

          <View style={tw`mt-6`}>
            <Filters />
          </View>

          {/* Featured */}
          <View style={tw`flex flex-row items-center justify-between my-5`}>
            <Text style={tw`text-lg font-semibold`}>Featured</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-500 font-bold`}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={featured}
          renderItem={({ item }) => <FeatureCard property={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`gap-3 px-5`}
          bounces={false}
        />

        {/* Recommended */}
        <View style={tw`px-5 mt-8`}>
          <View style={tw`flex flex-row items-center justify-between mb-4`}>
            <Text style={tw`text-lg font-semibold`}>Our Recommendation</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-500 font-bold`}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`px-3`}>
          <FlatList
            data={recommended}
            renderItem={({ item }) => (
              <View style={tw`w-1/2 px-1 mt-4`}>
                <Card property={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={tw`flex gap-1`}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
