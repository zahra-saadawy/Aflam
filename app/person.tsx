import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/theme";
import { ArrowSmallLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { useRouter } from "expo-router";
import MovieList from "@/components/MovieList";
import Loading from "@/components/Loading";
import { image185, image342 } from "./api/moviedb";
import { usePersonCredits, usePersonDetails } from "./hooks";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function PersonScreen() {
  const {params: item}= useRoute();
  const { back } = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = (value: boolean) => {
    setIsFavorite(value);
  };
  const { data: details, isLoading: loadingDetails } = usePersonDetails(item?.id);
  const { data: credits, isLoading: loadingCredits } = usePersonCredits(item?.id);

  return (
    <>
      <SafeAreaView
        style={{
          position: "absolute",
          top: 10,
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

     {loadingDetails ? <Loading/>:  <ScrollView
        style={{ flex: 1, backgroundColor: "#222222" , }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
          paddingTop: 70,
        }}
      >
        <View style={{ alignItems: "center" }}>
          {/* Profile Image */}
          <View
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              justifyContent: "center",
              alignItems: "center",
              elevation: 10,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 20,
            }}
          >
            <View
              style={{
                width: 290,
                height: 290,
                borderRadius: 145,
                overflow: "hidden",
              }}
            >
              <Image
                source={{uri: details?.profile_path ? image342(details?.profile_path) : "https://via.placeholder.com/500"}}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>

          {/* Name and Location */}
          <View style={{ marginTop: 13 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {details?.name}
            </Text>
            <Text style={{ color: "gray", textAlign: "center", fontSize: 13 }}>
             {details?.place_of_birth}
            </Text>
          </View>

          {/* Info Tabs */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#383838",
              borderRadius: 30,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: "lightgray",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>Gender</Text>
              <Text style={{ color: "lightgray", fontSize: 12 }}>
                {details?.gender==1 ? 'Female': "Male"}
                </Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: "lightgray",
                paddingHorizontal: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "500",
                  paddingHorizontal: 15,
                }}
              >
                Birthday
              </Text>
              <Text
                style={{
                  color: "lightgray",
                  paddingHorizontal: 15,
                  fontSize: 12,
                }}
              >
                {details.birthday}
              </Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: "lightgray",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>
                Known for
              </Text>
              <Text style={{ color: "lightgray", fontSize: 12 }}>{details.known_for_department}</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>
                Popularity
              </Text>
              <Text style={{ color: "lightgray", fontSize: 12 }}>{details.popularity?.toFixed(2) + ' %'}</Text>
            </View>
          </View>

          <View style={{ marginVertical: 18, paddingLeft: 15 }}>
            <Text style={{ color: "white", fontSize: 20, paddingBottom: 10 }}>
              Biography
            </Text>
            <Text style={{ color: "#686868", fontSize: 14 }}>
             {details.biography}
            </Text>
          </View>
         
           {credits?.cast?.length > 0 && (
          <MovieList
          title="Popular Movies"
          movies={credits.cast}
            hideSeeAll={true}
          />
        )}
        </View>
      </ScrollView>}
    </>
  );
}
