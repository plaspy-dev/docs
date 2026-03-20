---
slug: /tk_star/tk970/protocol
id: tk970-protocol
sidebar_label: Protocol
title: TK-Star - TK970 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TK-Star TK970 and how it communicates with Plaspy using shared connection settings for reliable fleet tracking
keywords:
  - TK-Star TK970 protocol
  - TK970 GPS protocol
  - TK970 communication protocol
  - TK970 tracking protocol
  - Plaspy compatible tracker
  - TK970 fleet tracking
  - TK970 telematics
  - vehicle GPS tracker TK970
  - TK970 protocol Plaspy
  - TK970 device integration
---

# TK-Star - TK970 Protocol

This page describes the public protocol context for using the TK-Star TK970 tracker with Plaspy. It focuses on how the device communicates usable position and event data to the Plaspy platform without exposing private implementation details. The content is intended to help integrators, installers, and technical operators understand the role of the tracker communication protocol when connecting TK970 units to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once a device reports to the server. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so use this page as a general integration guide rather than a firmware specific manual.

## Protocol Overview

The communication protocol for the TK970 governs how the device reports GNSS coordinates, fallback positioning (LBS and Wi‑Fi), and telematics events to a remote server. In practice, the protocol ensures the tracker can identify itself to the server, transmit periodic and event driven updates, and allow server side platforms such as Plaspy to interpret and present that information for tracking and alerting.

- Enables the TK970 to deliver position reports, movement and vibration events, SOS signals, and relay state changes to Plaspy.
- Provides a consistent way for the device to identify itself so Plaspy can associate incoming data with the correct asset record.
- Carries telemetry used by Plaspy for live mapping, geofence alerts, historical route storage, and remote control actions.
- Works with cellular fallback methods such as LBS and Wi‑Fi data to improve coverage in indoor or urban canyons.
- Is influenced by device firmware and configuration, which determine reporting intervals, event thresholds, and which telematics fields are included.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and automatically determines the tracker protocol when a properly configured device connects and sends data. This means most installers do not need to select a protocol manually in Plaspy if the tracker is pointed to the correct Plaspy endpoint and port.

- Plaspy’s public server endpoint is reachable at d.plaspy.com and at the IP address 54.85.159.138 for direct routing.
- All devices in Plaspy use the same server port, simplifying configuration across different models.
- Plaspy listens on port 8888 and accepts device connections over the supported transport mode.
- When a TK970 is configured to report to the Plaspy endpoint, the platform will detect and map incoming data to the device automatically.
- If a device does not appear online, confirm network settings, APN configuration, and that the device is reporting to d.plaspy.com or the provided IP.

## Transport and Connection Context

Connection context refers to the network transport and destination used by the TK970 to send its reports. The TK970 can be configured to use different cellular modes and may transmit over either UDP or TCP depending on the device firmware and installer choices.

- The TK970 may be configured to use UDP or TCP to send data to Plaspy on port 8888.
- Devices can be pointed to the Plaspy server by domain d.plaspy.com or directly to the IP 54.85.159.138 when required by network environments.
- Plaspy uses the same port 8888 for all supported devices, which reduces configuration complexity for mixed fleets.
- Choose UDP for simpler, lower overhead reporting when the device and network are stable; TCP can be used where session reliability is preferred, subject to device support.
- Ensure APN and cellular settings on the TK970 are correct so the unit can establish outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- The TK970 is reported as Plaspy compatible, but available features and data fields depend on the installed firmware build and regional hardware variant.
- Hardware revisions and regional cellular variants (for example LTE band differences) can affect which transport or reporting behaviors are available.
- Some firmware versions may change default reporting intervals, event priorities, or enable additional telemetry fields; always confirm behavior after an OTA or manual firmware update.
- When integrating multiple devices, use the consistent Plaspy endpoint settings (d.plaspy.com or 54.85.159.138 on port 8888) to minimize configuration errors.
- Manufacturer documentation and release notes are the best source for device specific commands and firmware change history.
- If a device does not behave as expected, verify both network connectivity and that the device is configured to send data to Plaspy using the correct transport and endpoint.

## Why Protocol Understanding Matters

A practical understanding of the TK970 communication protocol helps ensure successful installation, reliable reporting, and effective troubleshooting on the Plaspy platform. Knowing what the device sends and how Plaspy receives it reduces setup time and improves operational reliability for fleet deployments.

- Helps installers confirm correct server, transport, and APN settings to get devices online quickly.
- Makes it easier to diagnose missing telemetry or unexpected reporting gaps by checking if reports are reaching d.plaspy.com on port 8888.
- Supports informed decisions about choosing UDP versus TCP based on network conditions and reliability needs.
- Assists with planning firmware updates and validating that new builds maintain required reporting behavior for Plaspy.
- Enables fleet operators to map device events like SOS, relay status, and vibration alarms to Plaspy alerting rules effectively.

## Why Use Plaspy with This Protocol

Using the TK-Star TK970 with Plaspy provides a practical route to consolidate position and event data into a single fleet management platform. The TK970’s compact form factor, multi mode positioning, and security features pair naturally with Plaspy’s real time tracking, alerting, and historical reporting capabilities to support anti theft, rental management, and mixed fleet operations.

To learn more about Plaspy and how it supports device integration, visit https://www.plaspy.com. For the most current device specific protocol and firmware details, check the manufacturer documentation at https://www.tk-star.com/ since protocol support and firmware behavior can change over time and should be verified against official resources.
