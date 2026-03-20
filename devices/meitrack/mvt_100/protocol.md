---
slug: /meitrack/mvt_100/protocol
id: mvt_100-protocol
sidebar_label: Protocol
title: Meitrack - MVT-100 Protocol
sidebar_class_name: menu_item_tracker
description: A concise guide to the Meitrack MVT 100 tracking protocol and how it communicates with Plaspy
keywords:
  - Meitrack MVT 100 protocol
  - Meitrack MVT 100 GPS protocol
  - Meitrack MVT 100 Plaspy
  - MVT 100 tracking protocol
  - Meitrack tracker communication
  - MVT 100 fleet management
  - Meitrack GPS compatibility
  - vehicle tracking protocol
  - Plaspy device compatibility
  - Meitrack MVT 100 integration
---

# Meitrack - MVT-100 Protocol

This page summarizes the public protocol context and connection guidance for using the Meitrack MVT-100 with Plaspy. It focuses on how the tracker communicates in general terms so fleet administrators and integrators can understand what to configure and expect when reporting data to Plaspy. This is a protocol focused reference rather than a device manual.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes public, non sensitive protocol context without detailing private packet formats.

## Protocol Overview

The Meitrack MVT-100 reports location, status, and alert data to a server endpoint so platforms like Plaspy can ingest and display device telemetry. The tracker combines its GPS fix, battery and power mode state, accelerometer events, and optional driver or accessory inputs into protocol messages that the server interprets to produce live tracking, alerts, and reports.

- Enables delivery of GPS position updates and timestamps to the server for live tracking and historical logs
- Conveys device status such as battery level, power saving mode, and charging state for operational monitoring
- Reports events from the 3D acceleration sensor including vibration or towing alerts to support security workflows
- Sends alarm and alert conditions that drive notifications, geofence triggers, and operational rules in Plaspy
- Provides accessory inputs and driver ID events such as iButton interactions for mileage and driver activity reporting

## How Plaspy Detects the Protocol

Plaspy exposes a shared ingest endpoint that accepts connections from supported trackers and automatically identifies the tracker reporting protocol. In most setups you do not need to choose a protocol manually inside Plaspy if the device is configured to report to the Plaspy endpoint and the device firmware follows Meitrack reporting behavior.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server public IP is 54.85.159.138 and the platform listens on port 8888
- The device may be configured to use UDP or TCP on port 8888 depending on model and firmware
- All devices in Plaspy use the same port and shared endpoint pattern which simplifies device onboarding
- When a correctly configured device connects to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and routes messages to the appropriate handler

## Transport and Connection Context

Connection choices are an important part of successful device reporting. The MVT-100 supports common cellular transports and can be configured to report over UDP or TCP depending on the firmware and deployment needs. Knowing the correct endpoint and transport method helps establish reliable connectivity to Plaspy.

- Devices may point to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138
- Plaspy listens on a single, shared port for all devices which is 8888
- The MVT-100 can typically be set to use UDP or TCP on port 8888 depending on configuration and carrier behavior
- Choice of UDP versus TCP can influence message delivery characteristics such as retransmission and ordering
- Use the device configuration menus or provisioning tools to set the reporting address and transport to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can modify how certain events are encoded or which fields are reported, so confirm firmware release notes for device specific behavior
- Hardware revisions and optional accessories may change available inputs such as iButton or additional sensors
- Manufacturer side settings sometimes offer transport selection and server address options that must match the Plaspy endpoint and port
- Some deployments use domain names while others use the direct IP address; both d.plaspy.com and 54.85.159.138 are valid Plaspy targets
- Plaspy detects the protocol automatically but correct device configuration and network connectivity are required for detection to succeed
- Always validate feature support such as accelerometer event reporting, battery modes, and Garmin integration against device documentation

## Why Protocol Understanding Matters

Understanding the communication protocol helps fleets and integrators set up devices correctly, interpret incoming telemetry, and troubleshoot reporting problems when they arise. Knowledge of what the tracker is expected to send and how Plaspy ingests that data reduces onboarding friction and improves long term reliability.

- Ensures correct server address and transport settings so the device can reach Plaspy
- Helps interpret which device messages correspond to events like towing alerts or power saving transitions
- Aids in troubleshooting connectivity issues by confirming the device is pointing to d.plaspy.com or 54.85.159.138 on port 8888
- Supports planning for firmware updates and feature changes that affect reported fields
- Reduces false alarms by clarifying how accelerometer and input events are reported and handled

## Why Use Plaspy with This Protocol

Using the Meitrack MVT-100 with Plaspy provides a practical way to turn device telemetry into operational insights. The MVT-100 delivers extended battery runtimes in power saving mode, a 3D acceleration sensor for security alerts, Garmin device compatibility, and platform features such as live tracking, geofencing, GPS logging, and mileage reporting. Plaspy ingests these telemetry streams and presents them for fleet monitoring, alerts, and historical reporting.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information on the official Meitrack website https://www.meitrack.com/ as manufacturer behavior can change over time.
