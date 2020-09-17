import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to home page" onPress={()=>{
        props.navigation.push("Detail")
      }}></Button>
    </View>
  );
}


function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title :"Home Page"}} component={HomeScreen} />
        <Stack.Screen name="Detail" options={{title :"Home Page"}} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;