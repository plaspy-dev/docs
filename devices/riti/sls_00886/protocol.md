---
slug: /riti/sls_00886/protocol
id: sls_00886-protocol
sidebar_label: Protocol
title: Riti - SLS-00886 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for integrating the Riti SLS-00886 GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Riti SLS-00886 protocol
  - Riti SLS-00886 GPS protocol
  - Riti SLS-00886 communication protocol
  - Riti SLS-00886 tracking protocol
  - Riti tracker Plaspy
  - SLS-00886 Plaspy compatibility
  - Riti GPS tracker integration
  - vehicle tracking protocol Riti
  - GPRS GPS tracker protocol
  - Plaspy device protocol
---

# Riti - SLS-00886 Protocol

This page describes the public protocol context for using the Riti SLS-00886 GPS vehicle tracker with Plaspy. It focuses on how the device communicates with a backend service and what to expect when pointing the SLS-00886 to Plaspy for real time location reporting. The guidance here is limited to public and high level protocol context and integration considerations.

Plaspy accepts reports from supported trackers using shared connection settings and automatically detects the tracker protocol. The SLS-00886 can deliver GPS coordinates over GPRS to a backend or send SMS messages as an alternative reporting channel. Exact behavior can vary by firmware revision, hardware version, and manufacturer implementation, so device configuration and manufacturer documentation should be checked when you prepare integration or deployment.

## Protocol Overview

The protocol used by the SLS-00886 is the device mechanism that enables GPS fixes, status, and alarm messages to travel from the tracker to a server such as Plaspy. In practical terms this means the tracker uses mobile data to open a transport session to a Plaspy endpoint and then reports position and telemetry in the device defined reporting format. The tracker also supports SMS reporting to phone numbers as an alternative to GPRS uploads.

- Provides a way for the SLS-00886 to identify itself and deliver GPS coordinates and telemetry to a backend server.
- Enables event reporting for movement, power status, and other security related notifications from the device.
- Allows the tracker to operate over the GPRS data channel for continuous reporting or over SMS for direct alerts.
- Acts as the bridge between the device hardware like SiRF Star III GPS and the fleet backend that stores and displays location data.
- Supports practical functions such as history upload and periodic position reporting that are useful for fleet monitoring and route reconstruction.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a single, shared endpoint and port and automatically determines the tracker protocol used by a device. For most users this means they do not need to manually select a protocol inside Plaspy as long as the tracker is configured to report to the Plaspy endpoint. Automatic detection simplifies onboarding of devices such as the Riti SLS-00886 that can report over GPRS.

- Plaspy uses a single public endpoint for device reporting and automatically detects the tracker protocol.
- Users typically only need to configure the device to report to the Plaspy endpoint and port; Plaspy handles protocol identification.
- Proper reporting depends on the device being set to send data to the correct domain or IP and transport type.
- If a tracker is correctly pointed to the Plaspy endpoint, no manual selection of a protocol is usually required inside the platform.
- Automatic detection helps when managing mixed fleets that include different tracker models and firmware levels.

## Transport and Connection Context

Connection to Plaspy from SLS-00886 devices happens over mobile networks and can use either of the common transport methods supported by the tracker. When configuring the device you can choose the network transport and the endpoint to which the tracker will send reports. Plaspy documents a single server endpoint and port that all devices use.

- Devices may be configured to use UDP or TCP to report to Plaspy on port 8888.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies device configuration across different tracker models.
- Selection of UDP versus TCP depends on device firmware capability and the desired tradeoffs between reliability and latency.
- Ensure the device APN and GPRS settings are correct so the tracker can establish a session to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change the exact reporting behavior and available message types for the SLS-00886.
- Hardware revisions or optional feature packs may introduce differences in supported telemetry fields.
- Manufacturer side settings such as default reporting mode or SMS fallbacks can affect how the device interacts with servers.
- Choosing UDP or TCP as transport may impact delivery behavior depending on network conditions and device support.
- Always validate device configuration by confirming that the tracker is pointing to d.plaspy.com or 54.85.159.138 on port 8888.
- Test a representative device from each firmware and hardware variant before rolling out a large deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth integration, predictable reporting, and faster troubleshooting when a device does not behave as expected. With clarity on how the tracker reports, teams can diagnose connectivity issues, confirm telemetry fields, and plan firmware updates or configuration changes without guesswork.

- Helps confirm the device is sending the expected messages and fields to the backend.
- Reduces time to resolution for connectivity or data quality issues by narrowing the scope of investigations.
- Supports planning for transport selection and data usage when deploying devices on cellular networks.
- Ensures alarm and event reporting is correctly captured by the fleet management platform.
- Aids in validating that battery, ignition, and other telemetry are reported consistently across firmware versions.

## Why Use Plaspy with This Protocol

Using Plaspy with the Riti SLS-00886 provides a standardized way to collect location and telemetry from devices that support GPRS reporting. Plaspy’s shared endpoint approach and automatic protocol detection simplify onboarding and reduce the configuration burden for fleets that mix device models. That makes Plaspy a practical choice for organizations seeking centralized visibility and operational oversight of tracked vehicles.

To learn more about Plaspy and how it handles device reporting and fleet visibility, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance please verify information on the manufacturer site https://www.riti.com.tw/. Protocol support and firmware behavior can change over time so checking the official Riti documentation is recommended.
