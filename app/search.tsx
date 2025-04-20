import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TextInput } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
import { debounce } from "lodash";
import { useSearchMovies } from "./hooks";
import { image342 } from "./api/moviedb";
const { width, height } = Dimensions.get("window");
const Search = () => {
  const { push } = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value); 
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  const { data: searchResults, isLoading } = useSearchMovies(query);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222222" }}>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 9999,
          zIndex: 100,

        }}
      >
        <TextInput
          placeholder="Search For Movies"
          placeholderTextColor={"lightgray"}
          onChangeText={handleTextDebounce}
          style={{
            // paddingBottom: 10,
            paddingLeft: 20,
            fontWeight: "semibold",
            color: "white",
          }}
        />
        <TouchableOpacity
          onPress={() => {
            push("/");
          }}
          style={{
            borderRadius: 9999,
            padding: 10,
            margin: 5,
            backgroundColor: "gray",
          }}
        >
          <XMarkIcon size={20} color={"white"} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading />
      ) : searchResults?.results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "semibold",
              marginLeft: 15,
              marginBottom: 15,
              fontSize: 17,
            }}
          >
            Results ({searchResults?.results.length})
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {searchResults?.results?.map((item: any, index: number) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  style={{ marginBottom: 10 }}
                  onPress={() => push({ pathname: "/movie", params: item })}
                >
                  <Image
                    source={{uri: image342(item.poster_path)}}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                      borderRadius: 20,
                    }}
                  />
                  <Text
                    style={{ color: "lightgray", marginLeft: 10, marginTop: 4 }}
                  >
                    {item.title.length > 22
                      ? item.title.slice(0, 22) + "..."
                      : item.title}
                  </Text>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row",
            marginTop: 120,
          }}
        >
          <Image
            source={require("../assets/images/movietime-removebg-preview.png")}
            style={{ height: 320, width: 320 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default Search;
