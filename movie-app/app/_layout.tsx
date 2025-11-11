import { Stack } from "expo-router";
import 'expo-env'
import './global.css'


export default function RootLayout() {
  
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{headerShown : false}}  
    />
    <Stack.Screen
      name="movies/[id]"
      options={{headerShown : false}}
    />
  </Stack>

}
