---
slug: /minifinder/rex/protocol
id: rex-protocol
sidebar_label: Protocol
title: MiniFinder - Rex Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the MiniFinder Rex tracker with Plaspy including connection and compatibility context
keywords:
  - MiniFinder Rex protocol
  - MiniFinder Rex GPS protocol
  - MiniFinder Rex Plaspy compatibility
  - MiniFinder Rex communication
  - MiniFinder Rex tracking protocol
  - Rex dog tracker protocol
  - MiniFinder GPS tracker protocol
  - Plaspy compatible trackers
  - GPS tracker communication
  - Telemetry dog tracking
---

# MiniFinder - Rex Protocol

This page describes the public protocol context for using the MiniFinder Rex GPS tracker with the Plaspy platform. It focuses on the communication and connection details that matter when integrating Rex into Plaspy workflows, and explains how the device reports location and status to the Plaspy ingestion endpoint in broad, non-sensitive terms.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact message behavior and available features can vary by Rex firmware, hardware revision, and manufacturer implementation, so this page provides practical, platform-level guidance while encouraging validation against manufacturer documentation.

## Protocol Overview

The Rex tracker communicates telemetry, location, and status data to a remote server so Plaspy can display live positions and generate alerts. The device protocol defines how the tracker identifies itself, how it sends periodic or event-driven updates, and which message elements Plaspy can extract for mapping, alerts, and history.

- Provides identification and session information so Plaspy can associate incoming data with a specific Rex device.
- Transmits GPS/GLONASS position, movement events, battery and signal status, and device state that Plaspy uses for mapping and alerts.
- Supports both periodic reporting and event-driven messages for movement, geofence, or safety alerts relevant to working dogs.
- Enables remote commands and configuration where the manufacturer and device firmware permit remote control or parameter updates.
- Acts as the bridge between on-device sensors (G-sensor, bark detection, battery monitor) and Plaspy telemetry and reporting features.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and automatically determines which supported tracker protocol is in use. When Rex is configured to report to the Plaspy endpoint, the platform matches the incoming data to the correct integration without requiring a manual protocol selection in most cases.

- Plaspy’s public ingestion server is reachable at domain d.plaspy.com and at IP 54.85.159.138.
- The platform listens on port 8888 for device reports and uses that same port for all supported devices.
- Devices may be set to communicate over UDP or TCP while targeting the Plaspy endpoint; Plaspy will accept either transport on the shared port.
- In typical setups the user configures the device to point to d.plaspy.com (or to the IP) and the port 8888; Plaspy then detects and handles the tracker protocol automatically.
- Because detection is automatic, Plaspy customers usually do not need to select a protocol manually in the platform when the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection choice and transport affect delivery behavior and battery use, and Rex devices may support multiple transport modes depending on firmware and configuration. This section outlines the connection context that matters for sending Rex data to Plaspy.

- The Rex device may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- Devices can be set to report to the Plaspy domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses the same port number (8888) for all supported trackers to simplify device configuration and platform routing.
- Network conditions, operator NAT behavior, and cellular transport options (LTE‑M or GSM where supported by the device) influence reliability and latency.
- If local or carrier firewalls block outbound traffic, ensure the device can reach d.plaspy.com or 54.85.159.138 on port 8888 over the selected transport.

## Protocol Compatibility Notes

- Rex is listed as compatible with Plaspy, but features available through the protocol can vary by firmware version and hardware revision.
- Manufacturer-side variations in command availability or telemetry fields can affect what Plaspy receives; always confirm which features are enabled on your device and firmware.
- Some Rex deployments may require device-level configuration or subscription settings from the manufacturer to allow third-party platform reporting.
- Transport selection (UDP versus TCP) can be configured on the device and may change behavior for retransmission and latency; pick the mode that best fits your use case and network.
- Validate device configuration so it reports to d.plaspy.com or 54.85.159.138 on port 8888; incorrect endpoint or port settings are a common cause of missed connectivity.
- For critical deployments, test device behavior in the field to confirm that expected telemetry and alerts arrive in Plaspy under real-world conditions.

## Why Protocol Understanding Matters

A practical understanding of how Rex communicates with Plaspy helps ensure successful setup, predictable behavior in the field, and faster troubleshooting when issues arise. Knowing which pieces are handled by the device, the network, and the platform reduces misconfiguration and improves reliability.

- Speeds up initial setup by ensuring the device is pointed to the correct Plaspy endpoint and port.
- Helps diagnose connectivity issues by isolating transport, network, or endpoint configuration problems.
- Clarifies which telemetry fields to expect in Plaspy based on device firmware and enabled sensors.
- Reduces surprises during firmware updates or hardware revisions by anticipating potential behavioral changes.
- Supports planning for battery life and reporting cadence trade offs based on transport and message frequency.

## Why Use Plaspy with This Protocol

Using the MiniFinder Rex with Plaspy gives handlers and teams a way to bring purpose-built animal tracking data into a broader telemetry and operations environment. Rex’s rugged design, long battery life, and hunting features produce the location and event data that Plaspy ingests for live mapping, geofence alerts, and historical playback. Combined, the device and platform support situational awareness and coordination for field work, search operations, and team-managed hunts.

If you want to learn more about how Plaspy handles incoming tracker data and platform capabilities, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol documentation and firmware information with the manufacturer at https://minifinder.se/.
