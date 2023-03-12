import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '_scenes/home/HomeScreen';
import AboutScreen from '_scenes/home/AboutScreen';

const AppNavigator = () =>{
  const tab = createBottomTabNavigator();
  return(
    <tab.Navigator>
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="about" component={AboutScreen} />
    </tab.Navigator>
  )
}
export default AppNavigator;