---
slug: /aquila/ux101/protocol
id: ux101-protocol
sidebar_label: Protocol
title: Aquila - UX101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Aquila UX101 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Aquila UX101 protocol
  - Aquila UX101 GPS
  - Aquila UX101 Plaspy
  - UX101 tracking protocol
  - Aquila GPS tracker protocol
  - vehicle tracking UX101
  - fleet management UX101
  - Plaspy device compatibility
  - UX101 communication protocol
  - Aquila GPS compatibility
---

# Aquila - UX101 Protocol

This page describes the public protocol context for using the Aquila UX101 tracker with Plaspy. It focuses on how the device communicates with Plaspy servers, which connection settings are used in common deployments, and the practical considerations to get reliable reporting and monitoring without exposing manufacturer private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this guide provides general, non sensitive context to help integration and troubleshooting for UX101 installations that report to Plaspy.

## Protocol Overview

The communication protocol for the UX101 governs how the device reports telemetry, identity, and status information to a remote server such as Plaspy. In practical terms the protocol ensures the tracker can convey GPS position, vehicle signals, and basic diagnostics so Plaspy can present usable location and event data to users.

- Enables secure reporting of location, time, speed, and ignition status from the UX101 to a remote server.
- Carries telemetry for analog and digital inputs, and status notifications that Plaspy can map to device channels.
- Supports periodic reporting and event driven updates so the platform receives live and historical position data.
- Allows the device to identify itself so Plaspy can associate incoming messages with the correct asset record.
- Works with the UX101 hardware features such as internal GPS and GSM antennas and built in power and motion sensors to provide meaningful tracking data.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and port and automatically identifies the tracker protocol used by the reporting device. For most users this means the device only needs to be configured to report to the Plaspy endpoint and the platform will handle the rest.

- Plaspy accepts device connections on the domain d.plaspy.com and the server IP 54.85.159.138.
- All devices in Plaspy use the same port and the platform listens on port 8888.
- Plaspy automatically detects the tracker protocol for devices that report to the Plaspy endpoint so manual protocol selection inside Plaspy is usually not required.
- When a UX101 reports correctly to the Plaspy endpoint the platform maps incoming telemetry to the device record and displays location and event data.
- If a device uses a nonstandard firmware behavior, detection and mapping may require validation against manufacturer documentation.

## Transport and Connection Context

The UX101 can communicate to a backend server using standard IP transport and may be configured to use either UDP or TCP depending on the device configuration and firmware. Plaspy accepts both transport types on a single shared port to simplify device configuration.

- Devices may be configured to report to d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy listens on and accepts both UDP and TCP traffic on port 8888.
- All Plaspy supported devices use the same port value to reduce configuration complexity across a mixed fleet.
- Choose UDP or TCP on the device according to firmware capability and the behavior desired for retransmission and delivery.
- Network operators should ensure mobile data APN and outbound port rules allow traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional fields, and behavior; confirm the UX101 firmware level when validating compatibility.
- Hardware revisions or accessory modules may alter available inputs and how those inputs are reported to Plaspy.
- Transport choice between UDP and TCP can affect reliability and retransmit behavior; verify what the specific firmware supports.
- Manufacturer configuration tools or SDKs supplied with the UX101 can simplify pointing the device to d.plaspy.com or the server IP.
- Plaspy detection is robust for common reporting behaviors but unusual or customized protocol variants from the manufacturer may require additional verification.
- Always validate device reporting in a controlled test before deploying at scale to ensure the expected telemetry arrives at Plaspy.

## Why Protocol Understanding Matters

Knowing how the UX101 communicates helps installers and fleet managers configure devices correctly, troubleshoot connectivity issues, and confirm that meaningful telemetry reaches Plaspy for monitoring and reporting.

- Streamlines initial setup by ensuring the device points to the Plaspy endpoint and uses the expected transport.
- Reduces troubleshooting time by clarifying where to check for network and configuration issues when data is not arriving.
- Helps choose the right transport option and reporting interval for a fleet based on reliability and data usage needs.
- Guides validation steps for firmware upgrades and hardware changes that could affect reporting.
- Ensures that event mapping such as ignition or input states is consistent between the device and the Plaspy platform.

## Why Use Plaspy with This Protocol

Using the Aquila UX101 with Plaspy provides a straightforward way to collect vehicle location and status data with minimal configuration. Plaspy’s single endpoint and automatic protocol detection reduce the per-device setup burden for organizations managing mixed fleets or multiple hardware models.

Plaspy’s approach to compatibility and a shared port architecture helps make UX101 deployments predictable and easier to scale. To learn more about Plaspy and how it works with devices like the Aquila UX101, visit https://www.plaspy.com. Protocol support, firmware behavior, and specific device implementation details can change over time, so verify the latest device documentation and firmware notes with the manufacturer at https://www.itriangle.in/.
