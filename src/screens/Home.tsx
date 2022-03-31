import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { FriendList } from "../componentes/FriendList";

export function Home() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.1.11:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  }

  return (
    <View style={styles.container}>
      <Text>Amigos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        onChangeText={setName}
      />
      <Button title="Buscar" onPress={handleSearch} />

      <ScrollView style={styles.list}>
        <FriendList data={friends} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
    height: "100%",
  },
});
