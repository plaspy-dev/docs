---
slug: /noran/nr108/protocol
id: nr108-protocol
sidebar_label: Protocol
title: Noran - NR108 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for Noran NR108 GPS tracker integration with Plaspy including connection settings and compatibility guidance
keywords:
  - Noran NR108 protocol
  - Noran NR108 GPS protocol
  - Noran NR108 communication protocol
  - Noran NR108 tracking protocol
  - Noran GPS tracker protocol
  - NR108 protocol Plaspy
  - NR108 tracking compatibility
  - Noran fuel monitoring protocol
  - Noran GPS Plaspy integration
  - vehicle tracking NR108
---

# Noran - NR108 Protocol

This page provides a public, non sensitive overview of the communication protocol context for using the Noran NR108 GPS tracker with Plaspy. It explains how the NR108 reports location and telemetry, what role the tracker protocol plays in device integration, and the key connection settings used by Plaspy to receive data from the device.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and packet contents can vary by NR108 firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, practical information for successful integration and troubleshooting.

## Protocol Overview

The protocol implemented by the NR108 governs how the device reports position, telemetry, and alarms to a backend such as Plaspy. In practice this means the tracker sends periodic or event driven messages that allow Plaspy to display location, trigger alerts, and record telemetry for reporting and historical playback.

- Enables the NR108 to deliver location fixes, battery and power cut status, and fuel telemetry to Plaspy.
- Carries alarm and event signals such as overspeed, geo fence, SOS, and immobilizer state for immediate notification.
- Supports fallback reporting modes such as SMS and LBS when GPS or GPRS coverage is limited, ensuring continuity of tracking.
- Provides compact, low data usage reporting to minimize GPRS costs while preserving essential telemetry for Plaspy dashboards.
- Allows optional local logging on the device when network connectivity is unavailable so historical positions can upload later.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports from devices at a single shared endpoint and is designed to automatically detect which tracker protocol a device is using when it connects. In most cases a properly configured NR108 will start appearing in Plaspy without manual protocol selection.

- Plaspy listens on a shared endpoint and port for all supported devices and automatically determines the tracker protocol.
- When the NR108 is configured to report to Plaspy, no manual protocol selection is typically required in the platform.
- Device identification and periodic telemetry allow Plaspy to match incoming messages to the tracker and its account.
- Plaspy supports both Internet reporting and SMS based workflows where applicable, enabling hybrid reporting strategies.
- If a device does not appear, confirm the NR108 reporting destination and network connectivity before modifying detection settings.

## Transport and Connection Context

The NR108 can deliver location and telemetry using cellular Internet (GPRS) or SMS depending on configuration and coverage. For IP based reporting, the device may be pointed to the Plaspy server domain or its IP address and can use UDP or TCP as supported by the unit.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct reporting.
- The port used by Plaspy for all devices is 8888 and devices may be configured to use UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies firewall and gateway configuration.
- Choose UDP or TCP on the NR108 according to the device firmware and local network reliability considerations.
- Ensure mobile operator APN and data connectivity are configured so the NR108 can reach d.plaspy.com or the listed IP.

## Protocol Compatibility Notes

- Firmware differences can change exact message timing, optional fields, or available alarms; always check device firmware version where possible.
- Hardware revisions or variant builds may alter supported transports, antenna behavior, or peripheral wiring for features such as immobilizer relay and SOS input.
- The NR108 supports SMS reporting and LBS fallback as public features; behavior of those fallback modes can differ by firmware and operator environment.
- Selecting UDP versus TCP is a configuration choice on the device and can affect delivery guarantees and retransmission behavior.
- Validate immobilizer and relay control capabilities with your NR108 unit and Plaspy account permissions before relying on remote control workflows.
- Always confirm compatibility against the manufacturer documentation for the specific NR108 firmware you have installed.

## Why Protocol Understanding Matters

Understanding how the NR108 communicates with Plaspy helps installers and administrators set up devices correctly, troubleshoot connectivity problems faster, and ensure reliable long term operation.

- Speeds up initial setup by confirming the device is pointing at d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport.
- Helps diagnose reporting gaps by distinguishing between GPS, LBS, SMS, and GPRS related issues.
- Informs decisions about choosing UDP or TCP based on network reliability and expected message behavior.
- Guides validation of alarms and telemetry channels such as fuel monitoring, power-cut alerts, and SOS signals.
- Supports planning for firmware updates and hardware replacement by clarifying which features depend on protocol behavior.

## Why Use Plaspy with This Protocol

Using the NR108 with Plaspy gives organizations concise and efficient visibility into small vehicle fleets, motorcycles, and assets that require discreet installation and low data consumption. Plaspy leverages the NR108 telemetry to provide real time tracking, alerting for overspeed and geo fence events, fuel monitoring reports, and historical playback for investigations and operational analysis.

To learn more about how Plaspy works with devices like the NR108 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes consult the manufacturer documentation at http://www.norantracker.com/ to verify the latest information.
