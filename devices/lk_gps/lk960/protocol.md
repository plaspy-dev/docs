---
slug: /lk_gps/lk960/protocol
id: lk960-protocol
sidebar_label: Protocol
title: LK-GPS - LK960 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for LK GPS LK960 and how it communicates with Plaspy for location and alarms
keywords:
  - LK-GPS LK960 protocol
  - LK-GPS LK960 GPS protocol
  - LK-GPS LK960 protocol for Plaspy
  - LK-GPS LK960 communication protocol
  - LK-GPS LK960 tracking protocol
  - LK-GPS tracker protocol
  - Plaspy device compatibility
  - vehicle GPS tracker LK960
  - LK-GPS remote fuel cut
  - LK-GPS SOS alarm
---

# LK-GPS - LK960 Protocol

This page summarizes the public protocol context for using the LK-GPS LK960 wired car tracker with Plaspy. It is written to help technical users, integrators, and fleet managers understand how the tracker communicates at a high level with Plaspy for location reporting, alarms such as SOS and vibration, and remote control operations like fuel and power cut.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The LK960 supports 2G and 4G networks and features such as SOS alarm, remote fuel and electricity cut off, vibration alarm, LED status indicators, and platform reporting. Exact message behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior may differ across units and over time.

## Protocol Overview

The LK960 communication protocol provides the on device reporting and command channel that allows Plaspy to receive position, status, and alarm events and to send control requests when supported by the device. The protocol defines how the tracker packages location, device status, and alarm events for transport to a server endpoint and how the tracker accepts remote commands where applicable.

- Enables regular GPS position reporting and periodic status updates to Plaspy
- Carries alarm signals such as SOS, vibration, overspeed, and power loss notifications
- Allows remote control actions supported by the device like arming, oil cut, and recovery via platform commands
- Provides device identification and state information so Plaspy can associate reports with the correct asset
- Supports reporting over cellular networks so the LK960 can reach the Plaspy endpoint for fleet monitoring

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and reports on a single shared endpoint and port and matches incoming device traffic to supported device protocols automatically. When an LK960 is configured to report to the Plaspy endpoint, the platform identifies the device protocol and processes its messages without requiring the user to manually pick a protocol setting within the platform.

- Plaspy uses a shared server endpoint to receive tracker data and does automatic protocol detection
- The Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for reporting
- If the LK960 is configured to send data to the Plaspy endpoint the platform will normally detect the correct protocol automatically
- Manual protocol selection inside Plaspy is usually not required if the device is correctly pointed at the Plaspy endpoint

## Transport and Connection Context

Transport details describe how LK960 devices connect to the Plaspy endpoint rather than the specific on wire format of messages. The LK960 can use standard IP transport over cellular networks, and Plaspy supports common transports so devices can communicate reliably to the platform.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and provisioning
- Devices can be pointed to the domain d.plaspy.com or to the Plaspy server IP 54.85.159.138
- Plaspy uses the same port 8888 for all supported devices to simplify configuration and routing
- Network connectivity depends on the tracker SIM, APN settings, and cellular generation available at the unit location such as 2G or 4G
- Choosing UDP or TCP may be influenced by device configuration and network conditions but the destination port remains constant

## Protocol Compatibility Notes

- Firmware versions can add, remove, or change message options and alarm behaviors that affect what the tracker sends and how Plaspy interprets it
- Hardware revisions and optional accessories may change available features such as input alarms, fuel cut wiring, or LED indicators
- Manufacturer side variations or regional firmware customization sometimes alter message timing or supported transports
- Choosing UDP versus TCP may affect delivery characteristics on some networks and should match the device configuration
- Always validate that the device reports to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy compatibility
- Test a small set of devices in your environment before large scale deployment to confirm expected behavior

## Why Protocol Understanding Matters

Understanding the communication protocol for the LK960 is practical for setup, troubleshooting, and long term reliability when the device is used with Plaspy. Knowing how the tracker reports position, alarms, and status helps teams confirm correct configuration, speed up diagnosis of connectivity issues, and ensure alarms and remote controls behave as expected.

- Verifies the LK960 is pointed to the correct Plaspy endpoint and port so reports arrive reliably
- Helps troubleshoot missing or delayed events by checking transport, APN, and registration state
- Ensures alarm types like SOS and vibration are recognized and routed correctly in Plaspy
- Confirms remote functions such as fuel cut and recovery are available with the firmware installed
- Supports planning for firmware upgrades, hardware swaps, or carrier changes that can affect communication

## Why Use Plaspy with This Protocol

Using the LK-GPS LK960 with Plaspy gives organizations a streamlined way to collect location, alarm, and device status data in a single platform. Plaspy handles the shared endpoint and port configuration and automatically detects the tracker protocol, so operators can focus on fleet workflows, alerting, and operational reporting rather than per device port management.

If you want to learn more about Plaspy and how it works with devices like the LK960 visit https://www.plaspy.com. For the most current and device specific protocol and firmware details, please verify information with the manufacturer at https://www.lk-gps.com as protocol support and firmware behavior can change over time.
