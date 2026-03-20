---
slug: /queclink/gv350mg/protocol
id: gv350mg-protocol
sidebar_label: Protocol
title: QuecLink - GV350MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GV350MG integration with Plaspy covering connection settings and compatibility considerations
keywords:
  - QuecLink GV350MG protocol
  - QuecLink GV350MG GPS protocol
  - QuecLink GV350MG protocol for Plaspy
  - QuecLink GV350MG communication protocol
  - GV350MG tracking protocol
  - GV350MG telematics integration
  - Plaspy device compatibility
  - fleet tracking protocol guide
  - LTE Cat M1 NB1 tracker protocol
  - CAN bus telemetry protocol
---

# QuecLink - GV350MG Protocol

This page provides public protocol context for using the QuecLink GV350MG tracker with Plaspy. It explains how the device communicates with Plaspy at a high level, what connection settings are commonly used, and what to expect during integration without exposing private implementation details. The focus is on practical information that helps operators and integrators understand the communication relationship between the GV350MG and Plaspy.

The GV350MG is a compact LTE Advanced vehicle tracker built for fleet management, cold chain logistics, and transportation monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision, and the manufacturer's implementation choices. This page outlines the public connection context and compatibility considerations while encouraging verification with the official QuecLink documentation for firmware specific details.

## Protocol Overview

At a high level, the GV350MG communication protocol is the method that allows the device to identify itself, report GNSS position, deliver CAN bus and sensor telemetry, and receive remote control or configuration instructions when supported. With Plaspy acting as the server endpoint, the protocol enables structured delivery of telemetry so the platform can present real-time location, alerts, and historical reports.

- The protocol carries GNSS fixes, timestamps, speed, heading, and vehicle telemetry such as CAN parameters and digital input events.
- It includes mechanisms for the device to identify itself so Plaspy can correlate incoming messages to the correct vehicle record.
- Reporting behavior (intervals, event triggers, and buffering) is governed by the device firmware and configuration, which the protocol transports to Plaspy.
- The protocol enables both live telemetry and stored message upload when connectivity is restored, supporting reliable fleet tracking.
- Telemetry sent using the tracker protocol is interpreted by Plaspy to generate alerts, geo-fence events, and telemetry dashboards.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol used by a device. In most cases you do not need to select a protocol manually in Plaspy when the GV350MG is configured to report to the Plaspy endpoint, because the platform recognizes the device format and maps incoming telemetry to the correct vehicle.

- Plaspy listens on a single port for all supported trackers and uses automated detection to identify incoming protocol formats.
- Devices configured to report to d.plaspy.com or the Plaspy server IP will be processed by the shared Plaspy endpoint.
- When the GV350MG is correctly pointed at the Plaspy endpoint, typical steps such as device identification and telemetry mapping are performed automatically.
- Manual protocol selection inside Plaspy is rarely necessary if the device is reporting properly to the Plaspy address and port.
- If a tracker does not appear, common checks include verifying device network settings, APN, and that the device is reporting to the correct Plaspy host and port.

## Transport and Connection Context

The GV350MG supports multiple transport options for delivering telemetry and can be configured to use TCP, UDP, or alternative transports depending on deployment requirements. For Plaspy integration, devices may be configured to report to the Plaspy domain or its public IP using the shared Plaspy port.

- The device may be configured to use UDP or TCP on port 8888 when sending data to Plaspy.
- Plaspy’s public server endpoint for device reporting is d.plaspy.com and it is also reachable via the public IP 54.85.159.138 on the shared port.
- All devices that report to Plaspy use the same port for ingestion, simplifying configuration at scale.
- GV350MG also supports alternative transports at the manufacturer level, but TCP and UDP to the Plaspy endpoint are the common integration paths.
- Network considerations such as APN configuration, mobile coverage, and firewall rules are important for ensuring the device can reach d.plaspy.com on the designated port.

## Protocol Compatibility Notes

- GV350MG devices are reported compatible with Plaspy, but behavior can differ across firmware versions and hardware revisions.
- Firmware updates from the manufacturer can change reporting fields, timing, and supported transport options; confirm firmware details before mass deployment.
- The choice of TCP versus UDP can affect delivery semantics and buffering behavior during intermittent connectivity.
- CAN bus parameter availability depends on vehicle configuration and how the GV350MG is wired to vehicle networks.
- Manufacturer configuration guides and release notes are the primary source for firmware specific behaviors and feature availability.
- Always validate a sample device end to end against Plaspy before rolling out large fleets to ensure expected telemetry and events appear correctly.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure successful setup, faster troubleshooting, and predictable long term reliability when the GV350MG is integrated with Plaspy. Clear knowledge of how the device reports and what the platform expects reduces integration time and helps maintain consistent operational monitoring.

- Enables correct device configuration so telemetry reaches Plaspy reliably and appears in dashboards.
- Helps troubleshoot connectivity issues by confirming transport, endpoint, and reporting intervals.
- Supports validation of critical telemetry such as GNSS, CAN parameters, and input/output events for operational workflows.
- Guides decisions about transport selection and network planning for stable message delivery.
- Reduces deployment risk by highlighting firmware and hardware revision impacts on protocol behavior.

## Why Use Plaspy with This Protocol

Using the GV350MG with Plaspy provides organizations a practical path to combine high-sensitivity GNSS, CAN bus telemetry, and resilient cellular connectivity into a centralized fleet management workflow. Plaspy ingests location and vehicle telemetry so teams can monitor fleet status, enforce geo-fences, receive alerts for critical events, and analyze historical routes and behavior.

Plaspy’s unified ingestion endpoint (d.plaspy.com at 54.85.159.138 on port 8888) and automatic protocol detection simplify deployment by removing the need for device-by-device protocol selection. To learn more about Plaspy and how it can help manage GV350MG devices at scale, visit https://www.plaspy.com. For the most current manufacturer details, firmware notes, and device specific protocol documentation, verify information with QuecLink at https://www.queclink.com/ as protocol support and firmware behavior can change over time.
