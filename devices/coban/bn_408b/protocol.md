---
slug: /coban/bn_408b/protocol
id: bn_408b-protocol
sidebar_label: Protocol
title: Coban - BN-408B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Coban BN 408B tracker and how it communicates with Plaspy for tracking and alarms
keywords:
  - Coban BN 408B
  - BN 408B protocol
  - Coban GPS protocol
  - BN 408B GPS tracker
  - BN 408B Plaspy compatibility
  - BN 408B communication protocol
  - BN 408B tracking protocol
  - Coban asset tracker
  - BN 408B fleet management
  - Plaspy device compatibility
---

# Coban - BN-408B Protocol

This page provides a public protocol overview for using the Coban BN-408B tracker with Plaspy. It focuses on the communication context and practical guidance for connecting the BN-408B to Plaspy without exposing private implementation details. The intent is to help fleet and asset managers understand how the tracker reports location, alarms, and status to Plaspy in a way that supports reliable integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly pointed to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page emphasizes the general reporting and transport context rather than device internals.

## Protocol Overview

At a high level the BN-408B communication protocol governs how the device identifies itself, reports position and telemetry, and delivers alarm messages to a server such as Plaspy. For Plaspy compatibility the important public aspects are how the device sends its data over the network and what kinds of events it reports, rather than internal frame structures.

- The protocol enables periodic position updates and event driven reports such as movement, tamper, low battery, and geo fence alarms that Plaspy displays and stores.
- It provides a means for the device to include identity and status information so Plaspy can associate messages with the correct asset and telemetry profile.
- The tracker can report over multiple transports supported by Plaspy which allows flexible deployment across cellular networks.
- Alarm and status messages are part of the communication flow so Plaspy can trigger alerts, incident logs, and automation rules.
- Remote configuration and SMS reporting are available on the device and can complement TCP or UDP reporting depending on deployment needs.

## How Plaspy Detects the Protocol

Plaspy accepts tracker reports on a common endpoint and automatically determines the device protocol when a tracker is configured to report to Plaspy. In most cases users do not need to pick a protocol inside Plaspy as long as the device network settings point to the Plaspy endpoint and use the supported transport.

- Plaspy server domain is d.plaspy.com which resolves to the public endpoint for device reporting.
- Plaspy server IP is 54.85.159.138 which can be used in network configuration when a numeric address is required.
- The port is 8888 and all devices in Plaspy use the same port for data reporting.
- The device may be configured using UDP or TCP on port 8888 depending on unit settings and network conditions.
- Plaspy automatically detects the tracker protocol so manual protocol selection on the platform is typically unnecessary if the device is pointed correctly.

## Transport and Connection Context

Connection context covers how the BN-408B reaches Plaspy over the mobile network and what transport options are commonly used. Deployment choices such as UDP versus TCP and SMS fallback affect reliability and battery use, and they are set on the device or by remote configuration commands offered by the manufacturer.

- The device may use UDP or TCP on port 8888 depending on device support and configuration and on which transport is preferred for the deployment.
- Devices may point to d.plaspy.com or 54.85.159.138 as the destination for reporting and configuration.
- All Plaspy supported devices use the same port which simplifies firewall and network setup for fleets.
- SMS reporting is a supported alternative for devices that use SMS to send critical alerts or when packet data is unavailable.
- Network level settings such as APN and transport selection are configured on the device and determine how it reaches the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing, enabled event types, and available remote commands, so verify firmware behavior against manufacturer notes.
- Hardware revisions and Model B specific features may add alarms such as SOS, external power disconnection, and remote immobilization which affect the set of events reported to Plaspy.
- Transport selection between TCP and UDP can affect message delivery guarantees and battery usage; choose the transport that matches your reliability and power constraints.
- SMS remains a useful fallback for critical alerts in areas with unreliable data service, but it provides different data capabilities than IP reporting.
- Always validate compatibility and available features with current Coban documentation for the BN-408B variant you deploy.
- When deploying at scale confirm that device identities and reporting intervals are provisioned to avoid duplicate or missed messages.

## Why Protocol Understanding Matters

A practical understanding of the BN-408B communication protocol and transport options helps ensure reliable setup, quicker troubleshooting, and predictable behavior in Plaspy. Knowing what the device reports and how it sends data reduces integration time and supports operational decision making.

- Proper transport configuration prevents common connectivity issues and helps control battery life in long term deployments.
- Recognizing which alarms and status messages the tracker can emit reduces false positives and improves alert tuning in Plaspy.
- Awareness of firmware and hardware variants avoids surprises when a unit behaves differently from another in the same fleet.
- Understanding SMS versus IP reporting clarifies what data is available when shifting between network modes.
- Clear connection context simplifies firewall rules and network provisioning for installations across sites or regions.

## Why Use Plaspy with This Protocol

Using the BN-408B with Plaspy provides organizations with a straightforward path to real time tracking, alarm handling, and historical playback for mobile assets. The BN-408B hardware features such as long battery life, magnetic mounting, and a comprehensive alarm set complement Plaspy capabilities for fleet oversight, anti theft workflows, and operational reporting.

To learn more about Plaspy and how it handles device reporting visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so users should verify the latest BN 408B documentation and firmware notes with the manufacturer at https://www.coban.net/
