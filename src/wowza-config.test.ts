import { describe, it, expect } from 'vitest';
import { createWowzaConfig } from './wowza-config.js';

describe('WowzaConfig', () => {
  describe('createWowzaConfig', () => {
    it('should create config with default values', () => {
      const config = createWowzaConfig({});
      
      expect(config.applicationName).toBe('live');
      expect(config.streamName).toBe('myStream');
      expect(config.signalServerURL).toBe('wss://localhost:443/webrtc-session.json');
      expect(config.iceServers).toHaveLength(1);
      expect(config.iceServers?.[0].urls).toBe('stun:stun.l.google.com:19302');
      expect(config.userData).toEqual({});
    });

    it('should override default values with provided config', () => {
      const customConfig = {
        applicationName: 'myApp',
        streamName: 'customStream',
        signalServerURL: 'wss://myserver.com/webrtc',
        serverURL: 'https://myserver.com',
        iceServers: [
          { urls: 'stun:mystun.com:3478' },
          { urls: 'turn:myturn.com:3478', username: 'user', credential: 'pass' }
        ],
        userData: { userId: '12345' }
      };

      const config = createWowzaConfig(customConfig);
      
      expect(config.applicationName).toBe('myApp');
      expect(config.streamName).toBe('customStream');
      expect(config.signalServerURL).toBe('wss://myserver.com/webrtc');
      expect(config.serverURL).toBe('https://myserver.com');
      expect(config.iceServers).toHaveLength(2);
      expect(config.userData).toEqual({ userId: '12345' });
    });

    it('should allow partial config override', () => {
      const config = createWowzaConfig({
        applicationName: 'testApp',
        streamName: 'testStream'
      });
      
      expect(config.applicationName).toBe('testApp');
      expect(config.streamName).toBe('testStream');
      expect(config.signalServerURL).toBe('wss://localhost:443/webrtc-session.json');
      expect(config.iceServers).toHaveLength(1);
    });
  });
});