import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Alert,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";
import Header from "./components/Header";

import api from './services/api';

import style from "./style";
import styleDark from "./styleDark";


const App = () => {

  const [repoList, setRepoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true)
  const [newRepo, setNewRepo] = useState('')


  useEffect(() => {

    const listRepo = [
      {
        id: '270496218',
        nome: 'CloneMercadoLivre',
        usuario: 'pablohdev',
        descricao: 'Projecto criado na live code da Digital Innovation One',
        foto: 'https://avatars3.githubusercontent.com/u/45184516?v=4'
      }
    ]

    setRepoList(listRepo)


  }, [])

  function handleShowModal() {
    console.log('modal')
    setModalVisible(!modalVisible);
  }

  function handleDarkTheme() {
    console.log('trocando')
    setDarkTheme(!darkTheme)
  }

  async function handleAddRepository() {


    try {

      const { data } = await api.get(`${newRepo}`)

      const { id, name, owner, description } = data;

      const repo = {
        id: id.toString(),
        nome: name,
        usuario: owner.login,
        descricao: description,
        foto: owner.avatar_url
      };


      setRepoList([...repoList, repo])
      setNewRepo('')
      handleShowModal();

    } catch (erro) {
      Alert.alert('Nada encontrado')
    }


  }



  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => handleShowModal()}
        style={style.modal}
      >
        <View style={style.modal_center}>
          <Text style={{ marginBottom: 15 }}>Adicione um novo repositório</Text>
          <TextInput style={style.input} autoCapitalize="none" value={newRepo} onChangeText={(text) => setNewRepo(text)} />
          <TouchableOpacity style={style.button} onPress={handleAddRepository}>
            <Text style={style.button_text}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={handleShowModal}>
            <Text style={style.button_text}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={darkTheme ? styleDark.container : style.container}>
        <Header
          ToggleDarkTheme={handleDarkTheme}
          modalState={handleShowModal}
          darkTheme={darkTheme}
        />
        <ScrollView>
          <FlatList
            style={darkTheme ? styleDark.list : style.list}
            data={repoList}
            renderItem={({ item }) => (
              <View style={darkTheme ? styleDark.item_list : style.item_list}>
                <View style={style.item_foto}>
                  <Image style={style.foto_perfil} source={{ uri: item.foto }} />
                </View>
                <View style={style.info_repo}>
                  <Text style={darkTheme ? styleDark.nome_repo : style.nome_repo}>{item.nome}</Text>
                  <Text style={darkTheme ? styleDark.user_repo : style.user_repo}>@ {item.usuario}</Text>
                  <Text style={darkTheme ? styleDark.desc_repo : style.desc_repo}>{item.descricao}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => item.id}
            extraData={darkTheme}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
