import React from 'react';
import { Text, View } from 'react-native';
import Users from '../components/Users';const HomeScreen = props => {
    return (
        <Users navigation={props.navigation} />
    );
};

HomeScreen.navigationOptions = {
    title: 'User List'
};

export default HomeScreen;