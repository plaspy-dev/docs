---
slug: /topfly/warriorx_300/protocol
id: warriorx_300-protocol
sidebar_label: Protocol
title: TopFly - WarriorX 300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly WarriorX 300 and how it communicates with Plaspy for reliable asset tracking and telemetry
keywords:
  - TopFly WarriorX 300 protocol
  - TopFly GPS tracker protocol
  - WarriorX 300 communication protocol
  - WarriorX 300 tracking protocol
  - TopFly asset tracker Plaspy
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - asset monitoring protocol
  - tracker telemetry reporting
  - long life battery tracker protocol
---

# TopFly - WarriorX 300 Protocol

This page describes the public protocol context for using the TOPFLYtech WarriorX 300 tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general terms so fleet managers and integrators can understand the role of connectivity and reporting when deploying this rugged, long life asset tracker.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a properly configured device reports to the platform. Exact runtime behavior, available features, and message timing can vary with firmware version, hardware revision, and manufacturer implementation, so device configuration and firmware state affect how the WarriorX 300 behaves in the field.

## Protocol Overview

The WarriorX 300 uses a device reporting protocol to send GNSS fixes, status telemetry and event notifications to Plaspy so location, condition, and alerts are available for monitoring and workflows. The protocol enables the tracker to identify itself to the server, deliver periodic and event driven updates, and support configuration or firmware operations within the limits of the device firmware.

- Delivers GNSS fixes and positional data to Plaspy so the asset appears on maps and in history playback
- Transports device telemetry such as battery state, tamper and removal alerts, and network status for operational monitoring
- Supports forwarding of BLE sensor telemetry for temperature and humidity to be associated with the device in Plaspy
- Exposes event reporting so geofence, movement, and low battery triggers can be acted upon in Plaspy workflows
- Enables remote configuration and firmware update mechanisms where supported by device firmware and provisioning tools

## How Plaspy Detects the Protocol

Plaspy receives connections from reporting devices on a shared inbound endpoint and automatically determines the tracker protocol based on incoming traffic to that endpoint. In most deployments you do not need to manually select a protocol inside Plaspy when the WarriorX 300 is configured to report to the Plaspy server.

- Plaspy exposes a common endpoint so devices reporting to the platform are handled consistently
- Plaspy automatically detects the tracker protocol when the device connects to the platform endpoint
- Users typically configure the device to report to d.plaspy.com or the Plaspy server IP and do not need to choose a protocol within Plaspy
- If the WarriorX 300 is configured to use MQTT or SMS as a transport those transports are ingested by Plaspy alongside TCP or UDP reporting where supported
- Proper device provisioning and correct reporting host ensure the automatic detection succeeds and the device data is parsed into Plaspy

## Transport and Connection Context

The WarriorX 300 supports multiple transports and can be configured to send telemetry and location data over available cellular links. Plaspy uses a consistent port and host for incoming tracker connections so device network settings can be standardized across large deployments.

- Devices may be configured to report to d.plaspy.com or directly to the Plaspy server IP 54.85.159.138
- The platform listens on port 8888 and all devices in Plaspy use the same port for reporting
- The WarriorX 300 can use TCP or UDP on port 8888 depending on device settings and network conditions
- Alternative transports reported in device documentation such as MQTT or SMS may also be used where supported and configured
- Because the Plaspy endpoint and port are shared, provisioning multiple WarriorX 300 units is simplified and consistent across a fleet

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can alter which transport modes and features are available on a specific WarriorX 300 unit
- Transport selection TCP or UDP can affect reliability and network behavior depending on cellular provider and coverage
- Encryption options and security features depend on the device firmware and configuration chosen at provisioning
- BLE sensor forwarding and accessory support require compatible firmware and correct sensor pairing on the device
- Validate that the device is pointed to d.plaspy.com or 54.85.159.138 and set to use port 8888 for Plaspy ingestion
- Always confirm feature availability such as FOTA or advanced reporting modes against the device firmware level and provisioning tools

## Why Protocol Understanding Matters

Understanding how the WarriorX 300 communicates with Plaspy helps ensure successful setup, predictable battery life, and reliable alerting for asset protection and operations.

- Ensures the device is pointed to the correct host and port so data reaches Plaspy
- Helps balance reporting frequency and battery life by aligning device reporting profiles with Plaspy expectations
- Supports faster troubleshooting when connectivity issues or missing telemetry occur
- Enables correct mapping of BLE sensor data and event types into Plaspy notifications and workflows
- Reduces deployment risk by confirming transport and security options are compatible with operator requirements

## Why Use Plaspy with This Protocol

Using the WarriorX 300 with Plaspy gives operators a straightforward path to long term, low maintenance asset tracking with integrated condition telemetry. Plaspy ingests location, status, and event data so teams can track trailers, containers and distributed equipment while benefiting from adaptive reporting modes that extend battery life in field deployments.

To learn more about Plaspy and how devices integrate with the platform visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and provisioning instructions verify information at the manufacturer website https://www.topflytech.com/ as implementations can change over time.
