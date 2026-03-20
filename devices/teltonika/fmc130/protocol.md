---
slug: /teltonika/fmc130/protocol
id: fmc130-protocol
sidebar_label: Protocol
title: Teltonika - FMC130 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Teltonika FMC130 and how it communicates with Plaspy for reliable fleet telemetry and tracking
keywords:
  - Teltonika FMC130 protocol
  - FMC130 Plaspy compatibility
  - Teltonika FMC130 GPS protocol
  - FMC130 communication protocol
  - FMC130 tracking protocol
  - Teltonika fleet tracker protocol
  - FMC130 telemetry integration
  - FMC130 fuel monitoring protocol
  - Teltonika CAN integration Plaspy
  - FMC130 Bluetooth sensor reporting
---

# Teltonika - FMC130 Protocol

This page describes the public protocol context for using the Teltonika FMC130 tracker with Plaspy. It explains how the device's telemetry and event reporting are delivered to Plaspy, and what aspects of the communication are relevant for setup and operations without exposing device internals or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a unit reports to the platform. The FMC130 offers multiple telemetry sources such as cellular connectivity with fallback, an internal backup battery, impulse input for fuel metering, CAN bus integration, and Bluetooth LE sensors. Exact protocol behavior and available features may vary by firmware version, hardware revision, regional variant, and manufacturer implementation.

## Protocol Overview

The protocol between the FMC130 and Plaspy is the set of public-facing communication behaviors that allow the tracker to report location, telemetry, and event data to the Plaspy backend. In practice this covers how the device opens a connection to Plaspy, authenticates or identifies itself, and sends periodic or event-driven messages that Plaspy turns into usable tracking records and alerts.

- Enables delivery of GPS position, timestamp, and movement attributes from the FMC130 to Plaspy for live tracking and historical playback.
- Transports fuel pulse counts and other impulse input events so Plaspy can analyze consumption and detect abnormalities.
- Carries CAN sourced telemetry such as fuel level, odometer, engine parameters, and other vehicle signals when a CAN adapter is connected.
- Conveys wired I/O and digital event states like ignition, door status, or auxiliary sensors for event driven alerts.
- Transfers Bluetooth LE sensor data for temperature, humidity, or beacon presence when external sensors are paired to the device.

## How Plaspy Detects the Protocol

Plaspy operates a shared endpoint and port that receives incoming connections from supported trackers and automatically identifies the device protocol from the incoming dataflow. In most deployments the user does not need to select a protocol inside Plaspy when the FMC130 is configured correctly to report to the Plaspy endpoint.

- Plaspy listens for tracker connections at d.plaspy.com with a public server address of 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint.
- You typically only need to configure the FMC130 to report to the Plaspy endpoint; no manual protocol selection in Plaspy is required for standard setups.
- All devices in Plaspy use the same port, which simplifies fleet provisioning and firewall rules.
- Plaspy supports the common transport modes used by field trackers so devices can connect using the method supported by the unit.

## Transport and Connection Context

Connection transport and addressing are part of the public configuration context that determines how the FMC130 reaches Plaspy. The tracker may be set to use either UDP or TCP depending on device support and administrative preference. These transport choices affect network and firewall configuration but do not change the fact that Plaspy normalizes incoming telemetry after reception.

- The FMC130 may be configured to send data to Plaspy using UDP or TCP on port 8888.
- Devices can point to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 if DNS is not used.
- All Plaspy devices share the same port 8888 which reduces provisioning complexity for large fleets.
- Ensure carrier and site firewalls permit outbound connections to port 8888 for the chosen transport protocol.
- Cellular fallback and roaming behavior of the tracker can affect the timing of messages but not the endpoint address or port.

## Protocol Compatibility Notes

- Firmware revisions can alter which telemetry fields are sent and how often messages are emitted; confirm firmware behavior for a given unit before large scale deployment.
- Hardware or regional variants of the FMC130 may include different radio bands, I/O options, or accessory compatibility that influence reported data.
- Manufacturer tools such as Teltonika FOTA WEB can affect device configuration and firmware distribution; coordinate updates when managing compatibility.
- TCP versus UDP selection is a device configuration choice and may be limited by the carrier or firmware; choose the transport that fits your network constraints.
- Plaspy normalizes incoming data but differences in manufacturer message content or optional fields may affect how some telemetry is interpreted.
- Always validate device behavior against official Teltonika product documentation for model specific details and current firmware notes.

## Why Protocol Understanding Matters

Understanding the FMC130 communication protocol in broad terms helps ensure reliable setup, faster troubleshooting, and sustainable fleet operations when devices report into Plaspy. Awareness of transport, addressing, and variability tied to firmware and hardware revisions reduces integration surprises and improves uptime.

- Helps confirm the tracker is pointed to the correct Plaspy endpoint and port during initial provisioning.
- Speeds troubleshooting by narrowing issues to transport, authentication, or device-side configuration rather than backend processing.
- Informs firewall and carrier settings so outbound connections to d.plaspy.com on port 8888 are allowed.
- Guides decisions on using TCP or UDP based on network reliability and message delivery preferences.
- Supports planning around firmware updates and feature rollouts so telemetry expectations remain aligned with actual device behavior.

## Why Use Plaspy with This Protocol

Pairing the Teltonika FMC130 with Plaspy provides a practical, telemetry rich solution for fleet operators who need reliable location visibility, fuel analytics, and remote control capabilities. The FMC130’s cellular connectivity with fallback, internal backup battery, impulse input for fuel meters, CAN adapter compatibility, and Bluetooth LE sensor support deliver a comprehensive stream of data that Plaspy ingests and presents for operational use.

To learn more about Plaspy and how it integrates with devices like the FMC130 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware variants please verify information on the manufacturer website https://www.teltonika-gps.com/ as protocol support and device behavior can change with firmware and product revisions.
