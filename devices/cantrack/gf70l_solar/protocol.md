---
slug: /cantrack/gf70l_solar/protocol
id: gf70l_solar-protocol
sidebar_label: Protocol
title: CanTrack - GF70L-Solar Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack GF70L Solar tracker and how it communicates with Plaspy for asset tracking
keywords:
  - CanTrack GF70L-Solar protocol
  - CanTrack GF70L-Solar GPS
  - GF70L-Solar Plaspy compatibility
  - CanTrack protocol Plaspy
  - GF70L-Solar tracking protocol
  - CanTrack asset tracker protocol
  - solar asset tracker protocol
  - GPS tracker protocol Plaspy
  - fleet tracking protocol
  - asset telemetry protocol
---

# CanTrack - GF70L-Solar Protocol

This page explains the public protocol context for using the CanTrack GF70L-Solar magnetic asset GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general, what connection settings are used, and what to consider when integrating GF70L-Solar devices into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects a device protocol when the tracker reports to the Plaspy endpoint. Exact protocol behavior for GF70L-Solar can vary by firmware, hardware revision, and manufacturer implementation, so this page keeps details at a high level and points you to official manufacturer resources for firmware specific information.

## Protocol Overview

The GF70L-Solar communicates position reports, alarms, and basic telemetry to a remote server so Plaspy can present locations, trigger alerts, and retain historical data. The tracker supports multiple reporting modes (real-time, timed intervals, and movement based) that affect how frequently it sends data and which events generate immediate uploads.

- Provides a channel for periodic and event driven position reports to Plaspy for mapping and history.
- Transmits alarm and status events such as geo-fence alerts, vibration, low battery, and anti removal for timely notification.
- Allows device identification and basic telemetry to be associated with each position for platform processing.
- Supports SMS and remote configuration methods on the device, enabling IP/port and APN changes when required.
- Enables organizations to balance update frequency against battery life by choosing the device reporting mode.

## How Plaspy Detects the Protocol

Plaspy receives incoming data at a shared endpoint and inspects the incoming feed to determine the tracker protocol automatically. In most cases the user does not need to choose a protocol in Plaspy if the GF70L-Solar is correctly configured to report to the Plaspy endpoint.

- Plaspy listens on a common endpoint and port for all supported trackers and automatically detects the protocol used by each device.
- If a GF70L-Solar reports to d.plaspy.com or the Plaspy server IP it will be identified without manual protocol selection.
- Plaspy supports both UDP and TCP reporting where the device and network allow either transport.
- Proper device configuration to report to Plaspy ensures the platform can associate the device identity with incoming data streams.
- Users typically configure the tracker via SMS commands or remote settings to point to the Plaspy endpoint and reporting port.

## Transport and Connection Context

GF70L-Solar devices can be configured to use either UDP or TCP reporting depending on the device configuration and cellular network conditions. Plaspy exposes a single, consistent connection target for incoming tracker traffic so deployment and provisioning are simplified.

- Devices may be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 for reporting.
- The Plaspy listening port for all devices is 8888 and the GF70L-Solar may be configured to use UDP or TCP on port 8888.
- Using a single port across devices simplifies firewall and APN configuration for fleet rollouts.
- Network reliability and cellular operator behavior can influence whether TCP or UDP is preferable for your installation.
- Verify APN and SIM provisioning on the tracker to ensure it can establish outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior, available commands, and the exact telemetry fields sent by a GF70L-Solar device.
- Hardware variants or regional cellular models (for example 2G versus 4G variants) may affect which transport and network settings are available.
- Manufacturer side customization or region specific firmware may introduce slight differences in alarm names, event triggers, or SMS command sets.
- Transport selection (UDP versus TCP) is a configuration choice on the tracker and can impact delivery guarantees and battery consumption.
- Always validate a device on a test account or staging environment before wide deployment to confirm expected behavior with Plaspy.
- When in doubt, consult the official manufacturer documentation for the device batch or firmware version in use.

## Why Protocol Understanding Matters

A practical understanding of the device reporting protocol helps ensure devices are provisioned correctly, reduces integration friction, and speeds troubleshooting when data does not appear in Plaspy as expected.

- Ensures correct IP, domain, and port settings are applied during device provisioning for immediate connectivity.
- Helps choose appropriate reporting modes so battery life and data use meet operational needs.
- Supports faster diagnosis of missing positions or alarms by checking transport and reporting state on the device.
- Clarifies which events and telemetry fields the tracker will report so platform configurations and alerts can be matched.
- Reduces time to recover from firmware or network related changes by knowing where to check device and platform settings.

## Why Use Plaspy with This Protocol

Using GF70L-Solar devices with Plaspy gives operations teams a straightforward way to monitor off grid assets such as trailers, containers, and heavy equipment. The Plaspy platform aggregates position updates, alarm events, and telemetry into dashboards and notifications that support recovery workflows and operational decision making.

Plaspy’s unified endpoint model simplifies device provisioning by using the same listening port for all supported devices and automatically detecting the tracker protocol when the device reports. To learn more about Plaspy and how it can help manage GF70L-Solar deployments visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer documentation at the official CanTrack site https://www.cantrackgps.com/ since vendor implementations and firmware may change over time.
