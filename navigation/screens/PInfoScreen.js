import * as React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
export default function PInfoScreen({navigation}) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
            <Text 
                style={{
                    fontSize: 26,
                    fontWeight: 'bold'
                }}>
                Personal Information Screen
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText = {onChangeText}
                value = {text}
                placeholder='First Name'
            />
            <Text>

            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})