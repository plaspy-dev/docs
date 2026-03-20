---
slug: /teltonika/fmc001/protocol
id: fmc001-protocol
sidebar_label: Protocol
title: Teltonika - FMC001 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Teltonika FMC001 GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - Teltonika FMC001 protocol
  - FMC001 GPS protocol
  - Teltonika FMC001 Plaspy
  - GPS tracker communication
  - OBD II tracking protocol
  - vehicle tracking Teltonika
  - FMC001 compatibility
  - tracker protocol guide
  - Bluetooth LE tracker protocol
  - fleet management tracker protocol
---

# Teltonika - FMC001 Protocol

This page covers the public protocol context for using the Teltonika FMC001 tracker with Plaspy. It focuses on how the device communicates in general terms, how Plaspy receives and recognizes tracker data, and what to consider when integrating FMC001 devices into a Plaspy deployment. The technical details here are intended to help with configuration and troubleshooting without exposing private implementation specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available telematics fields can vary by FMC001 firmware version, hardware revision, and manufacturer implementation. For device specific behavior such as sleep modes, OBD II parameters, BLE sensor support, and FOTA options consult official Teltonika documentation.

## Protocol Overview

The communication protocol for the FMC001 governs how the tracker reports position, OBD II parameters, accelerometer events, Bluetooth sensor data, and status messages to a server. In practical terms the protocol defines what data the device sends, how the server identifies the device, and how the two endpoints keep the session and telemetry synchronized.

- Enables transmission of GNSS position, OBD II readings, accelerometer events, and BLE sensor data to a remote server.
- Carries device identity and status information so Plaspy can associate incoming messages with the correct vehicle record.
- Supports reporting modes that reflect FMC001 power management choices such as GPS Sleep and various deep sleep modes.
- Allows firmware driven extensions such as FOTA notifications and sensor pairing status to be conveyed to the platform.
- Provides the basis for Plaspy to present usable telemetry for fleet management, driver behaviour, and diagnostics.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port for all supported devices, then matches incoming data to a compatible handling path. Because Plaspy automatically detects the tracker protocol, users generally do not need to manually select a protocol inside the platform when a device is correctly configured to report to the Plaspy endpoint.

- Plaspy uses a single ingestion port for all devices which simplifies device configuration.
- When an FMC001 reports to Plaspy, the platform inspects and routes the session using automatic detection routines rather than requiring manual protocol selection.
- Proper device configuration to point the device at the Plaspy endpoint ensures the tracker will be recognized and parsed by the platform.
- Users typically configure the tracker to report to the Plaspy domain or IP and rely on automatic detection for protocol handling.

## Transport and Connection Context

The FMC001 can be configured to send telemetry over either UDP or TCP depending on device settings and network conditions. Plaspy accepts connections for trackers on the same port and provides a domain and IP target that devices can use for reporting.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The common reporting port for Plaspy is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on the FMC001 configuration options.
- Choice of transport impacts message delivery semantics and should align with network reliability and device configuration preferences.
- Ensure APN and network operator settings on the FMC001 allow outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Compatibility can depend on FMC001 firmware level; newer firmware can introduce additional telemetry fields or behavior changes.
- Hardware revisions or optional features such as certain BLE profiles may affect which data the device sends to the server.
- Transport selection between UDP and TCP can influence message delivery and may require matching settings on the device.
- Manufacturer side configuration tools such as Teltonika Configurator and FOTA processes can change device reporting behavior.
- Validate that device settings point to d.plaspy.com or 54.85.159.138 on port 8888 to allow proper communication with Plaspy.
- Always cross check device behavior against the official Teltonika documentation when assessing compatibility.

## Why Protocol Understanding Matters

Understanding how the FMC001 communicates with Plaspy helps achieve reliable telematics, faster troubleshooting, and more predictable fleet operations. Knowing the roles of transport, device identity, and firmware behavior reduces integration time and helps operations teams maintain consistent reporting.

- Helps ensure the device is configured to report to the correct Plaspy endpoint and port.
- Speeds troubleshooting when telemetry or OBD II values are not appearing as expected in Plaspy.
- Clarifies how device sleep modes and reporting intervals affect location and event timelines.
- Guides decisions about using UDP versus TCP based on connectivity and message criticality.
- Supports compatibility checks before large scale rollouts or firmware updates.

## Why Use Plaspy with This Protocol

Using the Teltonika FMC001 with Plaspy gives operations teams a reliable path to ingest OBD II data, GNSS position, accelerometer events, and BLE sensor inputs into a single fleet management platform. The FMC001's capabilities for driver behaviour detection, fuel monitoring, and flexible sleep modes align well with Plaspy's telemetry collection and visualization features, helping teams maintain visibility across vehicles and use cases.

If you want to learn more about how Plaspy works with devices like the Teltonika FMC001, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify the official Teltonika resources at https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
