import { StyleSheet } from 'react-native';


const styleDark = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        flex: 1,
    },
    list: {
        marginVertical: 15,
        marginHorizontal: 15,
    },
    nome_repo: {
        fontWeight: "bold",
        color: '#FFFFFF'
    },
    user_repo: {
        color: '#9E9E9E'
    },
    info_repo:{
        flexWrap: 'nowrap'
    },
    item_list: {
        backgroundColor: '#212121',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    item_foto: {
        backgroundColor: '#CDCDCD',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20
    },
    desc_repo: {
        color:'#FFF'
    },
    foto_perfil:{
        borderRadius: 30,
        width: 60,
        height: 60,
    }

})

export default styleDark