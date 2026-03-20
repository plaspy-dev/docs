---
slug: /bofan/pt_30/protocol
id: pt_30-protocol
sidebar_label: Protocol
title: Bofan - PT-30 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Bofan PT-30 tracking with Plaspy and general compatibility guidance
keywords:
  - Bofan PT-30 protocol
  - Bofan PT 30 GPS tracker
  - PT-30 communication protocol
  - PT-30 Plaspy compatibility
  - Bofan protocol Plaspy
  - PT-30 tracking protocol
  - Bofan GPS protocol
  - personal tracker protocol
  - GPRS GPS tracker protocol
  - asset tracking protocol
---

# Bofan - PT-30 Protocol

This page describes the public protocol context for using the Bofan PT-30 personal GPS tracker with the Plaspy platform. It focuses on how the device communicates in general terms, what to check during setup, and how Plaspy interoperates with the PT-30 without exposing manufacturer private implementation details.

The Bofan PT-30 is a compact GPS personal tracker that reports location via SMS or GPRS and includes features such as SOS alert, geo-fence, and two way communication. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision, and manufacturer implementation. Verify device specific behavior with official Bofan documentation when needed.

## Protocol Overview

The PT-30 protocol context refers to the device reporting rules and message exchange methods that allow position, status, and alerts to reach a server like Plaspy. For integration, the protocol's public aspects determine what data the tracker sends and how the server recognizes and uses that information.

- Enables the tracker to send periodic or event driven location updates and status reports to a remote endpoint.
- Carries identifying information so the server can associate incoming data with a specific PT-30 device.
- Translates device telemetry into usable location, alarm, and geofence events for the tracking platform.
- Supports configuration and control commands when the device is set to report over IP rather than SMS.
- Allows the platform to interpret emergency signals such as SOS or low battery alerts in context.

## How Plaspy Detects the Protocol

Plaspy receives data from many tracker models and automatically detects each device protocol when the tracker is configured to report to the Plaspy endpoint. In most cases end users do not need to select a protocol manually inside Plaspy if the device is pointing to the correct Plaspy endpoint.

- Plaspy uses a shared server endpoint d.plaspy.com as the primary domain for device connections.
- The platform IP address for device reporting is 54.85.159.138 and the public listening port is 8888.
- Plaspy automatically detects the tracker protocol for devices that report to the shared endpoint and port.
- Users typically configure the PT-30 to send GPRS data to the Plaspy endpoint and the platform matches incoming reports to the device profile.
- Because detection is automatic, correct APN and reporting target settings on the tracker are the most common reasons a device will not be recognized.

## Transport and Connection Context

Transport details describe how the PT-30 delivers its data to Plaspy over the network. The PT-30 supports reporting via GPRS and commonly uses IP transport to communicate with tracking platforms. Configuring the correct transport and destination is essential for reliable reporting.

- The PT-30 may be configured to use either UDP or TCP transport to send data to Plaspy on port 8888 depending on device support and site configuration.
- Devices can be pointed to the domain d.plaspy.com or directly to the server IP 54.85.159.138 when configuring the tracker.
- Plaspy listens on the same port for all devices, so you do not need a unique port per tracker model.
- Choose UDP or TCP on the device according to operator guidance and device firmware recommendations.
- Ensure APN and GPRS settings are correct so the tracker can establish an IP session and reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions may change message content, timing, and optional fields; validate the PT-30 firmware level when troubleshooting integration.
- Different hardware revisions or firmware builds from Bofan can alter available commands or default transport settings.
- The PT-30 supports SMS reporting; for Plaspy integration, GPRS/IP reporting to the Plaspy endpoint is the typical method for real time tracking.
- Selecting UDP versus TCP on the device affects delivery semantics and should match the device capability and network conditions.
- Always confirm device configuration details against the manufacturer documentation before making irreversible configuration changes.
- When in doubt, test with a single device to confirm reporting, before rolling out a larger deployment.

## Why Protocol Understanding Matters

Understanding how the PT-30 communicates helps ensure a smooth setup, reliable tracking, and faster troubleshooting when devices do not appear on Plaspy. Knowing the public protocol aspects improves configuration accuracy and operational uptime.

- Helps verify that the tracker is pointed at the correct Plaspy endpoint and using the appropriate transport.
- Makes it easier to interpret signals such as SOS, geo-fence alerts, and low battery reports when they arrive at the platform.
- Reduces time spent on common issues related to APN, transport selection, and firmware-specific behavior.
- Supports planning for fleet scale deployment by clarifying device capabilities and reporting intervals.
- Improves communication with the device manufacturer when you need device specific diagnostics or firmware updates.

## Why Use Plaspy with This Protocol

Using Plaspy with the Bofan PT-30 provides a straightforward way to consolidate location, alerting, and status reporting from personal trackers into a single monitoring platform. For organizations that need discreet, portable tracking for people or assets, Plaspy helps translate PT-30 reports into actionable location and alert data without requiring manual protocol selection.

If you want to learn more about Plaspy and how it works with devices like the Bofan PT-30, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes, please verify information on the manufacturer site https://www.bofancloud.com/ as details can change over time.
