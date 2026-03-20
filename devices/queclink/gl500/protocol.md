---
slug: /queclink/gl500/protocol
id: gl500-protocol
sidebar_label: Protocol
title: QuecLink - GL500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the QuecLink GL500 and how it communicates with Plaspy using shared connection settings
keywords:
  - QuecLink GL500 protocol
  - QuecLink GL500 GPS protocol
  - QuecLink GL500 communication protocol
  - QuecLink GL500 tracking protocol
  - QuecLink GL500 Plaspy
  - GL500 GPS tracker protocol
  - QuecLink asset tracker protocol
  - GL500 protocol integration
  - QuecLink protocol documentation
  - GPS tracker protocol Plaspy
---

# QuecLink - GL500 Protocol

This page describes the public protocol context for using the QuecLink GL500 GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general, what connection settings are used, and what aspects of the tracker protocol are relevant when integrating fixed asset trackers like the GL500 with a backend server.

The GL500 is a long life fixed asset tracker with two user replaceable CR123A lithium batteries and an internal u‑blox GPS module. It includes a 3‑axis accelerometer for movement alerts, quad band GSM GPRS connectivity, internal antennas, and an integrated @Track protocol option. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The device protocol defines how the GL500 reports position, movement alerts, status, and other telemetry to a backend service such as Plaspy. The public protocol context helps integrators know which network endpoint and transport to configure on the tracker and what to expect in general terms from the device.

- Enables the GL500 to report GPS position and device status to a remote server for tracking and monitoring.
- Allows the tracker to identify itself and deliver movement alerts produced by the internal 3 axis accelerometer.
- Supports low power and reporting modes that are important for the GL500 long battery life use cases.
- Provides a transport agnostic means for telemetry to reach Plaspy where the platform parses and processes reports.
- Works with the GL500 built in communication options such as GPRS and optional SMS reporting when configured.

## How Plaspy Detects the Protocol

Plaspy receives incoming tracker traffic on a common, shared endpoint and port and applies automatic detection to identify the device protocol. For most deployments the user does not need to manually select a protocol inside Plaspy as long as the GL500 is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and can be used as the target for tracker reporting.
- Plaspy server IP is 54.85.159.138 and is provided for environments that require an IP based endpoint.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint.
- If the GL500 is set to report correctly to the Plaspy endpoint, manual protocol selection in Plaspy is typically not required.

## Transport and Connection Context

Connection details determine how the GL500 delivers reports to Plaspy. The GL500 family supports common transport options and can be configured to point to the Plaspy endpoint by hostname or IP depending on deployment needs.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the Plaspy destination.
- All devices in Plaspy use the same port which simplifies server side configuration and firewall rules.
- Choose UDP or TCP on the tracker based on network characteristics and the tracker firmware options available.
- Make sure APN and GPRS connectivity settings on the GL500 are correct so it can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional fields, or reporting triggers; always confirm firmware specifics for the GL500 unit in use.
- Hardware revisions and optional features such as the internal microphone or different battery configurations can affect behavior that sits above the protocol layer.
- Manufacturer side protocol variants or profile options (for example reporting intervals or alarm definitions) may differ between regional firmware builds.
- Transport choice between UDP and TCP can affect delivery semantics; select the transport option supported and recommended for your deployment.
- Plaspy’s automatic detection covers common protocol variants but validating with an example report during commissioning is recommended.
- Always cross check configuration steps with the latest QuecLink documentation for device specific instructions.

## Why Protocol Understanding Matters

Knowing the communication protocol and connection context for the GL500 helps ensure reliable reporting, proper battery use, and faster troubleshooting when integrating devices with Plaspy. A practical understanding reduces setup time and improves operational reliability.

- Ensures the device is pointed to the correct Plaspy endpoint so reports arrive consistently.
- Helps select the appropriate transport mode and reporting intervals to balance battery life and telemetry needs.
- Aids in diagnosing connectivity issues by confirming APN settings and destination details.
- Makes interpreting movement alerts and telemetry more predictable when firmware differences are known.
- Supports planning maintenance cycles and firmware updates by understanding protocol impact on behavior.

## Why Use Plaspy with This Protocol

Using the QuecLink GL500 with Plaspy provides a straightforward path to long term fixed asset visibility and alerting. The GL500’s long battery life and movement detection are a strong match for use cases where infrequent location updates and tamper alerts matter. Plaspy’s shared connection settings and automatic protocol detection reduce setup friction and allow teams to focus on operational use rather than protocol tuning.

If you would like to learn more about how Plaspy handles device connectivity and fleet data, please visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and installation guidance, verify the GL500 information on the manufacturer site at https://www.queclink.com/ as protocol support and firmware behavior can change over time.
