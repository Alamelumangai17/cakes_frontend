import * as React from 'react';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './components/Loginscreen/LogoScreen'; // Adjust the path as needed
import AdminScreen from './components/manager/AdminScreen'; // Create these screens
import SignUpScreen from './components/customer/SignUpScreen'; // Create these screens
import SignInScreen from './components/customer/SignInScreen';
import HomeScreen from './components/customer/HomeScreen';
import ADMINHOMESCREEN from './components/manager/Adminhomescreen';
import CartScreen from './components/customer/CartScreen';
import DetailsScreen from './components/customer/DetailsScreen';
import BestSeller from './components/customer/Bestseller';
import AddPayment from './components/manager/AddPayment';
import Allcakes from './components/customer/Allcakes';
import { CartProvider } from './components/customer/cartContext';
import OrderList from './components/manager/GetallorderDate';
import PhoneNumberForm from './components/manager/Getparticularorder';
import AllCakesScreen from './components/customer/seeall';
import CupCakeScreen from './components/customer/CupCakeScreen';
import DonutScreen from './components/customer/DonutScreen';
import Profile from './components/customer/Profile';
import BiscuitScreen from './components/customer/BiscuitScreen';
import OrderPage from './components/customer/orderpage';
import payment from './components/customer/payment';



const Stack = createStackNavigator();

const App = () => {
  
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoScreen">
        <Stack.Screen name="LogoScreen" component={LogoScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} options={{ title: 'Admin' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'signup screen' }} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} options={{title:'sigin Screen'}} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title:'home Screen'}} />
        <Stack.Screen name='ADMINHOMESCREEN' component={ADMINHOMESCREEN} options={{title:' Admin home screen'}} />
        <Stack.Screen name='Bestseller' component={BestSeller} options={{title:' Best seller'}}  />
        <Stack.Screen name='CartScreen' component={CartScreen} options={{title:'CartScreen'}}  />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{title:'DetailsScreen'}} />
        <Stack.Screen name='AddPayment' component={AddPayment} options={{title:' AddPayment'}} />
        <Stack.Screen name='Allcakes' component={Allcakes} options={{title:' Allcakes'}} />
        <Stack.Screen name='GetallorderDate' component={OrderList} options={{title:'Get All Order Date '}} />
        <Stack.Screen name='OrderList' component={PhoneNumberForm} options={{title:'Get Particular Order'}} />
        <Stack.Screen name='Seeall' component={AllCakesScreen} options={{title:'See All Cakes'}} />
        <Stack.Screen name='CupCakeScreen' component={CupCakeScreen} options={{title:'CupCakeScreen'}} />
        <Stack.Screen name='DonutScreen' component= { DonutScreen}  options={{title:' DonutScreen'}} />
        <Stack.Screen name='BiscuitScreen ' component= {BiscuitScreen}  options={{title:'BiscuitScreen '}} />
        <Stack.Screen name='orderpage' component={OrderPage} options={{title:'orderpage'}}/>  
     <Stack.Screen name='profile' component={Profile} options={{title:'Profile'}}/>
     <Stack.Screen name='Payment' component={payment} options={{title:'Payment'}}/>

      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App;