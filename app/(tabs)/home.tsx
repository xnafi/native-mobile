import { View, Text } from "react-native";
import React from "react";
import MobileUI from "../components/Home";

const home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="flex-1 flex-col justify-center items-center w-full"
    >
      <MobileUI />
    </View>
  );
};

export default home;
