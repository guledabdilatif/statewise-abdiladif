import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
export const FeatureCard = ({property}) => {


    const router = useRouter();
    return (
        <View>
            <View style={tw`h-full w-full`}>
                <TouchableOpacity onPress={() => router.push({ pathname: '/Details', params: { property: JSON.stringify(property)} })} style={tw`flex flex-col items-start w-60 h-80 relative`}>
                    <Image source={{uri: property.featured_image}} style={tw`w-full h-full rounded-lg`} />
                    <Image source={images.cardGradient} style={tw`w-full h-full rounded-2xl absolute bottom-0`} />
                    <View style={tw`rounded-full absolute top-5 right-5 bg-white px-3 py-1.5 flex flex-row items-center gap-2`}>
                        <Image source={icons.star} style={tw`size-3.5 `} />
                        <Text style={tw`text-xl font-bold text-blue-500`}>{property.rating}</Text>
                    </View>
                    <View style={tw`flex flex-col items-start absolute bottom-5 inset-x-5`}>
                        <Text style={tw`text-lg font-extrabold text-white`} numberOfLines={1}>{property.name}</Text>
                        <Text style={tw`text-base  text-white`}>{property.location}</Text>
                        <View style={tw`flex flex-row items-center justify-between w-full`}>
                            <Text style={tw`text-xl font-bold text-white`}>{property.price}</Text>
                            <Image source={icons.heart} style={tw`h-5 w-5`} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export const Card = ({property }) => {
    return (
        <TouchableOpacity onPress={() => router.push({ pathname: '/Details', params: { property: JSON.stringify(property)} })} 
        style={tw`flex flex-col flex-1 relative px-3 py-4 mb-1 shadow w-full rounded-lg bg-white `}>

            <View style={tw`flex flex-row items-center absolute top-5 right-5 bg-white rounded-full z-50 p-1`}>
                <Image source={icons.star} style={tw`size-3.5 `} />
                <Text style={tw`text-xl font-bold text-blue-500 ml-0.5`}>{property.rating}</Text>
            </View>
            <Image source={{ uri: property.recommended_image || property.featured_image }} style={tw`w-full h-40 rounded-lg`} />

            <View style={tw`flex flex-col mt-2`}>
                <Text style={tw`text-base font-extrabold text-black`} numberOfLines={1} >{property.name}</Text>
                <Text style={tw`text-xs  text-black`}>{property.location}</Text>
                <View style={tw`flex flex-row items-center justify-between mt-2 flex-1 `}>
                    <Text style={tw`text-base font-bold text-blue`}>{property.price}</Text>
                    <Image source={icons.heart} style={tw`h-5 w-5 `} tintColor="blue" />

                </View>
            </View>
        </TouchableOpacity>
    )
}

