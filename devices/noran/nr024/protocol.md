---
slug: /noran/nr024/protocol
id: nr024-protocol
sidebar_label: Protocol
title: Noran - NR024 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Noran NR024 and how it communicates with Plaspy for fleet tracking
keywords:
  - Noran NR024 protocol
  - Noran NR024 GPS protocol
  - Noran NR024 communication protocol
  - NR024 tracker protocol
  - Noran GPS tracker protocol
  - NR024 Plaspy compatibility
  - Noran vehicle tracking protocol
  - NR024 fleet tracker protocol
  - Noran protocol guide
  - NR024 device protocol
---

# Noran - NR024 Protocol

This page describes the public protocol context for using the Noran NR024 GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non sensitive terms and explains the role of the tracker reporting protocol when integrating NR024 devices into a vehicle tracking workflow.

Plaspy uses shared connection settings across supported devices and detects tracker protocols automatically, but exact message behavior can vary by firmware version, hardware revision, and manufacturer implementation. The NR024 includes features such as image upload, fuel curve reporting, GSM GPRS connectivity, on board camera, fuel and audio monitoring, engine remote control, A GPS assistance, geofencing, SOS, and real time location uploads that influence how and when it reports data to a tracking server.

## Protocol Overview

The NR024 device protocol defines how the tracker formats and transmits telemetry, events, and optional media to a remote server so a fleet platform like Plaspy can process and present the data. The following points summarize the protocol role without exposing implementation specifics.

- Enables the NR024 to send position updates, status flags, and event notifications to a backend server for live tracking and alerts.
- Carries supplementary data such as fuel metrics, audio triggers, and photographic captures so the platform can correlate media with vehicle events.
- Provides the mechanism for remote control signals such as engine cut or configuration commands when supported by the device and allowed by the platform.
- Dictates reporting cadence options like time or distance based uploads which affect how frequently Plaspy receives location and sensor data.
- Supports both basic telemetry and extended payloads depending on device configuration and firmware capabilities.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic on a shared endpoint and uses the content of received messages together with device connection context to determine the tracker protocol automatically. Users generally do not need to select a protocol inside Plaspy when the NR024 is correctly configured to report to the Plaspy endpoint.

- Plaspy listens for device reports at the public server address d.plaspy.com and at the public server IP 54.85.159.138 on the configured port.
- All devices in Plaspy use the same port which simplifies device side configuration and server routing.
- The NR024 may be configured to use either UDP or TCP for sending data; Plaspy accepts both transport types on the shared port.
- When an NR024 reports to the Plaspy address, Plaspy matches incoming messages to known protocols and routes data into the platform processing pipeline.
- Because detection is automatic, correct device reporting settings on the NR024 are usually the only step required for initial connectivity.

## Transport and Connection Context

Connection context covers how the NR024 establishes communication with a remote tracking server and what options are commonly available for transport and addressing. This information helps when setting the device server parameters during installation.

- The NR024 supports sending data over UDP or TCP depending on device firmware and configuration choices.
- Devices may be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 for reporting.
- Plaspy receives NR024 traffic on port 8888 and all supported devices use the same port number on the platform.
- Choose UDP when lower latency and smaller overhead are preferred and TCP when reliable delivery and session behavior are necessary and supported by the tracker.
- Ensure the chosen transport and DNS resolution to d.plaspy.com are permitted on any intermediate mobile networks and firewalls.

## Protocol Compatibility Notes

- Firmware versions can change message details and available features such as image upload or fuel curve reporting; always note the device firmware revision when troubleshooting.
- Hardware revisions or optional modules (camera, A GPS, extra I O) may alter what data the NR024 can include in reports.
- Transport selection between TCP and UDP can affect reliability and how Plaspy receives larger payloads such as photos; confirm the tracker is configured for the intended transport.
- Manufacturer specific configuration commands or settings may differ across regional variants of the NR024; consult device configuration guides for model specific options.
- Plaspy automatically detects the reporting protocol, but successful detection depends on the device actually sending reports to the Plaspy endpoint and using supported transport settings.
- Validate compatibility by cross checking the device behavior against the manufacturer documentation and performing test reports to the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding the NR024 communication protocol helps installers and fleet managers achieve reliable data flow, correct feature usage, and faster troubleshooting when integrating devices with Plaspy.

- Ensures the device is configured to report to d.plaspy.com or the Plaspy server IP using the supported transport and port so data arrives at Plaspy.
- Helps diagnose missing data types such as images or fuel curves by correlating firmware capabilities with platform expectations.
- Makes it possible to plan for network limitations that affect media uploads and high frequency reporting in the field.
- Supports informed decisions about enabling or disabling specific features like remote engine control or audio monitoring for operational policies.
- Reduces setup time by clarifying which device settings are required for Plaspy to automatically detect and process NR024 reports.

## Why Use Plaspy with This Protocol

Using the Noran NR024 with Plaspy provides a practical combination of device capability and platform handling for organizations that need rich vehicle telemetry, media evidence, and operational controls. The NR024’s ability to deliver location, fuel metrics, photos, and event signals can be surfaced in Plaspy to support fleet oversight, incident verification, and preventative maintenance workflows.

If you want to learn more about how Plaspy handles NR024 devices, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol information and firmware notes on the manufacturer website http://www.norantracker.com/ before deploying at scale.
