---
slug: /teltonika/fmp100/protocol
id: fmp100-protocol
sidebar_label: Protocol
title: Teltonika - FMP100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMP100 integration with Plaspy server settings and transport context
keywords:
  - Teltonika FMP100 protocol
  - Teltonika FMP100 GPS protocol
  - Teltonika FMP100 communication
  - FMP100 Plaspy compatibility
  - Teltonika tracker protocol
  - GPS tracker protocol Plaspy
  - vehicle tracking FMP100
  - BLE sensor telemetry FMP100
  - plug and play GPS tracker
  - fleet tracking Teltonika
---

# Teltonika - FMP100 Protocol

This page provides a public, high level description of the communication context for using the Teltonika FMP100 with Plaspy. It covers how the tracker reports positioning, event and BLE sensor telemetry to Plaspy and what to consider when configuring the device to send data to the platform. The focus is on public protocol context and connection settings rather than sensitive parser or vendor internal details.

The FMP100 is a compact plug and play tracker with native GPS positioning, Bluetooth Low Energy sensor support, and simple event signaling via a built in button, RGB LED and buzzer. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so device specific configuration and firmware details should be validated against official Teltonika resources where needed.

## Protocol Overview

The protocol used by the FMP100 governs how the device identifies itself, sends location updates, delivers BLE sensor telemetry and reports local events to a remote server such as Plaspy. This page explains the public role of that communication channel without attempting to reproduce vendor packet formats or internal parsing logic.

- Carries recurring GPS position reports and device status updates that Plaspy ingests for mapping and reporting.
- Transmits BLE sensor readings and paired accessory telemetry when available so environmental data appears in Plaspy dashboards.
- Relays button presses and local event signals such as panic or driver interactions as discrete events to the platform.
- Allows remote configuration and firmware workflows to be initiated via vendor tools while the device reports its operational state to Plaspy.
- Enables Plaspy to correlate device identity and telemetry with fleet objects for alerts, geofencing and historical playback.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and automatically determines the appropriate tracker protocol for devices that are correctly configured to report. In most cases users do not need to manually select a protocol inside Plaspy when the device is pointed at the Plaspy endpoint and uses the supported transport.

- Plaspy listens on the domain d.plaspy.com and the public IP 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port and Plaspy uses that single port to receive reports.
- The configured port for device reporting is 8888 and devices may use UDP or TCP to reach Plaspy.
- When a device sends data to the Plaspy endpoint the platform performs automatic protocol detection to associate incoming telemetry with the correct device identity and format.
- Proper device configuration to report to d.plaspy.com or 54.85.159.138 on port 8888 is the usual requirement for automatic detection to succeed.

## Transport and Connection Context

Connection choices such as TCP versus UDP and the DNS or IP endpoint used by the device determine how telemetry reaches the Plaspy server but do not change the high level purpose of the protocol. The FMP100 supports standard mobile transport options and can be pointed to Plaspy using either the domain name or the server IP.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and operator preference.
- The Plaspy server can be reached by domain at d.plaspy.com or directly by IP at 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies fleet level configuration and provisioning.
- Transport selection can affect reliability characteristics under different network conditions; choose the transport that matches your operational priorities and the device capabilities.
- Ensure that any network firewalls or APN settings used by the SIM allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields and feature flags; always check the device firmware level when troubleshooting compatibility.
- Hardware variants or regional product SKUs may expose different radio band support or sensor behavior that affects what data is reported to Plaspy.
- Manufacturer side configuration tools and FOTA workflows may be required to enable BLE telemetry or to change the transport from UDP to TCP.
- Network conditions and mobile operator restrictions can influence delivery and session behavior even when the device is configured correctly.
- Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is the standard connection step, but confirm settings against the device handbook for exact parameter names and fields.
- Validate any advanced integration needs such as custom event mapping with both Plaspy documentation and Teltonika resources.

## Why Protocol Understanding Matters

Knowing the role and limits of the FMP100 communication protocol helps ensure reliable reporting, faster troubleshooting and better operational outcomes when the device is used with Plaspy. A practical understanding reduces integration time and prevents common misconfigurations.

- Helps confirm the device is pointed at the correct Plaspy endpoint and using port 8888 so automatic detection can occur.
- Lets administrators choose the appropriate transport mode, UDP or TCP, based on network reliability and device capabilities.
- Aids in interpreting device logs and event streams in Plaspy when mapping alerts, BLE telemetry and button events.
- Speeds diagnosis when telemetry stops or when data fields differ after a firmware update.
- Guides decisions about remote configuration and FOTA procedures that may change reporting behavior.

## Why Use Plaspy with This Protocol

Using the Teltonika FMP100 with Plaspy provides a quick to deploy tracking solution for fleets that need rapid provisioning, BLE sensor telemetry and basic event signaling without hardwiring. The plug and play form factor, combined with BLE support for temperature and movement sensors, makes the FMP100 well suited to short term rentals, car sharing and pilot programs where speed of deployment and portability are priorities.

To learn more about Plaspy and how it works with devices like the FMP100 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and configuration guidance consult the manufacturer at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
