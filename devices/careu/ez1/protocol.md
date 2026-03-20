---
slug: /careu/ez1/protocol
id: ez1-protocol
sidebar_label: Protocol
title: CAREU - EZ1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for CAREU EZ1 GPS tracker and how it communicates with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - CAREU EZ1 protocol
  - CAREU EZ1 GPS protocol
  - CAREU EZ1 Plaspy compatibility
  - CAREU EZ1 communication protocol
  - CAREU EZ1 tracking protocol
  - CAREU tracker protocol
  - EZ1 GPS tracker
  - vehicle tracking CAREU EZ1
  - fleet management EZ1
  - Plaspy device compatibility
---

# CAREU - EZ1 Protocol

This page describes the public protocol context for using the CAREU EZ1 GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy in general, the role of the tracker reporting protocol, and the key connection settings you will use to point the EZ1 at Plaspy for location, status, and event reporting.

The CAREU EZ1 LTE is a compact AVL tracker available in LTE Cat 1 with 3G and 2G fallback and a 2G variant with Bluetooth 3.0. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior may vary by firmware version, hardware revision, or manufacturer implementation. This page provides public, non sensitive guidance to help you integrate the EZ1 with Plaspy and highlights what to verify with manufacturer documentation.

## Protocol Overview

The tracker communication protocol is the set of rules the EZ1 follows to send positions, events, and telemetry to a remote server such as Plaspy. In practical terms the protocol lets the device identify itself, report location and sensor data, and receive remote configuration or command acknowledgements where supported.

- Enables the EZ1 to report GPS/Glonass positions, accelerometer events, and auxiliary sensor data to a central server for fleet management.
- Carries identity and session information that lets Plaspy associate messages with a specific device and account.
- Translates device events such as harsh braking, geofence crossings, and power alarms into actionable reports for operators.
- Supports optional telemetry and accessory inputs like 1 Wire temperature sensors, RS232 accessories, and Bluetooth configuration where present.
- Works alongside transport-layer settings so the device can reach the Plaspy endpoint reliably over mobile networks.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and inspects reported messages to determine how to decode device traffic. Because Plaspy automatically detects the tracker protocol, most users do not need to manually select a protocol in the platform when the device is configured to report to the Plaspy endpoint.

- Plaspy listens on a single server endpoint to receive tracker reports and maps incoming messages to supported device types.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for network configuration and testing.
- The port is 8888 and all devices in Plaspy use the same port for reporting to the platform.
- Plaspy automatically detects the tracker protocol so a properly configured EZ1 typically does not require a manual protocol selection inside Plaspy.
- If a device fails to report or is using a nonstandard firmware, review the device network settings and manufacturer documentation to ensure correct reporting configuration.

## Transport and Connection Context

Transport and DNS settings determine how the EZ1 reaches Plaspy. The CAREU EZ1 series supports common transport options over mobile data and can be pointed at the Plaspy endpoint using either an IP address or DNS name depending on network and device configuration.

- The device may be configured using UDP or TCP on port 8888 depending on device support and choice at provisioning.
- Devices intended for Plaspy reporting can point to d.plaspy.com or to the numeric address 54.85.159.138 as the server target.
- All devices in Plaspy use the same port so configuring port 8888 on the device aligns it with platform expectations.
- Verify APN and mobile data settings on the SIM to ensure the EZ1 can reach the public internet and the Plaspy endpoint.
- If you have firewall or carrier restrictions, allow outbound UDP and TCP to the Plaspy endpoint and ensure DNS resolution to d.plaspy.com is working.

## Protocol Compatibility Notes

- Firmware revisions can alter message fields, available reports, and optional commands; confirm firmware behavior for any device you deploy.
- Hardware revisions may change accessory support such as internal antenna variants, RS232 wiring, or Bluetooth configuration methods.
- Some features like Garmin FMI support, geofence types, or FOTA behavior may be optional or firmware dependent.
- Transport selection (UDP versus TCP) should match the device configuration; selecting the wrong transport may prevent successful reporting.
- Manufacturer defaults can vary; always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- For advanced integrations or custom firmware, consult official CAREU documentation and change logs before wide deployment.

## Why Protocol Understanding Matters

Understanding how the EZ1 communicates helps ensure devices report reliably to Plaspy, supports efficient troubleshooting, and improves operational confidence across a fleet.

- Speeds up first time setup by matching device transport and server settings to Plaspy expectations.
- Helps diagnose reporting gaps by isolating transport, DNS, APN, and firmware causes.
- Improves data quality by ensuring required sensors and accessory inputs are enabled and interpreted correctly.
- Supports long term maintenance by highlighting when firmware updates or hardware revisions may change behavior.
- Enables appropriate configuration of geofences, alarms, and custom reports within Plaspy.

## Why Use Plaspy with This Protocol

Using Plaspy with the CAREU EZ1 provides a straightforward way to collect vehicle locations, event reports, and sensor telemetry in a centralized fleet management platform. The EZ1’s compact form factor, global cellular support, accelerometer inputs, and accessory interfaces make it suitable for a variety of use cases such as logistics, rental fleets, and asset monitoring. With Plaspy handling protocol detection and a single shared reporting port, deployment and scaling are simplified for operations teams.

To learn more about Plaspy and platform features for fleet visibility and device management visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes with the manufacturer at https://www.systech-iot.com/ since protocol support and firmware features can change over time.
