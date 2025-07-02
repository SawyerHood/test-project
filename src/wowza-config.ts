export interface WowzaConfig {
  applicationName: string;
  streamName: string;
  signalServerURL: string;
  serverURL?: string;
  iceServers?: RTCIceServer[];
  userData?: any;
}

export const createWowzaConfig = (config: Partial<WowzaConfig>): WowzaConfig => {
  return {
    applicationName: config.applicationName || 'live',
    streamName: config.streamName || 'myStream',
    signalServerURL: config.signalServerURL || 'wss://localhost:443/webrtc-session.json',
    serverURL: config.serverURL,
    iceServers: config.iceServers || [
      {
        urls: 'stun:stun.l.google.com:19302'
      }
    ],
    userData: config.userData || {}
  };
};