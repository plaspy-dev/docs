---
slug: /arusnavi/arnavi_6/protocol
id: arnavi_6-protocol
sidebar_label: Protocol
title: Arusnavi - ARNAVI 6 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Arusnavi ARNAVI 6 and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Arusnavi ARNAVI 6 protocol
  - Arusnavi GPS protocol
  - ARNAVI 6 Plaspy compatibility
  - ARNAVI 6 communication protocol
  - ARNAVI 6 tracking protocol
  - Arusnavi tracker Plaspy
  - ARNAVI 6 fleet management
  - ARNAVI 6 telemetry integration
  - Arusnavi EGTS protocol
  - ARNAVI 6 CAN MODBUS integration
---

# Arusnavi - ARNAVI 6 Protocol

This page provides a public protocol context for using the Arusnavi ARNAVI 6 tracker with the Plaspy platform. It explains how ARNAVI 6 communicates with Plaspy in general terms, what to expect from device reporting, and which connection settings Plaspy accepts for reliable fleet tracking and telemetry.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and supported features can vary by device firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive aspects of communications and integration best practices.

## Protocol Overview

The ARNAVI 6 communication protocol governs how GNSS position, CAN bus data, sensor telemetry, and event flags are packaged and sent from the device to a backend server such as Plaspy. On Plaspy, received messages are parsed and mapped to vehicle state, alerts, and historical records for fleet operations.

- The protocol conveys positioning and timestamp information required for real time tracking and historical playback.
- Telemetry channels include CAN bus, serial sensors (RS232 RS485), BLE sensors, and digital inputs for ignition and door events.
- The device supports common fleet protocols noted in manufacturer material including INTERNAL EXTERNAL USER_AG and EGTS along with application level integrations like MODBUS.
- Offline logging on ARNAVI 6 holds records during connectivity loss and uploads stored data when the cellular or Wi Fi channel is restored.
- Protocol behavior may include device identification fields and time synchronization elements so Plaspy can associate incoming data with the correct asset.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic at a shared endpoint and port and uses automatic detection to determine the tracker protocol. In typical deployments users do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy listens on a single port for all supported devices which simplifies device configuration.
- When ARNAVI 6 sends data to the Plaspy endpoint the platform automatically determines the appropriate parsing and mapping rules.
- Proper device configuration to point to Plaspy is normally sufficient for detection and onboarding into the platform.
- If a device supports multiple protocol modes or firmware variants, ensure the device is configured to use a protocol mode compatible with the manufacturer documentation and Plaspy capabilities.
- For mixed fleets with different trackers the shared endpoint approach reduces the need for per device port management.

## Transport and Connection Context

ARNAVI 6 can use either UDP or TCP for upstream reporting depending on device configuration and network conditions. Plaspy accepts both transport types on its standard server address and port so devices can be set to the most appropriate transport for their environment.

- Devices may be configured to report to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy receives device traffic on port 8888 and the device may use UDP or TCP on that same port.
- All devices in Plaspy use the same port which streamlines fleet configuration and reduces operational complexity.
- Choose UDP when low overhead and minimal latency are priorities, or TCP when reliable delivery and connection state are needed, subject to device support.
- Ensure any intermediate firewalls or APNs permit outbound connections to the Plaspy endpoint and the selected transport protocol.

## Protocol Compatibility Notes

- Firmware differences can alter supported protocol modes and available telemetry fields; check the device firmware version when verifying behavior.
- Hardware revisions or optional modules such as Wi Fi, BLE, or CAN expansions may change which telemetry channels are available to Plaspy.
- Transport selection between UDP and TCP can affect delivery semantics and how the device recovers after network interruptions.
- Manufacturer supported protocols listed in device material include INTERNAL EXTERNAL USER_AG and EGTS along with MODBUS and CAN integrations; confirm which mode the device is using.
- Onboard black box logging and parameter settings (reporting intervals, event rules) can influence how much historical data Plaspy receives after reconnection.
- Validate device configuration against official Arusnavi documentation to confirm recommended settings for Plaspy integration.

## Why Protocol Understanding Matters

Understanding how ARNAVI 6 communicates with a backend platform helps ensure correct setup, faster troubleshooting, and reliable long term operation when integrated with Plaspy. Knowing what the device reports and how it connects reduces surprises during deployment and maintenance.

- Correct transport and endpoint settings ensure the device can reach the Plaspy server without unnecessary network blocks.
- Awareness of firmware and protocol modes helps diagnose missing telemetry or mismatched fields in received data.
- Knowledge of onboard logging behavior clarifies how data is recovered after connectivity loss and helps size storage needs.
- Understanding available telemetry channels such as CAN serial and BLE allows you to plan which sensors and vehicle interfaces will be visible in Plaspy.
- Being able to reference manufacturer protocol names and configuration options simplifies communication with vendor support and reduces time to resolution.

## Why Use Plaspy with This Protocol

Using ARNAVI 6 with Plaspy provides a practical path to integrate professional grade telemetry and vehicle interfaces into a single fleet management platform. ARNAVI 6 supplies multi constellation GNSS, dual SIM cellular resilience, CAN and serial data, BLE sensors, and offline logging which combine to give Plaspy the inputs needed for location, diagnostics, and event driven workflows.

Plaspy's shared endpoint approach and automatic protocol detection reduce configuration overhead for mixed fleets while maintaining the flexibility to accept the telemetry streams ARNAVI 6 offers. If you want to learn more about how Plaspy works with devices like ARNAVI 6 please visit https://www.plaspy.com. For the most current device specific protocol details firmware notes and implementation guidance verify the manufacturer documentation at https://www.arusnavi.ru since protocol support and firmware behavior can change over time.
