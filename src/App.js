import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Alert,
  FlatList
} from "react-native";
import Header from "./components/Header";

import style from "./style";
import styleDark from "./styleDark";

const CardItem = (item) => {
  return (
    <View style={darkTheme ? styleDark.container : style.container}>
      <View style={darkTheme ? styleDark.container : style.container}>
        <Image source={darkTheme ? styleDark.container : style.container} />
      </View>
      <View>
        <Text style={darkTheme ? styleDark.container : style.container}>{item.nome}</Text>
        <Text style={darkTheme ? styleDark.container : style.container}>@ {item.usuario}</Text>
        <Text style={darkTheme ? styleDark.container : style.container}>{item.descricao}</Text>
      </View>
    </View>
  );
};

const App = () => {

  const [repoList, setRepoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true)

  function handleShowModal() {
    console.log('modal')
    setModalVisible(!modalVisible);
  }

  function handleDarkTheme() {
    console.log('trocando')
    setDarkTheme(!darkTheme)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={darkTheme ? styleDark.container : style.container}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        />
        <Header
          ToggleDarkTheme={handleDarkTheme}
          modalState={handleShowModal}
          darkTheme={darkTheme}
        />
        <ScrollView>
          <FlatList
            style={darkTheme ? styleDark.container : style.container}
            data={repoList}
            renderItem={({ item }) => CardItem(item)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
