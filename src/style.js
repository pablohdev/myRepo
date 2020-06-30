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
    info_repo: {
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
    foto_perfil: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_center: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '80%',
        height: 50,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#333333',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20
    },
    button_text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    input: {
        width: '80%',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#e9e9e9',
        marginBottom: 15,
        padding: 15
    }
});

export default style;
