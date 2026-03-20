---
slug: /gotop/d16/protocol
id: d16-protocol
sidebar_label: Protocol
title: GOTOP - D16 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the GOTOP D16 GPS tracker with Plaspy for reliable bicycle tracking and fleet management
keywords:
  - GOTOP D16 protocol
  - GOTOP D16 GPS protocol
  - GOTOP D16 protocol for Plaspy
  - GOTOP D16 communication protocol
  - GOTOP D16 tracking protocol
  - GOTOP GPS tracker protocol
  - Plaspy device integration
  - bicycle GPS tracker protocol
  - fleet tracking D16 protocol
  - bike tracker Plaspy compatibility
---

# GOTOP - D16 Protocol

This page explains the public protocol context for using the GOTOP D16 4G Bike GPS Tracker with Plaspy. It describes how the tracker communicates with Plaspy in general, what connection settings are used publicly by Plaspy, and what aspects of the tracker reporting behavior operators should expect when integrating D16 devices into the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by firmware version, hardware revision, and the manufacturer implementation, so this page focuses on public, non sensitive protocol context that helps with setup and troubleshooting while avoiding firmware internals.

## Protocol Overview

The D16 uses its onboard cellular and GNSS systems to report location and status to a cloud endpoint. The device protocol governs how the tracker identifies itself, sends position and sensor updates, and accepts remote commands through the cloud service so Plaspy can present live location, events, and alerts to operators and riders.

- Enables regular position reporting and movement status for live tracking and history playback.
- Transmits device status such as battery level and alarm events that Plaspy converts into notifications and logs.
- Supports remote control actions routed from Plaspy to the device for LED signaling and other allowed commands.
- Provides geofence and alarm event messages that trigger Plaspy alert rules and event timelines.
- Allows Plaspy to map telemetry to device records so operators can manage fleets, view trip histories, and audit events.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a single public endpoint and automatically determines the tracker protocol used by the D16 once the device reports. In most cases operators do not need to select a specific protocol inside Plaspy when the D16 is configured to report to the Plaspy endpoint.

- Plaspy’s public server domain is d.plaspy.com and the server IP is 54.85.159.138.
- All Plaspy devices use the same port, simplifying configuration and routing on the tracker side.
- Plaspy automatically detects the tracker protocol when the device reports to the shared endpoint and port.
- Users typically only need to point the D16 to the Plaspy endpoint and ensure transport settings match the device capability.
- If a device does not appear to report correctly, checking device reporting settings and firmware revision is the usual next step.

## Transport and Connection Context

The D16 can be configured to send its reports over common transport layers supported by cellular trackers. Plaspy exposes a single listening port for all devices and supports both UDP and TCP reporting so operators can select the transport that matches their device firmware and network conditions.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and operator preference.
- The Plaspy endpoint can be addressed by domain d.plaspy.com or by the IP 54.85.159.138 when DNS or routing requires an IP.
- Plaspy’s shared port for all devices is 8888, reducing per-device configuration complexity.
- Choose UDP for lower transport overhead where supported, or TCP where reliable delivery and session behavior are preferred and offered by the device firmware.
- Confirm the device’s transport setting matches the chosen mode in Plaspy and in the tracker configuration to ensure successful reporting.

## Protocol Compatibility Notes

- Firmware revisions can change the set of messages a D16 sends and the way certain events are reported; always note firmware version when validating behavior.
- Hardware variants or regional versions (for example LTE versus optional 2G models) may differ in supported bands and reporting capabilities.
- Manufacturer-side configuration options can alter transport selection, heartbeat intervals, and remote command support; check the device settings you have access to.
- Transport mismatch is a common issue; ensure the D16 is configured for UDP or TCP consistent with your network plan and Plaspy expectations.
- Network restrictions such as carrier NAT or firewalls can affect whether the device successfully reaches d.plaspy.com or the provided IP.
- Validate compatibility against official manufacturer documentation for device specific behaviors and any model variants.

## Why Protocol Understanding Matters

Knowing the public protocol context for the D16 helps with reliable deployment, faster troubleshooting, and predictable behavior in operational use. Understanding what the tracker reports and how it connects to Plaspy reduces ambiguity during setup and helps you interpret events and alarms correctly.

- Facilitates correct device configuration for transport, server address, and reporting intervals.
- Speeds up troubleshooting when a device is not visible or when telemetry appears inconsistent.
- Helps anticipate differences caused by firmware updates or device variants when planning fleet rollouts.
- Guides decisions about transport selection for network resilience and expected delivery behavior.
- Clarifies how remote LED control and geofence events are relayed through Plaspy so operators can design alerting and control workflows.

## Why Use Plaspy with This Protocol

Using the GOTOP D16 with Plaspy gives bicycle fleet operators and individual riders a practical way to combine compact, bike-focused hardware with a cloud platform that surfaces live location, alarms, and route history. Plaspy ingests the D16’s telemetry to enable geofence enforcement, low battery alerts, and remote LED control so fleets can maintain visibility and safety for riders and assets.

To learn more about Plaspy and how it works with devices like the GOTOP D16, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, verify information with the manufacturer at https://www.gotop.cc/ as device behavior and firmware capabilities can change over time.
