import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import style from './style';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';

const Header = (props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => (Alert.alert('teste'))} >
                <Icon name="plus" size={24} />
            </TouchableOpacity>
            <Image source={logo_light} />
            <Icon name="toggle-left" style={style.icons} size={24} />
        </View>
    );
};

export default Header;
