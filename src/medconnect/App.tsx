import 'react-native-gesture-handler';

import {NavigationContainer} from "@react-navigation/native"
import {View, Text} from 'react-native';
import { StartNavigation } from './src/navigation/StartNavigation';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
   <NavigationContainer>
    <AuthProvider>
      <StartNavigation />
    </AuthProvider>
   </NavigationContainer>
  );
};

export default App;
