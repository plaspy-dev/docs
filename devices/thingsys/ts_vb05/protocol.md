---
slug: /thingsys/ts_vb05/protocol
id: ts_vb05-protocol
sidebar_label: Protocol
title: ThingSys - TS-VB05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for ThingSys TS-VB05 integration with Plaspy for tracking and OBD telemetry
keywords:
  - ThingSys TS-VB05 protocol
  - TS-VB05 GPS protocol
  - ThingSys GPS tracker Plaspy compatibility
  - TS-VB05 communication protocol
  - TS-VB05 tracking protocol
  - Plaspy device compatibility
  - OBDII GPS tracker protocol
  - vehicle tracking TS-VB05
  - fleet management tracker protocol
  - hybrid positioning GPS AGPS LBS
---

# ThingSys - TS-VB05 Protocol

This page documents the public protocol context for using the ThingSys TS-VB05 OBD II GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in non sensitive, high level terms so integrators and fleet managers can understand the role of the tracker protocol in successful deployments.

The TS-VB05 is a plug and play OBDII tracker with 3G and 4G cellular connectivity and hybrid positioning GPS AGPS LBS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact message behavior and available fields can vary by firmware version, hardware revision, and the manufacturer implementation, so always confirm firmware specifics with ThingSys when needed.

## Protocol Overview

The protocol for the TS-VB05 defines how the tracker reports location, OBD telemetry, and alarms to a remote server and how the platform can send on demand requests or configuration commands. In general terms, the TS-VB05 protocol enables the device to identify itself, transmit usable position and vehicle telemetry and trigger event notifications that Plaspy ingests for dashboards and alerts.

- Allows the tracker to report GPS/AGPS/LBS positions and timestamps to Plaspy for real time monitoring and route history.
- Carries OBDII telemetry such as fuel consumption and driving behavior data so Plaspy can produce readable diagnostics and analytics.
- Transmits security events including tamper and battery alarms for immediate alerting and response.
- Provides the mechanism for remote requests or queries so on demand OBD reads and diagnostics can be initiated from the server side.
- Ensures the device is discoverable by Plaspy when configured to send data to the shared Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy receives device messages at a shared network endpoint and automatically detects the tracker protocol used by the TS-VB05 when the device is correctly configured to report to Plaspy. In most cases the user does not need to manually select a protocol in Plaspy if the tracker is pointed to the correct endpoint with the proper transport settings.

- Plaspy's public server domain is d.plaspy.com and the public server IP is 54.85.159.138 for direct routing.
- The port used by Plaspy for all devices is 8888 and all devices in Plaspy use the same port.
- The device may be configured to use UDP or TCP on port 8888 depending on device support and network preferences.
- After pointing the tracker to the Plaspy endpoint and confirming cellular and GNSS connectivity, Plaspy will detect the protocol automatically and begin ingesting messages.
- If messages are not arriving, verify APN and transport settings on the tracker and consult ThingSys firmware notes for device specific configuration commands.

## Transport and Connection Context

Transport and connection settings control how the TS-VB05 reaches Plaspy. The device connects over cellular networks and can use either UDP or TCP transport to the single Plaspy port. Choosing the right transport and verifying the endpoint are common steps in successful device commissioning.

- The TS-VB05 may be configured using UDP or TCP on port 8888 depending on device firmware and configuration choices.
- Devices may be pointed to the domain d.plaspy.com or directly to the IP address 54.85.159.138 for Plaspy ingestion.
- All devices in Plaspy use the same port which simplifies server settings and reduces per model configuration.
- Ensure the tracker has a working cellular data connection on 3G or 4G to reach Plaspy and that the device APN is set correctly.
- Confirm GNSS and hybrid positioning settings so position fixes and LBS fallbacks are available when GPS is limited.

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available telemetry fields, and transport behavior. Verify the firmware release notes for TS-VB05 when diagnosing differences.
- Hardware revisions or regional module variants may affect supported network bands and consequently device reachability.
- Transport selection UDP versus TCP may affect delivery characteristics over cellular networks; choose the transport supported by the device and suited to your environment.
- Manufacturer side configuration commands and default settings may vary by distributor or region; check the specific unit configuration before large scale deployment.
- Plaspy auto detects the protocol, but the device must be configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for successful detection.
- Validate compatibility against the official ThingSys documentation for the most current firmware and implementation notes.

## Why Protocol Understanding Matters

Understanding the TS-VB05 communication protocol helps ensure reliable installation, accurate telemetry, and effective troubleshooting when integrating devices with Plaspy. Even though Plaspy simplifies detection and ingestion, basic protocol awareness reduces setup time and helps isolate issues quickly.

- Facilitates correct device configuration so telemetry and position updates appear in Plaspy without manual protocol selection.
- Speeds troubleshooting by narrowing whether an issue is network transport, APN, GNSS fix, or firmware related.
- Helps plan fleet rollouts by clarifying which telemetry fields are available for analytics and reporting in Plaspy.
- Improves operational reliability by informing decisions about transport choice, reporting frequency, and firmware update policies.
- Supports security and alerting workflows by ensuring event notifications such as tamper and battery alarms are transmitted and understood.

## Why Use Plaspy with This Protocol

Using the TS-VB05 with Plaspy gives fleet managers and vehicle owners a combined view of location, OBDII telemetry, and security events without invasive installation. The plug and play form factor of the TS-VB05, together with Plaspy's automatic protocol detection and unified ingestion endpoint, makes it straightforward to add real time tracking, fuel monitoring, and driver behavior analytics to an existing telematics program.

To learn more about Plaspy and how it supports device integrations like the TS-VB05, visit https://www.plaspy.com. For the latest device protocol details, firmware behavior, and manufacturer implementation notes, verify information on the ThingSys website at https://www.thingsys.com/ as device features and firmware may evolve over time.
