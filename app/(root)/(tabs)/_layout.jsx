import { Tabs } from 'expo-router';
import { House, Search, User } from 'lucide-react-native';


const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                // tabBarShowLabel: false,
                headerShown:false,
                tabBarActiveTintColor:'#0061FF',
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    
                    borderTopWidth: 1,
                    borderTopColor: '#0061FF1A',
                    color:"black"
                }

            }}
        >
            <Tabs.Screen
                name="Index"
                options={{
                    title:'Home',
                    tabBarIcon: ({ focused }) => (
                         <>{focused ? <House color="#0061FF" /> : <House color='black'/>}</>
                    )
                }}
           />
            <Tabs.Screen
                name="Explore"
                options={{
                    title:'Explore',
                    tabBarIcon: ({ focused }) => (
                         <>{focused ? <Search color="#0061FF" /> : <Search color='black'/>}</>
                    )
                }}
           />
            <Tabs.Screen
                name="Profile"
                options={{
                    title:'Profile',
                    tabBarIcon: ({ focused }) => (
                         <>{focused ? <User color="#0061FF" /> : <User color='black' />}</>
                    )
                }}
           />
        </Tabs>
    )
}

export default TabsLayout