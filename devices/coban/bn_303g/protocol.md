---
slug: /coban/bn_303g/protocol
id: bn_303g-protocol
sidebar_label: Protocol
title: Coban - BN-303G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Coban BN-303G compatibility with Plaspy and connection guidance
keywords:
  - Coban BN-303G protocol
  - Coban BN-303G GPS protocol
  - BN-303G communication protocol
  - BN-303G Plaspy
  - Coban GPS tracker protocol
  - vehicle tracking BN-303G
  - BN-303G TCP UDP
  - fleet tracking Plaspy
  - BN-303G compatibility
  - Coban tracker protocol
---

# Coban - BN-303G Protocol

This page provides the public protocol context for using the Coban BN-303G tracker with Plaspy. It summarizes how the device reports location and events to the Plaspy platform in broad, non-sensitive terms, and explains the connection settings you will commonly encounter when integrating this model. The content focuses on practical protocol context rather than low level packet structures.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The BN-303G supports TCP, UDP and SMS transports, and this page clarifies how those transports are used with Plaspy without exposing implementation details that are specific to a particular firmware version.

## Protocol Overview

The protocol used by the BN-303G enables the device to report GNSS position, ignition state, alarm events, and basic telemetry to a remote server so that Plaspy can present live location and event information. In practice the tracker sends periodic position reports and event-driven messages that the platform consumes to update maps, alerts, and history.

- Enables device identification and continuous or event-driven reporting to a remote back end.
- Carries location fixes, timestamp, basic IO and alarm states such as SOS, overspeed, geo-fence and door alerts.
- Supports multiple transports so data can be delivered over TCP, UDP or SMS depending on configuration and coverage.
- Provides the telemetry Plaspy needs to populate dashboard views, generate alerts, and record history.
- Acts as the bridge between vehicle-mounted telemetry and Plaspy services while leaving device-specific command sets to the manufacturer documentation.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a single shared endpoint and port and attempts to identify the tracker protocol automatically when data arrives. In most deployments a BN-303G configured to report to the Plaspy endpoint will be detected and begin reporting without manual protocol selection in the platform.

- Devices should be pointed to the Plaspy server address d.plaspy.com or the server IP 54.85.159.138.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for device reporting.
- The BN-303G can be configured to use TCP or UDP transport to communicate with the Plaspy endpoint.
- When the tracker sends registration or periodic reports to the Plaspy endpoint, the platform automatically detects the protocol and associates incoming messages to the device.
- In many cases users only need to configure the device server address and transport; Plaspy handles protocol detection at the platform edge.

## Transport and Connection Context

The BN-303G supports both UDP and TCP for real time reporting and may also fall back to SMS for configuration or message delivery in low data coverage scenarios. The choice of transport affects message delivery behavior and resilience but does not change the fact that Plaspy receives telemetry on a common listening port.

- The device may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can be pointed to the domain d.plaspy.com or directly to 54.85.159.138 depending on installer preference.
- TCP provides connection oriented delivery while UDP is connectionless; both are supported by the BN-303G and accepted by Plaspy on the shared port.
- SMS remains an alternative transport for specific commands or fallback reporting depending on device setup and operator needs.
- For reliable detection and reporting, ensure APN and network connectivity are functioning and the device points to the Plaspy server settings.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported fields, and optional features; confirm the tracker firmware level when diagnosing behavior.
- Hardware revisions or model variants sometimes alter available IO lines, supported accessories, or default transport selection.
- Manufacturer configuration commands and SMS parameter sets are device specific; consult official Coban documentation for command syntax and examples.
- Transport selection (TCP vs UDP) can impact how the server receives messages and how quickly the platform detects the device.
- Plaspy automatically detects the tracker protocol when the device reports to the platform endpoint, but correct server address and transport selection on the device are required.
- Always validate compatibility for advanced features like immobilizer control or external sensors against current manufacturer documentation.

## Why Protocol Understanding Matters

Knowing how the BN-303G communicates helps with setup, troubleshooting, and ensuring consistent data in Plaspy. A clear grasp of the communication context reduces time to first report, simplifies troubleshooting when messages are missing, and helps map device features to platform capabilities.

- Speeds initial setup by clarifying which server address and transport to configure on the device.
- Helps isolate connectivity issues such as APN misconfiguration, transport mismatches, or network coverage gaps.
- Guides decisions about using TCP or UDP for specific deployment reliability and performance needs.
- Enables accurate interpretation of incoming events and sensible alarm mapping in Plaspy.
- Supports planning for firmware updates and feature compatibility over the device life cycle.

## Why Use Plaspy with This Protocol

Using the BN-303G with Plaspy gives organizations a straightforward path to real time vehicle visibility, alarm handling, and historical reporting without custom protocol setup in the platform. The tracker’s support for standard transports and common telematics features makes it a practical choice for fleets and rental operations that need dependable location and event data.

To learn more about Plaspy and how the platform works with devices like the BN-303G visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details may change over time, so verify the latest device specific protocol information on the manufacturer site https://www.coban.net/.
