import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '_scenes/login/LoginScreen';

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


export default AuthNavigator;