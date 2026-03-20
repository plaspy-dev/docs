---
slug: /cantrack/gf10/protocol
id: gf10-protocol
sidebar_label: Protocol
title: CanTrack - GF10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the CanTrack GF10 GPS tracker and how it communicates with Plaspy for reliable reporting and integration
keywords:
  - CanTrack GF10 protocol
  - CanTrack GF10 GPS protocol
  - GF10 tracker Plaspy compatibility
  - GF10 communication protocol
  - GF10 tracking protocol
  - CanTrack GF10 device integration
  - GPS tracker protocol Plaspy
  - vehicle tracking GF10
  - GF10 real time tracking
  - GF10 protocol guide
---

# CanTrack - GF10 Protocol

This page covers the public protocol context for using the CanTrack GF10 Finger Tracker with Plaspy. It describes how the tracker communicates in general terms, which transport options Plaspy accepts, and what to expect during integration without exposing sensitive parser details.

The CanTrack GF10 is a compact GPS tracker that supports GPS, LBS, and AGPS reporting and features such as geo fencing, low battery alerts, vibration tamper detection, power saving modes, and local memory storage. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the GF10 is the device reporting method that allows the unit to send location, status, and alarm information to a remote platform like Plaspy. This page explains the role of that communication channel rather than presenting proprietary packet layouts or parser implementation details.

- Enables the GF10 to report GPS, LBS, and AGPS derived position data to Plaspy for real time visibility.
- Carries device status information such as battery level, motion or vibration alerts, and memory storage indicators.
- Allows geo fence events and low battery alarms to be transmitted to the platform so they appear in Plaspy notifications.
- Supports both continuous and power saving transmission modes so the tracker can balance reporting frequency and battery life.
- Preserves locally stored data when a GSM link is unavailable and forwards stored reports when connectivity is restored.

## How Plaspy Detects the Protocol

Plaspy is designed to receive tracker reports on a single shared endpoint and to determine the correct tracker protocol automatically. Users typically do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy automatically detects the tracker protocol when a properly configured device sends data to the platform.
- All devices in Plaspy use the same port which simplifies device configuration across different models.
- If the GF10 is pointed at the Plaspy endpoint and uses one of the supported transports, Plaspy will match incoming data to a supported protocol and process it.
- Manual protocol selection inside Plaspy is usually unnecessary if the device is sending to the shared endpoint and port.
- For reliable detection, ensure the GF10 is configured to report current device ID and status according to manufacturer instructions.

## Transport and Connection Context

Connection context covers how the GF10 reaches Plaspy and the address and port conventions to use when configuring the tracker. Plaspy accepts the GF10 over common IP transports supported by the device, and using the correct endpoint makes integration straightforward.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for users who prefer to configure by hostname or by numeric address.
- The port is 8888 and devices may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- The device may be configured using UDP or TCP on port 8888; choose the transport the GF10 firmware supports and that best fits your network environment.
- All devices in Plaspy use the same port which reduces configuration complexity when deploying multiple tracker models.
- Verify the device is pointed to d.plaspy.com or 54.85.159.138 and that any network firewalls allow outbound traffic on port 8888 for your chosen transport.

## Protocol Compatibility Notes

- Firmware differences between GF10 production batches can change available commands and reporting behavior; always check the device firmware release notes.
- Hardware revisions or regional variants may alter supported transports or default reporting settings for the GF10.
- Manufacturer configuration via SMS or configuration server remains the authoritative source for device-side settings that affect protocol behavior.
- Choosing TCP versus UDP can affect delivery characteristics; confirm which transport the installed firmware version handles best.
- Plaspy automatic detection handles common GF10 report styles, but unusual manufacturer customizations may require verification.
- Validate expected behavior by sending test reports to the Plaspy endpoint and reviewing received messages in the platform logs.

## Why Protocol Understanding Matters

Understanding how the GF10 communicates helps ensure accurate setup, faster troubleshooting, and reliable long term operation with Plaspy. Even basic awareness of the reporting model reduces integration time and operational surprises.

- Helps you configure the device to report to d.plaspy.com or 54.85.159.138 using the supported transport.
- Makes it easier to confirm the device is sending required identifiers so Plaspy can automatically detect and process reports.
- Improves troubleshooting when position updates, alarms, or stored reports do not appear in Plaspy as expected.
- Aids planning for battery life by aligning reporting intervals and power saving modes with operational needs.
- Encourages validation of behavior after firmware updates or when deploying GF10 units from different production runs.

## Why Use Plaspy with This Protocol

Using the CanTrack GF10 with Plaspy gives organizations concise visibility into location, battery status, tamper alerts, and historical data replay when the device provides stored reports. The GF10’s small form factor and feature set make it suitable for discreet asset tracking, personal item monitoring, and vehicle or equipment oversight, and Plaspy is designed to accept and present that information using the shared Plaspy connection settings.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details, firmware behaviors, and configuration instructions consult the manufacturer at https://www.cantrackgps.com/ as protocol support and firmware implementations can change over time.
