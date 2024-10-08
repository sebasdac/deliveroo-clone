import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchIcon from '../icons/searchIcon';

import {
    UserIcon,
    ChevronDownIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
    
} from "react-native-heroicons/outline";

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/*Search*/}

      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className = 'flex-row space-x-2 flex-1  bg-gray-200 p-3'>
           <MagnifyingGlassIcon color="gray" size={20}/>
           <TextInput placeholder='Restaruants and cuisines'/>
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
        
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
