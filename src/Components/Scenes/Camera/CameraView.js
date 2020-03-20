import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { RNCamera } from 'react-native-camera';
import { Button } from 'native-base';

import VideoPreview from './VideoPreview';

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
    iconStyles: {
        margin: 30,
        color: 'white',
    }
});

class CameraView extends Component {
    state = {
        seconds: null,
        isRecording: false,
        type: RNCamera.Constants.Type.back,
        flash: RNCamera.Constants.FlashMode.on,
        videoUri: null
    }

    render() {
        if (this.state.videoUri === null) {
            return (
                <View style={styles.container} >
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
                            <View style={this.countContainer(this.state.isRecording)}>
                                <Text style={styles.count}>{this.state.seconds}</Text>
                            </View>
                        </TouchableOpacity>
                        <FontAwesomeIcon style={styles.iconStyles} size={50} icon={faNewspaper} />
                    </View>
                </View >
            );
        } else {
            return (
                <VideoPreview discardVideo={this.discardVideo} videoUri={this.state.videoUri} />
            )
        }
    }

    discardVideo = () => {
        this.setState({ videoUri: null });
    }

    toggleRecord = () => {
        if (this.state.isRecording) {
            this.setState({ isRecording: false, seconds: null });
            this.camera.stopRecording();
            console.log(this.state.videoUri);
        } else if (!this.state.isRecording) {
            this.setState({ isRecording: true, seconds: 15 });
            this.record();
        }
    }


    async record() {
        try {
            if (this.camera) {
                const options = { maxDuration: 15, };
                const data = await this.camera.recordAsync(options);
                this.setState({ videoUri: data.uri });
                console.log(this.state.videoUri);
            }
        } catch (err) {
            console.log(err);
        }
    };

    countContainer(isRecording) {
        if (isRecording) {
            return {
                justifyContent: 'center',
                width: 80,
                height: 80,
                marginLeft: 10,
                borderRadius: 100,
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: 6

            }
        } else {
            return {
                justifyContent: 'center',
                width: 80,
                height: 80,
                marginLeft: 10,
                borderRadius: 100,
                borderColor: '#fff',
                borderStyle: 'solid',
                borderWidth: 6
            }
        }
    }

}


export default CameraView 
