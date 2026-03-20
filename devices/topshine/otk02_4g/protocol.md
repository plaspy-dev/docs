---
slug: /topshine/otk02_4g/protocol
id: otk02_4g-protocol
sidebar_label: Protocol
title: TopShine - OTK02-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine OTK02 4G and how it communicates with Plaspy for real time OBD tracking
keywords:
  - TopShine OTK02 4G protocol
  - TopShine GPS tracker protocol
  - OTK02 4G Plaspy compatibility
  - OTK02 4G GPS protocol
  - OTK02 4G tracking protocol
  - Plaspy tracker integration
  - Plaspy device protocol
  - OBD II tracker protocol
  - vehicle tracking protocol
  - fleet management GPS protocol
---

# TopShine - OTK02-4G Protocol

This page covers the public protocol context for using the TopShine OTK02-4G tracker with Plaspy. It describes how the device generally communicates telemetry and OBD data to Plaspy, what connection settings are used by the platform, and what to consider when integrating the device into a fleet or monitoring workflow. The content is focused on public, non sensitive protocol context and is grounded in the device description for the OTK02-4G plug and play OBD II tracker.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so while Plaspy provides a common server endpoint and automatic detection, users should expect implementation differences between firmware builds and model revisions.

## Protocol Overview

At a high level, the tracker reporting protocol is the set of messages and behaviors the OTK02-4G uses to identify itself, report GNSS positions, and deliver OBD sourced telemetry to a remote server. For Plaspy compatibility the important aspects are reliable delivery of position and event data, identifiable device headers or IDs, and the ability to resume and sync stored records after temporary network loss.

- Enables real time GNSS position reports and OBD telemetry such as mileage and engine status to be delivered to Plaspy.
- Carries event notifications for alarms like geo fencing, overspeed, towing, and battery low to trigger alerts and logs.
- Supports offline logging and later synchronization so stored records are uploaded to Plaspy when connectivity resumes.
- Provides identifying information so Plaspy can associate inbound messages with the correct device account and dashboard.
- Allows the device to report via cellular data or SMS as supported by the device and configured by the user.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections on a single shared endpoint and port and automatically detects the tracker protocol for most compatible devices. This means that if an OTK02-4G is configured to report to the Plaspy endpoint using the common settings, manual protocol selection in the platform is typically unnecessary for normal operation.

- Plaspy accepts device reports at the domain d.plaspy.com and the public server IP 54.85.159.138.
- The platform listens on port 8888 and uses the same port for all supported devices, simplifying device configuration.
- Devices can be configured to use UDP or TCP depending on device capabilities and network conditions; Plaspy will accept either transport on the shared port.
- Automatic detection matches incoming messages to known device profiles so the user generally does not need to choose a protocol in the Plaspy interface.
- If a device is not appearing as expected, validating server address, transport, and device firmware is the first troubleshooting step.

## Transport and Connection Context

The OTK02-4G may use UDP or TCP for data reporting depending on device configuration and network conditions. Plaspy provides a single reachable endpoint and port that simplifies deployment across fleets and single units.

- Devices may point to the domain d.plaspy.com or the server IP 54.85.159.138 when configuring the reporting address.
- Plaspy listens on port 8888 for both UDP and TCP; all devices in Plaspy use this same port.
- The OTK02-4G supports cellular data reporting and can fall back to SMS reporting as described in the device documentation.
- Transport choice can affect delivery characteristics but Plaspy accepts both UDP and TCP on the shared port to accommodate device capabilities.
- Verify network firewalls and APN settings allow outbound connections to d.plaspy.com on the configured transport and port.

## Protocol Compatibility Notes

- Firmware differences can change the exact message timing, fields, and optional features available from the device.
- Hardware revisions or regional firmware builds may alter supported transports, SMS fallback, or OBD telemetry coverage.
- Some features such as specific OBD PIDs or diagnostic values depend on vehicle OBD support and the tracker firmware interpretation.
- Transport selection (UDP vs TCP) can impact message reliability and should be chosen based on device behavior and network conditions.
- Always validate the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure reachability.
- Consult the device installation and firmware notes for any model specific reporting options before wide deployment.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy helps ensure successful setup, predictable behavior, and faster troubleshooting when devices do not appear as expected. A clear view of the reporting pathway reduces downtime and improves the accuracy of event and historical data used for operational decisions.

- Helps validate that the device is correctly configured to reach the Plaspy endpoint and port.
- Makes it easier to interpret missing data scenarios such as offline logging conditions or SMS fallbacks.
- Supports choice of transport and network configuration for optimal delivery and latency.
- Aids in mapping OBD telemetry fields and events to Plaspy dashboards and reports.
- Enables faster collaboration with manufacturer support when firmware or behavior discrepancies arise.

## Why Use Plaspy with This Protocol

Using the TopShine OTK02-4G with Plaspy provides a low friction way to add real time location, OBD diagnostics, and event alerting to fleet and vehicle monitoring workflows. The plug and play OBD II form factor and built in offline logger mean rapid deployment and more resilient historical tracking for operations that need continuous visibility.

Plaspy offers a single, shared endpoint and simple connection requirements so the OTK02-4G can be quickly pointed to the platform. Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Note that protocol support, firmware behavior, and manufacturer implementation details can change over time; please verify the latest device specific protocol and firmware information on the manufacturer site https://www.gztopshine.com/.
