import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import moment from "moment";

export default function MovieDetail({ navigation, route }) {
  const [movie, setMovie] = useState({
    genre: [],
  });

  useEffect(() => {
    const itemId = route.params.id;
    axios
      .get(`https://movie-api.igeargeek.com/movies/${itemId}`)
      .then((res) => {
        const movie = res.data;
        setMovie(movie);
      });
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <WebView
        allowsFullscreenVideo={true}
        source={{ uri: movie.youtubeUrl }}
        style={{ height: 200, flex: 1 }}
      />
      <View style={{ flex: 2, padding: 15, backgroundColor: "#362420" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: movie.posterUrl }}
            style={{ flex: 1, height: 180 }}
            resizeMode={"stretch"}
          />
          <View style={{ flex: 2, marginLeft: 15 }}>
            <Text style={{ color: "white", fontSize: 17 }}>{movie.name}</Text>
            <Text style={{ color: "white" }}>
              ประเภท : {movie.genre.join(", ")}
            </Text>
            <Text style={{ color: "white" }}>
              วันที่เข้าฉาย : {moment(movie.showAt).format("DD/MM/YYYY")}
            </Text>
            <Text style={{ color: "white" }}>
              ระยะเวลา : {movie.duration} นาที
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            marginVertical: 15,
          }}
        ></View>

        <View style={{ flex: 1,}}>
          <Text style={{color : 'white'}}>เรื่องย่อ</Text>
          <Text style={{color : 'white' ,lineHeight : 25}}>{movie.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
