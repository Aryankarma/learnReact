import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header  from './src/Header';
import Detail from './src/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component ={Home}
          name = 'Home'
          options={{
            headerTitle: () => <Header name="NoteAdd" />,
            headerStyle:{
              backgroundColor:'#4c00b0',
              height:120,
            }
          }}
        />
        <Stack.Screen
        component={Detail}
        name ='Detail'
        options={{
            headerTitle: () => <Header name="Edit details" 
            />,
            headerStyle:{
              backgroundColor:'#4c00b0',
              height:120,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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