// External Dependencies
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// Internal Dependencies
import Header from "@/components/Header";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <>
      <Header />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors["light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarIcon: ({ color }) => (
              <AntDesign name="database" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="scroll" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <AntDesign name="shoppingcart" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
