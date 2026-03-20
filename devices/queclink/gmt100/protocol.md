---
slug: /queclink/gmt100/protocol
id: gmt100-protocol
sidebar_label: Protocol
title: QuecLink - GMT100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for QuecLink GMT100 GPS tracker and how it communicates with Plaspy for reporting and monitoring
keywords:
  - QuecLink GMT100 protocol
  - QuecLink GMT100 GPS
  - GMT100 Plaspy compatibility
  - QuecLink tracking protocol
  - GMT100 communication protocol
  - QuecLink GPS tracker
  - GMT100 fleet tracking
  - tracker protocol Plaspy
  - QuecLink device integration
  - GMT100 reporting protocol
---

# QuecLink - GMT100 Protocol

This page provides public protocol context for using the QuecLink GMT100 GPS tracker with Plaspy. It covers how the tracker communicates in general terms, which connection settings Plaspy expects, and what to consider when integrating the device for live monitoring and periodic reporting. The GMT100 is a water resistant tracker designed for low current drain applications such as motorcycles and boats and includes motion sensing, multiple I/O, and a full-featured embedded reporting protocol.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. For the GMT100 and other devices, Plaspy accepts device data on the same port and can receive reports over UDP or TCP depending on the tracker configuration. Exact protocol behavior and available reports may vary by firmware version, hardware revision, and manufacturer implementation, so confirm device-specific details with QuecLink when needed.

## Protocol Overview

The GMT100's communication protocol defines how the tracker identifies itself, reports GPS positions, and sends alerts and status messages to a backend server. Plaspy relies on those on-device reports to translate raw device data into map positions, geofence events, and other operational telemetry without requiring manual protocol selection when the device is pointed at the Plaspy endpoint.

- The protocol carries position data, timestamps, and device status messages for use by Plaspy services.
- Built-in alerts such as emergency events, geo-fence crossings, and low battery can be reported through the device protocol.
- Motion detection and power management behavior influence when and how frequently the device sends reports.
- The GMT100 includes an embedded reporting protocol that enables periodic and event-driven transmissions to a server.
- Protocol-level identifiers allow Plaspy to associate incoming messages with the correct device record.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and automatically identifies the tracker protocol from incoming traffic patterns and device identifiers. When a GMT100 is configured to report to Plaspy, the platform will match the incoming device connection to the appropriate handling logic so manual protocol selection is usually not required by the user.

- Plaspy uses a unified endpoint for device reporting and automatically detects the protocol used by incoming trackers.
- Devices reporting to d.plaspy.com or the Plaspy server IP are processed without requiring manual protocol selection in most cases.
- Proper device configuration to point at the Plaspy endpoint ensures the tracker is picked up by the platform.
- If connection problems occur, checking device reporting settings and firmware behavior is the first troubleshooting step.
- The user typically configures the GMT100 to send position and alert messages to the Plaspy endpoint and Port.

## Transport and Connection Context

The GMT100 can be configured to use either UDP or TCP to send reports, and Plaspy accepts device traffic on the same port across all supported devices. Devices may be directed to the Plaspy domain or its public IP address depending on how the tracker is configured at the device or in provisioning tools.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server public IP for direct reporting is 54.85.159.138.
- The shared port used by Plaspy for device connections is 8888.
- The GMT100 may be configured to use UDP or TCP on port 8888 depending on the firmware and setup.
- All devices in Plaspy use the same port, simplifying device provisioning and firewall configuration.

## Protocol Compatibility Notes

- Firmware variations can change available reports and transport options; verify the tracker firmware level when diagnosing integration issues.
- Hardware revisions or regional variants of the GMT100 may have minor differences in default settings or factory configurations.
- Transport protocol selection (UDP vs TCP) affects delivery characteristics and should match the device configuration in the field.
- Device-side settings must point to the Plaspy domain or IP and the shared port for successful delivery.
- Manufacturer application notes and configuration tools often contain the most reliable, firmware-specific instructions.
- Test new firmware or custom configurations in a controlled environment before wide deployment.

## Why Protocol Understanding Matters

A practical understanding of the GMT100 communication protocol helps ensure reliable device onboarding, faster troubleshooting, and predictable operational behavior within Plaspy. Knowing how and when the tracker reports position and events allows administrators to tune reporting intervals, alert handling, and power use to match operational needs.

- Helps validate that devices are correctly pointing to the Plaspy endpoint and using the required transport.
- Assists troubleshooting common issues such as missing reports, incorrect timestamps, or unexpected power behavior.
- Guides choices about reporting frequency and motion sensing to balance battery life and tracking granularity.
- Clarifies which events and alerts the tracker can generate and how those will appear in Plaspy.
- Reduces deployment time by aligning device settings with Plaspy connection expectations.

## Why Use Plaspy with This Protocol

Using the GMT100 with Plaspy gives organizations a straightforward way to collect GPS positions, alerts, and device status using a common integration endpoint. Plaspy’s automatic protocol detection and unified port simplify provisioning across large fleets, while the GMT100’s motion sensing and low power design make it a good fit for vehicles and equipment with constrained power budgets.

If you want to learn more about how Plaspy handles device reporting and platform features, visit https://www.plaspy.com. For the most current device-specific protocol details, firmware notes, and configuration instructions from the manufacturer, please refer to the QuecLink website at https://www.queclink.com/. Protocol support and firmware behavior can change over time, so verifying the latest manufacturer documentation is recommended.
