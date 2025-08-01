import { useRouter } from 'expo-router';
import { Heart } from 'lucide-react-native';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { facilities } from '../constants/data';
import { icons } from '../constants/icons';
import { images } from '../constants/images';
const Details = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={tw`flex-1`}>
            <ScrollView style={tw``} showsHorizontalScrollIndicator={true}>
                <View style={tw`relative`}>
                    <Image source={images.japan} style={tw`w-full h-64`} />
                    <View style={tw`absolute top-0 left-0 right-0 flex flex-row items-center justify-between px-5 pt-5 mt-5 z-6`}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Image source={icons.backArrow} style={tw`w-7 h-7 z-5`} />
                        </TouchableOpacity>
                        <View style={tw`flex flex-row items-center gap-3`}>
                         <TouchableOpacity>
                                    <Heart color={"black"} />
                                </TouchableOpacity>
                            <Image source={icons.send} style={tw`w-6 h-6 z-5`} />
                        </View>
                    </View>
                    <Image source={images.cardGradient} style={tw`absolute bottom-0 w-full z-1`} />
                </View>
                <View style={tw`px-3`}>
                    <Text style={tw`text-[24px] font-bold mt-4`}>Modernica Apartment</Text>
                    <View style={tw`flex flex-row gap-4`}>
                        <Text style={tw`bg-blue-100 p-2 text-blue rounded-full`}>Apartment</Text>
                        <View style={tw`flex flex-row items-center`}>
                            <Image source={icons.star} style={tw`h-6 w-6`} />
                            <Text style={tw`font-semibold`} >4.5</Text>
                        </View>
                    </View>
                    <View style={tw`flex flex-row justify-around items-center mt-4`}>
                        <View style={tw`flex flex-row gap-3 items-center`}>
                            <View style={tw`p-5  h-10 w-10 rounded-full flex items-center justify-center bg-blue-100`}>
                                <Image source={icons.bed} style={tw`h-6 w-6`} />
                            </View>
                            <Text style={tw`font-semibold`}>8 beds</Text>
                        </View>
                        <View style={tw`flex flex-row gap-3 items-center`}>
                            <View style={tw`p-5  h-10 w-10 rounded-full flex items-center justify-center bg-blue-100`}>
                                <Image source={icons.bath} style={tw`h-6 w-6`} />
                            </View>
                            <Text style={tw`font-semibold`}>3 bath</Text>
                        </View>
                        <View style={tw`flex flex-row gap-3 items-center`}>
                            <View style={tw`p-5  h-10 w-10 rounded-full flex items-center justify-center bg-blue-100`}>
                                <Image source={icons.area} style={tw`h-6 w-6`} />
                            </View>
                            <Text style={tw`font-semibold`}>2,000 sqft</Text>
                        </View>
                    </View>
                    {/* agents */}
                    <View style={tw`flex flex-row items-end justify-between mt-7 mb-6`}>
                        <View style={tw`flex flex-row items-center gap-1`}>
                            <Image source={images.avatar} style={tw`h-12 w-12`} />
                            <View>
                                <Text style={tw`font-bold text-lg`}>Abdiladif Mohamud</Text>
                                <Text style={tw`font-semd`}>Owner</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row gap-1`}>
                            <Image source={icons.chat} style={tw`h-7 w-7`} />
                            <Image source={icons.phone} style={tw`h-7 w-7`} />
                        </View>
                    </View>
                    {/* Overview  */}
                    <View style={tw`mt-5`}>
                        <Text style={tw`text-xl font-bold`}>Overview</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Mollitia quibusdam velit, deserunt adipisci ex cum.
                            Non, eaque. Reprehenderit quisquam qui doloremque iure consectetur mollitia
                            fugit enim quas ut ipsum! Explicabo!</Text>
                    </View>
                    {/* Facilities  */}
                    <View style={tw`mt-5`}>

                        <View style={tw`flex flex-row items-center justify-between flex-wrap`} >
                            {facilities.map((item, index) => (
                                <View style={tw`font-semibold flex items-center w-1/4 mb-4`} key={index}>
                                    <View style={tw`p-5  h-10 w-10 rounded-full flex items-center justify-center bg-blue-100`}>
                                        <Image source={item.icon} style={tw`h-6 w-6`} />
                                    </View>
                                    <Text style={tw`text-center text-sm font-semibold`}>{item.title}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Gallery  */}
                    <View style={tw`my-5`}>
                        <Text style={tw`my-2 font-bold text-xl`}>Gallery</Text>
                        <View style={tw`flex flex-row justify-around `}>
                            <Image source={images.japan} style={tw`rounded w-25 h-25 `} />
                            <Image source={images.newYork} style={tw`rounded w-25 h-25 `} />
                            <Image source={images.japan} style={tw`rounded w-25 h-25 `} />
                        </View>
                    </View>
                    {/* Location  */}
                    <View style={tw`my-2`}>
                        <Text style={tw`my-2 font-bold text-xl`}>Gallery</Text>
                        <View style={tw`flex flex-row items-center`}>
                            <Image source={icons.location} style={tw`h-8 w-8`} />
                            <Text>Building X, South B, kedong road nairobi-kenya</Text>
                        </View>
                        <Image source={images.map} style={tw`w-full h-60 mt-5 rounded`} />


                    </View>
                    {/* Reviews  */}
                    <View style={tw`my-5`}>
                        <View style={tw`flex flex-row items-center justify-between mt-2`}>
                            <View style={tw`flex flex-row items-center gap-1`}>
                                <Image source={icons.star} style={tw`h-6 w-6`} />
                                <Text style={tw`font-extrabold text-xl`}>4.5</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={tw`text-blue-800 font-bold text-lg`}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`mt-1.5 flex flex-row gap-2 items-center`}>
                            <Image source={images.avatar} style={tw`h-10 w-10`} />
                            <Text style={tw`font-bold text-lg`}>Abdiladif Mohamud</Text>
                        </View>
                        <Text style={tw`font-light mt-1 text-lg mb-2`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Unde reiciendis quia numquam. Corporis rerum illum autem odit,
                            error quisquam facere, modi mollitia tenetur reprehenderit iure animi?
                            Distinctio in earum quidem.</Text>
                        <View style={tw`mt-1.5 flex flex-row items-center justify-between`}>
                            <View style={tw`flex flex-row gap-1 items-center`}>
                                <TouchableOpacity>
                                    <Heart color={"blue"} />
                                </TouchableOpacity>
                                <Text style={tw`font-extrabold font-lg`}>978</Text>
                            </View>
                            <Text>7 days ago</Text>
                        </View>
                    </View>
                    {/* price  */}
                    <View style={tw`my-4 flex flex-row gap-3 items-center `}>
                        <View style={tw``}>
                            <Text>Price</Text>
                            <Text style={tw`font-extrabold text-xl text-blue-700`}>Kes 20M</Text>
                        </View>
                        <TouchableOpacity style={[tw`px-2 py-2 flex-1 bg-blue-700 rounded-full flex flex-row items-center justify-center `, {elevation:90, shadowColor:"black"}]}>
                            <Text style={tw`font-extrabold text-white text-lg`}>Booking Now!</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details