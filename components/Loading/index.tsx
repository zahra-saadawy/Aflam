import { View, Text, Dimensions } from "react-native";
import React from "react";
import * as Progress from 'react-native-progress';
import { theme } from "@/theme";
const { width, height } = Dimensions.get("window");
const Loading = () => {
  return (
    <View
      style={{
        height,
        width,
        position: "absolute",
        backgroundColor: "#222222",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
      }}
    >
     <Progress.CircleSnail thickness={4} size={60} color={theme.background}/>
    </View>
  );
};

export default Loading;
