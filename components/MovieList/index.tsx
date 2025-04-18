import { View, Text, TouchableOpacity , Image, Dimensions} from "react-native";
import React from "react";
import { styles } from "@/theme";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useRouter } from "expo-router";

interface Movie {
  id: number;
  title: string;
}

interface MovieListProps {
  title: string;
  movies: Movie[];
}
const { width, height } = Dimensions.get("window");
const MovieList = (movieList: MovieListProps) => {
  const { title, movies } = movieList;
const {push }= useRouter();
  return (
    <View style={{ marginBottom: 28 }}>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
          }}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={[{ color: "white", fontSize: 16 }, styles.text]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
>
        {movies.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => push({ pathname: "/movie", params: item })}  
            >
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require("../../assets/images/Screenshot 2025-04-14 172034.png")}
                  style={{width: width*0.33, height: height*0.22, borderRadius: 20}}
                />
                <Text style={{ color: "white", fontSize: 16, marginTop: 5 }}>
                    {item.title.length>14? title.slice(0,14)+"...": item.title}	
                </Text>
              </View>

            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
