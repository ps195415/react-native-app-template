import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Index from '_navigations/index';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>

  );
}

