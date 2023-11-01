import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { getTask } from '../../convex/myFunctions';

export default function PInfoScreen({navigation}) {
    const [text, firstName] = React.useState('');
    const [name, lastName] = React.useState('');
    const [number, phoneNumber] = React.useState('');
    const [major, collegeMajor] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
            <Text 
                style={{
                    fontSize: 26,
                    fontWeight: 'bold'
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
                    fontWeight: 'bold'
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
                    fontWeight: 'bold'
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
                    fontWeight: 'bold'
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
                        const saveData = async () => {
                            if (firstName && lastName && phoneNumber && collegeMajor) {
                              try {
                                await getTask({ id: 'your-unique-id', firstName, lastName, phoneNumber, collegeMajor});
                                console.log('Data saved successfully');
                              } catch (error) {
                                console.error('Error saving data:', error);
                              }
                            } else {
                              console.log('Please fill in all fields');
                            }
                        
                            }}}>
                    
                        <Text style = {{fontSize:24}}>Save</Text>
            </TouchableOpacity>
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
    button:{
        backgroundColor:'skyblue',
        borderWidth:1,
        padding: 10,
        borderRadius:5,
        height: 50,
        width: 80,
    },
})

