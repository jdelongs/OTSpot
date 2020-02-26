import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { RNCamera } from 'react-native-camera';
import CircularTimer from 'react-native-circular-timer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
    },
    picBtnContainer: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,

    },
    picBtn: {
        margin: 30,
        backgroundColor: 'blue',
        height: 50,
        width: 70,
        textAlign: 'center',

    },
    count: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    countContainer: {
        justifyContent: 'center',
        width: 80,
        height: 80,
        marginLeft: 10,
        borderRadius: 100,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 6
    },
    iconStyles: {
        margin: 30,
        color: 'white',
    }
});

export default class Camera extends Component {
    state = {
        seconds: null,
        isRecording: false,
    }
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                <View style={styles.picBtnContainer}>
                    <FontAwesomeIcon style={styles.iconStyles} size={50} icon={faAddressCard} />
                    <TouchableOpacity onPress={this.toggleRecord}>
                        <View style={styles.countContainer}>
                            <Text style={styles.count}>{this.state.seconds}</Text>
                        </View>
                    </TouchableOpacity>
                    <FontAwesomeIcon style={styles.iconStyles} size={50} icon={faNewspaper} />
                </View>
            </View>
        );
    }

    toggleRecord = () => {
        if (this.state.isRecording) {
            this.setState({ isRecording: false, seconds: null });
        } else if (!this.state.isRecording) {
            this.setState({ isRecording: true, seconds: 15 });
            this.takePicture();
        }
    }


    async takePicture() {
        try {
            if (this.camera) {
                const options = { quality: 0.5, base64: true };
                const data = await this.camera.takePictureAsync(options);
                console.log(data.uri);
            }
        } catch (err) {
            console.log(err);
        }
    };
}

