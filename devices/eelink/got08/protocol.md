---
slug: /eelink/got08/protocol
id: got08-protocol
sidebar_label: Protocol
title: EElink - GOT08 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for the EElink GOT08 tracker and how it communicates with Plaspy
keywords:
  - EElink GOT08 protocol
  - GOT08 GPS protocol
  - EElink GOT08 Plaspy
  - GOT08 communication protocol
  - GOT08 tracking protocol
  - EElink GPS tracker protocol
  - OBD GPS tracker Plaspy
  - vehicle tracking GOT08
  - fleet management GOT08
  - Plaspy tracker compatibility
---

# EElink - GOT08 Protocol

This page outlines the public protocol context for using the EElink GOT08 OBD GPS tracker with Plaspy. It explains how the device reports location and OBD telemetry to Plaspy and what connection settings are used for the service. The content focuses on publicly usable integration details and operational expectations rather than firmware internals or proprietary packet definitions.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact behavior for reporting intervals, telemetry fields, and device identification can vary by firmware version, hardware revision, and manufacturer implementation, so verify device specific details when needed.

## Protocol Overview

The protocol used by the GOT08 governs how the device identifies itself, opens a session to a remote endpoint, and sends position plus OBD-derived telemetry back to a server. For integration with Plaspy the important public aspects are how the tracker locates the Plaspy endpoint and how it streams its regular reports and connection heartbeats.

- Device identification and registration information are included in initial reports so a server can associate incoming data with a specific unit.
- Location reports contain GPS position and timestamps to enable real time tracking and historical playback in Plaspy.
- OBD telemetry from the vehicle is sent alongside position data when available, allowing Plaspy to map engine and diagnostic parameters.
- Regular reporting and keepalive behavior help the server track device online status and data timeliness.
- The protocol is transport agnostic in practice for Plaspy usage, relying on either TCP or UDP as supported by the device and carrier.

## How Plaspy Detects the Protocol

Plaspy receives device data on a single shared endpoint and port and can automatically determine which tracker protocol is presenting data. When a GOT08 is configured to send reports to the Plaspy endpoint, the platform associates incoming streams with the appropriate device record without manual protocol selection in most cases.

- Plaspy listens for device traffic on the endpoint d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port for reporting so configuration is consistent across models.
- Devices may be configured to connect over UDP or TCP on port 8888 depending on device and operator preferences.
- When a properly configured device reports to the Plaspy endpoint the system will automatically detect the tracker protocol.
- Users typically do not need to choose a protocol inside Plaspy if the device is correctly pointing to the Plaspy endpoint and reporting.

## Transport and Connection Context

Connection context describes how the GOT08 reaches Plaspy and what transport options are available. For Plaspy integration the public facts are straightforward: point the device at the Plaspy endpoint and use the shared reporting port supported by the platform.

- Devices may be configured using UDP or TCP on port 8888 depending on the device firmware and network environment.
- The tracker can be directed to report to d.plaspy.com or directly to 54.85.159.138 as an alternative endpoint.
- Plaspy uses the same port for all supported devices which simplifies mass configuration and deployment.
- Cellular network settings such as APN and operator permissions affect whether the tracker can reach the Plaspy endpoint from a vehicle.
- Firewalls and carrier NAT can impact connectivity so validate outbound access to port 8888 on the chosen network.

## Protocol Compatibility Notes

- Firmware versions can change message fields and reporting behaviors; review the device firmware release notes when troubleshooting.
- Hardware revisions sometimes adjust available OBD parameters or interface timing, which can alter what telemetry is reported to Plaspy.
- Some manufacturer configurations allow switching between TCP and UDP transports; confirm which transport the device is set to use before deployment.
- Manufacturer default settings may point to a different server; ensure the GOT08 is configured to use the Plaspy endpoint for proper integration.
- Validate that the vehicle exposes the desired OBD PIDs because available telemetry depends on the vehicle make and model.
- Test a single device end to end with Plaspy before rolling out to a large fleet to confirm compatibility and mapping of telemetry fields.

## Why Protocol Understanding Matters

Having a practical understanding of the GOT08 communication protocol helps with setup, troubleshooting, and maintaining reliable data flow into Plaspy. Knowing what the device sends and how it connects reduces deployment time and aids in diagnosing connectivity or telemetry mapping issues.

- Faster setup by confirming device reporting settings match Plaspy endpoint and transport expectations.
- Easier troubleshooting when you can verify whether the device is reaching d.plaspy.com or 54.85.159.138 on port 8888.
- Better telemetry mapping because you can check which OBD parameters the device and vehicle expose.
- More predictable fleet rollouts by standardizing device firmware and transport choices across units.
- Informed maintenance planning when firmware updates or hardware changes are known to affect reporting behavior.

## Why Use Plaspy with This Protocol

Using the GOT08 with Plaspy provides a quick path to fleet visibility thanks to the tracker’s plug and play OBD form factor. Organizations can benefit from real time location, trip histories, and OBD telemetry without complex installations, enabling faster rollouts and efficient operational monitoring.

Plaspy centralizes incoming GOT08 data on a single platform where alerts, geofencing, and historical analysis can be applied consistently across a mixed fleet. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details may change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.eelink.com.cn/.
