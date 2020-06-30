import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F4F2F2',
        flex: 1,
    },
    list: {
        marginVertical: 15,
        marginHorizontal: 15,
    },
    nome_repo: {
        fontWeight: "bold"
    },
    user_repo: {
        color: '#9E9E9E'
    },
    info_repo:{
        flexWrap: 'nowrap'
    },
    item_list: {
        backgroundColor: '#FFFFFF',
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
        
    },
    foto_perfil:{
        borderRadius: 30,
        width: 60,
        height: 60,
    }
});

export default style;
