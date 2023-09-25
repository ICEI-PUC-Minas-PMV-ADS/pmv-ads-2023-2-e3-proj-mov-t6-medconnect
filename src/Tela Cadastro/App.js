import { StyleSheet, Text, View } from 'react-native';
import CadastroScreen from './components/CadastroScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <CadastroScreen/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

