
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Card, FeatureCard } from '../../../components/Cards';
import Filters from '../../../components/Filters';
import Search from '../../../components/Search';

const Index = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`} >

      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={tw`pb-32`}
        columnWrapperStyle={tw`flex gap-1 px-2`}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View style={tw`px-5`}>
            <View style={tw`flex-row justify-between items-center mt-5`}>
              <View style={tw`flex-row items-center`}>
                <Image source={images.avatar} style={tw`w-12 h-12`} />
                <View style={tw`flex flex-col items-start justify-center ml-3`}>
                  <Text style={tw`text-base font-semibold`}>John Doe</Text>
                  <Text style={tw`text-sm text-gray-500`}>johndoe@example.com</Text>
                </View>
              </View>
              <Image source={icons.bell} style={tw`w-6 h-6`} />
            </View>
            <Search />
            <View style={tw`flex flex-row items-center justify-between my-5 `}>
              <Text style={tw`text-lg font-semibold`}>Featured</Text>
              <TouchableOpacity>
                <Text style={tw`text-sm text-base text-blue-500 font-bold`}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => <FeatureCard />}
              keyExtractor={(item) => item.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`gap-3 flex mt-5`}
              bounces={false}


            />
            <View>
              <View style={tw`flex flex-row items-center justify-between my-5 `}>
                <Text style={tw`text-lg font-semibold`}>Our Recommendation</Text>
                <TouchableOpacity>
                  <Text style={tw`text-sm text-base text-blue-500 font-bold`}>See All</Text>
                </TouchableOpacity>
              </View>
              <Filters />
            </View>
          </View>
        }

      />

    </SafeAreaView>
  )
}

export default Index
