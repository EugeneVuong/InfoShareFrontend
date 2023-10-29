import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default function ShareScreen({navigation}) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center '}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Text 
                    style={{
                        fontSize: 36,
                        fontWeight: 'bold',
                        lineHeight: 72,
                    }}>
                    To Share Your Info:
                </Text>
                <Text 
                    style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        lineHeight: 92,
                    }}>
                    Scan Code Below
                </Text>
                    
                <QRCode
                    value="React-Native"
                    size={270}
                    stye={{
                        lineHeight: 72,
                    }}
                />
            </View>
        </View>
    );

    const styles = StyleSheet.create({

    });
}