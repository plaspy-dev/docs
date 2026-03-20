---
slug: /minifinder/atto_pro/protocol
id: atto_pro-protocol
sidebar_label: Protocol
title: MiniFinder - Atto Pro Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for MiniFinder Atto Pro integration with Plaspy including connection settings and compatibility guidance
keywords:
  - MiniFinder Atto Pro protocol
  - MiniFinder Atto Pro GPS
  - Atto Pro Plaspy compatibility
  - Plaspy GPS tracker
  - animal tracker protocol
  - GPS tracker communication
  - tracker integration Plaspy
  - pet tracker protocol
  - tracking device compatibility
  - real time tracking protocol
---

# MiniFinder - Atto Pro Protocol

This page provides the public protocol context for using the MiniFinder Atto Pro tracker with the Plaspy platform. It describes how the Atto Pro communicates with Plaspy at a high level, which connection settings are commonly used, and what to expect when integrating the device for real time monitoring and historical reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this guide focuses on safe, public information that helps with setup and verification rather than internal packet or parser details.

## Protocol Overview

At a high level, the tracker reporting protocol is the set of rules and message exchanges that let the Atto Pro send GNSS positions, motion and sensor telemetry, and event notifications to a remote server such as Plaspy. The protocol determines how the device identifies itself, how it reports periodic positions and alarms, and how the platform receives and stores those messages for live view and history.

- Enables delivery of GNSS positions and telemetry from the Atto Pro to Plaspy for live tracking.
- Carries event notifications such as geofence breaches, motion alerts, and low battery notices to the platform.
- Includes device identification and session information so Plaspy can associate incoming messages with the correct asset record.
- Supports buffering on the device and later upload of stored positions when network connectivity returns.
- Allows Plaspy to apply geofence, alerting, and history logic once telemetry is received.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a single, shared endpoint and uses automatic detection to determine the tracker protocol for devices that report to that endpoint. In typical setups the device is configured to point to the Plaspy server and use either UDP or TCP as supported by the device.

- Plaspy server domain to configure on devices is d.plaspy.com and the public server IP is 54.85.159.138.
- The Plaspy service uses port 8888 and this same port is used for all devices in Plaspy.
- Plaspy automatically detects the tracker protocol when the device sends data to the Plaspy endpoint, so manual protocol selection inside Plaspy is usually not required.
- Ensure the device is configured to report to the Plaspy endpoint and that network connectivity from the device to the server is allowed by carrier and any intermediary firewalls.
- If a tracker is not appearing, verify device reporting settings, cellular connectivity, and that the correct Plaspy endpoint and port are in use.

## Transport and Connection Context

Connection context covers how the Atto Pro reaches the Plaspy server over the mobile network. The Atto Pro supports cellular transport and can be configured to use either UDP or TCP depending on the device configuration and network conditions. Use the same Plaspy host and port values for consistent routing of device traffic.

- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- The Plaspy server address to use is d.plaspy.com and can alternatively be targeted by the public server IP 54.85.159.138.
- Plaspy uses a single port 8888 for all supported devices to simplify configuration and transport handling.
- Choose UDP for lower overhead where supported by the device and network, or TCP when reliable ordered delivery is preferred and supported.
- Confirm that mobile carriers, APN settings, and any network firewalls allow outbound traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware differences can change message timing, supported events, and available telemetry fields; always check the device firmware level when diagnosing discrepancies.
- Hardware revisions or regional variants of the Atto Pro may alter supported cellular bands or transport options and thus affect connectivity.
- Transport selection (UDP versus TCP) is implementation dependent; ensure the device is set to a transport mode supported by the network and the chosen configuration.
- Local logging behavior and upload timing (how the device buffers and later uploads stored positions) can differ by firmware and must be validated for your use case.
- BLE and onboard sensors contribute telemetry but may be delivered differently depending on device firmware; sensor pairing and short range behavior do not change the device network endpoint.
- Validate compatibility and the most current protocol behavior against official MiniFinder documentation and release notes.

## Why Protocol Understanding Matters

Understanding how the Atto Pro communicates with Plaspy helps ensure reliable setup, timely alerts, and consistent historical records. A basic awareness of transport, server settings, and firmware variability reduces troubleshooting time and improves operational uptime when devices are deployed in the field.

- Helps confirm the device is pointed at the correct Plaspy endpoint and port for successful reporting.
- Aids in diagnosing connectivity gaps caused by carrier, APN, or firewall restrictions.
- Clarifies expectations around buffered position uploads after connectivity loss and how that affects history continuity.
- Supports choosing appropriate reporting intervals and transport modes to balance battery life and data needs.
- Guides verification steps when firmware updates or hardware revisions change device behavior.

## Why Use Plaspy with This Protocol

Using the MiniFinder Atto Pro with Plaspy gives teams and families a single platform for live monitoring, alerting, and historical review of animal and portable asset tracking. The Atto Pro's compact IP67 design, GNSS accuracy, motion sensing, and local logging complement Plaspy's device management, geofencing, and notification workflows to deliver practical situational awareness for pet recovery, livestock supervision, and remote monitoring.

To get started or learn more about how Plaspy handles device connectivity and tracking, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance, please verify current information at the MiniFinder website https://minifinder.se/ as protocol support and device behavior can change over time.
