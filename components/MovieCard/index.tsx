import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";

interface MovieCardProps {
  item: any;
}
export const options = {
  headerShown: false,
};


const MovieCard = ({ item }: MovieCardProps) => {
  const {push} = useRouter()
  const navigation= useNavigation()
  const handlePress = () => {
    push({pathname: "/movie", params: item})
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/Screenshot 2025-04-14 172034.png")}
          style={styles.poster}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 290,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    overflow: "visible",
  },
  poster: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
});

export default MovieCard;
