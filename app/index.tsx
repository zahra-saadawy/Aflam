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
import { useState } from "react";
import TrendingMovies from "@/components/TrendingMovies";
import MovieList from "@/components/MovieList";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
const ios = Platform.OS === "ios";
export const options = {
  headerShown: false,
};
export default function HomeScreen() {
  const { push } = useRouter();
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [upcomingMovies, setupcomingMovies] = useState([]);
  // const [topRatedMovies, settopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const upcomingMovies = [
    { id: 1, title: "Movie 1", releaseDate: "2023-12-01" },
    { id: 2, title: "Movie 2", releaseDate: "2023-12-15" },
    { id: 3, title: "Movie 3", releaseDate: "2024-01-10" },
  ];
  const topRatedMovies = [
    { id: 1, title: "Movie 1", rating: 9.5 },
    { id: 2, title: "Movie 2", rating: 8.7 },
    { id: 3, title: "Movie 3", rating: 9.0 },
  ];
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
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80,
            backgroundColor: "whit00",
          }}
        >
          <TrendingMovies data={trendingMovies} />
          <MovieList title="Upcoming Movies" movies={upcomingMovies} />
          <MovieList title="Top Rated Movies" movies={topRatedMovies} />
        </ScrollView>
      )}
    </View>
  );
}
