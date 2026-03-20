---
slug: /careu/uc1/protocol
id: uc1-protocol
sidebar_label: Protocol
title: CAREU - UC1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for CAREU UC1 integration with Plaspy server settings and connection guidance
keywords:
  - CAREU UC1
  - CAREU UC1 protocol
  - CAREU UC1 GPS protocol
  - CAREU UC1 communication protocol
  - CAREU UC1 tracking protocol
  - CAREU GPS tracker
  - Plaspy compatibility
  - cargo lock tracker
  - container tracking
  - fleet management tracker
---

# CAREU - UC1 Protocol

This page describes the public protocol context for using the CAREU UC1 tracker with the Plaspy platform. It focuses on how the UC1 reports location, security events, and device telemetry to Plaspy in broad, non-sensitive terms so fleet teams and integrators can understand the communication role without exposing implementation internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact message behavior and available features can vary by UC1 firmware version, hardware revision, and manufacturer implementation, so this page emphasizes the connection and protocol context needed for reliable integration.

## Protocol Overview

The UC1 reporting protocol defines how the tracker sends GNSS positions, tamper and chain-cut alerts, unlocking events, and device health data to a backend service. For use with Plaspy the goal of the protocol is to deliver timely, authenticated telemetry and event notifications that the cloud platform can interpret for tracking, alerts, and audit logs.

- Provides position fixes and movement reports so Plaspy can display asset location and history.
- Sends security events such as tamper, vibration, chain-cut, and door or lock state changes for immediate alerting.
- Transmits device health and battery status to support maintenance scheduling and reliability monitoring.
- Includes identifiers and device metadata so Plaspy can correlate messages to the correct asset and present audit trails.
- Supports remote command acknowledgements and state changes that allow lock or unlock operations to be reflected in platform logs.

## How Plaspy Detects the Protocol

Plaspy receives inbound reports to a consolidated server endpoint and automatically recognizes the tracker protocol based on the incoming connection and message characteristics. In most cases a UC1 configured to report to Plaspy will be detected without manual protocol selection in the platform.

- Plaspy listens on a single shared port for all supported devices so device reporting uses a consistent destination.
- The Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The server port used by all devices is 8888 and Plaspy accepts both UDP and TCP connections on that port.
- When a UC1 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will attempt automatic protocol detection.
- Users normally only need to ensure the device is pointed to the Plaspy endpoint and does not need to pick a protocol inside Plaspy during initial setup.

## Transport and Connection Context

The UC1 supports cellular uplink and can be configured to use either UDP or TCP to deliver reports to the cloud. Using the correct Plaspy endpoint and port is the foundation for reliable delivery; transport choice can affect retry behavior and latency depending on network conditions and device firmware.

- Devices may be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy accepts incoming device connections on port 8888 for all trackers supported by the platform.
- The UC1 may use UDP for lower overhead periodic reports or TCP for session oriented uploads depending on its firmware and operator network.
- Network reliability, carrier SMS fallbacks, and roaming configurations can influence which transport performs best in a deployment.
- Ensure outbound device connectivity and any carrier or firewall rules allow traffic to port 8888 to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may change message cadence, available fields, or reporting triggers; always confirm firmware-specific behavior before large rollouts.
- Hardware revisions or optional features such as eSIM or regional band selections can affect connectivity patterns and should be validated per device batch.
- Some UC1 configurations may favor TCP or UDP by default; review the device configuration tool or manufacturer guide when setting the transport.
- Manufacturer-side settings such as unlock method configuration, RFID group setup, and tamper thresholds can change what events are reported and how they appear in Plaspy.
- Plaspy’s automatic detection covers a wide set of common tracker protocols, but integration testing is recommended for custom workflows.
- Validate compatibility and any platform-specific fields against the manufacturer documentation and device release notes.

## Why Protocol Understanding Matters

Understanding the UC1 communication protocol helps ensure devices reliably deliver the right data to Plaspy and that alerts, unlock events, and telemetry are interpreted correctly by operations teams. A practical grasp of connection and reporting behavior reduces downtime and accelerates troubleshooting when devices do not appear in the platform.

- Helps troubleshoot connectivity issues by confirming the device points to d.plaspy.com or 54.85.159.138 and uses port 8888.
- Allows administrators to select transport settings and reporting intervals that match operational needs and battery constraints.
- Improves alert tuning so tamper and chain-cut events generate meaningful notifications without excessive noise.
- Supports predictable firmware upgrade planning by identifying which protocol behaviors might change after an update.
- Enables clear communication between field teams, carrier providers, and Plaspy support when diagnosing intermittent reporting.

## Why Use Plaspy with This Protocol

Pairing the CAREU UC1 with Plaspy gives logistics and fleet teams a unified view of secure seals and location telemetry in the same platform used for vehicle and asset tracking. The UC1’s combination of GNSS positioning, tamper detection, and multi-method unlocking events complements Plaspy’s alerting and reporting features to support anti-theft workflows and operational oversight.

If you want to explore Plaspy features and confirm deployment best practices for the CAREU UC1, learn more about Plaspy at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance, please verify information on the official CAREU manufacturer site https://www.systech-iot.com/.
