import { useRouter } from 'expo-router'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { Card } from '../../../components/Cards'
import Filters from '../../../components/Filters'
import Search from '../../../components/Search'
import { icons } from '../../../constants/icons'

const Explore = () => {
  const router = useRouter();
  return (

    <SafeAreaView style={tw`flex-1 mt-4 mx-3`}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          <View style={tw`w-1/2 px-1 mt-10`}>
            <Card />
          </View>
        )}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={tw`pb-32`}
        columnWrapperStyle={tw`flex gap-1 px-2`}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={tw`flex flex-row justify-between px-2 mt-6 items-center`}>
              <View style={tw`h-10 w-10 flex flex-row justify-center bg-blue-100 items-center rounded-full`}>
                <TouchableOpacity onPress={()=>{router.push('/Index')}
                }>
                  <Image source={icons.backArrow} style={tw` h-6 w-6`} />
                </TouchableOpacity>
              </View>
              <Text style={tw`font-bold`}>Search for Your Ideal Home</Text>
              <Image source={icons.bell} style={tw` h-6 w-6`} />
            </View>
            < View style={tw`my-2`}>
              <Search />
            </View >
            <View style={tw`mt-2`}>
              <Filters />
            </View>
          </View>
        }
      />
    </SafeAreaView>

  )
}

export default Explore