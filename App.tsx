import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { Link, NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
//redux
import store from "../GetirClone/src/redux/store";
import { Provider } from "react-redux";
//deeplinking
import * as Linking from "expo-linking";

const prefix = Linking.createURL('/')

export default function App() {
  //exp://192.168.1.27:19000/--/CartScreen
  const linking= {
    prefixes:[prefix],
    config: {
      screens: {
        Search: {
          screens:{
            CartScreen:{
            path:"CartScreen/:message",
            parse: {
              message: (message:string) => `offffffff-${message}`
            }
            }
          }
        }
      }
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text style={{marginLeft:'50%',marginTop:'50%'}}>Loading...</Text>}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop:'15%',
  },
});
