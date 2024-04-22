import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizForm from './screens/Form';
import Dashboard from './screens/Dashboard';
import QuizNamePage from './screens/QuizNamePage';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ animation: 'none' }}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name='QuizNamePage'
          component={QuizNamePage}
          options={{ title: 'Quiz Name' }}
        />
        <Stack.Screen
          name='QuizForm'
          component={QuizForm}
          options={{ title: 'Quiz Name' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
