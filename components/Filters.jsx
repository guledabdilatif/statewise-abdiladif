import { categories } from '@/constants/data';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
const Filters = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
                const isSelected = selectedCategory === category.title;
                return (
                    <TouchableOpacity key={index} style={tw`mr-5 flex flex-col px-4 py-1 rounded-full items-start
                    ${isSelected ? 'bg-blue-500 text-white' : 'bg-transparent'}`} onPress={() => setSelectedCategory(category.title)}>
                        <Text style={[tw`text-base font-bold`, isSelected ? tw`text-white` : tw`text-black`]}>{category.title}</Text> 
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    )
}

export default Filters