import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { colors } from '../constants/colors'
import { icons } from '../constants/icons'
const SignIn = () => {
    const handleLogin = () => {
    }
    return (
        <SafeAreaView style={tw`flex-1`}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Image
                    source={require('@/assets/images/onboarding.png')}
                    resizeMode='cover'
                    style={tw`h-[65%] w-full`}
                />
                <View style={tw`px-10 justify-center items-center`}>
                    <Text style={tw`text-[20px] mt-[10px] text-center`}> Welcome  to <Text>Abdiladif's</Text> State</Text>
                    <Text style={tw` font-bold text-center text-3xl my-2`}> Lets Get You closer to {"\n"}
                        <Text style={[{ color: colors.primary1 }, tw`text-3xl font-bold`]}>Your Dream Home</Text>
                    </Text>
                    <Text style={tw`text-center text-lg mt-4 `}> Login to Abdiladif's-State</Text>
                    <TouchableOpacity onPress={handleLogin} style={tw`bg-white w-full py-3 pl-3 mt-5 rounded-full shadow-md shadow-zinc-300 py-4 mt-5 flex-row justify-center items-center gap-4 m`}>
                        <Image source={icons.google} style={tw`w-5 h-5`} resizeMode="contain" />
                        <Text style={[tw`text-lg text-black-300`, { color: colors.black1 }]}>Continue with google</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn