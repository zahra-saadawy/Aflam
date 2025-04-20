import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { image185 } from "@/app/api/moviedb";

const Cast = ({ cast }: any) => {
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
                    source={{uri: person.profile_path ? image185(person.profile_path) : "https://via.placeholder.com/500"}}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <Text style={{ color: "white", fontSize: 14, marginTop: 2 }}>
                  {person?.character.length > 10
                    ? person?.character.slice(0, 10) + "..."
                    : person?.character}
                </Text>
                <Text style={{ color: "gray", fontSize: 14, marginTop: 2 }}>
                  {person?.original_name.length > 10
                    ? person?.original_name.slice(0, 10) + "..."
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
