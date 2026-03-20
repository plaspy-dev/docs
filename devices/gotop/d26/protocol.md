---
slug: /gotop/d26/protocol
id: d26-protocol
sidebar_label: Protocol
title: GOTOP - D26 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP D26 and Plaspy compatibility with connection context for fleet and asset tracking
keywords:
  - GOTOP D26 protocol
  - GOTOP D26 GPS protocol
  - GOTOP D26 communication protocol
  - GOTOP D26 tracking protocol
  - GOTOP D26 Plaspy compatibility
  - Plaspy GOTOP D26
  - GPS tracker protocol guide
  - solar GPS tracker D26
  - fleet tracking protocol
  - asset tracking D26
---

# GOTOP - D26 Protocol

This page describes the public protocol context for using the GOTOP D26 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what to expect from connection settings, and how that communication enables real-time tracking, telemetry, and alarm upload for outdoor assets. The information here is intended to help integrators and fleet managers understand protocol role and integration context without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The D26 is compatible with Plaspy out of the box and its combination of 4G/GPRS connectivity, solar charging, AGPS, and motion sensing make it well suited for long term outdoor deployments; however, firmware versions and device variants may affect reporting behavior and available features.

## Protocol Overview

The protocol is the device's method of packaging and delivering GNSS fixes, telemetry, and event notifications to a remote server so the platform can present location history, alerts, and live status. For the D26, that communication is performed over its cellular data link and includes position reports, motion and alarm events, and supplementary data kept during connectivity gaps. The protocol's public context is about what data types are expected and how Plaspy will use them rather than binary or vendor private details.

- Enables delivery of GNSS position fixes, timestamps, and basic telemetry from the D26 to Plaspy for mapping and history.
- Transmits event-driven alerts such as motion, vibration, geofence, over-speed, and SOS so Plaspy can trigger notifications and workflows.
- Supports offline buffering on the device and supplementary transmissions so data collected during coverage gaps reaches Plaspy once connectivity returns.
- Provides the means for remote configuration and firmware update triggers through compatible server endpoints.
- Allows the D26 to identify itself to the server so Plaspy can associate incoming data with the correct asset and device record.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models using a unified endpoint and detection approach so most devices only need to be pointed at the correct server. When the D26 is configured to report to Plaspy, incoming device traffic is evaluated and mapped to the appropriate handling pipeline, allowing the platform to ingest GNSS, telemetry, and alarm events without manual protocol selection in most cases.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device connections.
- The port is 8888; Plaspy accepts device traffic on this port for supported devices.
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a protocol manually if the device is correctly configured to report to the Plaspy endpoint.
- All devices in Plaspy use the same port which simplifies device configuration across fleets.
- If a device variant or firmware implements an uncommon reporting mode, confirm settings with the manufacturer and ensure the device is pointed to the Plaspy endpoint.

## Transport and Connection Context

Connection transport and server addressing determine how the D26 talks to Plaspy over the cellular network. The D26 supports TCP/IP on cellular links and in many deployments can be set to use either TCP or UDP depending on the firmware and configuration. Keeping the focus on transport context helps administrators set up device provisioning and firewall rules without exposing parser internals.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may be pointed at the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138.
- The port is 8888 and is used across all supported devices in Plaspy for consistency.
- Use the transport type (TCP or UDP) supported by your D26 firmware and carrier to match reliability and battery goals.
- Ensure outbound device traffic to d.plaspy.com or 54.85.159.138 on port 8888 is allowed by any intermediate firewalls or NAT configurations.

## Protocol Compatibility Notes

- Firmware differences across production batches can change which features or transport modes are available on a D26 unit.
- Hardware revisions or regional variants may modify supported cellular bands or I/O options and thus affect how the device reports certain telemetry.
- Manufacturer-side configuration menus sometimes expose a choice between TCP and UDP; choose the transport that matches your network plan and Plaspy connection guidance.
- Offline storage and supplementary transmission behavior can vary with firmware and must be tested under representative coverage conditions.
- Always validate device settings against the official GOTOP documentation for your D26 firmware to confirm exact reporting parameters.
- When integrating at scale, test a representative sample of units to detect subtle behavioral differences before fleet-wide rollout.

## Why Protocol Understanding Matters

A practical understanding of the D26 communication protocol helps ensure reliable device provisioning, faster troubleshooting, and predictable behavior in production fleets. Knowing what the tracker sends and how Plaspy receives it reduces guesswork during deployment and helps identify where to look when data is missing or events are misreported.

- Speeds initial setup by clarifying which server and transport to configure on the device.
- Helps diagnose connectivity issues by narrowing scope to transport, DNS, or firmware behaviors rather than platform parsing.
- Improves alert quality by confirming which events the device can report and how they appear to Plaspy.
- Supports capacity planning and firewall configuration because all Plaspy devices use the same port and endpoint conventions.
- Reduces downtime risk by emphasizing validation of firmware behavior for offline buffering and retransmission.

## Why Use Plaspy with This Protocol

Using the GOTOP D26 with Plaspy provides a practical combination for long-term outdoor asset visibility. The D26’s solar charging, rugged IP67 housing, AGPS acceleration, and motion sensing are well suited to container, trailer, and remote equipment tracking. Plaspy consumes the device's GNSS fixes, telemetry, and event uploads to provide live maps, historical playback, and alerting suitable for fleet operations and asset protection.

If you want to learn more about how Plaspy handles device data, server endpoints, and fleet features, visit https://www.plaspy.com. For the latest device specific protocol notes, firmware behavior, and manufacturer configuration guidance please verify details on the official GOTOP website https://www.gotop.cc/ as protocol support and device implementations can change over time.
