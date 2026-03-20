---
slug: /topshine/pt20/protocol
id: pt20-protocol
sidebar_label: Protocol
title: TopShine - PT20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine PT20 showing how the device communicates with Plaspy for tracking and integration
keywords:
  - TopShine PT20 protocol
  - TopShine PT20 GPS protocol
  - TopShine PT20 protocol Plaspy
  - PT20 tracking protocol
  - PT20 communication protocol
  - PT20 GPS tracker compatibility
  - TopShine tracker Plaspy integration
  - PT20 fleet tracking
  - PT20 device protocol
  - TopShine PT20 connectivity
---

# TopShine - PT20 Protocol

This page covers the public protocol context for using the TopShine PT20 tracker with the Plaspy platform. It describes how the PT20 typically reports location, alerts, and telemetry to a third party tracking server and what role the device communication protocol plays when integrating the tracker with Plaspy for real time monitoring and historical reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by PT20 firmware version, hardware revision, and manufacturer implementation. The PT20 is a compact 4G tracker with hybrid GPS and LBS positioning, buffered resend for blind spots, and configurable reporting intervals, so practical integration notes below focus on public connection and compatibility considerations rather than manufacturer internal details.

## Protocol Overview

The PT20 device protocol is the set of communications rules the tracker uses to send position, alarm, and telemetry data to a remote tracking server. For Plaspy compatibility this protocol enables the device to identify itself, report usable location and status information, and support the basic features fleet managers expect such as live tracking, alerts, and buffered data resend after connectivity gaps.

- Allows the PT20 to transmit GPS and LBS location reports to a tracking endpoint for real time mapping and history.
- Carries alarm and telemetry flags such as overspeed or motion status that Plaspy can surface as alerts.
- Supports temporary local buffering on the device so stored points are forwarded to the platform after cellular interruption.
- Enables identification of the device so Plaspy can associate incoming messages with the correct asset record.
- Provides the transportable data stream that Plaspy ingests and converts into dashboard updates, reports, and historical tracks.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic on a single, shared ingestion endpoint and can automatically determine the tracker protocol used by a device when the device is configured to report to Plaspy. In typical deployments there is no need for manual protocol selection inside Plaspy once the PT20 is pointing at the Plaspy endpoint and using an allowed transport.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for public device configuration.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol so users usually do not need to choose a protocol in the platform.
- When a PT20 is correctly configured to send to the Plaspy endpoint Plaspy will associate incoming reports with the device account and present location and alerts.
- Proper device identification and correct APN and SIM data plan are necessary for Plaspy to receive reports reliably.

## Transport and Connection Context

Connection context describes how the PT20 reaches Plaspy rather than the exact byte level of its reporting messages. The PT20 supports standard cellular data transports and may be configured to use either of the common transport modes when pointing to the Plaspy endpoint.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices may point to d.plaspy.com or 54.85.159.138 when configuring the server destination for reports.
- All devices in Plaspy use the same port which simplifies server configuration across device fleets.
- Transport choice can affect delivery characteristics such as reliability and retransmission behavior during weak coverage.
- Ensure the device APN and SIM data plan allow outbound connections to the public internet so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences between PT20 units can change available features or minor message behavior; always check the device firmware release notes.
- Hardware revisions or SKU variants may implement peripheral I O or sensor support differently, affecting what data the device can send.
- Manufacturer configuration options can permit either UDP or TCP reporting so confirm transport selection before deployment.
- Buffered resend behavior and maximum historical point depth can vary with firmware and reporting interval settings.
- Validate compatibility against the PT20 official documentation when you require specific behaviors such as alarm types or advanced telemetry.
- Confirm network and SIM plan compatibility with local cellular carriers to avoid connectivity surprises during field use.

## Why Protocol Understanding Matters

Knowing the communication protocol basics for the PT20 helps ensure reliable setup, faster troubleshooting, and smoother long term operation when paired with Plaspy. Understanding what the device sends and how it connects reduces integration friction and improves data quality for operational decision making.

- Helps diagnose common issues such as missing reports, timezone mismatches, or incomplete telemetry.
- Guides correct server and transport configuration so the device consistently reaches the Plaspy ingestion endpoint.
- Informs expected behavior during cellular outages so you can interpret buffered resend events in Plaspy.
- Aids in planning for battery life and reporting interval tradeoffs to meet uptime and data needs.
- Supports clearer communication with the device manufacturer when unexpected behavior appears.

## Why Use Plaspy with This Protocol

Using the PT20 with Plaspy gives organizations an efficient way to turn compact portable trackers into actionable visibility for vehicles and assets. Plaspy ingests live location and alarm reports, places them on maps and timelines, and retains historical tracks so teams can monitor movement, respond to alerts, and audit events without deep protocol configuration on the platform side.

If you want to learn more about Plaspy, visit https://www.plaspy.com for platform details and deployment guidance. For the latest device specific protocol documents, firmware notes, and hardware revisions consult the manufacturer at https://www.gztopshine.com/ since protocol support and firmware behavior can change over time and should be verified against official manufacturer information.
