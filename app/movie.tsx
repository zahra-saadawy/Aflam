import { View, TouchableOpacity, Dimensions, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "@/components/Cast";
import MovieList from "@/components/MovieList";
import Loading from "@/components/Loading";
var { width, height } = Dimensions.get("window");
// const ios = Platform.OS === "ios";
const MovieScreen = () => {
  const { params: item } = useRoute();
  const { back } = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [cast, setCast]= useState()
  const [similarMovies, setSimilarMovies] = useState([
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
    { id: 4, title: "Movie 4" },
    { id: 5, title: "Movie 5" },
    { id: 6, title: "Movie 6" },
    { id: 7, title: "Movie 7" },
    { id: 8, title: "Movie 8" },
    { id: 9, title: "Movie 9" },
    { id: 10, title: "Movie 10" },
  ]);

  const toggleFavorite = (value: boolean) => {
    setIsFavorite(value);
  };
  let cast = [
    { id: 1, name: "Actor 1", role: "Role 1" },
    { id: 2, name: "Actor 2", role: "Role 2" },
    { id: 3, name: "Actor 3", role: "Role 3" },
  ];

  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#222222" }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Poster */}
        <View>
          <Image
            resizeMode="cover"
            source={require("../assets/images/Screenshot 2025-04-14 172034.png")}
            style={{ width: width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={[
              "rgba(0,0,0,0)",
              "rgba(34,34,34,0.5)",
              "rgba(34,34,34,0.8)",
              "rgba(34,34,34,1)",
              "rgba(34,34,34,1)",
            ]}
            style={{
              width: width,
              height: height * 0.55,
              position: "absolute",
              top: 0,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>

        {/* Back + Favorite Buttons */}
        <SafeAreaView
          style={{
            position: "absolute",
            top: 5,
            left: 20,
            right: 20,
            zIndex: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 50,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => back()}
          >
            <ArrowSmallLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => toggleFavorite(!isFavorite)}
          >
            <HeartIcon
              size={28}
              color={isFavorite ? theme.background : "white"}
              strokeWidth={2.5}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : ( 
          <View style={{ paddingHorizontal: 20, marginTop: -150 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              Ant Man and the Wasp: Quantumania
            </Text>
            <Text
              style={{
                color: "gray",
                paddingTop: 10,
                textAlign: "center",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Released • 2020 • 170 min
            </Text>
            <Text
              style={{
                color: "gray",
                paddingTop: 10,
                textAlign: "center",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Action • Thriller • Comedy
            </Text>
            <Text
              style={{
                color: "gray",
                paddingTop: 10,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur, nisl eget consectetur sagittis, nisl nunc egestas nisi,
              vitae aliquam nunc nisl eget nunc.
            </Text>
          </View>
        )}
        {/* Cast & Similar Movies */}
        <Cast cast={cast} />
        <MovieList
          title="Similar Movies"
          movies={similarMovies}
          hideSeeAll={true}
        />
      </ScrollView>
    </>
  );
};
export default MovieScreen;
