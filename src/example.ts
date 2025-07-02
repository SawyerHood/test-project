import { WowzaStreamingClient, createWowzaConfig } from './index.js';

async function main() {
  // Create configuration for Wowza streaming
  const config = createWowzaConfig({
    applicationName: 'live',
    streamName: 'myStream', 
    signalServerURL: 'wss://your-wowza-server.com:443/webrtc-session.json',
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      {
        urls: 'turn:your-turn-server.com:3478',
        username: 'username',
        credential: 'password'
      }
    ]
  });

  // Create client instance
  const client = new WowzaStreamingClient(config);

  // Get video element from DOM
  const videoElement = document.getElementById('video') as HTMLVideoElement;
  
  if (!videoElement) {
    console.error('Video element not found');
    return;
  }

  try {
    // Initialize the client with video element
    await client.initialize(videoElement);
    console.log('Client initialized');

    // Start playing the stream
    await client.play();
    console.log('Playback started');

    // Check connection status
    console.log('Connected:', client.isConnected());
    console.log('Playing:', client.isPlaying());

    // Get stats periodically
    setInterval(async () => {
      const stats = await client.getStats();
      if (stats) {
        console.log('Stream stats:', stats);
      }
    }, 5000);

    // Stop playback after 30 seconds (example)
    setTimeout(async () => {
      await client.stop();
      console.log('Playback stopped');
      client.destroy();
    }, 30000);

  } catch (error) {
    console.error('Error:', error);
    client.destroy();
  }
}

// Example HTML structure needed:
// <video id="video" autoplay playsinline></video>

main();