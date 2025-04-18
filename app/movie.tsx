import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
// import { styles } from "@/theme";
// var { width, height } = Dimensions.get("window");
// const ios = Platform.OS === "ios";
const MovieScreen = () => {
  const { params: item } = useRoute();
  useEffect(() => {}, [item]);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
        flex: 1,
        backgroundColor: "#222222",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SafeAreaView
          style={{
            position: "absolute",
            top: 2,
            zIndex: 20,
            width: "100%",
            paddingHorizontal: 25,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[
              { borderRadius: 50, width: 25, justifyContent: "center" },
              // styles.background,
            ]}
            onPress={() => console.log("Back")}
          >
            <ArrowSmallLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { borderRadius: 15, width: 25, justifyContent: "center" },
              // styles.background,
            ]}
            onPress={() => console.log("Back")}
          >
            <HeartIcon size={28} color={"white"} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default MovieScreen;
