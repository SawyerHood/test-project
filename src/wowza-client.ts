import { WowzaWebRTCPlayer } from 'wowza-webrtc-player';
import { WowzaConfig } from './wowza-config.js';

export class WowzaStreamingClient {
  private player: WowzaWebRTCPlayer | null = null;
  private config: WowzaConfig;
  private videoElement: HTMLVideoElement | null = null;

  constructor(config: WowzaConfig) {
    this.config = config;
  }

  async initialize(videoElement: HTMLVideoElement): Promise<void> {
    this.videoElement = videoElement;
    
    this.player = new WowzaWebRTCPlayer({
      applicationName: this.config.applicationName,
      streamName: this.config.streamName,
      signalingURL: this.config.signalServerURL,
      iceServers: this.config.iceServers,
      userData: this.config.userData
    });

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    if (!this.player) return;

    this.player.on('onError', (error: any) => {
      console.error('Wowza player error:', error);
    });

    this.player.on('onStateChanged', (state: any) => {
      console.log('Wowza player state changed:', state);
    });

    this.player.on('onConnect', () => {
      console.log('Connected to Wowza server');
    });

    this.player.on('onDisconnect', () => {
      console.log('Disconnected from Wowza server');
    });
  }

  async play(): Promise<void> {
    if (!this.player || !this.videoElement) {
      throw new Error('Player not initialized');
    }

    try {
      await this.player.connect();
      await this.player.play(this.videoElement);
    } catch (error) {
      console.error('Error starting playback:', error);
      throw error;
    }
  }

  async stop(): Promise<void> {
    if (!this.player) return;

    try {
      await this.player.stop();
      await this.player.disconnect();
    } catch (error) {
      console.error('Error stopping playback:', error);
      throw error;
    }
  }

  destroy(): void {
    if (this.player) {
      this.stop().catch(error => {
        console.error('Error during destroy:', error);
      });
    }
    this.player = null;
    this.videoElement = null;
  }

  getStats(): Promise<RTCStatsReport | null> {
    if (!this.player) return Promise.resolve(null);
    return this.player.getStats();
  }

  isPlaying(): boolean {
    return this.player?.isPlaying() || false;
  }

  isConnected(): boolean {
    return this.player?.isConnected() || false;
  }
}