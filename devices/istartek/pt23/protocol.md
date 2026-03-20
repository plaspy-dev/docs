---
slug: /istartek/pt23/protocol
id: pt23-protocol
sidebar_label: Protocol
title: iStartek - PT23 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the iStartek PT23 GPS tracker and how it communicates with Plaspy for reliable real time monitoring
keywords:
  - iStartek PT23 protocol
  - PT23 GPS tracker
  - iStartek Plaspy compatibility
  - PT23 communication protocol
  - PT23 tracking protocol
  - GPS tracker protocol guide
  - child safety GPS tracker
  - Plaspy device integration
  - Plaspy protocol detection
  - wearable GPS tracker
---

# iStartek - PT23 Protocol

This page summarizes the public protocol context for using the iStartek PT23 kids watch GPS tracker with the Plaspy platform. It describes how the device reports location and status to Plaspy and what to expect during setup and ongoing operation without exposing private or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the PT23 can vary by firmware version, hardware revision, and manufacturer implementation, so use this page as a protocol overview and verify device specific details with iStartek documentation when needed.

## Protocol Overview

The PT23 reporting protocol enables the device to deliver location, telemetry, alerts, and event messages so Plaspy can present live maps, historical routes, and safety notifications. In practical terms the protocol defines how the watch identifies itself, how reporting intervals and alarm events are transmitted, and how Plaspy receives that information for display and automation.

- Carries position fixes and complementary telemetry such as battery level and reporting mode for Plaspy to process.
- Transmits event messages like SOS triggers, geo fence breaches, and two way voice session requests in a form Plaspy can surface as alerts.
- Supports configurable reporting by time, distance, and mileage that determines the frequency and content of messages sent to the server.
- Acts as the bridge between device hardware features and Plaspy dashboards, turning raw device messages into actionable monitoring data.
- May include fallback location sources such as Wi Fi and LBS to supplement GNSS for broader coverage.

## How Plaspy Detects the Protocol

Plaspy receives inbound messages on a shared endpoint and port and uses that connection to identify the tracker reporting format automatically. In most deployments the device only needs to be pointed at the Plaspy endpoint so Plaspy can handle detection and ingestion without manual protocol selection.

- Plaspy listens on the common server endpoint d.plaspy.com and on the numeric IP 54.85.159.138 for device traffic.
- All devices in Plaspy use the same port so a PT23 configured to report to the Plaspy endpoint will use port 8888.
- Plaspy can accept reports sent to the Plaspy endpoint over the supported transport, and the platform will detect the tracker protocol automatically.
- Users typically do not need to choose a specific protocol inside Plaspy if the PT23 is configured to report to the Plaspy address and port.
- Proper device configuration and current firmware improve the likelihood of immediate automatic detection and reliable reporting.

## Transport and Connection Context

The PT23 supports multiple transport options for sending messages to servers, and the connection context determines how the device reaches Plaspy. Understanding transport options helps verify network and SIM settings during setup.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration preferences.
- Devices can be set to report to the Plaspy domain name d.plaspy.com or directly to the numeric server endpoint 54.85.159.138.
- Plaspy uses the same port for all supported devices so port 8888 is the standard inbound port for tracker data.
- Transport selection can affect message delivery characteristics such as latency and reliability depending on mobile network behavior.
- SMS reporting is generally supported as an alternative in the PT23 for environments where packet data is restricted, but TCP or UDP to the Plaspy endpoint is the primary method for real time dashboards.

## Protocol Compatibility Notes

- Firmware variations between PT23 units can change message content, supported fields, and behavior; check the device firmware version when troubleshooting.
- Hardware revisions or regional model differences may alter available transports or GNSS performance and should be validated against iStartek documentation.
- Selecting TCP versus UDP on the device may improve reliability or reduce overhead depending on network conditions and operator support.
- Manufacturer server forwarding and local vendor configurations may affect whether the device reports directly to Plaspy or via intermediary servers.
- Always confirm that the PT23 is pointed at d.plaspy.com or 54.85.159.138 on port 8888 for direct Plaspy ingestion.
- Validate geo fence and SOS behavior after configuration since event reporting can be influenced by device settings and firmware.

## Why Protocol Understanding Matters

Knowing how the PT23 communicates at a protocol level helps ensure reliable tracking, timely alerts, and simpler troubleshooting when integrating with Plaspy. A clear view of transport and message behavior reduces configuration errors and shortens the time to a stable deployment.

- Helps verify that the device is correctly targeted at the Plaspy endpoint and port so messages reach the platform.
- Guides transport selection between UDP and TCP to suit network reliability and performance needs.
- Enables quick identification of issues related to firmware differences or reporting configuration.
- Supports meaningful diagnostics when event messages such as SOS or geo fence alerts are not appearing as expected.
- Improves confidence in historical route retention and telemetry reporting when message content and frequency are understood.

## Why Use Plaspy with This Protocol

Using the PT23 with Plaspy provides a practical way to convert the watch's multi mode positioning, SOS, and voice features into real time visibility, historical playback, and configurable alerts for parents, schools, and caregivers. Plaspy ingests the device reports from the PT23 and presents them in dashboards and workflows that simplify monitoring without requiring deep protocol management by end users.

If you want to learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and implementation specifics, please verify information with the manufacturer at https://istartek.com/ as protocol support and firmware behavior can change over time.
