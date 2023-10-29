import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
export default function CameraScreen({navigation}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [scanned, setScanned] = useState(false);
    const [result, setResult] = useState('Nothing scanned yet');
    
    const scanHandler = ({type, data}) => {
        setScanned(false);
        setResult(data);
        console.log(result)
        setTimeout(() => {
            setScanned(true);
        }, 3000);
    }
    
    useEffect(() => {
        (async () => {
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
    })();
      }, []);
    
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    
    return (
        <View style={{ flex: 1}}>
            <View style={styles.cameraContainer}>
                    { useIsFocused() && <Camera 
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio} 
                    type={type}
                    ratio={'1:1'}
                    onBarCodeScanned={scanned && scanHandler} //scanned && scanHandler
                    /> }
            </View>
            <Text>{result}</Text>
            <Text>{String(scanned)}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    }
})
  