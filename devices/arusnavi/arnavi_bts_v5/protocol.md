---
slug: /arusnavi/arnavi_bts_v5/protocol
id: arnavi_bts_v5-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi BTS v.5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Arusnavi Arnavi BTS v.5 and how it communicates with Plaspy for gateway forwarded telemetry
keywords:
  - Arusnavi Arnavi BTS v.5 protocol
  - Arnavi BTS v.5 GPS protocol
  - Arnavi BTS v.5 communication protocol
  - Arnavi BTS v.5 tracking protocol
  - Arusnavi BLE sensor Plaspy
  - Arnavi BTS v.5 Plaspy compatibility
  - Arusnavi beacon iBeacon protocol
  - BLE gateway Plaspy integration
  - Cold chain temperature monitoring protocol
  - Arnavi BTS v.5 asset tracking
---

# Arusnavi - Arnavi BTS v.5 Protocol

This page describes the public protocol context for using the Arusnavi Arnavi BTS v.5 with the Plaspy fleet and telemetry platform. The Arnavi BTS v.5 is a compact BLE sensor and iBeacon tag used for temperature monitoring, contact and door detection, and asset identity. When a Plaspy compatible BLE gateway or a Plaspy GPS tracker with gateway functions collects the BTS v.5 advertising and sensor telemetry, that data can be forwarded into Plaspy for live monitoring, alerts and historical reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol reported to the platform. In practice this means gateways and trackers that forward BTS v.5 telemetry should be configured to report to the Plaspy endpoint using the public settings d.plaspy.com or 54.85.159.138 on port 8888. The device forwarding to Plaspy may use UDP or TCP on port 8888 depending on gateway capabilities. Exact protocol behavior and fields visible to Plaspy can vary by device firmware, hardware revision and manufacturer implementation, so review manufacturer documentation for firmware specific details.

## Protocol Overview

The communication protocol for the Arnavi BTS v.5 is centered on BLE advertising and beacon telemetry being collected by a gateway and relayed to a server endpoint. From a Plaspy perspective the protocol role is to make sensor readings and identity information available in a network friendly form that a gateway can forward into Plaspy for mapping to vehicle or asset records.

- BLE advertising and iBeacon identity provide UUID MAJOR and MINOR values that allow Plaspy to associate a tag with an asset or compartment.
- Temperature and contact state telemetry are carried in beacon payloads or sensor advertisements and are forwarded by the gateway as discrete telemetry items.
- The gateway acts as the bridge between local BLE radio traffic and the Plaspy server endpoint so that data becomes available alongside GPS tracking feeds.
- Configurable transmission interval and radio power on the BTS v.5 affect how often Plaspy receives updates and help balance responsiveness against battery life.
- Protocol-level identification allows Plaspy to ingest, normalize and present BLE sensor data without requiring manual packet format selection by the user.

## How Plaspy Detects the Protocol

Plaspy automatically detects and interprets supported tracker and gateway protocols when data is reported to the platform endpoint. For users this reduces manual configuration inside Plaspy once the forwarding gateway or tracker is correctly pointed at the Plaspy endpoint.

- Plaspy receives forwarded telemetry at the public domain d.plaspy.com and the public IP 54.85.159.138 using the platform port 8888.
- The forwarding device may use either UDP or TCP transport on port 8888 depending on its capabilities and configuration.
- Plaspy uses the consistent entry point and port for all supported devices so the same endpoint works across trackers and gateways.
- When a Plaspy compatible gateway forwards Arnavi BTS v.5 BLE data to the Plaspy endpoint, the platform will detect the incoming protocol and map telemetry to assets automatically.
- Typical setup does not require selecting a protocol inside Plaspy as long as the gateway is configured to report to the correct Plaspy endpoint and includes the necessary device identifiers.

## Transport and Connection Context

Understanding the transport context helps ensure gateways and network infrastructure allow reliable delivery of BTS v.5 telemetry into Plaspy. The BTS v.5 itself broadcasts BLE advertising that a gateway receives locally, while the gateway is responsible for network transport to Plaspy.

- Gateways and forwarding trackers should point to d.plaspy.com or the server IP 54.85.159.138 so telemetry arrives at the correct endpoint.
- The network transport used to send data to Plaspy is UDP or TCP on port 8888; the specific transport depends on the gateway implementation.
- All devices that report into Plaspy use the same port 8888 which simplifies firewall and network configuration.
- Ensure outbound access from your gateway network to port 8888 is allowed so Plaspy can receive telemetry without interruption.
- Gateways typically package BLE advertising and sensor data into a network friendly format before sending to Plaspy; confirm the gateway supports forwarding BLE sensor payloads required by your use case.

## Protocol Compatibility Notes

- Firmware versions on the BTS v.5 can change how sensor fields are formatted or which telemetry is included in advertising payloads.
- Hardware revisions and production batches may have subtle differences in radio properties or available configuration parameters.
- Manufacturer side configuration tools and mobile configurator apps can change parameter names and defaults between releases.
- The transport layer chosen by the gateway (UDP or TCP) should match gateway documentation and network policies for reliability and latency.
- Testing in a controlled environment is recommended to validate that your gateway forwards the required BLE fields into Plaspy.
- Always cross check compatibility and recommended configuration with the manufacturer documentation to confirm behavior for your firmware and hardware revision.

## Why Protocol Understanding Matters

A practical understanding of how the Arnavi BTS v.5 communicates through a BLE gateway into Plaspy improves setup success, troubleshooting speed and long term reliability.

- Right size reporting intervals and radio power to balance battery life and update frequency for your operational needs.
- Confirm gateway forwarding and network egress to port 8888 to avoid connectivity gaps between the fleet and Plaspy.
- Properly map beacon UUID MAJOR and MINOR fields so Plaspy accurately associates sensor telemetry to the correct vehicle or asset.
- Faster troubleshooting when you know whether a missing telemetry point is caused by BLE range, gateway forwarding or network transport.
- Plan firmware updates and field testing to avoid unintended changes in telemetry payloads or reporting behavior.

## Why Use Plaspy with This Protocol

Using the Arnavi BTS v.5 with Plaspy is a practical option for organizations that need environmental telemetry, tamper detection and asset identity alongside vehicle location and operational data. When TES v.5 tags are within range of a Plaspy compatible BLE gateway or a vehicle gateway that collects BLE beacons, temperature, contact events and beacon identity can become first class telemetry in Plaspy dashboards and alert rules.

Plaspy brings that sensor telemetry into the same operational view as GPS tracking and other vehicle sensors so teams can correlate temperature excursions, door events and proximity signals with location and route data. To learn more about Plaspy and how it can integrate BLE sensor telemetry into fleet and asset monitoring workflows visit https://www.plaspy.com. For the most current protocol specifics, firmware behavior and device implementation guidance verify details with the manufacturer at https://www.arusnavi.ru since protocol support and firmware features can change over time.
