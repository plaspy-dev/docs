---
slug: /thingsys/ts_v1/protocol
id: ts_v1-protocol
sidebar_label: Protocol
title: ThingSys - TS-V1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for ThingSys TS V1 GPS tracker and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - ThingSys TS-V1 protocol
  - ThingSys TS V1 GPS protocol
  - TS-V1 tracking protocol
  - TS V1 Plaspy protocol
  - ThingSys GPS tracker compatibility
  - TS V1 fleet tracking protocol
  - ThingSys protocol documentation
  - GPS tracker protocol Plaspy
  - Vehicle tracking protocol ThingSys
  - TS V1 telemetry communication
---

# ThingSys - TS-V1 Protocol

This page describes the public protocol context for using the ThingSys TS-V1 GPS tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms, what connection settings are used, and what aspects of the tracker reporting behavior matter when integrating the device into a Plaspy-managed fleet. The intent is to provide useful, non-sensitive protocol information that helps with setup and operational understanding.

The TS-V1 is Plaspy compatible out of the box and supports configurable IP and port settings for platform integration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can change according to firmware version, hardware revision, and manufacturer implementation. Review official manufacturer documentation for the most current, device specific details.

## Protocol Overview

The protocol used by the TS-V1 defines how the tracker reports location, status, and events to a remote server and how remote commands or configuration may be expressed. For Plaspy integration, the protocol's role is primarily to ensure Plaspy receives correctly formatted position and event data so the platform can display, alert, and store that information.

- Enables periodic and event driven position reports so Plaspy can render live location and history.
- Transmits status and I/O events such as ACC ignition, SOS alerts, and analog sensor readings for telemetry processing.
- Allows remote command or configuration via SMS or platform commands when supported by the device and manufacturer.
- Carries device identity and session information that Plaspy uses to associate incoming reports with the correct vehicle record.
- Supports both TCP and UDP transport as configured on the device for compatibility with network and manufacturer preferences.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections to a shared endpoint and determines how to parse and process reports automatically when a device is properly configured to point to the Plaspy server. In most cases, users do not need to pick a protocol inside Plaspy if the TS-V1 is sending data to the correct endpoint and port.

- Plaspy’s public server endpoint for device reporting is d.plaspy.com and the same host is reachable at IP 54.85.159.138.
- All devices supported by Plaspy use the same port, which is 8888, simplifying device configuration across different models.
- Devices may be configured to report via UDP or TCP on port 8888 depending on the tracker settings and network environment.
- When the TS-V1 sends its reports to the Plaspy endpoint, the platform identifies the protocol and associates incoming messages with the correct device record automatically.
- Confirm the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to allow Plaspy to receive and detect the tracker data.

## Transport and Connection Context

Connection context covers how the TS-V1 reaches the Plaspy server over the cellular network and which transport options are commonly used. These details help ensure network routing and firewall rules allow device reporting to Plaspy.

- The TS-V1 may be configured to use either UDP or TCP on port 8888 depending on device firmware and installer preference.
- Pointing the device to d.plaspy.com or to the Plaspy server IP 54.85.159.138 on port 8888 will direct reports to the Plaspy ingestion endpoint.
- Using the shared port 8888 across all devices makes onboarding multiple tracker models consistent and reduces per device configuration errors.
- Ensure carrier networks and local firewalls permit outbound traffic to port 8888 using the chosen transport protocol.
- For devices with both SMS and platform command support, review whether remote configuration via SMS is required to change server or transport settings.

## Protocol Compatibility Notes

- Firmware revisions can alter how and which data fields are reported; verify the device firmware level when troubleshooting discrepancies.
- Hardware revisions or regional variants may change available transports or GNSS behavior; check model labeling and manufacturer documentation.
- Some features such as analog fuel sensing, remote cut off, or SOS behavior depend on hardware wiring and I/O configuration rather than the network protocol itself.
- Transport choice (UDP vs TCP) affects delivery semantics; select the method that matches the device configuration and your network reliability needs.
- Always validate device settings so the tracker is sending to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy receives data.
- Manufacturer command sets and remote control capabilities may be available by SMS or platform commands; confirm what the TS-V1 supports for your workflow.

## Why Protocol Understanding Matters

Understanding how the TS-V1 communicates helps installers and administrators complete setup reliably and troubleshoot common issues such as missing reports, incorrect event handling, or incomplete telemetry. A clear view of the protocol and transport context accelerates integration and reduces downtime.

- Helps confirm the device is pointing to the correct Plaspy endpoint and port so reports reach the platform.
- Makes it easier to interpret event logs and correlate device-reported states with Plaspy alerts and histories.
- Assists in choosing UDP or TCP based on network conditions and desired delivery characteristics.
- Guides firmware upgrade decisions when reporting behavior changes between versions.
- Supports accurate mapping of device I/O to Plaspy events so telemetry and alarms behave as expected.

## Why Use Plaspy with This Protocol

Using the TS-V1 with Plaspy gives fleet operators centralized visibility into vehicle location, status, and event history while leveraging the tracker’s I/O for telemetry and anti-theft actions. Plaspy receives position and event data from the tracker when the device is configured to report to the Plaspy server, allowing mapping, alerts, and historical reporting across a fleet.

To get started, configure the TS-V1 to report to the Plaspy endpoint (d.plaspy.com or 54.85.159.138) and ensure the device uses port 8888 with the preferred transport (UDP or TCP). Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when reports arrive. For more details about Plaspy features and platform capabilities, learn more on the Plaspy website at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance, please verify information on the ThingSys manufacturer site at https://www.thingsys.com/.
