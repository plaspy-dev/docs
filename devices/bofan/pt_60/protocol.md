---
slug: /bofan/pt_60/protocol
id: pt_60-protocol
sidebar_label: Protocol
title: Bofan - PT-60 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Bofan PT-60 and how it communicates with Plaspy for reliable GPS tracking and integration
keywords:
  - Bofan PT-60 protocol
  - Bofan PT-60 GPS protocol
  - Bofan PT-60 protocol for Plaspy
  - Bofan PT-60 communication protocol
  - Bofan PT-60 tracking protocol
  - Bofan GPS tracker PT-60
  - PT-60 protocol Plaspy compatibility
  - Plaspy device protocol
  - vehicle tracking PT-60
  - personal tracker PT-60 protocol
---

# Bofan - PT-60 Protocol

This page provides a public, practical overview of the communication context for using the Bofan PT-60 with Plaspy. It focuses on how the tracker reports location and status to the platform in general terms, and what aspects of the device protocol are relevant when integrating the PT-60 into Plaspy for live tracking, alerts, and monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly pointed to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page covers public protocol concepts and configuration context rather than low level packet formats.

## Protocol Overview

The PT-60 uses a mobile data connection to report GPS position, status events, and alarm notifications to a remote server. The protocol defines how the device identifies itself, timestamps and formats location data, and signals alerts like geo-fence breaches, SOS, movement, speed, and low battery so the receiving platform can process them into usable information.

- Carries position and status updates from the device to the server for real time tracking and historical playback
- Conveys event types such as SOS presses, geo-fence entries or exits, overspeed, movement, and low battery so Plaspy can generate alerts
- Allows the device to include identification so the server can associate reports with the correct tracker record
- Enables periodic heartbeats and reporting intervals so device availability and battery state can be monitored
- Supports both short event messages and regular position updates to balance timeliness and power consumption

## How Plaspy Detects the Protocol

Plaspy receives inbound device connections at a single shared endpoint and port and uses that connection to determine the tracker protocol automatically. In most integration scenarios the user does not need to choose a protocol inside Plaspy if the PT-60 is configured to report to the Plaspy endpoint correctly.

- Plaspy listens on the same port for all supported devices making device setup simpler
- When the PT-60 connects to the Plaspy endpoint the platform evaluates the incoming data to identify the protocol used
- Automatic detection means fewer manual steps for operators when onboarding devices to Plaspy
- Proper device identification at the time of first reports helps Plaspy map messages to the correct device record
- Users should ensure the device is configured to report to the Plaspy endpoint to allow automatic detection

## Transport and Connection Context

The connection transport and destination are important setup details for the PT-60. The device may be configured to use either UDP or TCP depending on device capability and configuration choices, and it can point to a domain name or an IP address for the Plaspy server.

- Devices may be configured to report to d.plaspy.com or to the Plaspy server IP 54.85.159.138
- The PT-60 can use either UDP or TCP depending on the firmware and settings chosen by the user or integrator
- All devices in Plaspy use the same port which simplifies network and firewall configuration
- Use the same port setting on the device as required by Plaspy to ensure connectivity
- Verify mobile data connectivity and APN settings on the PT-60 to allow successful communication with the Plaspy endpoint

## Protocol Compatibility Notes

- Different PT-60 firmware revisions may change message timing, available event types, or optional fields
- Hardware revisions or regional variants from the manufacturer can affect supported transports or features
- Transport choice of UDP versus TCP can impact message delivery characteristics and should match device settings
- Plaspy automatically detects the protocol when the device reports correctly to the shared endpoint but correct device configuration is essential
- Manufacturer documentation is the authoritative source for firmware specific protocol options and feature availability
- Validate compatibility by confirming device reporting settings and testing live reports to the Plaspy endpoint

## Why Protocol Understanding Matters

Knowing the general behavior of the PT-60 communication protocol helps with successful setup, timely troubleshooting, and consistent long term tracking performance in Plaspy. Clear protocol context reduces time spent diagnosing connection issues and helps ensure alerts and telemetry arrive as expected.

- Helps confirm device reports are reaching the Plaspy server and being interpreted correctly
- Makes it easier to set correct APN, transport, and endpoint settings on the tracker
- Aids troubleshooting when events such as SOS, geo-fence, or overspeed alerts do not appear on the platform
- Supports planning for battery life and reporting intervals based on how often the tracker transmits data
- Helps operations teams understand which device features will appear in Plaspy and which may be firmware dependent

## Why Use Plaspy with This Protocol

The Bofan PT-60 is a compact personal tracker that provides real time location updates, geo-fence alerts, SOS notifications, movement and speed alarms, and low battery reporting. Paired with Plaspy, these device capabilities can be presented as live location, event alerts, and historical playback to give organizations and individuals improved situational awareness and oversight.

Plaspy simplifies device onboarding by using a shared server endpoint and port and automatically detecting the tracker protocol when the PT-60 is configured to report to d.plaspy.com or the Plaspy server IP 54.85.159.138. To learn more about Plaspy and how it handles device connectivity and reporting, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest PT-60 specific documentation and firmware notes on the manufacturer site https://www.bofancloud.com/ for the most current information.
