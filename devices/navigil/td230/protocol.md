---
slug: /navigil/td230/protocol
id: td230-protocol
sidebar_label: Protocol
title: Navigil - TD230 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the Navigil TD230 GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - Navigil TD230 protocol
  - Navigil TD230 GPS protocol
  - Navigil TD230 protocol Plaspy
  - Navigil TD230 communication protocol
  - Navigil TD230 tracking protocol
  - Navigil GPS tracker protocol
  - TD230 firmware TG2
  - vehicle tracking Navigil
  - fleet tracking TD230
  - GPS tracker Plaspy compatibility
---

# Navigil - TD230 Protocol

This page covers the public protocol context for using the Navigil TD230 tracker with Plaspy. It describes how the device communicates with Plaspy in general terms, what role the tracker reporting protocol plays, and what to watch for when configuring TD230 devices to send position and event data to the Plaspy back end.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to its endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The TD230 is typically supplied with production ready TG2 firmware that supports geofencing, vehicle state monitoring, server reporting, power saving, OTA upgrades, and an SDK for customizations, all of which can affect how data is reported.

## Protocol Overview

The communication protocol for the TD230 defines how the device packages location, status, and event information and sends it to a remote server. For integration with Plaspy, the protocol's public aspects determine how the tracker identifies itself, how often it reports, and which event types can be consumed by the platform.

- Enables the tracker to deliver GPS positions and device state to a Plaspy endpoint so location and event data become actionable.
- Carries geofence events, vehicle state information, and periodic reports that the Plaspy system maps to device telemetry.
- Supports firmware driven features such as power saving reporting intervals and scheduled wake events that affect the timing of messages.
- Allows over the air updates and configuration changes to be managed by the manufacturer or integrator, which can change runtime behavior.
- Works with device SDK customizations that may add or alter the types of messages the TD230 sends to a server.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and determines how to interpret incoming messages automatically. When a TD230 is configured to report to Plaspy, the platform uses the initial device traffic and known compatibility patterns to select the appropriate handling logic without requiring users to pick a protocol manually.

- Devices must be configured to report to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 for device traffic and uses the same port for all supported devices.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and integrator preference.
- In most cases you do not need to choose a protocol inside Plaspy if the TD230 is correctly pointed at the Plaspy endpoint.
- Plaspy automatically detects the tracker protocol when valid device traffic arrives at the shared endpoint.

## Transport and Connection Context

Connecting a TD230 to Plaspy is primarily a matter of pointing the device at the correct server and using an appropriate transport protocol. The device supports standard networking modes that allow integrators to choose UDP or TCP based on reliability and power considerations.

- TD230 devices may be configured to use UDP or TCP on port 8888 for reporting.
- Plaspy accepts traffic addressed to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port which simplifies device configuration across a fleet.
- Transport selection can influence battery usage and message reliability depending on the device firmware and network conditions.
- Ensure firewall and network rules allow outbound traffic from devices to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware variants such as the TD230 TG2 release and any manufacturer updates can change message timing, event types, or optional fields.
- Hardware revisions and custom membrane configurations do not typically change network protocol but may accompany firmware changes that do.
- Manufacturer SDK customizations or rebranded firmware can add device specific features that affect what the tracker reports to Plaspy.
- Choosing UDP or TCP affects delivery characteristics; validate which transport your firmware build supports and prefers.
- Over the air updates can alter protocol behavior over time, so confirm behavior after firmware upgrades.
- Always validate actual device behavior against manufacturer documentation when planning deployment or troubleshooting.

## Why Protocol Understanding Matters

Understanding the TD230 communication protocol helps ensure a smooth integration with Plaspy, simplifies troubleshooting, and supports predictable operational behavior across a fleet. Even when Plaspy detects protocols automatically, knowing what the tracker is expected to send helps diagnose issues and optimize device settings.

- Faster setup by confirming the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport.
- More effective troubleshooting when you can correlate device events such as geofence triggers and sleep wakeups with server received messages.
- Better battery management by aligning device reporting intervals and power saving features with operational needs.
- Clearer planning for OTA updates and firmware rollouts that may change how data is reported to Plaspy.
- Easier communication with the manufacturer or integrator when you can describe which message types or behaviors are involved.

## Why Use Plaspy with This Protocol

Using a Navigil TD230 with Plaspy provides a practical combination for organizations that need reliable location reporting, geofence awareness, and long battery life in embedded tracking applications. Plaspy's shared endpoint model simplifies device onboarding and lets integrators focus on device placement, firmware choices, and reporting policies rather than per device port configuration.

If you want to learn more about how Plaspy handles device connections and fleet management you can visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and product documentation always verify information on the manufacturer website http://www.navigil.com/ since protocol support and firmware behavior can change over time.
