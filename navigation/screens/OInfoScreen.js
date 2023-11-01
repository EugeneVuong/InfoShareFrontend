import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
export default function OInfoScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={styles.text}>
                First Name: {props.firstName}
            </Text>
            <Text style={styles.text}>
                Last Name: {props.lastName}
            </Text>
            <Text style={styles.text}>
                Phone Number: {props.phoneNumber}
            </Text>
            <Text style={styles.text}>
                Major: {props.major}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        'fontSize': 25,
        'padding': 10,
        'backgroundColor': 'skyblue',
        'borderColor': 'black',
        'overflow': 'hidden',
        'borderWidth': 5,
        'borderRadius': 10,
    
    }
});