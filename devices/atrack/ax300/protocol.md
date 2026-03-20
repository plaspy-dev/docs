---
slug: /atrack/ax300/protocol
id: ax300-protocol
sidebar_label: Protocol
title: ATrack - AX300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for ATrack AX300 GPS tracker integration with Plaspy including transport context and compatibility notes
keywords:
  - ATrack AX300 protocol
  - AX300 GPS protocol
  - AX300 tracking protocol
  - ATrack AX300 Plaspy
  - AX300 communication protocol
  - AX300 OBD tracker
  - LTE M GPS tracker protocol
  - vehicle telemetry AX300
  - AX300 fleet tracking Plaspy
  - AX300 protocol compatibility
---

# ATrack - AX300 Protocol

This page describes the public protocol context for using the ATrack AX300 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection options are commonly used, and practical compatibility considerations for fleet operators and integrators. The AX300 is an LTE‑M OBD vehicle tracker that plugs into the OBD II port to deliver GNSS location and vehicle diagnostics to fleet platforms such as Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available fields can vary by AX300 firmware, hardware revision, and manufacturer implementation, so the information here is intended as public guidance rather than a replacement for manufacturer documentation.

## Protocol Overview

The AX300 reporting protocol is the mechanism by which the device sends location fixes, OBD and CAN telemetry, and event notifications to a remote server. In practice this protocol enables the tracker to identify itself, deliver usable GNSS and vehicle data, and allow the server to correlate updates with a device record in Plaspy.

- Transports GNSS fixes and OBD sourced telemetry so that Plaspy can display live location and historical traces.
- Carries device identity and session information that lets Plaspy associate incoming messages with the correct vehicle record.
- Delivers event driven data such as ignition state, alarms, or diagnostic triggers to support alerts and workflows.
- Supports periodic reporting and on demand updates to balance telemetry needs and power use for LTE M connectivity.
- Works alongside optional BLE sensor data to provide richer situational awareness when enabled.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a single shared endpoint and identifies the device protocol automatically so most users do not need to manually select a protocol inside Plaspy. Proper device configuration to report to the Plaspy server is the key step for automatic detection and onboarding.

- Plaspy listens on a shared endpoint at d.plaspy.com and the server IP 54.85.159.138 for incoming device traffic.
- The listening service uses port 8888 and all devices supported by Plaspy use the same port.
- Devices configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888 are routed into Plaspy for automatic protocol detection.
- When an AX300 is configured correctly to send data to Plaspy, manual protocol selection in the platform is typically unnecessary.
- If telemetry does not appear, checking device reporting destination, transport mode, and firmware behavior is a practical first step.

## Transport and Connection Context

Connection and transport choices affect how the AX300 communicates with Plaspy but do not change the high level purpose of the protocol. The AX300 supports multiple transports and can be configured per deployment needs; Plaspy can accept those transports on its shared endpoint.

- The AX300 may be configured to use UDP or TCP transport when reporting to Plaspy on port 8888.
- Devices can direct traffic to the domain d.plaspy.com or the server IP 54.85.159.138 depending on installer preference and DNS availability.
- Plaspy’s single port approach means all supported trackers use port 8888, simplifying firewall and gateway rules for fleet networks.
- UDP is commonly used for lightweight periodic reporting while TCP is available where session reliability is preferred, subject to device configuration.
- Ensure mobile network APN and SIM provisioning allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware versions can add, remove, or change reported fields and event behavior; always verify firmware release notes for AX300 specifics.
- Hardware revisions and OEM CAN mappings may alter which OBD or J1939 parameters are exposed to the reporting protocol.
- Transport selection (UDP versus TCP) can impact delivery behavior and should be chosen based on network conditions and operational needs.
- Regional LTE M variants may affect available telemetry cadence and power profiles but not the fundamental reporting concept.
- Manufacturer configuration tools or SMS commands may be required to point devices to d.plaspy.com or the Plaspy server IP.
- Confirm any optional features such as BLE sensor forwarding or RP1226 adapter behavior against vendor documentation prior to deployment.

## Why Protocol Understanding Matters

Understanding how the AX300 communicates with Plaspy helps with correct setup, faster troubleshooting, and reliable long term operation. Even when Plaspy detects the device automatically, knowing the connection and protocol context reduces downtime and improves integration outcomes.

- Helps confirm that devices are pointed to the correct Plaspy endpoint and port so data arrives reliably.
- Aids in troubleshooting when telemetry is missing by narrowing checks to transport, DNS, or firmware configuration.
- Clarifies what telemetry to expect from the AX300 based on firmware and vehicle OBD availability.
- Supports planning for firewall rules and cellular APN settings that permit outbound traffic to Plaspy.
- Enables operators to choose the best transport mode for their network and reporting needs.

## Why Use Plaspy with This Protocol

Pairing the AX300 with Plaspy gives fleet operators a combined solution for location tracking and vehicle diagnostics. The OBD II connection and dual CAN support on the AX300 provide rich telemetry that Plaspy can use for live maps, alerts, and maintenance workflows, while LTE M connectivity helps balance power and coverage for fleet deployments.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the latest AX300 protocol details, firmware notes, and device specific behavior verify current information on the manufacturer website https://www.atrack.com.tw/. Protocol support and firmware behavior evolve over time so checking manufacturer documentation is recommended when planning production deployments.
