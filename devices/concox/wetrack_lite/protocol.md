---
slug: /concox/wetrack_lite/protocol
id: wetrack_lite-protocol
sidebar_label: Protocol
title: Concox - Wetrack Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Concox Wetrack Lite integration with Plaspy server connectivity and compatibility guidance
keywords:
  - Concox Wetrack Lite protocol
  - Concox Wetrack Lite GPS protocol
  - Wetrack Lite communication protocol
  - Wetrack Lite tracker Plaspy compatibility
  - Concox GPS tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol
  - fleet management tracker protocol
  - GPS tracker integration Plaspy
  - tracker protocol documentation
---

# Concox - Wetrack Lite Protocol

This page provides public protocol context for using the Concox Wetrack Lite tracker with Plaspy. It explains how the device communicates with Plaspy at a high level, what to expect during setup, and which connection settings are shared across supported devices. The focus is on protocol and transport context rather than manufacturer proprietary details.

Plaspy uses shared connection settings across its supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact packet behavior and capabilities can vary by firmware version, hardware revision, and manufacturer implementation, so consider this a protocol orientation rather than a full replacement for vendor documentation.

## Protocol Overview

The tracker communication protocol is the device's public method for reporting GNSS locations, event alerts, and basic telemetry to a remote server such as Plaspy. For Wetrack Lite, the protocol enables the tracker to identify itself to the platform, transmit location and status updates, and queue data when network connectivity is interrupted.

- Carries GNSS derived positions along with vehicle telemetry such as ACC ignition status and accelerometer events
- Reports event driven alerts including movement, overspeed, geo fence changes, vibration, and power events
- Supports buffering on the device to preserve trip history during temporary cellular outages so Plaspy receives complete data when connectivity returns
- Provides status information required by Plaspy to map telemetry to live tracking, notifications, and historical reports
- Allows the device to be configured to report to a designated Plaspy endpoint for automated ingestion

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared endpoint and automatically determines the tracker protocol when a device is configured to report to the platform. In most deployments the user does not need to manually select a protocol inside Plaspy if the device is correctly pointed to the Plaspy address and port.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting
- Plaspy listens on port 8888 for tracker connections
- Plaspy automatically detects the tracker protocol once the device sends identifying telemetry to the platform
- Devices typically need only be pointed to the Plaspy endpoint with the correct transport and APN settings for automatic protocol detection
- All devices in Plaspy use the same port, which simplifies device configuration across mixed fleets

## Transport and Connection Context

Understanding the transport layer is important for configuring the tracker to reach Plaspy reliably. Wetrack Lite may be set up to use different transport modes depending on device firmware and installer preferences. The following points summarize the common transport and connection details relevant to Plaspy integration.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138
- All devices in Plaspy use the same port which reduces per device port configuration overhead
- Choose UDP for lower overhead and potentially faster delivery, or TCP when ordered delivery and connection persistence are preferred, subject to device capabilities
- Ensure APN and cellular settings on the device allow outbound connections to the Plaspy endpoint and port

## Protocol Compatibility Notes

- Firmware versions may change packet behavior and supported features; validate behavior against the device firmware release notes
- Hardware revisions and manufacturing changes can introduce subtle differences in supported transports or telemetry fields
- Manufacturer specific configuration commands and parameter names can vary; always confirm the correct command set for your firmware
- Transport selection (UDP vs TCP) and modem behavior can impact delivery and buffering strategy
- Device must be configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy to ingest data
- Verify compatibility and recommended settings with the official Concox documentation when in doubt

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps installers and fleet administrators achieve reliable reporting, accurate mapping, and faster troubleshooting when integrating Wetrack Lite with Plaspy. Knowing what the protocol delivers and how the device connects reduces configuration errors and improves operational uptime.

- Speeds up initial deployment by clarifying what fields the tracker reports and how often updates occur
- Helps troubleshoot connectivity issues by separating transport problems from protocol or firmware behavior
- Improves event handling and alerting accuracy by aligning device settings with Plaspy rules and thresholds
- Ensures buffering and retransmission behavior are matched to operational expectations for short network outages
- Reduces installation iterations by confirming APN, transport, and endpoint settings before field deployment

## Why Use Plaspy with This Protocol

Using Wetrack Lite with Plaspy gives organizations practical visibility into vehicle location and status while supporting discreet installations and a wide operating voltage range. Plaspy normalizes incoming telemetry from the device into live maps, event alerts, and historical reports so fleets and rental operators can act on accurate, timely information.

If you want to learn more about Plaspy and how it integrates with devices like the Concox Wetrack Lite, visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware notes, and implementation details, please verify information with the manufacturer at https://www.iconcox.com/ as protocol support and firmware behavior can change over time.
