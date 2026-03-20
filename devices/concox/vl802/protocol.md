---
slug: /concox/vl802/protocol
id: vl802-protocol
sidebar_label: Protocol
title: Concox - VL802 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Concox VL802 tracker with Plaspy compatible connection settings and transport guidance
keywords:
  - Concox VL802 protocol
  - Concox VL802 GPS tracker
  - VL802 protocol Plaspy
  - Concox VL802 communication
  - VL802 tracking protocol
  - Concox GPS tracker protocol
  - VL802 telemetry
  - vehicle tracking VL802
  - fleet management Concox VL802
  - Plaspy device compatibility
---

# Concox - VL802 Protocol

This page describes the public communication context for using the Concox VL802 GPS tracker with Plaspy. It summarizes how the VL802 typically reports location and telemetry to Plaspy, what connection settings are used, and the role of the tracker reporting protocol in a successful integration. The information here focuses on protocol-level behavior that is safe to publish and useful for integrators and fleet teams.

Plaspy uses shared endpoint settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior on the VL802 can vary by firmware version, hardware revision, and manufacturer configuration, so treat this page as high level guidance rather than a firmware specific reference.

## Protocol Overview

The tracker communication protocol is the set of rules the VL802 uses to transmit GNSS coordinates, telemetry, and event notifications to a remote server. In general terms the protocol enables the device to identify itself to the server, deliver time stamped location and sensor data, and convey status or event messages that Plaspy can convert into alerts and reports.

- Allows the VL802 to send periodic or event driven location and telemetry updates to Plaspy.
- Carries device identity and status so Plaspy can associate incoming messages with the correct vehicle record.
- Delivers alarm and I/O events such as ACC, SOS, and relay status in a format Plaspy can ingest as actionable events.
- Transports analog and sensor telemetry so values such as fuel level or external sensors appear in Plaspy dashboards.
- Supports two way command and control flows initiated by Plaspy for remote actions when the device firmware and configuration allow it.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared server endpoint and automatically detects the tracker protocol used by the VL802 when messages arrive. Because Plaspy handles protocol detection server side, most users do not need to select a protocol in the platform if the tracker is configured to report to the correct Plaspy endpoint.

- Devices should be configured to report to the Plaspy server address d.plaspy.com or the corresponding server IP 54.85.159.138.
- Plaspy listens on a single port for all devices and automatically determines the tracker protocol from the incoming traffic.
- When a correctly configured VL802 begins reporting to Plaspy, the platform will match the device identity and process location and telemetry.
- Manual protocol selection in Plaspy is rarely required provided the device is sending to the Plaspy endpoint and using a supported transport.
- If automatic detection does not occur, checking device reporting settings and firmware compatibility is the recommended next step.

## Transport and Connection Context

The VL802 can be configured to use either UDP or TCP depending on device firmware and installer preferences. Plaspy accepts both transport modes on the shared port so installers can use the transport that best fits their network and reliability needs.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port for reporting which simplifies device configuration across different tracker models.
- The device may be configured using UDP or TCP on port 8888; choose the transport supported and recommended by the device firmware and network environment.
- Using TCP can improve delivery reliability in lossy networks while UDP can reduce overhead where packet loss is low.
- Ensure APN and SIM data plan allow outbound connections to the Plaspy endpoint and that any carrier or firewall rules permit the selected transport and port.

## Protocol Compatibility Notes

- Firmware versions can change protocol framing, available fields, or optional telemetry; always verify with the vendor release notes.
- Hardware revisions and regional variants of the VL802 may expose different feature sets or I/O mappings that affect what telemetry appears in Plaspy.
- Manufacturer configuration options (reporting intervals, event thresholds, auxiliary sensor mapping) influence the volume and type of data sent to Plaspy.
- Transport choice (UDP vs TCP) is configurable on many VL802 installations and can affect timing and reliability of reports.
- Validate compatibility by confirming the device is pointed at d.plaspy.com or 54.85.159.138 and is using the Plaspy listening port.
- Field testing after configuration is recommended to ensure expected events and telemetry are received by Plaspy.

## Why Protocol Understanding Matters

A basic understanding of the VL802 communication protocol helps installers, integrators, and fleet operators set up devices correctly, diagnose intermittent issues, and keep long term operations reliable in Plaspy. Knowing where configuration lives and what the device is expected to report reduces troubleshooting time and improves data quality.

- Faster setup by confirming the device reports to d.plaspy.com or 54.85.159.138 on the shared Plaspy port.
- Clearer troubleshooting when events or telemetry do not appear as expected in Plaspy.
- Better decisions about transport and reporting intervals to balance network usage and data timeliness.
- Easier validation of firmware updates that may change available telemetry or event behavior.
- More reliable anti theft and immobilizer workflows by ensuring commands and status messages are supported by the current device firmware.

## Why Use Plaspy with This Protocol

Using the VL802 with Plaspy gives fleet operators a robust, enterprise oriented telematics solution that leverages the VL802 hardware strengths while simplifying server side handling. Plaspy ingests GNSS location, I/O events, and analog telemetry from the VL802 so teams can monitor vehicle location, driver behavior, and sensor data in a single platform.

Plaspy's shared endpoint approach reduces configuration complexity by using the same port for all supported devices and automatically detecting the tracker protocol when the VL802 is pointed to the Plaspy server. To learn more about Plaspy and how it can manage VL802 devices at scale, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware notes, and implementation guidance with the device manufacturer at https://www.iconcox.com/ as protocol support and firmware behavior can change over time.
