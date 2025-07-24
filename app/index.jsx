import { useRouter } from 'expo-router'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { colors } from '../constants/colors'
const Index = () => {
    const router = useRouter()
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
                    <View style={tw`mt-3 flex-row items-stretch justify-between gap-1`}>
                        {/* <Image source={icons.google} style={tw`w-5 h-5`} resizeMode="contain" /> */}
                        <TouchableOpacity 
                        onPress={()=>router.push('/Index')
                        }
                        style={[tw`px-4 py-2 rounded-full mb-2`, {backgroundColor:colors.primary1,  borderColor: colors.primary1, borderWidth: 1, width:300 }]}>
                            <Text style={[tw`text-lg text-white font-bold text-center`]}>Get Started</Text>
                        </TouchableOpacity >
                        {/* <TouchableOpacity style={[tw` px-4 py-2 rounded-[4px]`, {backgroundColor:colors.primary1,  borderColor: colors.primary1, borderWidth: 1 }]}>
                            <Text style={[tw`text-lg text-white font-bold`]}>Login</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={[tw`px-4 py-2 rounded-[4px] border border-black`, ]}>
                            <Text style={[tw`text-lg`]}>Sign Up</Text>
                        </TouchableOpacity> */}

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index