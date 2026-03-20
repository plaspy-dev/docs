---
slug: /gosafe/g737/protocol
id: g737-protocol
sidebar_label: Protocol
title: Gosafe - G737 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the Gosafe G737 ankle bracelet showing how it communicates with Plaspy and connection considerations
keywords:
  - Gosafe G737 protocol
  - Gosafe G737 GPS protocol
  - G737 protocol Plaspy
  - Gosafe GPS tracker protocol
  - G737 communication protocol
  - Gosafe tracking protocol
  - Plaspy device compatibility
  - GPS tracker integration
  - electronic monitoring protocol
  - ankle bracelet GPS protocol
---

# Gosafe - G737 Protocol

This page provides public protocol context for using the Gosafe G737 ankle bracelet with Plaspy. It summarizes how the device communicates in general terms, what connection settings Plaspy expects, and practical considerations for integrating the G737 into fleet and electronic monitoring workflows without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed at the Plaspy endpoint. For the G737, common Plaspy connection targets are d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP on port 8888 and Plaspy uses the same port for all devices while performing automatic protocol detection. Exact behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The G737 communicates location, event and telemetry data to Plaspy using the device reporting protocol implemented by the manufacturer. That protocol is the mechanism the tracker uses to identify itself, report GNSS fixes and send event signals such as tamper, SOS or zone transitions. Plaspy receives those reports at a common endpoint and translates them into map updates, alerts and historical records.

- Translates device identifiers and telemetry into meaningful events for Plaspy dashboards and alerts
- Reports GNSS fixes, fallback cellular location, and timestamped event records such as tamper and SOS
- Delivers zone and geofence events so Plaspy can evaluate compliance and trigger notifications
- Supports onboard edge recording so historical data is uploaded to Plaspy after connectivity resumes
- Carries device health and telemetry that help Plaspy display battery, signal and status information

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections on a shared endpoint and port and to automatically identify the tracker protocol from the incoming data stream. When the G737 is configured to report to Plaspy, the platform detects the device protocol without requiring manual protocol selection in most cases, simplifying deployment.

- Plaspy listening endpoint examples include d.plaspy.com and the server IP 54.85.159.138
- Plaspy receives data on port 8888 for all supported devices and protocols
- The device may be configured to use UDP or TCP to send reports to Plaspy on port 8888
- With correct reporting settings on the device, manual protocol selection inside Plaspy is typically unnecessary
- Automatic detection helps speed setup for mixed fleets with multiple tracker models

## Transport and Connection Context

Understanding the transport layer settings helps ensure the G737 can reliably send data to Plaspy. The tracker supports cellular connectivity to deliver GNSS fixes and events, and you can point the device at the Plaspy domain or the numeric server address depending on site configuration and DNS availability.

- Devices can be set to point to d.plaspy.com or the numeric address 54.85.159.138
- The Plaspy listening port for all devices is 8888
- The G737 may be configured to use UDP or TCP on port 8888 based on device capability and configuration preferences
- Using the domain name supports DNS based routing while the IP address is available for environments that require direct addressing
- Plaspy accepts both transport types and uses the shared port for consistency across device models

## Protocol Compatibility Notes

- The G737 is compatible with Plaspy when configured to report to the Plaspy endpoint and port
- Firmware revisions can change message detail and event behavior so confirm firmware level when diagnosing issues
- Hardware revisions or regional device variants may expose different optional features such as BLE beacon handling
- Transport selection UDP versus TCP can affect delivery guarantees and should match device settings and network policies
- Over the air firmware updates FOTA can adjust reporting cadence or event payloads and should be validated after updates
- Validate device behavior in a controlled environment before large scale deployment
- Always consult manufacturer documentation for device specific commands and configuration procedures

## Why Protocol Understanding Matters

A clear grasp of how the G737 communicates helps ensure reliable setup, faster troubleshooting, and predictable long term operation when paired with Plaspy. Knowing the connection expectations and how events are delivered reduces time spent diagnosing missing reports or mismatched settings.

- Speeds initial configuration by confirming the device targets d.plaspy.com or 54.85.159.138 on port 8888
- Helps troubleshoot missing telemetry by checking transport type, network connectivity and firmware versions
- Improves event validation for tamper, SOS and geofence alerts so supervisors receive expected notifications
- Supports planning for edge recording and data retransmission after outages
- Enables informed decisions about FOTA timing and post update validation
- Assists integration of BLE home beacon and accessory workflows in coordination with Plaspy event handling

## Why Use Plaspy with This Protocol

Using the G737 with Plaspy provides organizations with centralized visibility into location, tamper status, and event telemetry that are essential for electronic monitoring and compliance programs. The combination of high accuracy GNSS, tamper sensing and BLE home beacon support on the device, together with Plaspy’s automatic protocol detection and unified endpoint model, reduces setup complexity and helps maintain continuous oversight.

To learn more about Plaspy and how the platform works with devices like the Gosafe G737 visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so verify the latest device specific information on the manufacturer website https://gosafesystem.com/ before large scale deployment.
