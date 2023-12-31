import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
export default function PInfoScreen({navigation}) {
    const [text, firstName] = React.useState('');
    const [name, lastName] = React.useState('');
    const [number, phoneNumber] = React.useState('');
    const [major, collegeMajor] = React.useState('');

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
                <Text 
                    style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        lineHeight: 60,
                    }}>
                    First Name
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {firstName}
                    value = {text}
                    placeholder='Example: John'
                />
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        lineHeight: 55,
                    }}>
                    Last Name
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {lastName}
                    value = {name}
                    placeholder='Example: Doe'
                />
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        lineHeight: 55,
                    }}>
                    Phone Number
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {phoneNumber}
                    value = {number}
                    placeholder='Example: 555-555-5555'
                />
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        lineHeight: 50,
                    }}>
                    Major
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {collegeMajor}
                    value = {major}
                    placeholder='Example: Computer Science'
                />
                <TouchableOpacity style = {styles.button}
                        onPress={()=>{
                            console.log('Press Share')
                        }}>
                            <Text style = {{fontSize:24}}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'skyblue',
        borderWidth:1,
        borderRadius:5,
        height: 50,
        width: 80,
    },
})