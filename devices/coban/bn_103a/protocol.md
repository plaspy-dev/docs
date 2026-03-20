---
slug: /coban/bn_103a/protocol
id: bn_103a-protocol
sidebar_label: Protocol
title: Coban - BN-103A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Coban BN 103A tracker with Plaspy for real time fleet tracking
keywords:
  - Coban BN 103A protocol
  - Coban BN 103A GPS protocol
  - Coban BN 103A tracking protocol
  - Coban GPS tracker protocol
  - BN 103A Plaspy compatibility
  - BN 103A communication protocol
  - Coban vehicle tracker protocol
  - Plaspy device protocol
  - fleet tracking Coban BN 103A
  - BN 103A telemetry alarms
---

# Coban - BN-103A Protocol

This page describes the public protocol context for using the Coban BN-103A vehicle tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms and what to consider when pointing the tracker at Plaspy for live tracking, telemetry, and event reporting. Technical configuration details that are manufacturer or firmware specific are not reproduced here and should be confirmed with official documentation.

The BN-103A is a vehicle mounted tracker designed for 12–24V installations with high sensitivity GNSS, multi band GSM GPRS connectivity and configurable alarm inputs. Plaspy accepts reports from the BN-103A over the shared Plaspy endpoint and port, and Plaspy automatically detects the tracker protocol. Exact protocol behavior can vary with firmware version, hardware revision and manufacturer implementation, so device settings may need adjustment to match the reporting format used by a particular unit.

## Protocol Overview

The communication protocol used by the BN-103A defines how the tracker sends GNSS fixes, telemetry and event data to a remote server and how the platform may issue remote actions. For integration with Plaspy this protocol is the bridge between raw device signals and the platform features such as live location, alarms, and playback.

- Translates GNSS fixes and time stamps into position reports that Plaspy ingests for live tracking and historical playback.
- Conveys digital inputs and alarm events such as ACC ignition, door status, SOS and geofence triggers so Plaspy can generate notifications and rules.
- Carries telemetry variables including signal quality and battery status that help with device health monitoring on Plaspy.
- Provides a channel for remote control or configuration commands where supported by the device and manufacturer.
- Supports multiple transport methods so devices can use the most suitable network mode available in the vehicle installation.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a shared endpoint and automatically determines the device protocol based on the incoming data format and the device configuration. In most deployments you do not need to manually select a protocol in the platform when the tracker is correctly configured to report to Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the Plaspy ingestion endpoint.
- Plaspy server IP address is 54.85.159.138 for environments that require direct IP configuration.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- Devices may send data over UDP or TCP to the Plaspy endpoint depending on device capability and configuration.
- When a BN-103A is pointed to the Plaspy endpoint and network transports are correct, the platform will automatically detect the protocol and begin processing reports.

## Transport and Connection Context

Connection choices are part of the public integration context for the BN-103A. The tracker supports common transport options used by vehicle trackers and can be configured to reach Plaspy using either domain name or IP address depending on installer preference.

- The BN-103A may be configured to use UDP or TCP on port 8888 to communicate with Plaspy.
- Devices can be set to report to d.plaspy.com or directly to 54.85.159.138 when a numeric endpoint is required.
- Plaspy uses the same port 8888 for all supported devices which simplifies server and firewall configuration.
- Some deployments may use SMS as a secondary transport for specific commands or fallback reporting depending on device features and SIM capabilities.
- Ensure the tracker SIM has a working APN and data plan so TCP or UDP reporting can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware differences across BN-103A units can affect report formats, available fields, and supported commands.
- Hardware revisions or accessory options may add or remove telemetry channels such as fuel sensor inputs or external accessories.
- Some manufacturer configurations require explicit server or reporting mode settings to be changed from default values before the device will send reports to a third party platform.
- Choosing TCP versus UDP can affect connection behavior and should match the device configuration and network environment.
- SMS transport may be supported for commands or fallback but is not a direct replacement for real time TCP or UDP reporting.
- Always validate device behavior in a controlled test before wide deployment to confirm that events and alarms appear as expected in Plaspy.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps installers and fleet managers achieve a reliable, maintainable connection between BN-103A devices and Plaspy. Clear expectations about what the device sends and how the platform interprets those messages reduces downtime and simplifies troubleshooting.

- Ensures position reports and alarms are mapped correctly into Plaspy dashboards and notification rules.
- Makes it easier to diagnose missing updates, incorrect event flags, or mismatched telemetry values during commissioning.
- Guides choices about transport method, APN settings and server address configuration for consistent reporting.
- Helps determine when a firmware update or configuration change is needed to unlock desired features or improve reliability.
- Supports predictable behavior for remote control workflows such as immobilization or remote monitoring when those features are enabled.

## Why Use Plaspy with This Protocol

Using the Coban BN-103A with Plaspy provides fleet operators and vehicle managers a practical path from raw device telemetry to actionable operational insight. Plaspy ingests GNSS fixes, alarms and telemetry from the BN-103A so teams can monitor live locations, replay journeys, enforce geofences and trigger notifications based on event rules.

Plaspy is designed to accept reports from compatible trackers using the shared Plaspy endpoint and port and to automatically detect the device protocol so integration is typically straightforward once the unit is configured to report to d.plaspy.com over the network.

To learn more about how Plaspy supports device integrations and platform features visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.coban.net/.
