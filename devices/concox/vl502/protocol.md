---
slug: /concox/vl502/protocol
id: vl502-protocol
sidebar_label: Protocol
title: Concox - VL502 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for integrating the Concox VL502 OBDII GNSS tracker with Plaspy for real time telemetry and fleet management
keywords:
  - Concox VL502 protocol
  - Concox VL502 GPS
  - VL502 Plaspy compatibility
  - Concox GPS protocol
  - VL502 vehicle tracking
  - OBDII tracker protocol
  - fleet management VL502
  - VL502 communication protocol
  - Concox telemetry protocol
  - Plaspy compatible trackers
---

# Concox - VL502 Protocol

This page covers the public protocol context for using the Concox VL502 OBDII GNSS vehicle tracker with Plaspy. It explains how the VL502 communicates telemetry and events to the Plaspy platform in general, non sensitive terms and with an emphasis on practical configuration and compatibility for fleet and telematics use.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The information here focuses on connection context and protocol role rather than proprietary packet formats or firmware internals. For device specific implementation details and updates consult the manufacturer documentation.

## Protocol Overview

The tracker reporting protocol is the set of messages and behaviors that let the VL502 send GNSS positions, OBDII-sourced telemetry, and event signals to a backend service such as Plaspy. This public overview explains the protocol's role in getting usable vehicle data into maps, alerts, and reports without revealing proprietary or sensitive implementation details.

- Enables the VL502 to transmit GNSS coordinates and time stamped telemetry to a remote server for live tracking and historical playback.
- Carries OBDII parameters such as VIN, engine speed, coolant temperature, mileage, fuel statistics and ignition status so Plaspy can process vehicle diagnostics and operational metrics.
- Delivers accelerometer driven events like harsh braking, sudden acceleration, and impacts that Plaspy can use for safety scoring and alerts.
- Supports periodic reporting, event driven messages, and status updates so device health and connectivity can be monitored.
- Allows the device to identify itself and include device metadata that assists Plaspy in associating incoming data with the correct vehicle and account.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared endpoint and port and automatically determines the tracker protocol from the incoming traffic pattern and device identification. In most cases a properly configured VL502 will begin reporting to Plaspy without requiring manual protocol selection inside the platform.

- Plaspy uses a single, consistent port and shared endpoint for all supported devices so setup is simpler for fleet deployments.
- When a device reports to the Plaspy endpoint, the platform matches device identifiers and message characteristics to the expected protocol behavior.
- Users typically do not need to pick a protocol in Plaspy if the tracker is configured to report to the Plaspy server address and port.
- Plaspy can ingest GNSS, OBDII telemetry, and event messages and map them to live tracking, alerts, and reports automatically.
- If connection problems occur, confirm device reporting settings and that the VL502 is pointed at the Plaspy server address.

## Transport and Connection Context

Transport context describes how the VL502 reaches Plaspy over the mobile network. The VL502 communicates over cellular data and can be configured to use either UDP or TCP depending on device support and deployment needs. Plaspy provides a shared server address and port for device reporting.

- Devices may be configured to point to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The Plaspy server listens on port 8888 for device traffic; the VL502 can be set to use UDP or TCP to that same port.
- All devices in Plaspy use the same port, simplifying provisioning and APN based setups for fleets.
- Use of UDP or TCP may be chosen for reliability or efficiency based on unit firmware and network characteristics.
- Confirm network plans and APN settings on the vehicle SIM so that the device can reach d.plaspy.com or the server IP successfully.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, and transport behavior; verify the device firmware level when diagnosing compatibility.
- Hardware variants and regional cellular band differences may affect connectivity and fallback behavior between LTE and 2G.
- Manufacturer side configuration menus or provisioning servers may alter the default reporting address or transport protocol; ensure the device is set to point to the Plaspy endpoint.
- Selecting UDP versus TCP on the device impacts delivery and retransmission semantics but does not change the high level telemetry content sent to Plaspy.
- Confirm that OBDII diagnostic reads required for your use case are available on the vehicle bus and exposed by the VL502 firmware.
- Always validate critical deployment details such as VIN parsing, event thresholds, and telemetry units against the device and Plaspy test data.

## Why Protocol Understanding Matters

Understanding how the VL502 communicates helps ensure reliable data flow, faster troubleshooting, and correct interpretation of vehicle telemetry within Plaspy. A practical grasp of the protocol context supports smoother deployments and better operational outcomes for fleet and telematics teams.

- Speeds setup by ensuring correct device reporting address and transport configuration are applied before installation.
- Improves troubleshooting by narrowing focus to connectivity, transport choice, and firmware differences rather than guessing about data content.
- Helps interpret incoming telemetry so alerts, fuel calculations, and driver behavior scoring are based on the expected signals.
- Informs maintenance planning because OBDII and DTC availability can vary by firmware and vehicle interface.
- Supports planning for large scale rollouts by using the single Plaspy port model and consistent server endpoint.

## Why Use Plaspy with This Protocol

Using the Concox VL502 with Plaspy gives organizations access to a compact OBDII solution that reports rich vehicle telemetry and GNSS positioning into a centralized fleet management platform. The VL502’s plug and play OBDII installation, combined with dual GNSS, accelerometer events, and OBD diagnostic reads, makes it well suited for fleet operations, usage based insurance, dealer monitoring, and anti theft workflows when paired with Plaspy.

Plaspy’s shared connection settings and automatic protocol detection reduce configuration overhead during deployment and allow the VL502 to feed real time positions, engine parameters, and event data into maps, alerts, and reports. To learn more about Plaspy visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer device details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.iconcox.com/
