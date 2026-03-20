---
slug: /autofon/gl_maiak/protocol
id: gl_maiak-protocol
sidebar_label: Protocol
title: AutoFon - GL-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon GL-Маяк GPS tracker and practical integration notes for use with Plaspy monitoring
keywords:
  - AutoFon GL-Маяк protocol
  - AutoFon GL-Beacon
  - GL-Маяк GPS tracker
  - GL-Beacon protocol
  - AutoFon GPS protocol
  - Plaspy compatibility
  - Plaspy tracker integration
  - vehicle tracking GL-Маяк
  - asset tracker GL-Маяк
  - GPRS GPS tracker protocol
---

# AutoFon - GL-Маяк Protocol

This page summarizes the public protocol context for using the AutoFon GL-Маяк (GL-Beacon) tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used, and practical considerations for successful integration without exposing internal or sensitive protocol internals.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when the device is correctly configured to report. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication context and integration guidance rather than device internals.

## Protocol Overview

The tracker reporting protocol governs how the GL-Маяк sends location, telemetry, and alarm information to a remote server and how remote commands or controls are delivered back to the device. In integration with Plaspy, the protocol's role is to ensure reliable identification, event reporting, and recovery of buffered data after connectivity interruptions.

- Provides device identity and periodic or event driven location updates to the server for real time tracking.
- Encodes alarm and sensor events such as SOS, motion, impact, rollover and external input triggers so Plaspy can generate alerts and workflows.
- Supports buffered storage and retransmission so telemetry collected while offline is forwarded to Plaspy once connectivity is restored.
- Enables remote control channels for auxiliary outputs when configured for vehicle immobilization or external device control.
- Allows fallback reporting paths such as SMS for critical alerts when GPRS is not available.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single managed endpoint and port and will automatically determine the tracker protocol when a properly configured device reports to that endpoint. In most cases users do not need to select a protocol inside Plaspy if the device is pointed at the correct server settings.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server public IP address is 54.85.159.138.
- The listening port for devices is 8888 and Plaspy uses the same port for all supported devices.
- Devices may be configured to send data over UDP or TCP to the Plaspy endpoint on port 8888.
- When the device is correctly addressed to the Plaspy endpoint, protocol detection is handled by the server automatically and manual selection is generally unnecessary.

## Transport and Connection Context

The GL-Маяк can report over cellular GPRS and also support SMS alerts as an alternate channel. Connection setup is typically performed on the device side by configuring the mobile APN and the remote server address and transport type. Plaspy’s endpoint and port information are used by the device to deliver telemetry and events.

- Device reporting is normally done over GPRS with SMS used as a fallback for critical alerts.
- The tracker may be configured to connect to the Plaspy endpoint by name d.plaspy.com or by the server IP 54.85.159.138.
- Transport can be either UDP or TCP on port 8888 depending on device configuration and network conditions.
- All Plaspy devices use port 8888, simplifying server and firewall configuration for fleet deployments.
- Ensure the device APN and SIM settings allow GPRS data and that SMS routing is correctly configured if SMS fallback is required.

## Protocol Compatibility Notes

- Firmware differences can change how particular event types or optional fields appear in reports; always test with the firmware version in use.
- Hardware revisions or module variants may alter supported bands, GNSS performance, and some peripheral behaviors.
- Manufacturer configuration menus may offer both UDP and TCP modes; choose the transport supported by your firmware and network.
- Device-side settings such as authorized numbers, password protection, and life signal intervals affect how the tracker interacts with Plaspy.
- Offline buffering capacity and retransmission behavior can vary; confirm buffering expectations for your deployment.
- Validate compatibility and behavior in a controlled test before wide scale rollout to ensure the device meets your monitoring needs.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a reliable deployment, smoother troubleshooting, and predictable device behavior with Plaspy. Knowledge of how the tracker reports identity, events, and buffered data enables better configuration choices and faster resolution when issues arise.

- Helps confirm correct server address, transport, and APN settings for reliable reporting to Plaspy.
- Aids in diagnosing missing telemetry, alarm delivery, or delayed buffered packet uploads.
- Guides sensible configuration of reporting intervals, sleep modes, and life signals to balance battery life and tracking needs.
- Clarifies how alarm inputs and auxiliary controls should be wired and tested for integration with Plaspy workflows.
- Informs testing plans so firmware and hardware variations are validated before full deployment.

## Why Use Plaspy with This Protocol

Using the AutoFon GL-Маяк with Plaspy provides organizations with compact, long autonomy tracking combined with centralized monitoring, alarm handling, and historical playback. The GL-Beacon’s focus on battery life, robust buffering, and event sensing pairs well with Plaspy’s server-side detection and telemetry features to maintain visibility across temporary coverage gaps.

Plaspy streamlines integration by accepting reports at a single domain and port and by automatically detecting the tracker protocol, reducing manual setup inside the platform. To learn more about Plaspy features and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance please verify information on the official AutoFon site https://www.autofon.ru/.

Editorial accuracy note: protocol support, firmware behavior, and device implementation details can change over time. Verify current device behavior and configuration steps with the official manufacturer documentation at https://www.autofon.ru/ before production deployment.
