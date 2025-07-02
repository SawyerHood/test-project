/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { WowzaStreamingClient } from './wowza-client.js';
import { createWowzaConfig } from './wowza-config.js';

vi.mock('wowza-webrtc-player', () => {
  return {
    WowzaWebRTCPlayer: vi.fn().mockImplementation(() => ({
      on: vi.fn(),
      connect: vi.fn().mockResolvedValue(undefined),
      play: vi.fn().mockResolvedValue(undefined),
      stop: vi.fn().mockResolvedValue(undefined),
      disconnect: vi.fn().mockResolvedValue(undefined),
      getStats: vi.fn().mockResolvedValue(null),
      isPlaying: vi.fn().mockReturnValue(false),
      isConnected: vi.fn().mockReturnValue(false)
    }))
  };
});

describe('WowzaStreamingClient', () => {
  let client: WowzaStreamingClient;
  let mockVideoElement: HTMLVideoElement;

  beforeEach(() => {
    const config = createWowzaConfig({
      applicationName: 'test',
      streamName: 'testStream'
    });
    client = new WowzaStreamingClient(config);
    mockVideoElement = document.createElement('video');
  });

  describe('initialize', () => {
    it('should initialize the player with video element', async () => {
      await client.initialize(mockVideoElement);
      expect(client).toBeDefined();
    });
  });

  describe('play', () => {
    it('should throw error if player not initialized', async () => {
      await expect(client.play()).rejects.toThrow('Player not initialized');
    });

    it('should connect and play when initialized', async () => {
      await client.initialize(mockVideoElement);
      await expect(client.play()).resolves.toBeUndefined();
    });
  });

  describe('stop', () => {
    it('should stop playback when player is initialized', async () => {
      await client.initialize(mockVideoElement);
      await expect(client.stop()).resolves.toBeUndefined();
    });

    it('should not throw when player is not initialized', async () => {
      await expect(client.stop()).resolves.toBeUndefined();
    });
  });

  describe('getStats', () => {
    it('should return null when player not initialized', async () => {
      const stats = await client.getStats();
      expect(stats).toBeNull();
    });

    it('should return stats when player is initialized', async () => {
      await client.initialize(mockVideoElement);
      const stats = await client.getStats();
      expect(stats).toBeNull();
    });
  });

  describe('isPlaying', () => {
    it('should return false when player not initialized', () => {
      expect(client.isPlaying()).toBe(false);
    });

    it('should return player playing state', async () => {
      await client.initialize(mockVideoElement);
      expect(client.isPlaying()).toBe(false);
    });
  });

  describe('isConnected', () => {
    it('should return false when player not initialized', () => {
      expect(client.isConnected()).toBe(false);
    });

    it('should return player connection state', async () => {
      await client.initialize(mockVideoElement);
      expect(client.isConnected()).toBe(false);
    });
  });

  describe('destroy', () => {
    it('should clean up resources', async () => {
      await client.initialize(mockVideoElement);
      client.destroy();
      expect(client.isPlaying()).toBe(false);
    });
  });
});