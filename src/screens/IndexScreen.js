import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather, AntDesign } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Show", { id: item.id })}
      >
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.title} - {item.id}
          </Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather style={styles.icon} name="trash-2" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* <TouchableOpacity style={styles.buttonStyle} onPress={addBlogPost}>
        <AntDesign style={styles.icon} name="addfile" />
      </TouchableOpacity> */}
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={renderItem}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={{ marginRight: 15 }} name="plus" size={30} />
      </TouchableOpacity>
    )
  };
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
