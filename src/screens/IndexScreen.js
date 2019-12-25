import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather, AntDesign } from "@expo/vector-icons";
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      {/* <Button title="Add Post" onPress={addBlogPost} /> */}
      <TouchableOpacity style={styles.buttonStyle} onPress={addBlogPost}>
        {/* <Text style={styles.buttonTitle}>ADD POST</Text> */}
        <AntDesign style={styles.icon} name="addfile" />
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name="trash-2" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  buttonStyle: {
    alignItems: "center",
    marginVertical: 10
  },
  buttonTitle: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline"
  }
});

export default IndexScreen;
