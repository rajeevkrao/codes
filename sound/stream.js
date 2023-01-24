const fs = require('fs');
const naudiodon = require('naudiodon');

// Set up a new audio input stream
const audioInputStream = new naudiodon.Input({
  device: 'default',  // Use the default audio input device
  channels: 2,        // Use 2 channels (stereo)
  sampleRate: 44100,  // Use a sample rate of 44100 Hz
});

// Set up a callback function to process the audio data
audioInputStream.on('data', (buffer) => {
  // Save the audio buffer to a file
  fs.writeFile('output.wav', buffer, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Audio file saved successfully');
    }
  });
});

// Start the audio input stream
audioInputStream.start();