---
slug: /tk_star/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: TK-Star - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the TK Star TK103 tracker and how it communicates with Plaspy for tracking and alerts
keywords:
  - TK Star TK103 protocol
  - TK103 GPS protocol
  - TK Star GPS tracker communication
  - TK103 Plaspy compatibility
  - TK103 tracking protocol
  - TK Star tracker protocol
  - vehicle tracking TK103
  - TK103 fleet management
  - GPS tracker protocol Plaspy
  - TK103 communication guide
---

# TK-Star - TK103 Protocol

This page describes the public protocol context for using the TK-Star TK103 vehicle GPS tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy platform in general, what to expect from connection settings, and how protocol behavior affects reporting and alerts without exposing private or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a unit reports to the platform. Exact protocol behavior and message content can vary with firmware version, hardware revision, and manufacturer implementation, so device-specific differences are expected between individual units and over time.

## Protocol Overview

The communication protocol of the TK103 governs how the device reports location, status, and alerts to an online platform such as Plaspy, and how remote commands or configuration changes can be applied. This page explains the public-facing role of that protocol in the context of Plaspy integration rather than low-level frame formats.

- Enables periodic location and status reporting from the TK103 to Plaspy so position, movement, and sensor data are available on the platform.
- Carries event notifications such as movement alerts, overspeed alarms, geofence breaches, and emergency triggers to the server.
- Supports remote control and configuration flows exposed by the device, for example remote power or circuit controls and updates to the server IP and port.
- Works over cellular data using GPRS while leveraging the device ability to point to a specific server endpoint for online platforms.
- Allows the tracker to identify itself and include the information Plaspy needs to associate messages with the correct device record.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically detects the tracker protocol for devices that report to the platform. In most setups users do not need to select a protocol manually inside Plaspy provided the device is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses the same port for all devices and the configured port is 8888.
- Plaspy automatically detects the tracker protocol when messages arrive on the shared endpoint and associates traffic with the correct device.
- If a unit is properly configured to send its data to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will receive and process reports without manual protocol selection in most cases.
- Users should ensure the device is configured to send to the Plaspy endpoint and that network connectivity from the tracker to the internet is functional.

## Transport and Connection Context

The TK103 can be configured to communicate over different IP transport layers depending on device support and configuration. Plaspy accepts connections from devices using the shared transport settings described below.

- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Trackers can point to the Plaspy endpoint by domain d.plaspy.com or by the IP address 54.85.159.138.
- All devices supported by Plaspy use the same port, so a consistent server configuration simplifies onboarding.
- The TK103 supports changing the target server IP and port from the device side, which is commonly used to switch online platforms.
- Test connectivity after changing server settings to confirm the device successfully reaches Plaspy over the selected transport.

## Protocol Compatibility Notes

- Firmware revisions and manufacturer updates can change message timing, field availability, or supported features; verify behavior for the exact firmware on your unit.
- Hardware revisions sometimes introduce or remove features that affect what data the tracker reports.
- The TK103 can be set to use different transport types; ensure the device transport matches the Plaspy endpoint configuration (UDP or TCP on port 8888).
- Manufacturer-side configurations or optional settings (for example SMS based configuration) may affect how the device registers with an online platform.
- Confirm device reporting settings after a factory reset or firmware upgrade, since server IP and port can revert to defaults.
- Validate compatibility against official TK-Star documentation and the actual device behavior in a controlled test before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the TK103 communicates helps ensure reliable reporting, correct alerting, and smoother troubleshooting when integrating with Plaspy. Awareness of transport and device-level configuration reduces setup time and avoids common connectivity issues.

- Ensures you configure the tracker to point to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888 so data reaches the platform.
- Helps troubleshoot missing reports by checking transport selection (UDP versus TCP) and device network reachability.
- Clarifies how emergency alerts, movement notifications, and geofence events are expected to flow to Plaspy.
- Supports planning for firmware or device changes that could alter which fields are reported or how often updates are sent.
- Improves operational readiness when using remote commands such as power or circuit controls that the device exposes.

## Why Use Plaspy with This Protocol

Using the TK-Star TK103 with Plaspy provides a centralized way to monitor vehicle location, receive alerts, and manage operational tasks for fleets or individual units. Plaspy’s shared endpoint model and automatic protocol detection reduce manual configuration steps and help teams get devices reporting quickly.

To learn more about Plaspy and how it works with a wide range of trackers, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware guidance on the manufacturer site https://www.tk-star.com/ before deployment.
