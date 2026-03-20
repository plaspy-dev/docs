---
slug: /coban/gps403/protocol
id: gps403-protocol
sidebar_label: Protocol
title: Coban - GPS403 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Coban GPS403 with Plaspy for reliable GPS reporting and remote monitoring
keywords:
  - Coban GPS403 protocol
  - Coban GPS403 tracker
  - Coban GPS403 communication
  - Coban GPS403 Plaspy
  - Coban GPS403 GPS tracker
  - vehicle tracking Coban GPS403
  - GPS403 LBS
  - GPS403 compatibility
  - Coban tracker protocol
  - fleet tracking GPS403
---

# Coban - GPS403 Protocol

This page describes the public protocol context for using the Coban GPS403 with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general terms, what role the communication protocol plays, and practical considerations for setup and compatibility. This is an integration focused resource rather than a replacement for the manufacturer documentation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior observed on the GPS403 may differ between units or firmware builds.

## Protocol Overview

The GPS403 communicates location, status, and alarm information from the device over the cellular network to a server endpoint that Plaspy provides. The term protocol here refers to the device reporting format and sequencing that allows Plaspy to interpret GPS, LBS, alarm, and remote control related messages without exposing private parser details.

- The protocol carries position fixes and supplemental telemetry such as movement, SOS, geo-fence, and battery status.
- It provides identification data that lets Plaspy associate incoming reports with a specific GPS403 device.
- Reporting triggers can include periodic position updates, movement events, and alarms configured on the device.
- The protocol enables remote commands and control flows that the GPS403 supports when routed through a compatible server.
- Because manufacturer firmware can change message behavior, the protocol role is to map device reports into Plaspy events and attributes rather than to define device internals.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and applies automatic detection to determine the reporting protocol. When a GPS403 is configured to report to the Plaspy endpoint, manual protocol selection inside the platform is typically not required.

- Plaspy exposes a single server endpoint domain name for device reporting, d.plaspy.com, and also receives traffic at the public IP address 54.85.159.138.
- Plaspy listens on port 8888 for device communications and uses the same port for all supported devices.
- Devices may be configured to use UDP or TCP to send reports to Plaspy on port 8888 according to the tracker configuration.
- If a GPS403 is correctly set to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will attempt to identify and process its protocol automatically.
- Proper device identification and successful reporting depend on correct device-side server settings and the unit running expected firmware behavior.

## Transport and Connection Context

Connection context covers how the GPS403 reaches Plaspy over the cellular network. The tracker can use GPRS or 3G connectivity to transport its reporting data to Plaspy, and the choice of transport mode influences whether UDP or TCP is used.

- The GPS403 may be configured to use either UDP or TCP for reporting to Plaspy on port 8888 depending on device support and configuration.
- Plaspy accepts device traffic addressed to the domain d.plaspy.com or to the IP 54.85.159.138 on the shared port 8888.
- All devices in Plaspy use the same port which simplifies configuration and reduces per-device port management.
- Cellular network quality, APN settings, and the device firmware determine whether reports reliably reach the Plaspy endpoint.
- When changing transport protocol on the device, confirm the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 to match Plaspy expectations.

## Protocol Compatibility Notes

- Firmware revisions can change how the GPS403 formats or sequences reports; always note firmware level when troubleshooting compatibility.
- Hardware revisions and region specific builds may alter available features such as LBS addressing or alarm behaviors.
- Some features described by the manufacturer such as remote cut off or advanced alarms may depend on the carrier, APN setup, and device configuration in addition to protocol support.
- Selecting UDP versus TCP on the device can affect reliability and how Plaspy receives messages; test both transports if you observe intermittent reports.
- Because manufacturers sometimes provide multiple reporting formats for the same model over different firmware, validate compatibility against current vendor documentation and the actual device behavior.
- If automatic detection does not associate a device correctly, double check the device’s server and port settings and confirm the device is sending identification information when it first connects.

## Why Protocol Understanding Matters

Understanding the general communication protocol used by the GPS403 helps ensure a reliable integration, faster troubleshooting, and predictable behavior when used with Plaspy. While Plaspy performs automatic detection, administrators and integrators benefit from knowing what the device is expected to report.

- Configuration accuracy: ensuring the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and that the preferred transport is selected avoids common setup mistakes.
- Troubleshooting: recognizing whether telemetry, alarms, or periodic updates should be present makes it easier to isolate device, network, or platform issues.
- Firmware awareness: knowing firmware differences reduces surprise when a capability appears or disappears after an update.
- Operational reliability: confirming how the device reports movement, geo-fence, and SOS events supports dependable monitoring and alerts.
- Validation: cross checking manufacturer documentation against observed behavior ensures the Plaspy integration maps device data into the platform correctly.

## Why Use Plaspy with This Protocol

Using the Coban GPS403 with Plaspy gives organizations a practical way to centralize tracking, alarms, and fleet oversight while relying on Plaspy to interpret device reports. The GPS403’s support for multiple cellular bands, LBS addressing, and a broad set of alarms pairs with Plaspy’s automatic protocol detection to reduce configuration overhead.

Plaspy’s shared reporting endpoint at d.plaspy.com and the use of a single port 8888 across all devices simplifies device provisioning and lets you focus on device placement, firmware, and APN configuration. To learn more about Plaspy and how it handles device integrations, please visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions please verify current information on the Coban website at https://www.coban.net/ as manufacturer behavior can change over time.
