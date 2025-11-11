import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/movieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/searchbar'

const search = () => {

  const [searchQuery, setSearchQuery] = useState('')
  
  const {
        data: movies, 
        error: moviesErr,
        refetch: reloadMovie,
        reset,
        loading: moviesLoading,      
  } = useFetch(() => fetchMovies({query : searchQuery}), false)

  useEffect(() => {
    const timeoutId = setTimeout(async() => {

      if(searchQuery.trim()){
        await reloadMovie()
      } else{
        reset()
      }
    }, 500)
    return() => clearTimeout(timeoutId)
  }, [searchQuery])


  //console.log(moviesLoading, moviesErr, movies?.results.length, searchQuery)

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='w-full flex-1 absolute z-0' resizeMode='cover'/>
      <FlatList
        data={movies?.results || []}
        renderItem={({item}) => (
          <MovieCard
            {...item}
          />
        )}                                  
        keyExtractor= {(item) => item.id.toString()}

        numColumns={3}
        className='px-5'
        columnWrapperStyle={{
          justifyContent:'flex-start',
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        ListHeaderComponent={
          <>
          <View className='flex-row w-full justify-center mt-20'>
            <Image source={icons.logo} className='w-12 h-10'/>
          </View>

          <View className='my-10'>
            <SearchBar 
              placeholder='Search for your movie....'
              value = {searchQuery}
              onChangeText={(text:string) => setSearchQuery(text)}  
            />
          </View>


          {moviesLoading && (
            <ActivityIndicator size="large"/>
          )}
          {moviesErr && (
            <Text className='text-red-500 px-5 my-3'>
              Error: {moviesErr.message}
            </Text>
          )}

          {!moviesLoading && !moviesErr && searchQuery.trim() && movies?.results.length > 0 &&(
            <Text className='text-xl text-white font-bold py-4'>Search results for {' '}
            <Text className='text-purple-400'>{searchQuery}</Text>
            </Text>
          )}
          </>
        }

        ListEmptyComponent={
          !moviesLoading && !moviesErr ? (
          <View className='mt-10 px-5'>
            <Text className='text-center text-gray-500'>
              {searchQuery.trim() ? 'Are you sure thats the name ? 🤔' : "Search for a movie 🍿🥤"}
            </Text>

          </View>
          ) : null
        }

      />
    </View>
  )
}
export default search