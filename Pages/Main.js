import { createStackNavigator } from "@react-navigation/stack";
import Mainpage from "./Mainpage";
import EMI from "./EMI";
import LoanAmount from "./LoanAmount";
import InterestRate from "./InterestRate";
import Duration from "./Duration";

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
      <Stack.Screen name="Loan Amount" component={LoanAmount}></Stack.Screen>
      <Stack.Screen
        name="Interest rate"
        component={InterestRate}
      ></Stack.Screen>
      <Stack.Screen name="Tenor/Duration" component={Duration}></Stack.Screen>
    </Stack.Navigator>
  );
}
