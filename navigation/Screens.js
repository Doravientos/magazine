import { Animated, Dimensions, Easing, Settings } from "react-native";
import { useSelector } from "react-redux";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../components/Article";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import Login from "../screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ArticlesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Article"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name={"shop"}
                family="ArgonExtra"
                size={20}
                color={"#11CDEF"}
              />
            );
          },
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Pro"
        component={Pro}
        options={{
          title: "Por",
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   mode: "card",
      //   headerShown: "screen",
      // }}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name={"shop"}
                family="ArgonExtra"
                size={20}
                color={"#11CDEF"}
              />
            );
          },
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Tab.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Tab.Navigator>
  );
}

function AppStack(props) {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      {auth.token | auth.isLogged ? (
        <Drawer.Navigator
          style={{ flex: 1 }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerStyle={{
            backgroundColor: "white",
            width: width * 0.8,
          }}
          screenOptions={{
            activeTintcolor: "white",
            inactiveTintColor: "#000",
            activeBackgroundColor: "transparent",
            itemStyle: {
              width: width * 0.75,
              backgroundColor: "transparent",
              paddingVertical: 16,
              paddingHorizonal: 12,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              overflow: "hidden",
            },
            labelStyle: {
              fontSize: 18,
              marginLeft: 12,
              fontWeight: "normal",
            },
          }}
          initialRouteName="HomeStack"
        >
          <Drawer.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            mode: "card",
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </>
  );
}

export default function OnboardingStack(props) {
  const auth = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   {/* <Tab.Screen name="Settings" component={Settings} /> */}
    // </Tab.Navigator>
  );
}
