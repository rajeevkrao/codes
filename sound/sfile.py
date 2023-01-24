# Install the required libraries


# Import the libraries
import sounddevice as sd
import soundfile as sf

# Set the recording parameters
duration = 10.0  # seconds
fs = 44100  # Hz
channels = 2

# Record the audio
myrecording = sd.rec(int(duration * fs), samplerate=fs, channels=channels)
sd.wait()

# Save the recording to a WAV file
sf.write('desktop_recording.wav', myrecording, fs)