import { View, Text } from "react-native";
import React from "react";

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
      <Text className="text-5xl">home</Text>
    </View>
  );
};

export default home;
