---
slug: /goome/ev02/protocol
id: ev02-protocol
sidebar_label: Protocol
title: Goome - EV02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Goome EV02 and how it communicates with Plaspy for tracking and monitoring
keywords:
  - Goome EV02 protocol
  - Goome EV02 GPS tracker
  - EV02 communication protocol
  - EV02 Plaspy compatibility
  - Goome GPS protocol
  - motorcycle GPS tracker EV02
  - GSM GPRS GPS tracker
  - vehicle tracking EV02
  - Plaspy device integration
  - GPS tracker protocol guide
---

# Goome - EV02 Protocol

This page provides a public, non sensitive overview of the communication context for the Goome EV02 when used with Plaspy. It is intended to explain how the device reports location and events to the Plaspy platform at a high level, and to clarify the connection settings and compatibility considerations you should be aware of during deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact packet behavior and available features can vary by EV02 firmware, hardware revision, and manufacturer implementation, so this page focuses on connection and protocol context rather than device internals.

## Protocol Overview

The communication protocol for the Goome EV02 defines how the tracker uses GSM and GPRS connectivity plus GPS positioning to deliver location, movement, and alert data to a remote server. In practice this means the tracker sends periodic or event driven messages that allow a back end such as Plaspy to map position, support playback, and trigger alerts like geofence events.

- Enables the EV02 to report real time GPS location and movement data to a remote server.
- Carries event information such as geo fence triggers, ignition or motion alerts, and status updates.
- Includes identification and addressing information so Plaspy can associate messages with a specific device.
- Supports historical trace playback by providing timestamped location messages that Plaspy can store.
- Operates over the cellular data channel so message delivery depends on the device network and APN configuration.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker connections and uses the content of incoming messages to identify the tracker type. When an EV02 is configured to report to Plaspy, the platform generally detects the device protocol automatically so manual selection is not required in most cases.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the platform endpoint.
- Plaspy server IP address for direct reporting is 54.85.159.138.
- The platform accepts device traffic on port 8888 and uses that same port for all supported devices.
- Plaspy automatically detects the tracker protocol when properly configured to report to the Plaspy endpoint.
- In typical setups the user does not need to select a protocol inside Plaspy if the device points to the configured Plaspy endpoint.

## Transport and Connection Context

The EV02 can transmit its messages over the cellular network and uses either UDP or TCP depending on device support and configuration choices. The connection layer is separate from the protocol semantics; Plaspy supports both transports for device reporting on the standard Plaspy port.

- Devices may be configured to use UDP or TCP on port 8888 for reporting to Plaspy.
- Trackers can be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138.
- All devices reporting to Plaspy use the same port number which simplifies server endpoint configuration.
- Transport choice (UDP versus TCP) can affect delivery behavior and should match the device firmware capability.
- Make sure the device APN and SIM configuration allow data connections to the chosen transport and endpoint.

## Protocol Compatibility Notes

- Firmware versions can add, remove, or change message types and fields. Always confirm the EV02 firmware level when validating behavior.
- Hardware revisions and manufacturing variants may affect available features or default transport settings.
- The device may be configurable to use either UDP or TCP; choose the transport supported by your firmware and network environment.
- Manufacturer server settings and configuration instructions can vary by region and product bundle.
- Plaspy accepts reporting on a shared port but relies on message contents for protocol identification, so correct server and APN configuration on the device is essential.
- Verify geo fence, trace playback, and alert behavior against device documentation for the firmware revision in use.

## Why Protocol Understanding Matters

Understanding the EV02 communication protocol and connection behavior helps ensure reliable setup, accurate alerts, and consistent data flow into Plaspy. Awareness of transport options, firmware differences, and required server settings reduces time spent troubleshooting and increases system reliability for vehicle monitoring use cases.

- Ensures the device is pointed to the correct Plaspy endpoint and port so messages arrive at the platform.
- Helps troubleshoot missing data by checking transport selection, APN, and SIM connectivity.
- Clarifies how firmware updates can change available telemetry and event reporting.
- Aids in configuring geo fence and trace playback expectations based on how frequently the device reports.
- Supports planning for power and network behavior that affects message frequency and timeliness.

## Why Use Plaspy with This Protocol

Using the Goome EV02 with Plaspy gives fleets and individual owners a practical way to collect real time location, geofencing, and historical trace data for electric motor vehicles and motorcycles. The EV02 combines compact hardware with GSM GPRS GPS connectivity to provide the core signals Plaspy needs to offer monitoring, playback, and alerting features.

If you want to learn more about how Plaspy works with devices like the Goome EV02, visit https://www.plaspy.com for platform information and contact options. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest EV02 documentation and firmware information on the manufacturer site at http://www.goomegpstracker.com.
