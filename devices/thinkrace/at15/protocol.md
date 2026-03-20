---
slug: /thinkrace/at15/protocol
id: at15-protocol
sidebar_label: Protocol
title: ThinkRace - AT15 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the ThinkRace AT15 tracker and how it communicates with Plaspy for reporting and device setup
keywords:
  - ThinkRace AT15 protocol
  - ThinkRace AT15 GPS protocol
  - ThinkRace AT15 protocol for Plaspy
  - ThinkRace AT15 communication protocol
  - ThinkRace AT15 tracking protocol
  - ThinkRace luggage tracker protocol
  - Plaspy device compatibility
  - GPS tracker protocol integration
  - device reporting to Plaspy
  - tracker transport and connection
---

# ThinkRace - AT15 Protocol

This page documents the public protocol context for using the ThinkRace AT15 tracker with Plaspy. It focuses on how the device communicates with Plaspy for location reporting and device configuration in general terms, without exposing private implementation details. The AT15 is a compact smart luggage tracker with real time tracking and location history, and this guide explains how that kind of device typically interacts with a fleet management endpoint like Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The AT15 behavior can vary by firmware version, hardware revision, or manufacturer configuration, so exact reporting intervals and message content depend on the device firmware and how the tracker is set up. Plaspy accepts connections at the same endpoint and port for all devices and will work with AT15 units that are configured to report to the Plaspy endpoint.

## Protocol Overview

The communication protocol for the AT15 defines how the tracker identifies itself, sends telemetry, and receives configuration updates when supported. For public guidance, the focus is on what the protocol enables rather than on internal packet layouts or proprietary frames. Understanding the protocol role helps ensure the device is configured to reach the Plaspy endpoint reliably.

- Enables the AT15 to send location updates and basic telemetry to a remote server for tracking and history.
- Carries identification information that allows Plaspy to associate incoming reports with the correct device record.
- Provides a channel for optional remote configuration or remote commands if the tracker firmware supports such features.
- Supports transport over standard network sockets so the device can report to a hosted endpoint like Plaspy.
- Influences how frequently the device reports and how position and sensor data are formatted for ingestion.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a properly configured device reports to the platform endpoint. Users generally do not need to manually select a protocol inside Plaspy as long as the AT15 is pointed at the Plaspy server and uses a supported transport. Detection is based on observing incoming connections and the data the tracker sends rather than requiring manual configuration.

- Plaspy accepts device reports at the domain d.plaspy.com and at the server IP 54.85.159.138.
- Plaspy listens on a single shared port for all supported devices so configuration is simplified.
- The port used by Plaspy for device reporting is 8888, and all devices in Plaspy use the same port.
- The AT15 may be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on user preference or network setup.
- When an AT15 sends its first reports to the Plaspy endpoint, the platform associates the device and begins protocol detection automatically.

## Transport and Connection Context

Connection transport and addressing are important for ensuring the AT15 reaches Plaspy reliably. The AT15 can be set up to use either UDP or TCP depending on the device configuration and firmware capabilities, and Plaspy supports both transports on the standard port. Keep in mind that network environments, NAT behavior, and mobile carrier policies can affect how easily a device maintains a connection to the server.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and user configuration.
- The target server for Plaspy reporting is d.plaspy.com or the equivalent IP 54.85.159.138.
- Plaspy uses the same port 8888 for all devices to simplify setup and firewall rules.
- Choose UDP for lightweight reporting scenarios or TCP if the tracker and network benefit from connection oriented delivery where available.
- Verify that outbound traffic to d.plaspy.com and port 8888 is permitted on the network used by the device.

## Protocol Compatibility Notes

- Firmware versions can change how a tracker formats reports, so behavior observed on one AT15 unit may differ from another if firmware differs.
- Hardware revisions and regional variants may affect supported transports and configuration options.
- Manufacturer side settings and cloud features can introduce differences in how remote configuration is handled.
- Selecting UDP versus TCP on the device will influence reliability and how reports traverse mobile networks.
- Confirm device APN and network settings are compatible with sending data to the Plaspy endpoint.
- When in doubt, compare the device behavior to official ThinkRace documentation for the specific AT15 firmware revision.

## Why Protocol Understanding Matters

Knowing the communication protocol basics for the AT15 helps ensure successful setup, reliable reporting to Plaspy, and efficient troubleshooting when connectivity issues appear. A practical understanding reduces setup time and avoids common configuration errors.

- Helps confirm the device is pointed at the correct Plaspy endpoint and port so reports reach the platform.
- Aids in diagnosing connection problems caused by network restrictions, APN issues, or transport selection.
- Clarifies what to expect from device telemetry so Plaspy can map incoming fields to the correct data model.
- Supports planning for reporting intervals and battery or power management impacts on visibility.
- Assists in determining if a firmware update or device replacement is needed for desired features.

## Why Use Plaspy with This Protocol

Using the ThinkRace AT15 with Plaspy gives organizations a straightforward way to centralize location data and history from small asset trackers into a single platform. For luggage and small asset use cases, Plaspy can receive location updates from AT15 devices and present them alongside other tracked assets to help with operational visibility and history analysis.

If you want to learn more about how Plaspy handles device reporting, visit https://www.plaspy.com to explore platform features and deployment options. For the most current and device specific protocol details, firmware notes, and implementation guidance for the AT15, verify information with the manufacturer at https://www.thinkrace.com/ since firmware behavior and device implementation details can change over time.
