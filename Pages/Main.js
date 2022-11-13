import { createStackNavigator } from "@react-navigation/stack";
import Mainpage from "./Mainpage";
import EMI from "./EMI";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Mainpage}></Stack.Screen>
      <Stack.Screen name="EMI" component={EMI}></Stack.Screen>
    </Stack.Navigator>
  );
}
