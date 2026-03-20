---
slug: /navtelekom/smart_s_4535/protocol
id: smart_s_4535-protocol
sidebar_label: Protocol
title: Navtelekom - СМАРТ S-4535 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom СМАРТ S-4535 and how it communicates with Plaspy
keywords:
  - Navtelekom СМАРТ S-4535 protocol
  - Navtelekom S 4535 GPS protocol
  - СМАРТ S-4535 Plaspy compatibility
  - Navtelekom GPS tracker protocol
  - S-4535 communication protocol
  - Navtelekom fleet tracking protocol
  - Plaspy tracker protocol
  - vehicle telemetry S-4535
  - S-4535 CAN bus integration
  - Navtelekom tracker documentation
---

# Navtelekom - СМАРТ S-4535 Protocol

This page describes the public protocol context for using the Navtelekom СМАРТ S-4535 tracker with the Plaspy platform. It focuses on how the device communicates in broad, non-sensitive terms and what to expect when integrating S-4535 hardware into a Plaspy deployment for fleet management, telemetry and event reporting.

The СМАРТ S-4535 is a Plaspy compatible GPS tracker with GLONASS and GPS positioning, a 4G modem with dual SIM redundancy, CAN bus and multiple serial interfaces, and an internal backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware version, hardware revision and manufacturer implementation.

## Protocol Overview

The communication protocol defines how the S-4535 sends location, telemetry and event data to a central server and how remote commands or configuration updates can be applied. For Plaspy integration this means the protocol must present identifiable device reporting and telemetry channels that Plaspy can map into its monitoring and reporting features.

- Enables the S-4535 to report GPS and GLONASS position fixes to a remote endpoint for live tracking.
- Carries vehicle telemetry including CAN bus data, digital input states and sensor readings toward the server.
- Communicates event reports such as ignition changes, geofence triggers and configured Complex Events conditions.
- Provides a consistent device identity so Plaspy can associate incoming data with the correct vehicle and configuration.
- Supports transport over common IP protocols so the device can send data through cellular 4G links to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a common endpoint and port and uses automatic detection to recognize the reporting format of supported trackers. In most cases a properly configured S-4535 will begin sending data to Plaspy without requiring manual protocol selection in the platform.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the configured port for device connections is 8888.
- The device may be configured to use either UDP or TCP on port 8888 according to installer preference and device support.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when the device sends data to the shared endpoint, so manual protocol selection in the platform is typically not required.

## Transport and Connection Context

Connection context covers how the S-4535 reaches Plaspy over the mobile network and what connection settings are commonly adjusted during installation. These settings are about network transport and addressing rather than internal message formats.

- Devices may be pointed to the hostname d.plaspy.com as the reporting endpoint.
- As an alternative, devices can be configured to report directly to the numeric endpoint 54.85.159.138.
- The S-4535 can use UDP or TCP transport depending on device firmware and installer choice, both on port 8888.
- Plaspy uses the same port for all supported devices which reduces configuration differences across mixed fleets.
- Cellular dual SIM redundancy is handled locally by the device to keep data flowing to Plaspy when one network is unavailable.

## Protocol Compatibility Notes

- Protocol behavior can differ between firmware versions; always check the device firmware level when validating compatibility.
- Hardware revisions or regional variants may introduce small differences in available telemetry channels or interface wiring.
- Manufacturer tools and remote control systems such as the DRC may affect how configuration commands are applied and which features are exposed.
- Choice of transport (UDP versus TCP) can affect delivery semantics but both are supported for reporting to Plaspy on the shared port.
- Integrations that rely on CAN bus or serial interfaces should verify which CAN signals and serial protocols are available on the specific S-4535 unit.
- For critical deployments validate behavior against the official Navtelekom documentation and configuration tools.

## Why Protocol Understanding Matters

A practical understanding of the device protocol helps installers and operators ensure reliable reporting, correct mapping of telemetry into Plaspy dashboards, and efficient troubleshooting when issues occur.

- Faster setup by matching device reporting settings to Plaspy endpoint and transport options.
- More effective troubleshooting when data is missing, duplicated, or delayed by checking firmware and transport mode.
- Accurate telemetry mapping so CAN signals, inputs and sensor channels appear correctly in reports and alerts.
- Better planning for remote management and firmware updates using the device remote control capabilities.
- Reduced integration time by understanding what the device will and will not report out of the box.

## Why Use Plaspy with This Protocol

Using the Navtelekom СМАРТ S-4535 with Plaspy brings vehicle level telemetry, dual SIM resilience and on-device event logic into a centralized fleet platform. Plaspy maps incoming position, CAN bus and sensor data into live maps, historical playback, alerts and reporting so operational teams can maintain visibility and respond to events faster.

If you want to learn more about Plaspy and how it handles tracker integrations, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and hardware revisions consult the manufacturer's documentation at https://www.navtelecom.ru/ as protocol support and firmware behavior can change over time.
