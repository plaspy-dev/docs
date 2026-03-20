---
slug: /queclink/gl100m/protocol
id: gl100m-protocol
sidebar_label: Protocol
title: QuecLink - GL100M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the QuecLink GL100M GPS tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - QuecLink GL100M
  - GL100M protocol
  - QuecLink GL100M GPS protocol
  - QuecLink GL100M tracking protocol
  - QuecLink GPS tracker protocol
  - GL100M @Track protocol
  - GL100M Plaspy compatibility
  - vehicle tracking GL100M
  - asset tracking GL100M
  - GL100M communication protocol
---

# QuecLink - GL100M Protocol

This page describes the public protocol context for integrating the QuecLink GL100M GPS tracker with the Plaspy platform. It focuses on how the device reports position and status to a backend endpoint and what to expect when configuring the GL100M to communicate with Plaspy. The content is intended for technical users and integrators who need a clear, non sensitive overview of protocol behavior and connection requirements.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page explains the general communication flow and practical compatibility considerations rather than low level packet specifics.

## Protocol Overview

The GL100M includes an embedded @Track protocol that enables reporting over GPRS GSM networks and can also interact via SMS for commands and alerts. In general, the device protocol defines how the tracker identifies itself, reports position and sensor events, and delivers periodic or event driven telemetry to a backend server such as Plaspy.

- Provides device identification so the server can associate incoming reports with the correct asset or account
- Encodes GPS position, timestamp, and status events so a backend can display location and alerts
- Supports reporting of motion sensor events and other onboard alerts for efficient event handling
- Works over mobile data connections to push regular position reports and emergency notifications
- Allows remote configuration and command delivery via the network or SMS depending on device setup

## How Plaspy Detects the Protocol

Plaspy operates a shared endpoint for all supported trackers and includes detection logic to identify the protocol used by an incoming device report. In practice this means many devices, including the GL100M, can be pointed at the Plaspy endpoint and will be recognized automatically without manual protocol selection in the platform.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host
- Plaspy server IP is 54.85.159.138 and devices may be configured to report directly to that address
- The port is 8888 and all devices in Plaspy use the same port for reporting
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Plaspy automatically detects the tracker protocol when a properly configured device connects
- Users typically do not need to choose a protocol inside Plaspy if the tracker is sending reports to the Plaspy endpoint

## Transport and Connection Context

Connection context covers how the GL100M reaches Plaspy over the mobile network and which transport options are commonly used. The tracker can use GPRS data to open a socket to the backend, and configuration choices determine whether UDP or TCP is used for reporting.

- Devices may point to the Plaspy domain d.plaspy.com or the server IP 54.85.159.138 as the reporting destination
- The port used for all Plaspy device connections is 8888 which simplifies configuration across different tracker models
- The device may be configured to use UDP or TCP on port 8888; the correct transport depends on device firmware and operator network behavior
- GPRS GSM data is the primary transport for live reporting while SMS can be used for fallback or command delivery if supported
- Network reliability and operator restrictions can affect how frequently the device reports and whether UDP or TCP is preferable

## Protocol Compatibility Notes

- The GL100M includes an embedded @Track protocol but protocol behavior can vary across firmware versions
- Hardware revisions or regional model variants may change which protocol features are available
- Some features such as event reporting or remote commands may require specific firmware or configuration flags
- Transport selection between UDP and TCP can affect delivery semantics and should match the device configuration
- Always validate transport settings and server address when provisioning a device to report to Plaspy
- Manufacturer documentation is the authoritative source for firmware specific command sets and behavior

## Why Protocol Understanding Matters

Understanding how the GL100M communicates helps ensure reliable setup, predictable reporting, and faster troubleshooting when the tracker is used with Plaspy. Clear knowledge of the reporting host, transport, and event semantics reduces integration time and helps maintain long term reliability.

- Ensures the device is pointed at the correct Plaspy endpoint and port for automatic detection
- Helps diagnose connectivity issues related to UDP versus TCP or mobile network restrictions
- Guides configuration of reporting intervals and event thresholds for battery life optimization
- Clarifies which events and alerts the tracker will deliver to the backend for mapping and notifications
- Aids in verifying that the device firmware supports required features before large scale deployment

## Why Use Plaspy with This Protocol

Using the QuecLink GL100M with Plaspy gives organizations a straightforward way to consolidate location and event data into a single backend without per device port configuration. The shared Plaspy endpoint and automatic protocol detection reduce the setup steps required for each device and simplify fleet or asset onboarding.

Plaspy provides an adaptable backend for receiving GL100M reports and turning them into usable tracking data and alerts. To learn more about Plaspy and how it works with devices like the GL100M visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and implementation details consult the manufacturer at https://www.queclink.com/ to verify current behavior and supported features.
