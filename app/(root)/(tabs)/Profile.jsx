import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { settings } from '../../../constants/data';
import { icons } from '../../../constants/icons';
import { images } from '../../../constants/images';
const Profile = () => {

  const SettingItems = ({ icon, title, onPress, textStyle, showArrow = true }) => (
    <TouchableOpacity onPress={onPress} style={tw`flex-row items-center mb-4`}>
      <View style={tw`flex-row items-center gap-2 mb-1`}>
        <Image source={icon} style={tw`w-6 h-6 mr-3`} />
        <Text style={[tw`text-base text-lg `, textStyle]}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} style={tw`w-4 h-4 ml-auto`} />}
    </TouchableOpacity>
  )
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <ScrollView style={tw`p-4`}
        showVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-32`}>
        <View style={tw`flex-row justify-between items-center my-4`}>
          <Text style={tw`text-xl`}>
            Profile
          </Text>
          <Image source={icons.bell} style={tw`w-5 h-5 rounded-full`} />
        </View>
        <View style={tw`flex-row justify-center flex mb-5`}>
          <View style={tw`flex flex-col items-center relative mt-5`}>
            <Image source={images.avatar} style={tw`size-20 rounded-full`} />
            <TouchableOpacity style={tw` bg-white p-1 rounded-full`}>
              <Image source={icons.edit} style={tw`w-4 h-4 absolute bottom-2 right--8`} />
            </TouchableOpacity>
            <Text style={tw`text-[18px] font-bold`}>abdilatif | dynamicDesign</Text>
          </View>

        </View>
        <View>
          {SettingItems({
            icon: icons.calendar, title: "My Bookings", showArrow: true,
            // onPress: () => console.log("My Bookings Pressed"),
          })}
          {SettingItems({
            icon: icons.wallet, title: "Payments", showArrow: true,
            // onPress: () => console.log("Payments Pressed"),
          })}
          <View style={[tw`flex flex-col mt-5`,] }>
            {settings.slice(2).map((item, index) => (
              SettingItems({
                key: index,
                ...item
                // onPress: () => console.log(`${item.title} Pressed`),
              })
            ))}
          </View>

          <View style={[tw`flex flex-col mt-5`,] }>
            {SettingItems({
              icon: icons.logout, title: "Logout", textStyle: tw`text-red-500`, showArrow: false,
              // onPress: () => console.log("Logout Pressed"),
            })}
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile