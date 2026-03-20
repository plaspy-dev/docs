---
slug: /neomatica/adm007/protocol
id: adm007-protocol
sidebar_label: Protocol
title: Neomatica - ADM007 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Neomatica ADM007 GPS tracker integration with Plaspy including connection and compatibility context
keywords:
  - Neomatica ADM007 protocol
  - ADM007 GPS protocol
  - ADM007 Plaspy compatibility
  - Neomatica GPS tracker protocol
  - ADM007 BLE tracking
  - Plaspy device compatibility
  - vehicle tracking protocol
  - fleet management tracker
  - BLE telemetry ADM007
  - asset tracker protocol
---

# Neomatica - ADM007 Protocol

This page provides a public protocol overview for using the Neomatica ADM007 BLE tracker with the Plaspy platform. It summarizes how the device communicates in general terms, how Plaspy receives and processes tracker data, and what to consider when integrating ADM007 devices for fleet and asset monitoring. The focus here is on publicly safe, manufacturer neutral protocol context rather than proprietary or sensitive implementation details.

Plaspy receives device traffic on a shared endpoint and port and automatically detects the tracker reporting protocol when a device is correctly pointed to the Plaspy endpoint. Plaspy’s public server domain is d.plaspy.com and the public server IP is 54.85.159.138, and Plaspy accepts device connections on port 8888. The ADM007 may be configured to use UDP or TCP on that same port depending on device settings and network conditions. Exact protocol behavior can vary by ADM007 firmware, hardware revision and manufacturer implementation, so consult device documentation for firmware specific details.

## Protocol Overview

The communication protocol for ADM007 governs how the tracker reports GNSS positions, device status, and BLE sensor telemetry to a remote platform such as Plaspy. At a high level the protocol ensures the device can identify itself, deliver usable location and sensor data, and provide status for remote monitoring and management.

- Transports the tracker GNSS position and timing information to the server for live and historical tracking.
- Carries BLE sensor telemetry from connected peripherals into the platform so temperature, humidity, tilt and tag presence can be correlated with location.
- Conveys device health and status indicators such as battery, jamming alerts and connection state to enable platform alerts.
- Supports route memory and periodic uploads so historical routes recorded on the device are available on Plaspy.
- Enables remote configuration and updates via the tracker control channels supported by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy listens on a single, shared endpoint and automatically detects the protocol used by a reporting tracker once that tracker begins sending data to the platform. In most cases users only need to ensure the ADM007 is configured to report to the Plaspy endpoint and Plaspy will handle protocol identification on receipt.

- Plaspy uses the domain d.plaspy.com and the server IP 54.85.159.138 as public endpoints for device reporting.
- All Plaspy devices use the same network port so incoming tracker traffic should target port 8888.
- Devices can be configured to use either UDP or TCP on port 8888 depending on device capability and installation preferences.
- When an ADM007 reports to the Plaspy endpoint, Plaspy automatically detects which tracker protocol is being used and ingests data accordingly.
- Typically there is no manual protocol selection inside Plaspy when a device is correctly pointed to the Plaspy server.

## Transport and Connection Context

Understanding the transport and connection context is important to ensure reliable delivery of position and telemetry data from the ADM007 to Plaspy. The ADM007 supports typical cellular data reporting channels and may also use SMS or Bluetooth for configuration and fallbacks.

- The device may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts connections on port 8888 and all devices on the platform use that same port for reporting.
- ADM007 can send data over UDP or TCP on port 8888 depending on how the device is configured and network reliability needs.
- Cellular data via GPRS is the primary transport for live GNSS and BLE sensor telemetry from the ADM007.
- SMS and Bluetooth are commonly used by installers for device configuration and for SMS based fallbacks where supported by the device.

## Protocol Compatibility Notes

- Firmware variations can change the exact fields, telemetry cadence and behavior of the tracking protocol on ADM007 units.
- Hardware revisions sometimes alter peripheral support such as the number or type of BLE sensors recognized by the device.
- Manufacturer side customizations and region specific firmware can create differences in how the tracker reports specific status messages.
- Transport selection between UDP and TCP affects delivery characteristics and should match the configuration supported by the specific device firmware.
- BLE sensor behavior and reporting intervals depend on paired peripheral types and the ADM007 firmware configuration.
- Always validate compatibility and the expected feature set against the manufacturer documentation for the device firmware revision you are deploying.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps make device setup, troubleshooting and long term operation smoother when integrating ADM007 devices with Plaspy. Knowing what the protocol transports and how the device connects reduces downtime and improves data quality for fleet operations.

- Ensures the device is pointed to the correct Plaspy endpoint so data is received and parsed automatically.
- Helps diagnose common issues such as missing BLE telemetry or incomplete route uploads by checking transport and firmware behavior.
- Guides choices about UDP versus TCP based on network reliability and message delivery needs.
- Informs data usage expectations and helps configure reporting intervals that balance battery life and tracking fidelity.
- Supports more efficient firmware update planning and device lifecycle management when you know what protocol features are required.

## Why Use Plaspy with This Protocol

Using the ADM007 with Plaspy gives organizations compact hardware capable of GNSS position reporting plus BLE sensor telemetry tied into a single fleet management platform. The ADM007’s low data consumption, on device route storage and support for multiple BLE peripherals make it well suited for discreet vehicle installs, distributed asset telemetry and temperature sensitive logistics where both location and environmental monitoring are required.

Plaspy’s shared endpoint model and automatic protocol detection simplify integration for ADM007 deployments. If you want to learn more about Plaspy and how it can work with compatible trackers like the ADM007 visit https://www.plaspy.com. For firmware specific behavior, device configuration instructions and the latest manufacturer details please verify the current documentation at https://neomatica.com/ since protocol support and device implementations can change over time.
