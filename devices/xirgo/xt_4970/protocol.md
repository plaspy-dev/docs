---
slug: /xirgo/xt_4970/protocol
id: xt_4970-protocol
sidebar_label: Protocol
title: Xirgo - XT-4970 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Xirgo XT-4970 with Plaspy including connection context and compatibility notes
keywords:
  - Xirgo XT-4970 protocol
  - Xirgo XT-4970 GPS protocol
  - XT-4970 Plaspy compatibility
  - Xirgo tracking protocol
  - XT-4970 trailer tracking
  - energy harvesting GPS tracker
  - LTE trailer tracking protocol
  - fleet management Xirgo XT-4970
  - Xirgo XT-4970 communication
  - Plaspy device compatibility
---

# Xirgo - XT-4970 Protocol

This page provides public protocol context for using the Xirgo XT-4970 tracker with Plaspy. It summarizes how the tracker communicates with Plaspy's endpoint, the transport options commonly used in the field, and the practical compatibility considerations that matter for deployment and troubleshooting. This is intended as high level guidance rather than manufacturer specific technical instructions.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ from one XT-4970 unit to another. The XT-4970 itself is an energy harvesting LTE solution built for long term trailer and container deployments, with embedded antennas, a high precision GPS engine, motion sensing, optional Bluetooth and ZigBee, and an IP67 enclosure design.

## Protocol Overview

At a high level, the device reporting protocol is the set of rules and message formats the XT-4970 uses to convey position, status, and sensor data to a remote server such as Plaspy. The protocol enables the tracker to identify itself, report telemetry, and optionally accept remote configuration commands when supported by the device and firmware.

- Allows the XT-4970 to report GPS positions, motion events, and sensor status to Plaspy for location and asset monitoring.
- Carries device identity and context so Plaspy can associate incoming messages with the correct tracker record.
- Transmits battery and device health indicators that are important for long term, energy harvesting deployments.
- Facilitates remote commands or configuration where the device firmware supports inbound control messages.
- May vary in timing, payload contents, and available fields depending on firmware revision and optional features such as Bluetooth or IO sensors.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and automatically detects the tracker protocol for most supported devices, including the XT-4970. In typical setups, a properly configured device simply reports to the Plaspy endpoint and no manual protocol selection inside Plaspy is required.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting endpoint.
- Plaspy server IP is 54.85.159.138 and can be used in place of the domain when DNS is not available.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol so users generally do not need to pick a protocol manually in the platform.
- If a device is not detected automatically, confirming device reporting settings and firmware version is the first troubleshooting step.

## Transport and Connection Context

Transport choices (UDP versus TCP) and endpoint addressing are part of the connection context but are separate from the higher level protocol content. The XT-4970 can be configured to use the transport supported by its firmware and the deployment, and Plaspy accepts both common transport options on its shared port.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 when directing reports to Plaspy.
- All devices in Plaspy use the same port, simplifying server-side endpoint management for fleets with mixed hardware.
- Network reliability, carrier behavior, and NAT can influence whether UDP or TCP performs better in a particular deployment.
- Confirming APN and outbound firewall rules is important when deploying in constrained or private network environments.

## Protocol Compatibility Notes

- Firmware differences can change message fields, reporting intervals, and supported commands; always record firmware version when validating behavior.
- Hardware revisions or optional modules (Bluetooth, ZigBee, 1‑Wire, IO) may add or omit telemetry fields and change how data is reported.
- The choice of UDP versus TCP can affect message reliability and latency; match the device configuration to your operational needs.
- Manufacturer configuration parameters and server address settings must be set to Plaspy's endpoint for automatic detection to work.
- Validate compatibility against the official Xirgo documentation for model specific options and any firmware specific notes.
- When integrating at scale, test a small set of devices first to confirm behavior before a fleet wide rollout.

## Why Protocol Understanding Matters

Understanding how the XT-4970 communicates helps ensure reliable long term tracking, particularly for energy harvesting devices where reporting frequency and power draw are critical to operational life. A clear grasp of the communication context speeds up setup and reduces downtime.

- Enables faster setup and validation that devices are successfully reporting to Plaspy.
- Helps troubleshoot connectivity issues that may be caused by transport selection, APN, or endpoint configuration.
- Assists in interpreting telemetry related to power management and motion detection for longer unattended deployments.
- Supports planning for firmware updates and understanding the impact of new features or changes.
- Improves confidence when adding optional sensors or integrating the device into larger asset monitoring workflows.

## Why Use Plaspy with This Protocol

Using the XT-4970 with Plaspy gives organizations visibility into trailers, containers, and heavy equipment with a platform designed to accept incoming data from a wide range of trackers. Plaspy's shared endpoint model and automatic protocol detection reduce the operational overhead of managing mixed fleets and simplify device onboarding.

To learn more about how Plaspy handles fleet communication and device compatibility, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol and firmware information with Xirgo at https://xirgo.com/.
