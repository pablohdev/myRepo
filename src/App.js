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

const CardItem = (item) => {
  return (
    <View style={style.item_list}>
      <View style={style.item_foto}>
        <Image source={{ uri: item.foto }} />
      </View>
      <View>
        <Text style={style.nome_repo}>{item.nome}</Text>
        <Text style={style.user_repo}>@ {item.usuario}</Text>
        <Text style={style.desc_repo}>{item.descricao}</Text>
      </View>
    </View>
  );
};

const App = () => {

  const [repoList, setRepoList] = useState();
  const [modalVisible, setModalVisible] = useState(false);


  function handleShowModal() {
    setModalVisible(true);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={style.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        />
        <Header modalState={handleShowModal} />
        <ScrollView>
          <FlatList
            style={style.list}
            data={repoList}
            renderItem={({ item }) => CardItem(item)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
