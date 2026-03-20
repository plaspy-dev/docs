---
slug: /teltonika/fmu130/protocol
id: fmu130-protocol
sidebar_label: Protocol
title: Teltonika - FMU130 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Teltonika FMU130 communication with Plaspy including connection settings transport options and compatibility guidance
keywords:
  - Teltonika FMU130
  - FMU130 protocol
  - FMU130 GPS tracker
  - Teltonika tracker protocol
  - FMU130 Plaspy
  - Plaspy tracker compatibility
  - vehicle tracking protocol
  - fleet management tracker
  - FMU130 connectivity
  - Teltonika communication protocol
---

# Teltonika - FMU130 Protocol

This page documents the public protocol context for using the Teltonika FMU130 tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, what connection settings are used, and which operational considerations are important for smooth integration. This overview does not replace manufacturer documentation but helps clarify the role of the tracker reporting protocol when connecting the FMU130 to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary depending on the FMU130 firmware version, hardware revision, and Teltonika implementation choices. Where device behavior depends on firmware or configuration, verify details with manufacturer resources and the FMU130 user documentation.

## Protocol Overview

The FMU130 communication protocol is the mechanism by which the device reports GNSS position, event data, sensor information, and status to a remote server such as Plaspy. For Plaspy integration the protocol enables the tracker to identify itself, deliver periodic or event driven position updates, and deliver telemetry that Plaspy can store and surface to users.

- Carries location and telemetry data from FMU130 to the server so Plaspy can process and present tracking information.
- Conveys device identity and status so Plaspy can associate messages with the correct asset and account.
- Transports event and sensor reports such as accelerometer events, inputs and outputs, and configured scenarios to Plaspy.
- Enables configuration and remote management when the device is set to accept commands or updates through supported methods.
- Supports both continuous and power aware reporting behaviors consistent with FMU130 sleep modes and power management settings.

## How Plaspy Detects the Protocol

Plaspy accepts connections at a single shared endpoint and port and uses that endpoint to receive incoming tracker traffic. When a properly configured FMU130 reports to Plaspy, the platform inspects incoming data and automatically identifies the tracker protocol so no manual protocol selection is normally required from the user.

- Plaspy server domain is d.plaspy.com for device reporting.
- Plaspy server IP is 54.85.159.138 as an alternate destination for devices that require an IP address.
- The port is 8888 which is used by Plaspy to receive tracker messages.
- Plaspy automatically detects the tracker protocol after the device connects and sends initial data.
- All devices in Plaspy use the same port so device configuration can be simplified across multiple models.
- In most setups the user does not need to select a protocol in Plaspy if the FMU130 is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection choices affect how the FMU130 reaches Plaspy but do not change the high level role of the device protocol. The FMU130 can be pointed at the Plaspy endpoint using either DNS or direct IP and may be configured to use UDP or TCP as supported by the device and network environment.

- The device may be configured using UDP or TCP on port 8888 depending on device settings and carrier network behavior.
- Devices may point to d.plaspy.com or 54.85.159.138 as the Plaspy destination.
- The port is 8888 for incoming tracker data and is consistent for all supported devices.
- Using UDP can reduce overhead while TCP provides a connection oriented option where supported by the device.
- Network firewalls and APN settings must allow outbound traffic to d.plaspy.com or to 54.85.159.138 on port 8888 for successful reporting.

## Protocol Compatibility Notes

- Feature availability can vary by FMU130 firmware version so check the device firmware release notes for protocol changes.
- Hardware revisions and optional modules such as GNSS or 3G differences can affect which telemetry and scenarios are available.
- Transport selection between UDP and TCP is a configuration choice on the device and can influence behavior under certain networks or carrier NAT setups.
- Configuration and updates for the FMU130 can be performed via FOTA Web, FOTA, Teltonika Configurator over USB or Bluetooth, the FMBT mobile app, SMS commands, and GPRS commands which may affect protocol behavior.
- Manufacturer default settings may use different reporting intervals and event triggers that impact the volume of data sent to Plaspy.
- Always validate critical integration points against Teltonika official documentation for the specific firmware and hardware revision of the FMU130.

## Why Protocol Understanding Matters

Knowing how the FMU130 communicates with Plaspy helps with initial setup, tuning device behavior to operational needs, and diagnosing issues when they arise. Understanding the protocol context reduces guesswork and leads to more predictable device operation within Plaspy.

- Makes it easier to configure the FMU130 to reach Plaspy using the correct server and transport settings.
- Helps estimate data usage and reporting frequency when selecting reporting intervals and scenarios.
- Assists troubleshooting by narrowing issues to network, transport, or device configuration layers rather than the Plaspy platform.
- Enables informed choices about UDP versus TCP and how sleep modes affect reporting.
- Supports long term reliability by aligning device firmware, configuration, and server expectations.

## Why Use Plaspy with This Protocol

Using the Teltonika FMU130 with Plaspy gives organizations a practical way to collect GNSS position and rich telemetry from a compact professional terminal. The FMU130 sensor set and configurable scenarios pair well with Plaspy reporting and visualization features to support fleet monitoring, vehicle security, and operational reporting.

Plaspy centralizes incoming FMU130 data at a single endpoint and port and automatically detects the tracker protocol so teams can focus on deployment and operations rather than per device protocol selection. To learn more about Plaspy and how it works with devices like the FMU130 visit https://www.plaspy.com. Please verify device specific protocol details firmware behavior and any manufacturer guidance on the Teltonika website https://www.teltonika-gps.com/ since protocol support and device implementations can change over time.
