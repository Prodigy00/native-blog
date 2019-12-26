import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />

      <TouchableOpacity
        style={styles.addIcon}
        onPress={() => onSubmit(title, content)}
      >
        <Entypo name="add-to-list" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 10,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 5
  },
  addIcon: {
    alignItems: "center",
    marginVertical: 35
  }
});

export default BlogPostForm;
