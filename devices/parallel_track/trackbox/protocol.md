---
slug: /parallel_track/trackbox/protocol
id: trackbox-protocol
sidebar_label: Protocol
title: Parallel track - Trackbox Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the Parallel Track Trackbox and how it communicates with Plaspy for reliable GPS tracking
keywords:
  - Parallel track Trackbox protocol
  - Trackbox GPS tracker
  - Parallel track Trackbox Plaspy
  - Trackbox communication protocol
  - Trackbox tracking protocol
  - GPS tracker integration Plaspy
  - vehicle tracking Trackbox
  - asset tracking Trackbox
  - Trackbox data reporting
  - Trackbox firmware compatibility
---

# Parallel track - Trackbox Protocol

This page describes the public protocol context for using the Parallel Track Trackbox with Plaspy. It focuses on how the Trackbox reports location and status to a web service and how that communication is interpreted by Plaspy, without exposing sensitive implementation details.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol once the device is correctly pointed to the Plaspy endpoint. Exact protocol behavior for the Trackbox can vary by firmware version, hardware revision, and manufacturer implementation, so the descriptions here are general and intended to help with setup and troubleshooting.

## Protocol Overview

The Trackbox communicates location and status information to a configured remote service. That communication is governed by the device reporting protocol, which defines how the tracker identifies itself and delivers usable position data to a server such as Plaspy.

- Enables the Trackbox to deliver periodic location updates and on‑demand reports to a remote server.
- Carries identity and telemetry so Plaspy can associate messages with a specific device and present usable location data.
- May use standard web transport methods supported by the device for easy integration with web services.
- Allows mapping and time stamped tracking data to be consumed by Plaspy for visualization and historical reporting.
- Can coexist with alternative reporting paths such as SMS where the hardware or configuration supports it.

## How Plaspy Detects the Protocol

Plaspy is designed to receive data from many tracker models and automatically detect the device protocol once packets reach the platform. This reduces the need for manual protocol selection when the device is correctly configured to report to Plaspy.

- Plaspy provides a single, shared server endpoint for device reporting to simplify device configuration.
- When the Trackbox reports to the Plaspy endpoint, the platform matches incoming data to a supported protocol and processes it automatically.
- In most cases you do not need to choose a protocol manually inside Plaspy if the Trackbox is set to report to the Plaspy endpoint.
- Automatic detection relies on the incoming message format and device identity data that the Trackbox includes in its reports.
- If detection issues occur, vendor documentation and firmware details can help resolve misconfiguration on the device side.

## Transport and Connection Context

The Trackbox can send data over the cellular network to a configured server address. For compatibility with Plaspy, devices may be pointed to the Plaspy server domain or its public IP and use the platform port that Plaspy exposes for device communication.

- Plaspy accepts tracker connections at the domain d.plaspy.com and at the IP address 54.85.159.138.
- All Plaspy devices use the same port value for reporting, which simplifies configuration across models.
- The Trackbox may be configured to use either UDP or TCP transport to send its reports depending on device support and configuration.
- Devices should be configured to report to the Plaspy server on the shared port so incoming data is routed to the platform.
- Transport selection (UDP vs TCP) can affect delivery characteristics such as reliability and latency depending on network conditions.

## Protocol Compatibility Notes

- Firmware versions can change the exact fields or timing the Trackbox sends; verify the device firmware level when diagnosing compatibility issues.
- Different hardware revisions or production runs may have slight reporting variations that affect parsing on the server side.
- Manufacturer configuration options (for example reporting interval, transport selection, or data format modes) determine how the device behaves on the network.
- SMS reporting and direct POST reporting may both be supported by the Trackbox; choose the appropriate path for your deployment and verify Plaspy support for that path.
- Always confirm the configured server address and transport match Plaspy settings to ensure automatic detection and correct data ingestion.
- When in doubt, consult Parallel Track documentation for firmware specific notes before changing device settings.

## Why Protocol Understanding Matters

Knowing how the Trackbox communicates helps ensure reliable tracking, faster troubleshooting, and smoother long term operation with Plaspy. Understanding the reporting context reduces setup time and makes it easier to interpret device behavior.

- Ensures device is pointed to the correct Plaspy endpoint and transport so reports arrive reliably.
- Helps identify configuration mismatches such as wrong transport, server address, or reporting interval.
- Aids in debugging intermittent reporting by distinguishing network issues from device configuration or firmware differences.
- Supports planning for integration needs like mapping refresh intervals and historical data retention in Plaspy.
- Makes it easier to collaborate with the device manufacturer when firmware specific behavior needs clarification.

## Why Use Plaspy with This Protocol

Using the Trackbox with Plaspy gives organizations a way to consolidate location reports from this device model into a single platform for visibility, monitoring, and operational oversight. Plaspy’s automatic protocol detection and shared connection settings reduce configuration complexity so fleets and asset managers can focus on operations rather than per‑device integration details.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at http://www.paralleltrack.co.uk.
