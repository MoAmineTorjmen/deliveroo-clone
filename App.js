import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './Screens/BasketScreen';
import PreparingOrderScreen from './Screens/PreparingOrderScreen';
import DeliveryScrenn from './Screens/DeliveryScrenn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} 
            options={{headerShown:false }}/>
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} />
          <Stack.Screen name="Delivery" component={DeliveryScrenn} 
            options={{headerShown:false }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

 
