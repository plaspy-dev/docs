---
slug: /teltonika/fmc234/protocol
id: fmc234-protocol
sidebar_label: Protocol
title: Teltonika - FMC234 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMC234 integration with Plaspy including connection and compatibility context
keywords:
  - Teltonika FMC234 protocol
  - Teltonika FMC234 GPS protocol
  - FMC234 protocol Plaspy
  - FMC234 tracking protocol
  - Teltonika FMC234 communication protocol
  - FMC234 vehicle tracker protocol
  - Teltonika tracker protocol compatibility
  - FMC234 fleet management protocol
  - Teltonika telemetry protocol
  - FMC234 Plaspy integration
---

# Teltonika - FMC234 Protocol

This page describes the public protocol context for using the Teltonika FMC234 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non sensitive, implementation neutral terms and provides connection and compatibility context to help with integration, deployment, and troubleshooting.

The FMC234 is a Plaspy compatible device built for rugged fleet and asset use with 4G LTE Cat 1 communications, 2G fallback, an IP67 enclosure, and an internal backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available messages can vary by firmware version, hardware revision, regional variant, and manufacturer implementation, so always validate device specific details against official documentation.

## Protocol Overview

The tracker reporting protocol is the mechanism by which FMC234 sends position, telemetry, and sensor data to a remote server such as Plaspy. In public terms, the protocol defines how the device establishes a connection, identifies itself to the server, and transmits usable data that Plaspy converts into location, status, and alert information.

- Enables the FMC234 to report GNSS positions, telemetry, and accessory sensor states to the Plaspy endpoint.
- Carries identification information that lets Plaspy associate incoming data with the correct device record.
- Supports push reporting from device to server so Plaspy can provide live monitoring, route playback, and alerting.
- Allows additional telemetry such as CAN bus data or accessory sensor readings to be delivered alongside location updates.
- Operates over standard transport layers so the device can use common mobile networks to reach Plaspy.

## How Plaspy Detects the Protocol

Plaspy provides a unified endpoint and automatically detects the tracker protocol used by connecting devices. When an FMC234 is configured to report to Plaspy, the platform inspects incoming connections and assigns the correct handling without requiring manual protocol selection in most cases.

- Plaspy listens on a shared server endpoint at d.plaspy.com and receives device reports at that address.
- The Plaspy server IP is 54.85.159.138 and the service uses port 8888 for device reporting.
- All devices in Plaspy use the same port, which simplifies device configuration and server routing.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol in the platform when the device is correctly pointed to the Plaspy endpoint.
- Ensure the FMC234 is configured to report to the Plaspy endpoint so automatic detection can occur as expected.

## Transport and Connection Context

Connection context covers how the FMC234 reaches the Plaspy endpoint and what transport options are commonly available. This information is useful when configuring APN settings, firewall rules, or validating network connectivity during deployment.

- The FMC234 may be configured to use UDP or TCP on port 8888 depending on device settings and network conditions.
- Devices can point to the Plaspy hostname d.plaspy.com or directly to the server IP 54.85.159.138 for reporting.
- Plaspy uses the same port 8888 for all supported devices, which simplifies firewall and network configuration.
- Choose UDP for lower overhead where supported, or TCP for connection oriented delivery when required by device firmware or network.
- Verify mobile operator and APN settings to ensure the device can reach d.plaspy.com or the server IP from the vehicle or asset network.

## Protocol Compatibility Notes

- Firmware revisions can change which messages or transport modes are available; confirm firmware level when diagnosing differences.
- Hardware variants and regional radio configurations may affect available reporting options or required settings.
- Manufacturer accessories such as CAN adapters and EYE sensors can alter the telemetry content delivered to Plaspy.
- Selecting UDP versus TCP can affect delivery behavior and may need to be matched to the device configuration.
- Plaspy’s automatic detection reduces the need for manual protocol selection but requires the device to target the Plaspy endpoint.
- Always validate compatibility and configuration against the latest Teltonika device documentation and release notes.

## Why Protocol Understanding Matters

Understanding the basic communication protocol used by the FMC234 helps ensure reliable deployments, faster troubleshooting, and accurate data interpretation in Plaspy. Knowing how the device connects, what it reports, and how transport is handled reduces integration friction and supports operational continuity.

- Speeds initial setup by clarifying which endpoint, transport, and port to configure on the device.
- Improves troubleshooting when reports are missing or telemetry fields differ from expectations.
- Helps choose appropriate transport (UDP or TCP) and network settings for reliable delivery.
- Informs decisions about firmware updates, accessory compatibility, and feature availability.
- Supports security and network planning by identifying required outbound connections to Plaspy.

## Why Use Plaspy with This Protocol

Using the FMC234 with Plaspy gives organizations a practical way to convert rugged hardware telemetry into live fleet visibility, alerts, and historical reporting. The combination of durable hardware, backup battery autonomy, and Plaspy’s automatic protocol detection makes it easier to deploy trackers at scale while keeping configuration simple for field teams.

Plaspy provides a common endpoint and port for device reporting and handles protocol detection so teams can focus on operations rather than low level parsing. Learn more about how Plaspy can support FMC234 deployments at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware variants, verify information on the manufacturer site https://www.teltonika-gps.com/ as protocol behavior and firmware capabilities can change over time.
