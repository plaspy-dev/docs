---
slug: /bofan/pt502/protocol
id: pt502-protocol
sidebar_label: Protocol
title: Bofan - PT502 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Bofan PT502 GPS tracker and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Bofan PT502 protocol
  - Bofan PT502 GPS protocol
  - Bofan PT502 Plaspy compatibility
  - PT502 GPS tracker
  - PT502 communication protocol
  - Bofan vehicle tracker protocol
  - PT502 telemetry
  - fleet tracking PT502
  - Plaspy tracker protocol
  - vehicle GPS protocol
---

# Bofan - PT502 Protocol

This page describes the public protocol context for using the Bofan PT502 GPS tracker with Plaspy. It summarizes how the device communicates in general terms, what connection points Plaspy provides, and what to check when integrating the PT502 into a fleet management workflow. The content focuses on high level protocol and transport context rather than device internals or sensitive implementation details.

The PT502 is a 4G tracker designed for demanding vehicle environments and supports features such as RFID driver identification, ultrasonic fuel sensing, multiple camera inputs, and remote immobilizer control. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available features can vary by firmware version, hardware revision, or manufacturer configuration, so operators should validate device settings when deploying at scale.

## Protocol Overview

The tracker protocol is the defined method the PT502 uses to report position, sensor telemetry, and alarms to a server like Plaspy. At a public level the protocol allows the device to identify itself, report GPS and sensor data, and signal events that trigger alerts or actions inside the Plaspy platform.

- Enables regular position updates and event-driven reporting so Plaspy can display live location and historical tracks
- Transports sensor and alarm data such as RFID events, fuel sensor readings, and camera triggers for evidence capture
- Carries device identity and status information so Plaspy can associate messages with the correct asset and user account
- Supports remote commands and control channels used by Plaspy to request actions like immobilizer activation or configuration changes
- Works over standard network transports so devices can be directed to Plaspy endpoints for central collection

## How Plaspy Detects the Protocol

Plaspy accepts reporting from a wide range of trackers and automatically detects the tracker protocol when a device is properly configured to report to Plaspy’s endpoint. In most cases the user does not need to specify a protocol inside Plaspy if the device is pointed at the Plaspy server.

- Plaspy uses a shared network endpoint to collect telemetry and events at d.plaspy.com and at the public IP 54.85.159.138
- All devices supported by Plaspy use the same port so configuration is consistent across models
- The device may be configured to use UDP or TCP on port 8888 depending on model support and local network requirements
- When a PT502 is set to report to the Plaspy endpoint, Plaspy will match incoming messages to a known protocol and route data to the correct account
- Proper device identity and reporting triggers are important so Plaspy can reliably detect and process messages

## Transport and Connection Context

Connection and transport choices determine how the PT502 reaches Plaspy’s servers. The PT502 commonly uses cellular data to reach a central server and can be configured to target Plaspy by using the domain or IP address of the platform.

- The PT502 may be configured to report to d.plaspy.com or directly to 54.85.159.138
- Devices can use either UDP or TCP on port 8888 based on device firmware and chosen configuration
- Plaspy uses the same port for all supported devices, simplifying fleet level configuration
- Network routing, carrier NAT, and firewall rules can influence whether UDP or TCP is preferable for a given deployment
- Ensure the device APN and outbound connectivity allow traffic to Plaspy’s endpoint to avoid intermittent reporting gaps

## Protocol Compatibility Notes

- Firmware revisions may add or change features that affect message frequency, available telemetry fields, or command support
- Hardware revisions or optional peripheral modules (RFID, cameras, fuel sensors) can affect what data a PT502 sends
- Manufacturer configuration and regional firmware variants sometimes introduce protocol differences that should be validated before mass deployment
- Choosing UDP versus TCP can affect reliability and packet delivery characteristics depending on network conditions
- Always validate compatibility by testing a device against the Plaspy endpoint prior to bulk rollout
- For the most current device specific protocol and firmware details refer to the manufacturer documentation

## Why Protocol Understanding Matters

Understanding how the PT502 communicates helps fleet operators set up devices correctly, tune reporting behavior for cost and bandwidth, and troubleshoot issues when telemetry or alarms do not appear in Plaspy. A clear view of the communication pattern reduces integration friction and improves operational reliability.

- Simplifies initial setup and ensures devices point to d.plaspy.com or 54.85.159.138 on port 8888 with the correct transport
- Helps with diagnosing connectivity issues related to cellular carriers, NAT, or firewall policies
- Enables informed decisions about reporting intervals and event triggers to balance data cost with visibility
- Supports correct configuration of peripherals like RFID and cameras so their events are delivered to Plaspy
- Assists in planning firmware upgrade strategies when protocol-affecting changes are released

## Why Use Plaspy with This Protocol

Using the PT502 with Plaspy gives fleet operators consolidated visibility into vehicle location, driver identity, fuel status, camera evidence, and alarm events. Plaspy’s automatic protocol detection and shared endpoint make it straightforward to add PT502 units to an account when the device is configured to report to Plaspy’s endpoint.

Plaspy provides the central collection, alerting, and reporting layers that turn PT502 telemetry into operational insights for theft response, driver monitoring, fuel management, and maintenance scheduling. To learn more about Plaspy and how it can work with your PT502 devices visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time and should be confirmed with the manufacturer at https://www.bofancloud.com/ for the latest device specific information.
