---
slug: /queclink/gl100/protocol
id: gl100-protocol
sidebar_label: Protocol
title: QuecLink - GL100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for connecting the QuecLink GL100 to Plaspy using shared Plaspy connection settings
keywords:
  - QuecLink GL100 protocol
  - QuecLink GL100 GPS protocol
  - GL100 Plaspy compatibility
  - QuecLink GL100 communication
  - GL100 tracking protocol
  - QuecLink asset tracker protocol
  - GL100 @Track protocol
  - vehicle tracking GL100
  - Plaspy device protocol
  - QuecLink GL100 integration
---

# QuecLink - GL100 Protocol

This page describes the public protocol context for using the QuecLink GL100 tracker with Plaspy. It focuses on how the device communicates with Plaspy's backend, the role of the tracker reporting protocol in that communication, and practical compatibility considerations. The information here is intended to be non-sensitive and useful for system integrators, fleet managers, and technical users preparing a GL100 for use with Plaspy.

Plaspy uses shared connection settings for its supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by GL100 firmware version, hardware revision, and manufacturer implementation. The GL100 itself is a quad band GSM tracker with a SIRF Star III GNSS chipset and includes an embedded @Track reporting protocol in many firmware variants, which is one of several possible reporting formats the device may use.

## Protocol Overview

At a high level, the tracker protocol defines how the GL100 formats and sends location and status reports to a backend server and how the server acknowledges or responds to the device. The protocol enables the GL100 to identify itself, transmit position and sensor data, and receive configuration or remote commands when applicable. In the context of Plaspy, the protocol is the bridge between the device's firmware and Plaspy's ingestion services.

- The protocol governs identification and regular reporting so Plaspy can map incoming data to a device record.
- It carries GPS fixes, timestamps, and auxiliary sensor data such as motion status from the GL100.
- The GL100 often includes an embedded @Track style interface in firmware that many integrators use to forward data to custom backends.
- Plaspy ingests the device reports and translates them into location, event, and telemetry records for the platform.
- Protocol behavior such as report frequency, alarm framing, and optional payload fields can vary by firmware and configuration.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for device reports and uses that endpoint to accept connections from many tracker models, including the GL100. When a properly configured GL100 reports to the Plaspy endpoint, Plaspy evaluates the incoming traffic and automatically detects the tracker protocol so you normally do not need to select a protocol manually inside Plaspy.

- Plaspy accepts device reports on the domain d.plaspy.com.
- The Plaspy server is also reachable at the IP address 54.85.159.138.
- Plaspy listens on port 8888 for incoming tracker connections.
- Devices may be configured to use either UDP or TCP when reporting to Plaspy on port 8888.
- All devices supported by Plaspy use the same port, simplifying device configuration.
- If the GL100 is correctly pointed at the Plaspy endpoint, protocol selection in Plaspy is typically handled automatically.

## Transport and Connection Context

Transport and connection settings determine how the GL100 reaches Plaspy's ingestion service. The GL100 can be configured to report over cellular data and may support both UDP and TCP transports; choosing the proper transport depends on the device firmware and the desired reliability characteristics. For Plaspy integration, point the device to the Plaspy endpoint using the shared port and transport option supported by the unit.

- The GL100 may be set to report to d.plaspy.com for host name based routing.
- Devices can alternatively be configured to report directly to 54.85.159.138.
- The port used by Plaspy for device reporting is 8888 and is common to all supported devices.
- The GL100 may use UDP or TCP on port 8888 depending on model firmware and configuration.
- Verify the GL100 APN and cellular data settings so the device can reach the Plaspy endpoint on the chosen transport.
- Network or carrier firewalls may require UDP or TCP to be allowed for outbound traffic on the device.

## Protocol Compatibility Notes

- Protocol details can differ between GL100 firmware versions; not all units expose identical fields or command sets.
- Hardware revisions and regional firmware builds may change which reporting mode or fields are available.
- The GL100 often ships with an embedded @Track reporting option, but manufacturers sometimes offer multiple reporting formats or configurable frames.
- Transport choice (UDP vs TCP) can affect reliability and how retransmission or acknowledgements appear at the application layer.
- When integrating, confirm the device is pointing to d.plaspy.com or 54.85.159.138 using port 8888 and the appropriate transport.
- Always validate compatibility against the GL100 release notes and configuration guides provided by the manufacturer.

## Why Protocol Understanding Matters

Understanding how the GL100 communicates helps with correct device setup, reduces integration friction, and makes troubleshooting more efficient. Knowing which fields are sent, how the device identifies itself, and which transport it uses enables reliable mapping of incoming telemetry into Plaspy.

- Ensures correct device registration so Plaspy can identify and attribute reports.
- Helps select the proper transport and server host settings during provisioning.
- Simplifies diagnosing missing data or connectivity issues by narrowing possible causes.
- Aids in interpreting device behavior after firmware updates or configuration changes.
- Supports long term maintainability by clarifying which features are device side and which are server side.

## Why Use Plaspy with This Protocol

Using the QuecLink GL100 with Plaspy provides a practical path for organizations that need continuous visibility into vehicles, assets, or pets. Plaspy's shared endpoint model and automatic protocol detection simplify large scale deployments by removing the need to manage multiple listening ports or manually select protocols for each device. For many users, this reduces setup time and eases operations for fleets with diverse device models.

If you are evaluating the GL100 with Plaspy, consider Plaspy's single endpoint approach and automatic detection as part of your deployment planning. To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and configuration options consult the manufacturer documentation at https://www.queclink.com/.
