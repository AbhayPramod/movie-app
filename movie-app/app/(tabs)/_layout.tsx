import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'


const TabIcon = ( {focused, icon, title} : any) => {

    if (focused){
        return(
            <ImageBackground 
                source={images.highlight} 
                className=' flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-[20px] overflow-hidden'>
                    <Image source = {icon} tintColor = "#151312" className="size-5"/>
                    <Text className='text-black text-base font-semibold ml-2'>{title}</Text>
            </ImageBackground>

        )
    }

    return(
        <View className='flex-1 size-full justify-center items-center mt-4 mb-2 rounded-full'>
            <Image source={icon}
            tintColor='#a8b5db'
            className='size-5'/>
        </View>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            
            tabBarItemStyle:{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row',
            },
            tabBarStyle:{
                backgroundColor: '#0f0D23',
                borderRadius: 15,
                marginHorizontal: 20,
                marginBottom: 36,
                borderTopWidth: 0,         
                elevation: 0,             
                shadowOpacity: 0, 
                height: 50,
                borderWidth: 0,
                borderColor: '#0f0d23',
                position: "absolute",
                overflow: 'hidden',
                
                
                
            }
        }}>
        <Tabs.Screen
            name = "index"
            options=
                {{
                    title: "home",
                    headerShown : false,
                    tabBarIcon : ({ focused }) => (
                        <TabIcon focused = {focused} 
                                icon={icons.home} 
                                title='Home'/>
                    )
                }}
        />
        <Tabs.Screen
            name = "search"
            options=
                {{
                    title: "Search",
                    headerShown : false,
                    tabBarIcon : ({ focused }) => (
                        <TabIcon focused = {focused} 
                                icon={icons.search} 
                                title='Search'/>
                    )
                }}
        />
        <Tabs.Screen
            name = "saved"
            options=
                {{
                    title: "Saved",
                    headerShown : false,
                    tabBarIcon : ({ focused }) => (
                        <TabIcon focused = {focused} 
                                icon={icons.save} 
                                title='Saved'/>
                    )
                }}
        />
        <Tabs.Screen
            name = "profile"
            options=
                {{
                    title: "Profile",
                    headerShown : false,
                    tabBarIcon : ({ focused }) => (
                        <TabIcon focused = {focused} 
                                icon={icons.person} 
                                title='Profile'/>
                    )
                }}
        />
    </Tabs>
  )
}

export default _layout