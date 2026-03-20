---
slug: /carscop/cc_688/protocol
id: cc_688-protocol
sidebar_label: Protocol
title: Carscop - CC-688 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Carscop CC-688 GPS tracker integration with Plaspy for device connectivity and telemetry
keywords:
- Carscop CC-688 protocol
- Carscop CC-688 GPS protocol
- Carscop CC-688 communication protocol
- Carscop CC-688 tracking protocol
- Carscop tracker protocol
- CC-688 Plaspy compatibility
- vehicle tracking protocol
- fleet management tracker
- GPS tracker protocol
- CAN OBD telemetry
---

# Carscop - CC-688 Protocol

This page describes the public protocol context for using the Carscop CC-688 T Box with Plaspy. It focuses on how the device communicates telemetry and control data to the Plaspy platform and clarifies the connection settings and operational considerations relevant to fleet, rental, and car sharing deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Devices compatible with Plaspy, including the CC-688, may have differences in protocol behavior depending on firmware version, hardware revision, and manufacturer implementation; this page provides general guidance while encouraging validation against device firmware notes and manufacturer documentation.

## Protocol Overview

The tracker reporting protocol is the set of rules and conventions the CC-688 uses to send location, vehicle telemetry, event states, and health information to a remote server such as Plaspy. Proper protocol behavior ensures data from GNSS, CANBUS/OBD II, BLE/NFC events, and I/O inputs is translated into actionable information for monitoring and control.

- Enables the CC-688 to establish a network connection and deliver GNSS position and CANBUS/OBD telemetry to Plaspy for real time tracking and history.
- Provides a consistent way for the device to identify itself and its capabilities so Plaspy can correlate data with a vehicle and available features.
- Carries event-driven messages such as door open, ignition status, impact alerts, and access control records from BLE or NFC for audit and alerting.
- Transports remote control and actuator interactions (for example, relay outputs for lock/unlock or engine cut) between Plaspy and the device when supported and authorized.
- Supports remote configuration and OTA update indicators so fleet operators can manage device parameters centrally.

## How Plaspy Detects the Protocol

Plaspy receives device connections at a shared endpoint and port and automatically detects the tracker protocol when the device reports. In most cases, if the CC-688 is configured to report to the Plaspy endpoint and network routing permits, manual protocol selection inside Plaspy is not required.

- Plaspy listens on a single, shared server endpoint for all supported devices to simplify device configuration and onboarding.
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for operator reference.
- Plaspy uses the same port for all devices and automatically detects the tracker protocol based on the incoming connection and reported data.
- When the CC-688 points its outbound reports to the Plaspy endpoint, Plaspy will associate incoming telemetry with the correct device record.
- Users typically need only configure the device to report to the Plaspy endpoint and ensure the network allows outbound connections to that endpoint.

## Transport and Connection Context

The CC-688 can forward telemetry over mobile data using standard transport protocols. Depending on the device configuration and network environment, connections to Plaspy may use one of the common transport methods supported by the device.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy accepts connections directed to d.plaspy.com or to the numeric host 54.85.159.138 as an alternative destination.
- The port is 8888 and all devices in Plaspy use the same port to simplify configuration and firewall rules.
- Connections are typically established over the device cellular interface (2G/3G/4G) and use the chosen transport to send periodic or event-driven reports.
- Network factors such as carrier NAT, operator firewalls, and signal quality can affect session persistence and delivery latency.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or the presence of optional telemetry elements; verify the device firmware level when troubleshooting.
- Hardware variants or regional models of the CC-688 may expose different CANBUS or OBD mappings and I/O configurations that affect what telemetry is available.
- Manufacturer-side configuration parameters (for example access control features, BLE pairing behavior, or NFC event logging) may alter the shape of the data Plaspy receives.
- Choice of transport (UDP versus TCP) can affect delivery guarantees and how the device recovers from intermittent connectivity.
- For features that rely on vehicle bus data (fuel level, DTCs), availability depends on the specific vehicle make and model and how its bus exposes those values.
- Always validate compatibility and current behavior against the official manufacturer documentation when planning large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the CC-688 communicates with Plaspy helps ensure a reliable setup, aids in troubleshooting, and supports predictable operational behavior for fleet and rental use cases.

- Speeds up device onboarding by ensuring devices are pointed to the correct Plaspy endpoint and transport settings.
- Helps diagnose connectivity issues related to transport selection, APN settings, or carrier restrictions.
- Allows operators to understand which telemetry and event types will be available in Plaspy dashboards for reporting and automation.
- Supports secure operational practices by clarifying how control commands and telemetry flow between device and server.
- Improves long term maintenance planning by highlighting how firmware updates and hardware changes can affect integration.

## Why Use Plaspy with This Protocol

Pairing the Carscop CC-688 with Plaspy provides a practical path to real time vehicle visibility, remote control capabilities, and consolidated telemetry for fleet and mobility services. The combination of GNSS positioning, CANBUS and OBD II telemetry, BLE/NFC access events, and actuator outputs enables operators to implement unattended rental workflows, theft mitigation, and predictive maintenance with centralized device management.

To learn more about how Plaspy can work with devices like the CC-688 and to review platform features, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol information with the manufacturer at http://www.carscop.com/.
