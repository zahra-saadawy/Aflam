import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "../MovieCard";
import React from "react";

const { width } = Dimensions.get("window");

interface TrendingMoviesProps {
  data: any[];
}

const TrendingMovies = ({ data }: TrendingMoviesProps) => {
  const CARD_HEIGHT = 390;
  data = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ];

  return (
    <View >
      <Text
        style={{
          color: "white",
          fontSize: 22,
          marginHorizontal: 15,
          position: "fixed",
          top: 15
        }}
      >
        Trending
      </Text>
      <Carousel
        width={width}
        height={CARD_HEIGHT}
        data={data}
        style={{ alignSelf: "center",justifyContent: "center", alignItems: "center"  }}
        loop
        autoPlay={false}
        scrollAnimationDuration={600}
        containerStyle={{ overflow: "visible",  justifyContent: "center", alignItems: "center" , alignSelf: "center"}}	
        mode="parallax"
        pagingEnabled={true}
        modeConfig={{
          parallaxScrollingScale: 0.82,           
          parallaxScrollingOffset: 149,       
          parallaxAdjacentItemScale: 0.75      
        }}
        
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default TrendingMovies;
