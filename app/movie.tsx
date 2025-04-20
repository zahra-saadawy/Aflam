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
import { image500 } from "./api/moviedb";
import { useMovieDetails, useMovieCredits, useSimilarMovies } from "./hooks";
var { width, height } = Dimensions.get("window");
// const ios = Platform.OS === "ios";
const MovieScreen = () => {
  const { params: item } = useRoute();
  const { back } = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (value: boolean) => {
    setIsFavorite(value);
  };
  let cast = [
    { id: 1, name: "Actor 1", role: "Role 1" },
    { id: 2, name: "Actor 2", role: "Role 2" },
    { id: 3, name: "Actor 3", role: "Role 3" },
  ];
  const { data: details, isLoading: loadingDetails } = useMovieDetails(
    item?.id
  );
  const { data: credits, isLoading: loadingCredits } = useMovieCredits(
    item?.id
  );
  const { data: similar, isLoading: loadingSimilar } = useSimilarMovies(
    item?.id
  );


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
            source={{
              uri: item?.poster_path
                ? image500(item?.poster_path)
                : "https://via.placeholder.com/500",
            }}
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

        {loadingDetails ? (
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
              {details?.title}
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
              {details?.status} • {item.release_date.split("-")[0]} •{" "}
              {details?.runtime} min
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginHorizontal: 10,
              }}
            >
              {details?.genres?.map((genre: any, index: any) => {
                let showDot = index + 1 != details.genres.length;
                return (
                  <Text
                    key={index}
                    style={{
                      color: "gray",
                      paddingTop: 10,
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    {} {genre?.name} {showDot ? "•" : ""}
                  </Text>
                );
              })}
            </View>

            <Text
              style={{
                color: "gray",
                paddingTop: 10,
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 22,
              }}
            >
              {details?.overview}
            </Text>
          </View>
        )}
        {/* Cast & Similar Movies */}
        <Cast cast={credits?.cast} />

        {similar?.results?.length > 0 && (
          <MovieList
            title="Similar Movies"
            movies={similar.results}
            hideSeeAll={true}
          />
        )}
      </ScrollView>
    </>
  );
};
export default MovieScreen;
