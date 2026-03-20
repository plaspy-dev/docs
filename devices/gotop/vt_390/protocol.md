---
slug: /gotop/vt_390/protocol
id: vt_390-protocol
sidebar_label: Protocol
title: GOTOP - VT-390 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the GOTOP VT 390 and how it communicates with Plaspy for vehicle and fleet tracking
keywords:
  - GOTOP VT-390 protocol
  - GOTOP VT-390 GPS protocol
  - GOTOP VT-390 tracking protocol
  - GOTOP VT-390 communication
  - GOTOP GPS tracker protocol
  - GOTOP VT-390 Plaspy compatibility
  - VT-390 tracker protocol
  - vehicle tracking VT-390
  - fleet management VT-390
  - Plaspy device protocol
---

# GOTOP - VT-390 Protocol

This page covers the public protocol context for using the GOTOP VT-390 tracker with Plaspy. It describes how the tracker communicates with Plaspy in general, what role the communication protocol plays in integration, and which connection settings are used by the Plaspy platform. The content focuses on public, non sensitive details to help with planning and basic setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by VT-390 firmware version, hardware revision, and manufacturer implementation, so this page emphasizes communication context rather than device internals.

## Protocol Overview

The communication protocol used by the VT-390 is the mechanism by which the device reports location, status, and alarms to a remote server and receives configuration and control messages. For integration with Plaspy, the protocol enables device identification, positional updates, telematics reporting, and event notifications that the platform can process and present.

- Carries GPS location and time data to the server for real time tracking and history
- Delivers alerts and sensor events such as SOS, motion, over speed, and fuel input conditions
- Allows transmission of media or auxiliary data where supported by the device in addition to core telemetry
- Supports two way communication features used for voice or remote control where the tracker firmware permits
- Provides device identification and status metadata so Plaspy can associate reports to the correct asset

## How Plaspy Detects the Protocol

Plaspy is designed to work with many tracker models and uses a single shared endpoint and port for device reports. When a VT-390 is configured to report to Plaspy, the platform detects the tracker protocol automatically so manual protocol selection inside Plaspy is typically not required.

- Plaspy servers accept reports at d.plaspy.com and at the public IP 54.85.159.138
- All devices supported by Plaspy use the same port on the server
- Plaspy automatically detects the tracker protocol once the device reports to the endpoint
- Users generally only need to configure the VT-390 to point to the Plaspy endpoint and the correct port
- If a device does not appear, verify the device reporting address, SIM data, and network connectivity before changing platform settings

## Transport and Connection Context

The VT-390 can be configured to use standard cellular transport methods to send data to a server. For Plaspy integration, the important connection context is the destination and the transport protocol, not low level packet formats.

- The device may be configured to use UDP or TCP on port 8888 depending on device configuration and firmware support
- Plaspy accepts device reports on port 8888 for all supported devices
- Devices can be pointed to the hostname d.plaspy.com or the IP address 54.85.159.138 as the reporting server
- Choose the transport method that matches the VT-390 firmware capability and reliability needs for your deployment
- Ensure APN and SIM settings on the VT-390 are correct so the device can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change which features are available and how the device reports specific events
- Hardware variants or region specific models may have different I O assignments or accessory support
- Some features mentioned in marketing materials such as camera capture or RFID driver ID depend on firmware integration and server side support
- Transport selection between UDP and TCP is governed by the device firmware and the configuration you apply
- Validate compatibility and recommended settings against the VT-390 official documentation for your firmware version
- Testing in a controlled environment is recommended before large scale deployment

## Why Protocol Understanding Matters

Understanding how the VT-390 communicates helps ensure reliable reporting, correct interpretation of events, and smooth long term operation with Plaspy. Awareness of transport, server addressing, and feature availability speeds troubleshooting and optimization.

- Helps diagnose connectivity issues such as incorrect server address or transport mismatch
- Ensures alerts and telemetry are configured so Plaspy receives usable information for monitoring
- Supports planning for data usage and SIM provisioning when enabling media or frequent reporting
- Allows administrators to confirm which device features will be available in practice with current firmware
- Reduces time to resolution when events do not appear as expected in Plaspy

## Why Use Plaspy with This Protocol

Using the GOTOP VT-390 with Plaspy provides organizations with a standardized way to collect location, event, and telemetry data across a fleet. Plaspy’s automatic protocol detection and unified port handling simplify onboarding so devices that are properly pointed at the Plaspy endpoint can begin reporting with minimal platform configuration.

Plaspy is well suited for mixed fleets that require visibility, configurable alerts, and centralized data retention. If your VT-390 devices are configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will accept reports and handle protocol detection automatically. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance consult the manufacturer documentation at https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
