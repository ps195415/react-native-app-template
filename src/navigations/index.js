import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import { useSelector, useDispatch } from 'react-redux';

const Index = () => {
  const { token } = useSelector((state) => state.authToken);

  return (
    <NavigationContainer>
      {
        token ? <AppNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  );
}

export default Index