---
slug: /sinotrack/st_905_915/protocol
id: st_905_915-protocol
sidebar_label: Protocol
title: SinoTrack - ST-905/915 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SinoTrack ST 905 915 GPS tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - SinoTrack ST 905 915 protocol
  - SinoTrack GPS tracker protocol
  - ST 905 915 tracking protocol
  - Plaspy compatibility
  - GPS tracker communication
  - vehicle tracking protocol
  - asset tracker integration
  - GPS tracker setup guide
  - real time tracking protocol
  - tracker protocol overview
---

# SinoTrack - ST-905/915 Protocol

This page describes the public protocol context for using the SinoTrack ST-905/915 tracker with the Plaspy platform. It explains how the tracker communicates with Plaspy in broad, non sensitive terms and what to expect when configuring the device for reporting and monitoring. Use this as protocol context rather than a step by step device manual.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device features such as long battery standby, Ubox 7020 based positioning, alarm reporting, SMS or GPRS connectivity, and voice monitor may behave differently depending on the tracker firmware and configuration.

## Protocol Overview

The communication protocol is the set of behaviors the ST-905/915 uses to identify itself and transmit telemetry, alarms, and status back to a server. For integration with Plaspy this means the tracker must be pointed to the Plaspy endpoint and use a supported transport so incoming reports can be received and interpreted.

- Carries core telemetry such as location, time, and basic device status to the server for mapping and history.
- Delivers event notifications used for alarms like low battery, shock, and over speed to trigger alerts inside Plaspy.
- Includes device identification data so Plaspy can associate incoming reports with a registered tracker.
- Operates over cellular reporting channels such as GPRS for real time data and can also support SMS based reporting or configuration where the device firmware allows.
- Enables remote functions offered by the device, such as voice monitor, when supported by both firmware and the platform integration.

## How Plaspy Detects the Protocol

Plaspy receives reports on a single shared endpoint and automatically identifies the tracker protocol used by the device. In most cases users do not need to manually select a protocol inside Plaspy once the tracker is correctly configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct routing.
- Plaspy listens on port 8888 for device reports and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on tracker support and network setup.
- Plaspy automatically detects the tracker protocol when reports arrive at the shared endpoint.
- When a tracker is configured to report to the Plaspy endpoint the platform will attempt to map incoming messages to the appropriate device and begin showing telemetry.

## Transport and Connection Context

Transport selection and correct destination settings are essential for reliable reporting. The ST-905/915 can use either packet data or SMS for reporting depending on configuration and firmware capability; for Plaspy integration the network transport is typically set to point to the Plaspy endpoint.

- Devices may point to d.plaspy.com or to the numeric host 54.85.159.138 when direct IP routing is required.
- The device may use UDP or TCP on port 8888 depending on the unit configuration and cellular network behavior.
- Port 8888 is the common port used by Plaspy across all supported devices to simplify configuration.
- Use the transport mode recommended by your carrier and the device manual for best reliability on GPRS or 2G 3G networks.
- Ensure APN and data settings on the SIM card are correct so the tracker can establish a GPRS connection to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, and which events are reported; verify the tracker firmware level when troubleshooting.
- Hardware revisions or alternate ST-905/915 manufacturing batches may implement small protocol variations; confirm behavior on a test unit where possible.
- Some features such as voice monitor or advanced alarm types may require specific firmware or configuration to be sent over GPRS rather than SMS.
- Transport differences between UDP and TCP can affect delivery semantics; select the transport your device and network handle best.
- Always validate compatibility against the latest manufacturer documentation and perform live tests to confirm expected behavior.
- If you rely on battery optimization features, check how sleep and reporting intervals are implemented in the firmware.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the ST-905/915 reports reliably to Plaspy, that alarms are received promptly, and that device capabilities are used correctly across deployments.

- Proper protocol and transport configuration reduces data gaps and improves location accuracy in the platform.
- Recognition of firmware dependent behavior helps diagnose missing events or differences in message frequency.
- Knowing what the device will report enables correct platform mapping of alarms and telemetry fields to Plaspy alerts and widgets.
- Protocol awareness helps plan battery life trade offs by choosing reporting intervals and sleep modes that match operational needs.
- Troubleshooting connectivity is simpler when you know whether the device is expected to use UDP or TCP and the correct Plaspy endpoint.

## Why Use Plaspy with This Protocol

Using the SinoTrack ST-905/915 with Plaspy gives organizations a straightforward way to capture the tracker’s long standby capabilities, alarm reporting, and accurate positioning in a centralized fleet or asset management view. Plaspy receives and interprets the telemetry and events sent by the device so teams can monitor location, react to alarms, and maintain operational oversight across deployments.

To learn more about Plaspy and how it handles device reporting visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information with the manufacturer at https://www.sinotrackgps.com/ since protocol support and firmware behavior can change over time.
