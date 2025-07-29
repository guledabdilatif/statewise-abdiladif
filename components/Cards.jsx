import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
export const FeatureCard = (onPress) => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.push('/Details')} style={tw`flex flex-col items-start w-60 h-80 relative`}>
            <Image source={images.japan} style={tw`w-full h-full rounded-lg`} />
            <Image source={images.cardGradient} style={tw`w-full h-full rounded-2xl absolute bottom-0`} />
            <View style={tw`rounded-full absolute top-5 right-5 bg-white px-3 py-1.5 flex flex-row items-center gap-2`}>
                <Image source={icons.star} style={tw`size-3.5 `} />
                <Text style={tw`text-xl font-bold text-blue-500`}>4.4</Text>
            </View>
            <View style={tw`flex flex-col items-start absolute bottom-5 inset-x-5`}>
                <Text style={tw`text-lg font-extrabold text-white`} numberOfLines={1}>Modern Apartment</Text>
                <Text style={tw`text-base  text-white`}>Tokyo, Japan</Text>
                <View style={tw`flex flex-row items-center justify-between w-full`}>
                    <Text style={tw`text-xl font-bold text-white`}>$2,500</Text>
                    <Image source={icons.heart} style={tw`h-5 w-5`} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const Card = () => {
    return (
        <TouchableOpacity style={tw`flex flex-col flex-1 relative px-3 py-4 mb-10 shadow w-full rounded-lg bg-white `}>
          <View style={tw`flex flex-row items-center absolute top-5 right-5 bg-white rounded-full z-50 p-1`}>
                <Image source={icons.star} style={tw`size-3.5 `} />
                <Text style={tw`text-xl font-bold text-blue-500 ml-0.5`}>4.4</Text>
            </View>
            <Image source={images.newYork} style={tw`w-full h-40 rounded-lg`} />
            
            <View style={tw`flex flex-col mt-2`}>
                <Text style={tw`text-base font-extrabold text-black`} >Cozy Studio</Text>
                <Text style={tw`text-xs  text-black`}>Tokyo, Japan</Text>
                <View style={tw`flex flex-row items-center justify-between mt-2 flex-1 `}>
                    <Text style={tw`text-base font-bold text-blue`}>$2,500</Text>
                    <Image source={icons.heart} style={tw`h-5 w-5 `} tintColor="blue" />

                </View>
            </View>
        </TouchableOpacity>
    )
}

