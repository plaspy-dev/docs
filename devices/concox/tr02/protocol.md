---
slug: /concox/tr02/protocol
id: tr02-protocol
sidebar_label: Protocol
title: Concox - TR02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox TR02 and Plaspy covering connection settings transport options and compatibility notes
keywords:
  - Concox TR02 protocol
  - Concox TR02 GPS
  - TR02 Plaspy compatibility
  - Concox tracking protocol
  - GPS tracker communication
  - vehicle tracking Plaspy
  - Concox TR02 integration
  - fleet tracking Concox
  - TR02 setup guide
  - Concox protocol compatibility
---

# Concox - TR02 Protocol

This page describes the publicly shareable protocol context for using the Concox TR02 GPS tracker with Plaspy. It focuses on how the device typically communicates with a tracking platform, the shared connection settings Plaspy uses, and practical compatibility considerations that help ensure reliable reporting and monitoring.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, or manufacturer implementation, so this guide explains the general communication context while encouraging verification against manufacturer documentation when needed. The TR02 itself is a compact vehicle tracker with a built in antenna, group management and geo fence notifications, multiple account support, and general GSM GPS characteristics that make it suitable for cost effective fleet and personal vehicle tracking.

## Protocol Overview

The TR02 reporting protocol defines how the device identifies itself, sends location and status updates, and delivers event notifications such as geo fence triggers or tamper alerts to a server. For integration with Plaspy, the important public aspects are the presence of a network endpoint, a transport method, and a consistent reporting cadence that the platform can receive and interpret.

- Enables the TR02 to send position, time, and status data to a remote server for processing and visualization.
- Carries event notifications used for geo fence alerts, ignition or power status, and group management signals.
- Provides an identifier that ties device reports to a specific tracker record inside Plaspy for account and group mapping.
- Works over standard IP transport so the device can be pointed at Plaspy endpoints for centralized collection.
- Allows Plaspy to present vehicle location, historical tracks, and alerts to users without requiring device side changes beyond endpoint configuration.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker reports and applies automatic protocol detection to determine how an incoming device is communicating. In most cases, a TR02 that is configured to report to the Plaspy endpoint will be picked up without manual protocol selection inside the platform.

- Plaspy receives device reports at the domain d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port so there is no per device port selection required on the platform.
- The device may be configured to use either UDP or TCP on port 8888 depending on device firmware and local configuration.
- When a TR02 reports to the Plaspy endpoint the platform automatically detects the tracker protocol so manual protocol selection is typically unnecessary.
- Ensure the device IMEI or unique identifier is correctly configured so Plaspy can map incoming reports to the correct account and vehicle.

## Transport and Connection Context

Connection context covers how the TR02 reaches Plaspy over the network and what settings to check on the device when configuring reporting. Plaspy supports both common transports used by vehicle trackers so devices may be set up to communicate over the method supported by the device and network.

- Devices may use UDP or TCP on port 8888 to report to Plaspy.
- The device can be pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies configuration across a mixed fleet.
- Choose UDP or TCP on the TR02 according to the unit firmware and the reliability needs of your deployment.
- Verify APN and cellular settings on the TR02 so it can establish connectivity on the GSM network bands the unit supports.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available features so test a device after any firmware update.
- Hardware revisions and regional variants may alter default transport settings or enabled message types.
- Manufacturer side configuration tools or SIM management may affect connectivity and report timing.
- Transport selection between UDP and TCP should match what the device firmware supports and what the deployment needs for reliability.
- Plaspy’s automatic detection reduces configuration steps but correct device identifiers and endpoint settings are still required.
- Always cross check device settings and Plaspy account mappings when adding multiple devices or migrating groups.

## Why Protocol Understanding Matters

Understanding the TR02 communication protocol helps ensure a smooth setup, faster troubleshooting, and long term reliability when devices are used with Plaspy. Knowing the high level behavior and connection expectations reduces misconfiguration and helps teams respond to connectivity or alerting issues more efficiently.

- Speeds up initial provisioning by focusing on the correct endpoint and transport settings.
- Helps diagnose why a device may not appear in Plaspy by checking APN transport and endpoint values.
- Informs decisions about using UDP versus TCP based on network behavior and message criticality.
- Clarifies how features such as geo fence notifications and group management are delivered to the platform.
- Reduces time spent testing by confirming that device identifiers and reporting intervals match platform expectations.

## Why Use Plaspy with This Protocol

Using the Concox TR02 with Plaspy gives organizations central visibility into vehicle location, movement history, and event notifications while leveraging Plaspy’s automatic protocol detection and shared connection settings. For fleets managing multiple vehicles, the TR02’s group management and geo fence features combined with a single Plaspy endpoint make it straightforward to consolidate tracking data for operational oversight.

If you want to learn more about how Plaspy works with devices like the Concox TR02 visit https://www.plaspy.com. Please verify device specific protocol details, firmware behavior, and the latest manufacturer implementation by consulting the official Concox documentation at https://www.iconcox.com/ as these details can change over time.
