---
slug: /concox/jm_ll02/protocol
id: jm_ll02-protocol
sidebar_label: Protocol
title: Concox - JM-LL02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox JM-LL02 GPS tracker showing Plaspy connection settings and compatibility notes for reliable device integration
keywords:
  - Concox JM-LL02 protocol
  - Concox JM-LL02 GPS protocol
  - JM-LL02 Plaspy
  - JM-LL02 communication protocol
  - Concox tracker protocol
  - JM-LL02 tracking protocol
  - Plaspy device compatibility
  - GPS tracker protocol Plaspy
  - asset tracker JM-LL02
  - vehicle tracking Concox
---

# Concox - JM-LL02 Protocol

This page describes the public protocol context for using the Concox JM-LL02 tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in non sensitive terms and what connection settings and transport options are relevant when integrating the JM-LL02 for fleet and asset tracking.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and the manufacturer's implementation. The JM-LL02 is a rugged, Plaspy compatible tracker designed for long deployments with LTE Cat M1 and NB2 connectivity, GSM fallback, Bluetooth configuration, and long battery standby that affect practical reporting behavior.

## Protocol Overview

The protocol is the set of device behaviors and message exchanges that allow the JM-LL02 to report GNSS and telemetry data to a server such as Plaspy. In practice this means the tracker identifies itself, sends location and event telemetry, and supports status or configuration updates when needed. The public documentation here focuses on connection context and what to expect during integration rather than low level packet details.

- Enables location reporting from GNSS and LBS along with event telemetry such as tamper, low battery, vibration, and geo fence alerts.
- Carries device identity and status so Plaspy can associate messages with the correct tracker record.
- Supports buffered reporting and periodic uploads to cope with intermittent connectivity and power saving modes.
- Allows remote configuration workflows using Bluetooth provisioning and server directed settings where supported.
- Provides the transportable data that Plaspy ingests for mapping, historical routes, and alert generation.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and examines incoming traffic to determine the tracker protocol so no manual selection is typically required by the user. Plaspy automatically detects the tracker protocol and routes telemetry to the correct parser and device record once a connection is established.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 using port 8888 for device reporting.
- All devices in Plaspy use the same port which simplifies device configuration and firewall rules.
- When the JM-LL02 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 Plaspy will inspect incoming messages and select the appropriate handling automatically.
- Users normally do not need to manually set a protocol in Plaspy provided the device is configured to report to the Plaspy endpoint and uses the supported transport.
- Basic device identity and message patterns allow Plaspy to match the incoming stream to the correct device type without exposing device internals here.

## Transport and Connection Context

Connection context describes how the JM-LL02 reaches Plaspy and what to configure on the device or network side. The device may be configured using UDP or TCP on port 8888 depending on device support and network environment. Choosing the correct transport and destination is important for consistent reporting and firewall configuration.

- The device may be configured using UDP or TCP on port 8888; select the transport supported by your device firmware and network.
- Point the tracker to d.plaspy.com or to the numeric address 54.85.159.138 if a fixed IP is required by your provisioning process.
- Plaspy uses the same port for all supported devices which simplifies NAT and firewall rules for fleets.
- Consider cellular network rules and APN configuration when operating over LTE Cat M1 NB2 or GSM fallback to ensure packets reach d.plaspy.com on port 8888.
- Bluetooth 5.0 on the JM-LL02 is useful for initial provisioning so you can configure server settings and transport without opening the enclosure.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, or which transports are supported. Always verify the tracker firmware level when troubleshooting.
- Hardware revisions and regional variants sometimes modify supported bands or default reporting behavior; confirm variant specifics for deployed units.
- Manufacturer side configuration menus or provisioning apps may offer options for UDP versus TCP and reporting intervals; picking matching settings matters for Plaspy ingestion.
- Power saving and low power modes alter reporting frequency and payload batching behavior which can affect how quickly events arrive at Plaspy.
- Validate any custom server address or transport changes against Plaspy settings to ensure messages reach d.plaspy.com on port 8888.
- For large scale rollouts test a small group before full deployment to confirm that the chosen transport and firmware behave as expected with Plaspy.

## Why Protocol Understanding Matters

Knowing the communication protocol at a practical level helps you set up the JM-LL02 efficiently, avoid common integration issues, and maintain reliable data flows to Plaspy over the device life cycle. Understanding the interaction between device behavior, transport, and Plaspy routing reduces downtime and simplifies troubleshooting.

- Ensures correct server address and transport selection so data reaches Plaspy consistently.
- Helps diagnose reporting gaps that can be caused by power saving, connectivity dropouts, or misconfigured APNs.
- Guides sensible choices for reporting intervals and event thresholds to balance battery life and freshness of data.
- Improves planning for firewall, NAT, and carrier configurations by knowing that Plaspy listens on port 8888 for all devices.
- Supports effective field provisioning using Bluetooth to avoid repetitive manual device setup.

## Why Use Plaspy with This Protocol

Using Plaspy with the Concox JM-LL02 turns the device's long life battery, resilient cellular connectivity, and event telemetry into actionable insights for operations. Organizations benefit from centralized tracking, configurable alerts for tamper or low battery, and historical route data that supports logistics and asset security workflows. The JM-LL02's rugged enclosure and magnetic mount make it well suited to redeployable assets while Plaspy handles protocol detection and data ingestion.

To learn more about how Plaspy works with a wide range of trackers and to explore platform capabilities visit https://www.plaspy.com. Protocol support details, firmware behavior, and manufacturer implementation can change over time so please verify the latest device specific information on the manufacturer site https://www.iconcox.com/ before finalizing deployment decisions.
