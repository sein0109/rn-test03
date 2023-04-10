import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../components/Home";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import Wallets from "../components/Wallets";
import Account from "../components/Account";
import CreateWallet from "../components/CreateWallet";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getTabBarIcon = ({ focused, color, size, name }) => {
  const iconName = focused ? name : `${name}-outline`;
  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};
const Wallet = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wallets" component={Wallets} />
      <Stack.Screen name="CreateWallet" component={CreateWallet} />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "home" }),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: (props) =>
            getTabBarIcon({ ...props, name: "account-circle" }),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarIcon: (props) =>
            getTabBarIcon({ ...props, name: "account-circle" }),
        }}
      />
      <Tab.Screen
        name="Wallets"
        component={Wallet}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "post" }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "account" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
