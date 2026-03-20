---
slug: /dct/syrus_3g/protocol
id: syrus_3g-protocol
sidebar_label: Protocol
title: DCT - Syrus 3G+ Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for DCT Syrus 3G+ showing how the device communicates with Plaspy and what to check for reliable integration
keywords:
  - DCT Syrus 3G+ protocol
  - DCT Syrus 3G+ GPS protocol
  - Syrus 3G+ Plaspy compatibility
  - Syrus 3G+ tracking protocol
  - Syrus 3G+ communication protocol
  - Plaspy device protocol
  - Plaspy GPS trackers
  - fleet tracking Syrus 3G+
  - Syrus IoT integration
  - Pegasus Gateway Syrus
---

# DCT - Syrus 3G+ Protocol

This page describes the public protocol context for using the DCT Syrus 3G+ tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in broadly useful, non sensitive terms so fleet managers, integrators, and developers can understand connection and compatibility considerations without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so consider this page an operational overview and consult manufacturer documentation for firmware specific details.

## Protocol Overview

The communication protocol is the set of rules and transport choices the Syrus 3G+ uses to send location, telemetry, and event data to a cloud endpoint such as Plaspy. In practice this means the tracker packages telemetry produced by its GNSS receiver, sensors, and counters and sends those messages over a network connection where Plaspy ingests and maps the data into usable telemetry.

- Enables device identification and regular reporting of GPS position and accessory sensor values to Plaspy
- Carries event driven messages such as ignition changes, counters, and configured alerts for route monitoring
- Provides a transportable representation of telemetry that Plaspy maps into live maps, alerts, and reports
- Works alongside the Syrus Pegasus Gateway and REST API readiness to simplify integration and data ingestion
- Allows device configuration and remote management workflows to be coordinated through API and gateway layers

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and port and applies automatic protocol detection to ingest device data without forcing users to manually choose a protocol in most cases. If the Syrus 3G+ is configured to report to the Plaspy endpoint, Plaspy will attempt to recognize the device traffic and process telemetry accordingly.

- Plaspy listens on a common server endpoint so devices report to the same destination
- The Plaspy server domain for device reporting is d.plaspy.com
- The Plaspy server IP address is 54.85.159.138
- Plaspy uses port 8888 for device communications and all devices supported by Plaspy use this same port
- Users typically do not need to select a protocol inside Plaspy when the tracker is configured to report to the Plaspy endpoint
- Automatic detection reduces manual configuration while still allowing device specific behaviors to be handled based on the reported traffic

## Transport and Connection Context

Connection context describes how the Syrus 3G+ opens a network channel to reach Plaspy and which address and port to target. The device can be configured to use either UDP or TCP depending on the installation and device firmware, and it may be pointed at the Plaspy domain or the Plaspy IP address for reporting.

- Devices may be configured to use UDP or TCP for reporting depending on firmware and setup choices
- Plaspy accepts device reports on port 8888 for both UDP and TCP transport
- Devices can be configured to point to d.plaspy.com or to the IP 54.85.159.138 when reporting
- Plaspy uses the same port 8888 across all supported devices to simplify deployments
- Confirm transport selection and any network firewall rules to allow outbound UDP or TCP to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware versions can change message timing, supported transports, and optional telemetry fields so always note the device firmware level when validating compatibility
- Hardware revisions or model variants may expose different accessory ports and counters that change the payload content seen by Plaspy
- Manufacturer configuration options may allow reporting via REST gateway, Pegasus Gateway, or direct socket reporting; confirm which method is active for a given deployment
- Transport selection of UDP versus TCP can affect delivery semantics and should be chosen according to network reliability and installation requirements
- When integrating multiple devices, point each device to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 and use port 8888 to ensure consistent ingestion
- Validate device behavior against the Syrus 3G+ datasheet and any release notes from the manufacturer for device specific nuances

## Why Protocol Understanding Matters

Knowing the communication protocol and connection context helps ensure a stable, reliable integration between the Syrus 3G+ and Plaspy, and it shortens time spent troubleshooting wiring, configuration, or network issues. Clear protocol awareness helps teams map device outputs to Plaspy data models and maintain consistent fleet telemetry over time.

- Speeds up initial setup by matching device reporting settings to Plaspy endpoints and supported transports
- Reduces support time by clarifying whether issues are network, transport, or firmware related
- Improves data quality by enabling correct mapping of sensor inputs and counters into Plaspy dashboards
- Helps plan for firmware updates and hardware revisions that could change telemetry or transport behavior
- Assists in designing firewall and network rules to allow outbound UDP or TCP to d.plaspy.com on port 8888

## Why Use Plaspy with This Protocol

Using the DCT Syrus 3G+ together with Plaspy gives organizations real time visibility into vehicles and assets while leveraging the device s multiport telemetry and low power features for long term deployments. Plaspy ingests the Syrus telemetry so fleets can use live maps, alerts, historical replay, and automation rules to improve operations, security, and maintenance workflows.

If you want to learn more about Plaspy features, deployments, and device compatibility please visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer documentation verify current information at the official DCT website https://www.digitalcomtech.com/ since implementations and firmware may change over time.
