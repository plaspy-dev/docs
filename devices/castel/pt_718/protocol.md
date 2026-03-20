---
slug: /castel/pt_718/protocol
id: pt_718-protocol
sidebar_label: Protocol
title: Castel - PT-718 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Castel PT-718 and how it communicates with the Plaspy platform
keywords:
  - Castel PT-718 protocol
  - Castel PT-718 GPS tracker
  - PT 718 communication
  - PT 718 tracking protocol
  - Castel tracker Plaspy compatibility
  - GPS tracker communication
  - personal GPS tracker protocol
  - fleet management compatibility
  - Plaspy device integration
  - tracker reporting protocol
---

# Castel - PT-718 Protocol

This page describes the public protocol context for using the Castel PT-718 tracker with Plaspy. It focuses on how the device reports location and status to a remote server and what to expect during integration with the Plaspy platform. The content is intended to help administrators, integrators, and technical users understand the communication role of the tracker without exposing proprietary or sensitive implementation details.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by PT-718 firmware version, hardware revision, and manufacturer implementation, so the guidance here is general and focused on connection and compatibility considerations rather than low level packet specifics.

## Protocol Overview

The PT-718 uses cellular data and satellite positioning to produce periodic and event driven location reports that can be delivered to a remote server. The device protocol governs how the tracker identifies itself, transmits position and status, and signals events such as SOS or geofence alerts. Understanding this public protocol context helps ensure data flows reliably into Plaspy and other compatible backends.

- The protocol defines how the tracker formats and sends location, timestamp, and basic status data to a server endpoint.
- Identification and session information in reports allow Plaspy to associate incoming messages with the correct device record.
- Event messages such as SOS, geofence entry or exit, and low voltage alerts are transmitted through the same reporting channel used for position updates.
- Transport choice and device configuration determine whether messages arrive over UDP or TCP and how quickly they are received by the server.
- Server side detection and routing convert incoming reports into usable telemetry for maps, alerts, and history in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and determines which public tracker protocol a device uses based on the incoming connection and report characteristics. This automatic detection reduces setup steps for users and lets devices begin reporting with minimal manual configuration, provided they are pointed to the Plaspy endpoint.

- Plaspy listens on a common server address and port for all supported devices.
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The platform uses port 8888 for device reporting and all devices in Plaspy use the same port.
- Devices may be configured to report via UDP or TCP to the shared Plaspy endpoint on port 8888.
- When a PT-718 is correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will automatically detect the tracker protocol and route the data to the appropriate device record.
- In most cases users do not need to manually select a protocol inside Plaspy if the device is pointed at the Plaspy endpoint.

## Transport and Connection Context

The PT-718 can deliver reports over GSM GPRS and uses standard IP transport to forward tracking data. Transport selection and device network behavior affect delivery reliability and latency, and both UDP and TCP are commonly supported depending on device configuration and firmware.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be set to send reports to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy uses port 8888 for every supported device, simplifying outbound configuration in devices and server side routing.
- UDP provides lower overhead and is commonly used for frequent position reports, while TCP can be chosen for sessions that require connection reliability depending on device capabilities.
- Network factors such as operator GPRS behavior, signal quality, and APN configuration influence how the PT-718 maintains connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change report timing, available fields, or event behavior; always check the device firmware version when validating compatibility.
- Hardware revisions and optional features (for example hardware or battery variants) may alter available alerts or power management behavior.
- Manufacturer default settings may have devices reporting to a vendor cloud or to SMS first; reconfigure the server endpoint to d.plaspy.com or 54.85.159.138 on port 8888 to send data to Plaspy.
- Transport selection between UDP and TCP should be confirmed in device settings and tested to ensure expected delivery characteristics.
- Some PT-718 units expose configuration via SMS commands or an on device setup mode; use those official methods to change the reporting server address and transport.
- Validate geofence, SOS, and low battery behavior after configuring reports to Plaspy, as event thresholds can be firmware dependent.

## Why Protocol Understanding Matters

Knowing how the PT-718 communicates with a backend service like Plaspy helps with initial setup, troubleshooting, and ongoing reliability. Even without diving into proprietary packet layouts, a clear view of the transport, endpoint, and expected event types makes it simpler to confirm that telemetry is arriving and being interpreted correctly.

- Ensures correct server endpoint and transport settings at device configuration time.
- Helps troubleshoot missing or delayed reports by focusing on network, APN, and transport layers first.
- Clarifies expectations for event types such as SOS, geofence alerts, and low battery notifications.
- Simplifies verification that the device is associated with the right Plaspy account and device record after reports begin arriving.
- Reduces integration time because Plaspy automatically detects the device protocol when the tracker is pointed at the shared endpoint.

## Why Use Plaspy with This Protocol

Using the Castel PT-718 with Plaspy provides a straightforward way to collect real time location and event data from personal and asset trackers. Plaspy centralizes telemetry from multiple devices and makes it available for mapping, alerts, history, and monitoring without requiring manual protocol selection for each device.

Plaspy accepts PT-718 reports sent to the shared Plaspy endpoint and port and automatically detects the correct protocol, so once the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 (UDP or TCP as supported), telemetry should begin flowing into the platform. To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device protocol behavior, firmware notes, and device specific instructions with the manufacturer at http://www.castelecom.com/ since protocol support and firmware behavior can change over time.
