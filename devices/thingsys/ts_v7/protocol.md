---
slug: /thingsys/ts_v7/protocol
id: ts_v7-protocol
sidebar_label: Protocol
title: ThingSys - TS-V7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ThingSys TS-V7 GPS tracker connecting to Plaspy for communication and compatibility guidance
keywords:
  - ThingSys TS-V7 protocol
  - ThingSys TS-V7 GPS protocol
  - ThingSys TS-V7 communication
  - ThingSys TS-V7 tracking protocol
  - TS-V7 Plaspy compatibility
  - Plaspy device protocol
  - vehicle GPS tracker protocol
  - fleet tracking ThingSys
  - TS-V7 remote monitoring
  - TS-V7 firmware compatibility
---

# ThingSys - TS-V7 Protocol

This page describes the public protocol context for using the ThingSys TS-V7 vehicle GPS tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general terms and what to expect during device setup and integration, without revealing private implementation details.

The TS-V7 is a professional vehicle tracker offering features such as 2G 3G and 4G connectivity, GPS positioning, emergency alarm, remote fuel and circuit control, remote monitoring via call, geo fencing overspeed alerts mileage counting ignition detection and integration with external sensors and accessories. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version hardware revision or manufacturer implementation so verify device specifics with ThingSys when needed.

## Protocol Overview

The communication protocol for the TS-V7 defines how location data alerts telemetry and control responses are carried from the device to a remote server and how remote commands or acknowledgements may be delivered back to the device. In the context of Plaspy the protocol enables reliable delivery of position updates and event notifications so the platform can present usable tracking and alert information.

- Conveys periodic or event driven GPS location and timestamp information to the server.
- Sends alarm and alert events such as emergency button presses overspeed or geo fence breaches.
- Transmits status and telemetry including ignition state mileage and optional sensor readings.
- Allows remote control and configuration commands to be issued to the device when supported.
- Enables identification of the device so Plaspy can associate incoming messages with the correct asset.

## How Plaspy Detects the Protocol

Plaspy receives data from devices at a shared public endpoint and automatically determines the tracker protocol when messages arrive. This reduces the need for manual protocol selection inside Plaspy provided the TS-V7 is configured to report to the Plaspy endpoint using the supported transport.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the platform listens on a single port for device messages.
- The port used by Plaspy for all supported devices is 8888 and Plaspy applies the same port across devices.
- Plaspy automatically detects the tracker protocol so manual selection in the platform is typically not required.
- If a device is correctly configured to report to the Plaspy endpoint it will be recognized and processed by Plaspy.

## Transport and Connection Context

Connection context covers the network transport options devices use to reach Plaspy and how to point the tracker at the Plaspy endpoint. For the TS-V7 this typically means configuring the device to send its reports to Plaspy using one of the supported transport modes.

- The TS-V7 may be configured to use UDP or TCP on port 8888 depending on device support and local configuration choices.
- Devices may be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138.
- Plaspy uses the same port 8888 for all devices to simplify setup and firewall rules.
- Choose the transport (UDP or TCP) based on your network reliability and the device firmware options.
- Confirm device APN and network access so the tracker can reach the Plaspy endpoint over mobile data.

## Protocol Compatibility Notes

- Firmware versions on the TS-V7 can change the set of features and the exact message behavior. Always check the device firmware release notes.
- Hardware revisions or optional accessory modules may introduce differences in available telemetry and alert types.
- Manufacturer configuration strings or server address formats can vary between firmware builds use official ThingSys guidance when configuring reporting.
- Transport selection between UDP and TCP affects delivery characteristics; verify which transport your device firmware recommends.
- Plaspy auto detection covers a wide range of common tracker protocols but proper device configuration is required for successful association.
- Validate compatibility and specific command support against ThingSys product documentation for the TS-V7.

## Why Protocol Understanding Matters

Understanding how the TS-V7 communicates helps with initial setup troubleshooting and long term reliability when the device is used with Plaspy. Awareness of protocol roles and transport choices reduces integration time and improves the accuracy of alerts and reporting.

- Speeds up configuration by ensuring the device reports to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Helps diagnose connectivity issues by clarifying whether the device is using UDP or TCP and whether messages reach Plaspy.
- Enables better mapping of device telemetry to platform features such as ignition based tracking or mileage reporting.
- Improves confidence when validating alarm and event delivery for safety workflows like emergency button alerts.
- Supports maintenance planning when firmware updates may alter protocol behavior or command availability.

## Why Use Plaspy with This Protocol

Using the ThingSys TS-V7 with Plaspy gives organizations centralized visibility into vehicle location status and events while leveraging Plaspy's automatic protocol detection and unified connection settings. The TS-V7 feature set including remote monitoring emergency alarm remote fuel control and multiple sensor integrations pairs well with a platform that can ingest position updates alerts and telemetry for fleet oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details firmware behavior and configuration options verify information on the manufacturer site https://www.thingsys.com/ and consult ThingSys documentation.
