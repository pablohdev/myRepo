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
  FlatList
} from "react-native";
import Header from "./components/Header";

import style from "./style";
import styleDark from "./styleDark";


const App = () => {

  const [repoList, setRepoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true)


  useEffect(()=>{

    const listRepo = [
              {
                id: '270496218',
                nome: 'CloneMercadoLivre',
                usuario: 'pablohdev',
                descricao: 'Projecto criado na live code da Digital Innovation One',
                foto: 'https://avatars3.githubusercontent.com/u/45184516?v=4'
              },
              {
                id: '254090713',
                nome: 'gama-academy',
                usuario: 'toticavalcanti',
                descricao: 'No description, website, or topics provided.',
                foto: 'https://avatars3.githubusercontent.com/u/8420841?v=4'
              },
              {
                id: '2704962182',
                nome: 'CloneMercadoLivre',
                usuario: 'pablohdev',
                descricao: 'Projecto criado na live code da Digital Innovation One',
                foto: 'https://avatars3.githubusercontent.com/u/45184516?v=4'
              },
              {
                id: '2704962183',
                nome: 'gama-academy',
                usuario: 'toticavalcanti',
                descricao: 'No description, website, or topics provided.',
                foto: 'https://avatars3.githubusercontent.com/u/8420841?v=4'
              },
  ]

    setRepoList(listRepo)


  },[])

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
                  <Image style={style.foto_perfil} source={{uri: item.foto}}/>
                </View>
                <View style={style.info_repo}>
                  <Text style={darkTheme ? styleDark.nome_repo :  style.nome_repo}>{item.nome}</Text>
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
