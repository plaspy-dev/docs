---
slug: /eelink/tk121/protocol
id: tk121-protocol
sidebar_label: Protocol
title: EElink - TK121 Protocol
sidebar_class_name: menu_item_tracker
description: A compact guide to the public protocol context for using the EElink TK121 with Plaspy compatible platforms
keywords:
  - eelink tk121 protocol
  - eelink tk121 gps protocol
  - eelink tk121 communication
  - eelink tk121 tracking protocol
  - MoveLink protocol 1.9 2.0
  - plaspy device compatibility
  - plaspy tracker protocol
  - vehicle gps tracker protocol
  - tk121 real time tracking
  - eelink protocol integration
---

# EElink - TK121 Protocol

This page describes the public protocol context for using the EElink TK121 GPS tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general terms, what role the reporting protocol plays, and what to check when integrating the TK121 into fleet or security workflows. This information is intended to help technical users and integrators understand the connection and reporting relationship between the TK121 and Plaspy without exposing sensitive implementation details.

The TK121 is commonly shipped with MoveLink protocol 1.9/2.0 support and offers GPS with LBS fallback plus AGPS assistance. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer configuration, so verify device behavior against current EElink documentation and firmware notes.

## Protocol Overview

The tracker reporting protocol defines how the TK121 identifies itself, sends position fixes, and reports telematics and alarm events to a backend platform such as Plaspy. For integrations that rely on MoveLink, the protocol permits real time location updates, status reporting, and remote configuration commands sent by the platform or via supported management channels.

- Enables the TK121 to transmit GNSS fixes, cell based fallback positions, and AGPS assisted updates to Plaspy.
- Carries event and status telemetry such as ACC ignition state, power and battery alerts, overspeed and vibration alarms.
- Allows remote parameter setting and configuration triggers using platform commands or SMS depending on device setup.
- Provides an identifier that Plaspy uses to associate incoming messages with the correct device record and account.
- Supports the forwarding of alarm events and telemetry so Plaspy can trigger notifications and automation rules.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared network endpoint and applies automatic protocol detection so most properly configured devices begin reporting without manual protocol selection inside the platform. If the TK121 is pointed to Plaspy and uses a supported MoveLink variant, Plaspy will match incoming messages to the device and begin ingesting location and event data.

- Plaspy listens on a common endpoint that devices report to at d.plaspy.com and on the corresponding server address 54.85.159.138.
- All devices supported by Plaspy connect using the same port, which simplifies device configuration and onboarding.
- The TK121 may be configured to use TCP or UDP to reach the Plaspy endpoint depending on device settings and network conditions.
- In most cases you do not need to manually choose a protocol in Plaspy if the TK121 is correctly configured to report to the Plaspy endpoint.
- Verify device identifiers (IMEI or device ID) and account settings so Plaspy can correctly associate incoming reports with your fleet.

## Transport and Connection Context

Connection choices affect how the TK121 delivers messages to Plaspy but do not change the public protocol role. The device may use UDP or TCP on port 8888 to transmit data and Plaspy accepts either transport for this model. Devices can be set to resolve the Plaspy host name or to target the provided server address directly.

- The TK121 may be configured to use either UDP or TCP on port 8888 when sending data to Plaspy.
- Devices intended for Plaspy reporting should point to the host d.plaspy.com or to the server address 54.85.159.138 as an alternative.
- Port 8888 is used uniformly by Plaspy for all supported tracker devices, so the same outbound port simplifies field configuration.
- Network stability, NAT behavior, and carrier restrictions can influence whether TCP or UDP performs better in a given installation.
- Confirm that firewall and APN settings on the cellular link allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change available commands, reporting frequency, and optional fields. Check the device firmware version when validating integration behavior.
- Hardware variations and accessory options (for example relay wiring or external sensors) may alter which telemetry fields are present in reports.
- MoveLink protocol variants 1.9 and 2.0 are commonly cited for the TK121; confirm the exact protocol variant in use on your units.
- Choosing TCP or UDP transport may affect delivery characteristics but not the fact that Plaspy accepts reports on the common port.
- Manufacturer default settings may point to a different server; ensure the device is configured to report to the Plaspy endpoint.
- For device specific command formats, parameter names, and SMS control strings, consult EElink documentation for the correct, current syntax.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable onboarding, correct interpretation of device data, and faster troubleshooting when devices do not behave as expected. A clear grasp of what the protocol carries and how the device connects lets administrators tune reporting, alarms, and workflows for operational needs.

- Confirms that position, alarm, and status fields sent by the TK121 map to the expected Plaspy telemetry slots.
- Helps diagnose connection problems by narrowing whether issues are transport, configuration, or firmware related.
- Supports correct configuration of remote parameter updates and immobilizer controls when those features are required.
- Enables planning for network and firewall rules so devices can consistently reach the Plaspy endpoint.
- Reduces onboarding time by aligning device settings with Plaspy expectations before deployment.

## Why Use Plaspy with This Protocol

Using the TK121 with Plaspy provides centralized real time visibility and event handling for fleets and security operations. The combination of dual positioning (GPS with LBS fallback), AGPS assistance, and MoveLink compatibility lets organizations capture timely location updates and essential telemetry while relying on Plaspy to present data, trigger alerts, and power operational workflows.

Plaspy’s architecture simplifies device onboarding by exposing a single endpoint and port that the TK121 can be configured to report to, and by automatically detecting the device protocol so most units start reporting without manual protocol selection. To learn more about Plaspy and how it can integrate TK121 devices into your fleet or security processes visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific information on the manufacturer site https://www.eelink.com.cn/.
