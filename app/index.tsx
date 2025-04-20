import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import TrendingMovies from "@/components/TrendingMovies";
import MovieList from "@/components/MovieList";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
import {
  useTopRatedMovies,
  useTrendingMovies,
  useUpcomingMovies,
} from "./hooks";
const ios = Platform.OS === "ios";
export const options = {
  headerShown: false,
};
const HomeScreen = () => {
  const { push } = useRouter();
  // const [trendingMovies, setTrendingMovies] = useState([]);
  // const [upcomingMovies, setupcomingMovies] = useState([]);
  // const [topRatedMovies, settopRatedMovies] = useState([]);

  const { data: trendingMovies, isLoading, error } = useTrendingMovies();
  const { data: topRatedMovies } = useTopRatedMovies();
  const { data: upcomingMovies } = useUpcomingMovies();

  return (
    <View style={{ flex: 1, backgroundColor: "#222222" }}>
      <SafeAreaView style={{ height: 110 }}>
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text
            style={[
              { color: "yellow", fontSize: 20, fontWeight: "bold" },
              styles.text,
            ]}
          >
            A<Text style={{ color: "white" }}>FLAM</Text>
          </Text>
          <TouchableOpacity onPress={() => push("/search")}>
            <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80,
            backgroundColor: "whit00",
          }}
        >
          {trendingMovies.results.length > 0 && (
            <TrendingMovies data={trendingMovies?.results} />
          )}
          {upcomingMovies?.results.length > 0 && (
            <MovieList title="Upcoming Movies" movies={upcomingMovies?.results} />
          )}
          {topRatedMovies?.results.length > 0 && (
            <MovieList title="Top Rated Movies" movies={topRatedMovies?.results} />
          )}
        </ScrollView>
      )}
    </View>
  );
};
export default HomeScreen;
