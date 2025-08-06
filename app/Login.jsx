import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { colors } from '../constants/colors'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={tw`flex-1`}>

            <View style={tw`flex flex-col justify-center items-center gap-6 flex-1 w-full mt-5 px-2`}>
                <Image style={tw`h-60 w-60 mb-1`}
                    resizeMode='contain'
                    source={require('../assets/images/icon.png')} />
                <TextInput
                    style={tw`flex text-center text-black-300 w-full bg-blue-200 px-3 py-10 text-lg py-4 text-sm rounded-full`}
                    placeholder="Enter Your Email Address..."

                />
                <TextInput
                    style={tw`flex text-black-300 text-center text-xl w-full bg-blue-200 px-3 py-10 py-4 text-sm rounded-full`}
                    placeholder="Enter Your Password..."

                />

                <TouchableOpacity
                    onPress={() => router.push('/Index')
                    }
                    style={[tw`px-4 py-2 rounded-full mb-2 w-full`, { backgroundColor: colors.primary1, borderColor: colors.primary1, borderWidth: 1 }]}>
                    <Text style={[tw`text-lg text-white font-bold text-center`]}>Login</Text>
                </TouchableOpacity >
                <View style={tw`flex flex-row items-center justify-center my-2`}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/SignUp')
                    }>
                        <Text style={tw`text-blue-900 text-blue-800 ml-2 font-bold`}>Sign Up</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default Login