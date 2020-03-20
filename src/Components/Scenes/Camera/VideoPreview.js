import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Video from 'react-native-video';

class VideoPreview extends Component {
    render() {
        return (
            <View style={styles.videoPreviewContainer}>
                <Video repeat={true} style={styles.backgroundVideo} source={{ uri: this.props.videoUri }} />
                <Button onPress={this.props.discardVideo} title="Discard"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    videoPreviewContainer: {
        flex: 1,
    },
    backgroundVideo: {
        flex: 1,
    }
});

export default VideoPreview; 