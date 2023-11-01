import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
export default function OInfoScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                First Name: {props.firstName}
            </Text>
            <Text>
                Last Name: {props.lastName}
            </Text>
            <Text>
                Phone Number: {props.phoneNumber}
            </Text>
            <Text>
                Major: {props.major}
            </Text>
        </View>
    );
};