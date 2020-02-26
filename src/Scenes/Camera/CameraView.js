import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { RNCamera } from 'react-native-camera';
import CircularTimer from 'react-native-circular-timer';

export default class Camera extends PureComponent {
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
                    <CircularTimer
                        ref={refs => (this._timerRef = refs)}
                        onTimeElapsed={() => {
                            console.log('Timer Finished!');
                        }}
                        showSecond={false}
                        seconds={0}
                        circleColor={'#fff'}
                        borderColor={'#ff0000'}
                        borderBackgroundColor={'#ff0000'}
                        textStyle={{ display: 'none' }}
                    />
                    <FontAwesomeIcon style={styles.iconStyles} size={50} icon={faNewspaper} />
                </View>
            </View>
        );
    }
    recordPress = () => {
        console.log('Press');
    }
    takePicture = async () => {
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

    iconStyles: {
        margin: 30,
        color: 'white',
    }
});