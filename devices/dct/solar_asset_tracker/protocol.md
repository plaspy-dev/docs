---
slug: /dct/solar_asset_tracker/protocol
id: solar_asset_tracker-protocol
sidebar_label: Protocol
title: DCT - Solar Asset Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the DCT Solar Asset Tracker with Plaspy and understanding device communication
keywords:
  - DCT Solar Asset Tracker
  - DCT tracker protocol
  - Solar Asset Tracker protocol
  - Plaspy compatibility
  - GPS tracker communication
  - asset tracking protocol
  - SPA4G 1204 16 protocol
  - tracker to Plaspy
  - fleet tracking protocol
  - solar GPS tracker
---

# DCT - Solar Asset Tracker Protocol

This page describes the public protocol context for using the DCT Solar Asset Tracker (SPA4G-1204-16) with Plaspy. It focuses on how the tracker communicates usable telemetry and events to the Plaspy platform in non sensitive terms, and how that communication is typically configured for real world deployments. The tracker is designed for long duration outdoor use with solar power, GNSS positioning, Wi Fi and LBS fallback, and global 4G connectivity, and this page explains the communication role of the device when integrated with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For public Plaspy communication details, Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888 and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when the device reports correctly to the Plaspy endpoint.

## Protocol Overview

The protocol used by the Solar Asset Tracker defines how the device reports position, device health, and event flags to a cloud endpoint so that Plaspy can display real time location, trigger alerts, and store historical telemetry. This page keeps the discussion at a high level to help system integrators and field technicians understand the communication role without exposing private or firmware specific details.

- Transmits position fixes and timing so Plaspy can render live location and historical tracks.
- Sends telemetry and status such as battery level, charging state, and sensor events for health monitoring.
- Delivers event driven alerts like tamper or movement notifications so Plaspy can trigger workflows.
- Uses a lightweight network connection suitable for 4G telemetry with fallback methods for constrained coverage.
- Identifies the device so Plaspy can associate incoming data with the correct asset record.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and automatically determines the tracker protocol from the reported payloads and metadata, so manual protocol selection in the platform is commonly not required. Proper device configuration to point to Plaspy and choose the correct transport ensures the platform can identify and parse the device data.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and Plaspy uses this same port for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on device support.
- When a device reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and maps the telemetry to the device record.
- In most cases you do not need to manually select a protocol inside Plaspy if the tracker is correctly configured to report to d.plaspy.com on the supported transport and port.

## Transport and Connection Context

Understanding which transport the Solar Asset Tracker uses and how it addresses the Plaspy endpoint helps with initial setup and troubleshooting. The device supports cellular data reporting and can be pointed at a DNS name or direct IP for the Plaspy endpoint.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may use UDP or TCP on port 8888 based on model configuration and firmware capabilities.
- Plaspy uses the same port for all supported devices, simplifying network rules for outgoing telemetry.
- Cellular network settings, APN configuration, and allowed outbound ports on the SIM profile must permit connections to Plaspy.
- Firewalls or carrier restrictions that block outbound UDP or TCP to port 8888 can prevent reporting to Plaspy.

## Protocol Compatibility Notes

- Firmware versions can introduce variations in how telemetry fields are reported; always check the device firmware release notes for protocol changes.
- Hardware revisions may add or remove sensors and therefore change the set of reported telemetry attributes.
- Some manufacturer configuration tools can switch transport mode between UDP and TCP; ensure the chosen transport matches your network policy.
- Manufacturer side settings and regional firmware builds can cause subtle differences in behavior; verify the specifics for your unit.
- Validate any special device features or optional fields against the official manufacturer datasheet and configuration guide.
- If you rely on event driven workflows in Plaspy, confirm the exact events and thresholds supported by the firmware you have in the field.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure successful deployment, faster troubleshooting, and consistent telemetry quality when devices are managed in Plaspy. This knowledge reduces downtime and improves the reliability of alerts and historical reporting.

- Ensures correct device addressing and transport so data consistently reaches Plaspy.
- Helps interpret device health signals such as charge state and battery level for maintenance planning.
- Speeds up troubleshooting when events or location updates do not appear in Plaspy.
- Guides selection of network and SIM profiles that support the required transport to Plaspy.
- Supports decisions about firmware updates and how they may affect reporting or event behavior.

## Why Use Plaspy with This Protocol

Using the DCT Solar Asset Tracker with Plaspy gives organizations consistent visibility into remote and off grid assets with minimal ongoing maintenance. The tracker’s solar power and long battery autonomy combined with multi modal positioning and event reporting make it well suited for trailers, containers, heavy equipment, and other long term deployments where continuous location and alerting are important.

Plaspy centralizes telemetry, event alerts, and historical route playback so teams can monitor assets, respond to tamper or movement alerts, and plan maintenance based on device health data. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the most current device specific protocol details, firmware changes, and configuration instructions verify the manufacturer documentation at https://www.digitalcomtech.com, since protocol support and firmware behavior can change over time.
