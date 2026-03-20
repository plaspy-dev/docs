---
slug: /concox/jm_vg02/protocol
id: jm_vg02-protocol
sidebar_label: Protocol
title: Concox - JM-VG02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox JM-VG02 and how it communicates with Plaspy for device integration and reporting
keywords:
  - Concox JM-VG02 protocol
  - Concox JM-VG02 GPS protocol
  - JM-VG02 Plaspy compatibility
  - JM-VG02 tracking protocol
  - Concox OBD II tracker protocol
  - vehicle tracking protocol Plaspy
  - Plaspy device protocol guide
  - JM-VG02 communication protocol
  - Concox driver behavior reporting
  - INS aided GPS protocol
---

# Concox - JM-VG02 Protocol

This page describes the public protocol context for the Concox JM-VG02 series tracker and how it communicates with the Plaspy platform. It is intended to explain the role of the device communication protocol in connecting an OBD II tracker to Plaspy without exposing private implementation details. Use this page to understand the general behavior and connection settings that matter for device integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the general communication context and practical compatibility considerations rather than low level packet formats. The JM-VG02U includes INS aided GPS, accelerometer and gyroscope sensors, and driving behavior reporting, all of which are delivered to Plaspy via the device reporting protocol.

## Protocol Overview

The device protocol is the set of rules the JM-VG02 uses to identify itself, deliver location and sensor data, and report events to a remote server. For OBD II trackers like the JM-VG02U, the protocol governs how GPS, inertial sensor readings, driving behavior alerts, mileage, and status notifications are packaged and sent to Plaspy so the platform can display and act on that information.

- Enables periodic and event driven position reporting from the JM-VG02 to Plaspy
- Carries sensor and vehicle data such as INS assisted GPS fixes, accelerometer and gyroscope events, and driving behavior alerts
- Allows the tracker to include identifying information so Plaspy can associate messages with a device record
- Conveys status information such as power, connectivity, and alert conditions to support fleet monitoring
- Provides the structured data that Plaspy uses to surface mileage, safety events, and telematics insights

## How Plaspy Detects the Protocol

Plaspy receives device messages on a shared endpoint and automatically determines the tracker protocol from the incoming data pattern and device identifiers. In most deployments you do not need to manually select a protocol inside Plaspy if the tracker is configured to report to the platform endpoint.

- Plaspy listens on a shared server endpoint and automatically detects the tracker protocol from incoming reports
- All devices in Plaspy use the same port and a common receiving endpoint for simplicity of configuration
- Devices should be configured to report to the Plaspy server domain or IP for automatic detection and onboarding
- Typical configuration is to point the tracker at the Plaspy server and allow the platform to identify the model by its reported payloads and IDs
- When the JM-VG02 is properly pointed to Plaspy, the platform will match messages to your account without manual protocol selection

## Transport and Connection Context

The JM-VG02 can deliver its reporting either over UDP or TCP depending on device configuration and firmware capability. For Plaspy integration the key practical details are the server endpoint and port that the device should use to send reports.

- Plaspy server domain is d.plaspy.com for device reporting
- The Plaspy server IP is 54.85.159.138 and may be used in device configuration where DNS is not available
- The port used by Plaspy for device connections is 8888
- The device may be configured using UDP or TCP on port 8888 depending on tracker support and your preference
- All devices in Plaspy use the same port which simplifies device setup across a mixed fleet

## Protocol Compatibility Notes

- Firmware differences may change what fields are present in reports and how certain events are encoded; verify firmware notes when possible
- Hardware revisions across JM-VG02 units can introduce behavioral differences in sensor reporting and available diagnostics
- Manufacturer side configuration options can enable or disable specific alerts such as fatigue driving or harsh event reporting
- Transport selection (UDP vs TCP) affects connectivity behavior and may influence retransmission or acknowledgement behavior at the network layer
- Pointing the device at d.plaspy.com or the IP 54.85.159.138 on port 8888 is the normal way to ensure reports reach the Plaspy platform
- Validate device behavior against Concox documentation for your specific JM-VG02U firmware to confirm supported reporting fields

## Why Protocol Understanding Matters

Understanding the communication protocol helps you set up the JM-VG02 properly, confirm that the data you expect is being delivered to Plaspy, and troubleshoot connectivity or reporting issues effectively. Knowing the transport and message context reduces onboarding time and supports reliable long term operation.

- Ensures the device is configured to report to the correct Plaspy endpoint and port
- Helps interpret telemetry such as INS assisted fixes, driving behavior alerts, and mileage calculations
- Aids troubleshooting when messages are not received or expected events do not appear in Plaspy
- Supports decisions around UDP versus TCP based on network reliability and carrier behavior
- Reduces ambiguity when coordinating with manufacturer support or when updating device firmware

## Why Use Plaspy with This Protocol

Using the Concox JM-VG02 series with Plaspy gives organizations a practical way to centralize vehicle location, driving behavior alerts, and mileage reporting. Plaspy ingests the tracker reports and presents them in a way that supports fleet operations, safety monitoring, and maintenance planning. The JM-VG02U’s INS aided GPS and multi axis motion sensors provide richer event data that Plaspy can surface for safety and operational workflows.

If you want to learn more about integrating devices like the JM-VG02 with Plaspy, visit https://www.plaspy.com to explore platform capabilities and onboarding options. For the most current device specific protocol details, firmware behavior, and implementation notes verify the official Concox documentation at https://www.iconcox.com/ as manufacturer guidance may change over time.
