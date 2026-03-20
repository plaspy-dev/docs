---
slug: /topfly/torchx_100/protocol
id: torchx_100-protocol
sidebar_label: Protocol
title: TopFly - TorchX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the TopFly TorchX 100 and how it communicates with Plaspy for fleet telemetry and tracking
keywords:
  - TopFly TorchX 100 protocol
  - TopFly TorchX 100 GPS protocol
  - TopFly tracking protocol
  - TorchX 100 Plaspy compatibility
  - OBDII GPS tracker protocol
  - CAN BUS telemetry protocol
  - fleet tracking protocol TopFly
  - TorchX 100 communication protocol
  - Plaspy compatible trackers
  - ELD tracking protocol TopFly
---

# TopFly - TorchX 100 Protocol

This page covers the public protocol context for using the TopFly TorchX 100 with Plaspy. It explains, at a protocol level suitable for integration planning and troubleshooting, how the device reports location and vehicle telemetry to the Plaspy platform without revealing private parser or firmware internals. Use this page to understand connection points and the role the device protocol plays in delivering usable data into Plaspy dashboards and workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are pointed at the Plaspy endpoint. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation. For device specific packet examples, firmware notes, and the latest command lists consult the official TopFly documentation and firmware release notes.

## Protocol Overview

The TorchX 100 uses its onboard cellular and CAN BUS interfaces to deliver vehicle location, diagnostics and compliance records to a remote server. The device protocol defines how the tracker identifies itself, reports GNSS position, and sends CAN BUS telemetry and ELD logs so that Plaspy can present actionable fleet data.

- Carries GNSS position and timing information so Plaspy can plot vehicle location and historical routes.
- Transmits CAN BUS telemetry including VIN, true odometer, fuel level, ignition status and diagnostic trouble codes for asset identification and maintenance workflows.
- Delivers ELD and hours of service data to support compliance reporting inside Plaspy.
- Supports buffered reporting so stored points are delivered after connectivity is restored, enabling continuity in Plaspy records.
- Uses standard transport methods supported by the device to reach the Plaspy endpoint, allowing centralized ingestion and display.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device reports and applies automatic protocol detection to map incoming data to the correct device fields. When a TorchX 100 is configured to report to the Plaspy endpoint, users usually do not need to choose a protocol manually inside the platform.

- Plaspy receives device traffic at the public endpoint d.plaspy.com and the server address 54.85.159.138.
- All devices in Plaspy use the same port which simplifies device provisioning and reduces configuration errors.
- Plaspy automatically detects the tracker protocol and associates incoming messages with the appropriate device model and telemetry fields.
- Correct device configuration at the tracker side is the primary requirement for automatic detection to succeed.
- If a device uses multiple transport options, ensure it is pointed to the Plaspy server so automatic detection can occur.

## Transport and Connection Context

TorchX 100 devices may use a variety of transport modes to send telemetry and diagnostics to Plaspy. For connectivity, the device can be configured to use UDP or TCP on the port Plaspy uses for all supported devices. These connection choices affect delivery characteristics such as latency and retransmission behavior but do not change the high level telemetry fields available in Plaspy.

- The device may be configured using UDP or TCP on port 8888 depending on device support and site preferences.
- Devices can be pointed at d.plaspy.com or the server IP 54.85.159.138 for direct delivery to Plaspy.
- Plaspy uses the same port for all supported devices which streamlines fleet wide provisioning.
- Transport selection is made at the device configuration stage and can impact delivery guarantees and battery use.
- Ensure mobile network settings and APN are correct on the device so it can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may add or change telemetry fields and update how certain CAN BUS values are encoded; validate compatibility for your firmware.
- Hardware revisions and regional variants can alter available features such as supported LTE bands or auxiliary interfaces.
- Manufacturer side configuration options can enable or disable transports like MQTT or SMS; confirm which transports are active for Plaspy integration.
- Transport choice between UDP and TCP may change behavior for retransmission and acknowledgements but not the high level telemetry available to Plaspy.
- For advanced uses such as ELD compliance or custom CAN mappings, confirm the device provides the specific signals required by your workflows.
- Always cross check device reported identifiers such as VIN and serial against your asset register to avoid misidentification.

## Why Protocol Understanding Matters

Understanding the TorchX 100 communication protocol helps you set up devices correctly, ensures reliable ingestion of CAN BUS telemetry and ELD data, and speeds troubleshooting when devices do not appear in Plaspy as expected. A clear grasp of protocol and transport choices improves long term reliability and operational visibility.

- Validates that the device is configured to report to the correct Plaspy endpoint so automatic detection can occur.
- Helps diagnose connectivity problems by clarifying whether TCP or UDP transport is being used.
- Ensures the correct firmware features are active to capture required CAN BUS signals for odometer, VIN, fuel, and DTCs.
- Supports planning for offline buffering and data recovery to reduce lost points during network outages.
- Improves coordination between field technicians and fleet administrators when provisioning OBDII devices.

## Why Use Plaspy with This Protocol

Using the TorchX 100 with Plaspy provides fleet operators a combination of frequent location updates, deep CAN BUS telemetry and ELD support that is presented through Plaspy dashboards and alerting workflows. Plaspy ingests the device reports delivered to the shared Plaspy endpoint, automatically detects the protocol, and maps GNSS, CAN BUS and compliance records into fleet views for dispatch, maintenance, and regulatory reporting.

Learn more about Plaspy and how it handles device connectivity, automated protocol detection, and fleet level reporting at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify the latest information on the manufacturer site https://www.topflytech.com/ as device behavior and supported features can change over time.
