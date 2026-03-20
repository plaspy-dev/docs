---
slug: /aplicom/a11_lte/protocol
id: a11_lte-protocol
sidebar_label: Protocol
title: Aplicom - A11 LTE Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for connecting Aplicom A11 LTE trackers to Plaspy using the shared Plaspy endpoint
keywords:
  - Aplicom A11 LTE
  - Aplicom A11 LTE protocol
  - Aplicom A11 LTE GPS tracker
  - Aplicom A11 LTE Plaspy
  - Aplicom GPS protocol
  - A11 LTE communication protocol
  - fleet tracking protocol
  - telematics device protocol
  - tracker Bluetooth LE integration
  - device connectivity Plaspy
---

# Aplicom - A11 LTE Protocol

This page provides a public overview of the communication context for using the Aplicom A11 LTE telematics unit with Plaspy. It focuses on how the device reports location and sensor data to Plaspy, what role the device protocol plays in that exchange, and the practical connection settings that typically matter when integrating the A11 LTE into a fleet management solution.

The Aplicom A11 LTE combines global mobile connectivity, Bluetooth LE support for beacons and sensors, and Over The Air updates for configuration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, or manufacturer implementation. For device specific details and the latest firmware guidance consult the manufacturer documentation.

## Protocol Overview

The protocol used by the A11 LTE governs how the device identifies itself, sends positional and sensor data, and receives configuration or update triggers. For integrations like Plaspy, the protocol is the bridge that turns raw device signals into usable telemetry and operational events.

- Enables the tracker to report GPS position, time, and movement status so Plaspy can display location and history.
- Carries telemetry beyond GPS such as Bluetooth tag presence, sensor readings, and basic I/O state reported by the device.
- Provides identity and session information that lets Plaspy associate incoming messages with a specific device record.
- Supports command and configuration flows such as OTA update triggers and remote parameter updates when implemented by the device.
- Ensures Plaspy can interpret incoming messages into standard fleet data points without requiring manual packet assembly by end users.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and includes automatic protocol detection to simplify setup. When an A11 LTE is configured to report to Plaspy, the platform will identify which supported protocol the incoming traffic uses and route the data to the correct parsing and storage pipeline.

- Plaspy receives connections at the domain d.plaspy.com and the public server IP 54.85.159.138 on port 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capability and network conditions.
- All devices in Plaspy use the same port, reducing the need to manage multiple endpoint ports for different tracker models.
- When an A11 LTE is pointed at the Plaspy endpoint and begins reporting, Plaspy automatically detects the tracker protocol so manual protocol selection inside Plaspy is typically not required.
- Proper device configuration to send reports to the Plaspy endpoint is the primary requirement for automatic detection to succeed.

## Transport and Connection Context

Connection choices such as UDP or TCP and the endpoint the device points to determine how the A11 LTE reaches Plaspy. These transport details are distinct from the protocol content itself but are essential to get right during initial deployment and troubleshooting.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be set to report to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices, keeping a single consistent ingress port across models.
- Network elements such as firewalls, NAT, and mobile operator routing can affect whether UDP or TCP performs better in a given deployment.
- Confirm that the device APN and mobile connectivity allow outbound traffic to the Plaspy endpoint on port 8888 for reliable reporting.

## Protocol Compatibility Notes

- Firmware differences across A11 LTE releases can alter which telemetry items are reported or how optional fields are formatted.
- Hardware revisions and optional accessories such as external sensors or Bluetooth beacons may introduce additional data elements that the platform should expect.
- Manufacturer side settings and configurable report intervals can change the frequency and size of messages the device sends.
- Selecting UDP versus TCP on the device affects delivery characteristics but not the core semantics of reported data.
- Validate transport and reporting settings by configuring the device to point to d.plaspy.com or 54.85.159.138 on port 8888 and confirming data appears in Plaspy.
- Always compare observed device behavior against the official Aplicom documentation before making deployment decisions.

## Why Protocol Understanding Matters

Understanding the communication protocol for the A11 LTE helps ensure a smooth integration with Plaspy, improves troubleshooting speed, and supports reliable long term operations. Clear expectations about what data the tracker will send and how it connects reduce time spent diagnosing connectivity or data mapping issues.

- Helps verify the device is sending the right telemetry and that Plaspy is receiving expected fields such as location and sensor states.
- Speeds troubleshooting by narrowing whether an issue is network related, transport related, or related to firmware behavior.
- Informs decisions about reporting intervals, power management, and Bluetooth sensor polling to balance battery life and visibility.
- Supports planning for OTA updates and remote configuration by understanding how configuration changes are delivered and acknowledged.
- Reduces integration risk by aligning fleet management expectations with what the device actually reports.

## Why Use Plaspy with This Protocol

Using the Aplicom A11 LTE with Plaspy offers a practical path to fleet and asset visibility across wide geographic areas thanks to the A11 LTE global connectivity and Plaspy’s unified ingestion pipeline. The combined approach lets organizations capture GPS position, Bluetooth tag presence, and other telemetry in a consolidated platform for monitoring and reporting.

Plaspy’s automatic protocol detection and single port design simplify device onboarding. Point an A11 LTE at d.plaspy.com or 54.85.159.138 on port 8888 with the chosen transport (UDP or TCP), and Plaspy will handle detection and data processing, allowing teams to focus on operational use rather than protocol plumbing. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://www.aplicom.com/ since protocol support and firmware behavior can change over time.
