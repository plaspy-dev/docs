---
slug: /teltonika/fmm13a/protocol
id: fmm13a-protocol
sidebar_label: Protocol
title: Teltonika - FMM13A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for connecting the Teltonika FMM13A to Plaspy servers for tracking and telemetry
keywords:
  - Teltonika FMM13A protocol
  - Teltonika FMM13A GPS protocol
  - FMM13A Plaspy compatibility
  - FMM13A communication protocol
  - FMM13A tracking protocol
  - Teltonika tracker protocol
  - vehicle tracking Plaspy
  - fleet tracking FMM13A
  - LTE Cat M1 tracker protocol
  - CAN telemetry Plaspy
---

# Teltonika - FMM13A Protocol

This page provides the public protocol context for using the Teltonika FMM13A with Plaspy. It summarizes how the device communicates with Plaspy servers in general, what connectivity options are typical, and what behaviors matter for a successful integration. The information here is intended to help technical teams plan deployments and troubleshoot common connection issues without exposing sensitive implementation details.

The Teltonika FMM13A is a compact 4G LTE Cat M1 tracker commonly used for North American vehicle and asset deployments. It includes a BG95-M1 modem in standard orders, an internal backup battery for continued reporting during power loss, flexible I O for fuel and ignition monitoring, and CAN adapter support for vehicle telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with device firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol defines how the FMM13A sends telemetry, status, and event information to a remote server and how the server responds to commands or management requests. For Plaspy compatibility this protocol allows the device to identify itself, deliver GNSS location and vehicle telemetry, and report inputs and events that Plaspy converts into usable dashboards and alerts.

- Transports GNSS location and timestamped telemetry to the Plaspy endpoint for real time tracking and historical reporting.
- Reports vehicle-level data such as ignition status, fuel impulse readings, and CAN bus parameters that Plaspy normalizes.
- Sends event notifications for power loss, tamper, immobilizer actions, and other alerts useful for fleet monitoring.
- Exposes the device identity and session information so Plaspy can associate incoming messages with the correct asset.
- Supports remote command and configuration channels that Plaspy can use for operational control and updates when the device and firmware provide those features.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and automatically detects the tracker protocol used by each device. When an FMM13A is configured to report to Plaspy it normally requires only the correct destination, network connectivity, and device-side settings to begin reporting without manual protocol selection inside Plaspy.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct endpoint addressing.
- The port used by Plaspy for device reporting is 8888 and all devices supported by Plaspy use the same port.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and network behaviour.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol in the Plaspy interface if the device points to the correct endpoint.
- Proper APN, SIM provisioning, and network visibility are the most common prerequisites for successful automatic detection.

## Transport and Connection Context

Understanding the transport and connection context helps ensure the FMM13A can reach Plaspy reliably. The FMM13A uses its LTE Cat M1 modem to send telemetry over the mobile network to the Plaspy endpoint. Network settings on the device and any carrier or firewall configuration between the device and Plaspy must allow outbound connections to the Plaspy endpoint and port.

- The device may be configured to send data via UDP or TCP to port 8888 depending on your chosen transport and the device firmware options.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 as the destination.
- All Plaspy supported devices use the same port 8888 which simplifies firewall and network rules for fleets.
- Ensure the device APN and SIM are provisioned to allow IP data and that any carrier NAT or filtering does not block the chosen transport.
- For reliable arrival of telemetry consider mobile network signal, device keepalive settings, and any intermediate packet inspection appliances.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or available command sets. Check device firmware release notes when troubleshooting.
- Hardware revisions or optional accessories such as CAN adapters may affect which telemetry channels are available to Plaspy.
- Device-side transport settings (UDP vs TCP) vary by configuration and some deployments prefer one transport for network reliability reasons.
- Manufacturer remote management tools and FOTA workflows can alter behavior after an update; ensure coordinated updates in production fleets.
- Regional firmware or regulatory variants sometimes alter supported bands or features, so validate device variant against your deployment needs.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 before assuming compatibility.

## Why Protocol Understanding Matters

A practical grasp of how the FMM13A communicates with Plaspy reduces setup time and helps isolate issues when telemetry is missing or unexpected. Knowing which elements are handled by the transport layer, which are influenced by firmware, and which are normalized by Plaspy keeps troubleshooting focused and efficient.

- Helps confirm that the device is reaching the correct Plaspy endpoint and port and using the expected transport.
- Guides verification of APN, SIM provisioning, and mobile network conditions that affect connectivity.
- Clarifies which telemetry fields are expected from the device versus what Plaspy will normalize or derive.
- Supports planning for remote command usage and immobilizer workflows when the device supports them.
- Reduces downtime by allowing precise checks for firmware or accessory compatibility that could affect data quality.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM13A with Plaspy gives fleets a streamlined path from device telemetry to operational insight. The FMM13A’s LTE Cat M1 connectivity, backup battery, flexible I O, and CAN support provide the raw telemetry and control channels that Plaspy ingests, normalizes, and presents for routing, alerts, and reporting. Because Plaspy uses a single shared port and automatic protocol detection, deploying large numbers of devices is operationally simpler.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.teltonika-gps.com/
