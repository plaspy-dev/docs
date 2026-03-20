---
slug: /lk_gps/lk720/protocol
id: lk720-protocol
sidebar_label: Protocol
title: LK-GPS - LK720 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for LK GPS LK720 integration with Plaspy server and connection guidance
keywords:
  - LK GPS LK720
  - LK-GPS LK720 protocol
  - LK720 GPS protocol
  - LK720 communication protocol
  - LK720 tracking protocol
  - Plaspy compatibility
  - Plaspy GPS tracker
  - vehicle tracking LK720
  - Cat M GPS tracker
  - fleet management LK720
---

# LK-GPS - LK720 Protocol

This page provides the public protocol context and practical connection guidance for using the LK-GPS LK720 with the Plaspy platform. It explains how the device reports location, telemetry, and events to Plaspy and what to consider when configuring the tracker to send data to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and the manufacturer's implementation, so this page focuses on public, non sensitive context and integration considerations rather than internal packet formats.

## Protocol Overview

The LK720 uses a cellular link to transmit GNSS position, status, and event reports to a remote server. The protocol implemented by the device governs how those reports are formatted, how events such as shock alarms or geofence breaches are represented, and how remote commands like relay control are delivered. Understanding the protocol at a conceptual level helps ensure reliable integration with Plaspy without exposing proprietary implementation details.

- Enables GNSS and telemetry data to be sent from the device to the Plaspy server for real time visibility.
- Carries event notifications such as shock or vibration alarms, geofence triggers, and input voltage or tamper alerts.
- Allows remote control commands to be issued where supported, for example relay activation for immobilization.
- Provides device identification and status reporting so Plaspy can associate incoming messages with the correct asset record.
- Supports fallback location methods such as base station positioning when GNSS is limited, improving continuity of location data.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a unified endpoint and uses that incoming data stream to determine the device protocol automatically. In most cases, when the LK720 is configured to report to the Plaspy endpoint, no manual protocol selection inside Plaspy is required. The platform is designed to accept reports from many device types while keeping the connection settings consistent for operators.

- Plaspy server domain is d.plaspy.com which devices may be configured to reach.
- Plaspy server IP is 54.85.159.138 for configurations that require an IP address.
- The port used for device reporting is 8888 and is the same port for all supported devices in Plaspy.
- Devices may be configured to use either UDP or TCP on port 8888 depending on the device firmware and settings.
- When a properly configured LK720 reports to the Plaspy endpoint, the platform detects and interprets the incoming protocol without user selection.

## Transport and Connection Context

The LK720 supports cellular transport over Cat M and may be set to communicate with a remote server using either UDP or TCP. For integration with Plaspy the important connection details are the server host and the shared port that Plaspy uses for all devices. These connection choices primarily affect reliability, delivery behavior, and how the device is configured on the manufacturer side.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and site requirements.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 where DNS resolution is not available.
- All devices in Plaspy use the same port which simplifies device configuration and firewall rules.
- Transport selection can influence retransmission and delivery guarantees so choose UDP or TCP consistent with the device firmware options.
- Ensure the LK720 firmware and configuration match the chosen transport and destination so reports arrive at Plaspy reliably.

## Protocol Compatibility Notes

- Firmware versions can change message content and behavior; confirm which firmware revision is installed on the LK720 when validating compatibility.
- Hardware revisions or SKUs may implement different cellular bands or features that affect connectivity and available telemetry.
- Manufacturer configuration options such as transport type, reporting intervals, and event thresholds influence what Plaspy receives and how often.
- Relay and immobilizer functionality may require specific command flows or permissions that vary by device firmware and manufacturer settings.
- Always validate device endpoint settings against Plaspy connection requirements to ensure the device reports to d.plaspy.com or 54.85.159.138 on port 8888.
- When in doubt consult the LK-GPS documentation for LK720 configuration notes and firmware specific behavior.

## Why Protocol Understanding Matters

Knowing the public aspects of the LK720 communication protocol helps technical teams configure the tracker correctly, troubleshoot connectivity issues, and map device events to actionable items in Plaspy. Understanding the relationship between transport, device configuration, and server behavior reduces integration time and improves operational reliability.

- Helps ensure correct transport selection and destination settings so data reaches Plaspy without interruption.
- Improves troubleshooting by narrowing whether an issue is network, transport, or device configuration related.
- Guides expectations for which events and telemetry are available based on firmware and manufacturer options.
- Enables better planning for firewall and network rules since Plaspy uses a consistent server and port.
- Supports operational readiness when deploying features like relay control or geofence alerts in production.

## Why Use Plaspy with This Protocol

Using Plaspy with the LK-GPS LK720 provides a practical and consistent way to collect GNSS positions, telemetry, and event notifications from compact Cat M trackers. Plaspy aggregates that data into dashboards, alerting workflows, and historical reports that help fleet managers and vehicle owners maintain situational awareness and respond to incidents quickly.

If you want to learn more about Plaspy and how the platform handles LK720 reporting and device data, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions verify current information with the manufacturer at https://www.lk-gps.com. Protocol support, firmware behavior, and implementation details can change over time so checking the official manufacturer resources ensures you have the most current guidance.
