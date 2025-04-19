import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Cast = ({ cast }: any) => {
  let characterName = "John Wick";
  let personName = "Tom Holland";
  const {push} = useRouter()
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          marginLeft: 15,
          paddingVertical: 10,
        }}
      >
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0, paddingBottom: 20 }}
      >
        {cast &&
          cast.map((person: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginLeft: 15, justifyContent: "center" }}
                onPress={() => push({ pathname: "/person", params: person })}  
                >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 60,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/images/download.jpg")}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <Text style={{ color: "white", fontSize: 14, marginTop: 2 }}>
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + "..."
                    : characterName}
                </Text>
                <Text style={{ color: "gray", fontSize: 14, marginTop: 2 }}>
                  {personName.length > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
