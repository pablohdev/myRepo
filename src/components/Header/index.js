import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import style from './style';
import styleDark from './styleDark';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';

const Header = (props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={props.modalState} >
                <Icon name="plus" size={24} style={props.darkTheme ? styleDark.icon : style.icon} />
            </TouchableOpacity>
            <Image source={props.darkTheme ? logo_dark : logo_light} />
            <TouchableOpacity onPress={props.ToggleDarkTheme} >
                <Icon name={props.darkTheme ? 'toggle-left' : 'toggle-right'} size={24} style={props.darkTheme ? styleDark.icon : style.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
