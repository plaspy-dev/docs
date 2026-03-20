---
slug: /itriangle/obd_ii/protocol
id: obd_ii-protocol
sidebar_label: Protocol
title: iTriangle - OBD II Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the iTriangle OBD II GPS tracker and how it communicates with Plaspy for integration and telemetry
keywords:
  - iTriangle OBD II protocol
  - iTriangle OBD II GPS protocol
  - iTriangle OBD II communication protocol
  - iTriangle OBD II tracking protocol
  - iTriangle GPS tracker protocol
  - Plaspy device compatibility
  - OBD II telemetry protocol
  - vehicle diagnostics tracking
  - fleet management GPS protocol
  - OBD II CAN bus tracking
---

# iTriangle - OBD II Protocol

This page describes the public protocol context for using the iTriangle OBD II tracker with Plaspy. It summarizes how the device communicates telemetry, GNSS fixes, and vehicle diagnostics to the cloud in a way that is useful for integration, deployment planning, and troubleshooting without exposing private or sensitive implementation details.

The OBD II is a professional grade plug and play OBD II GNSS cellular tracker with internal antennas, CAN bus access and OTA update capability. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, public facing protocol context and practical integration notes.

## Protocol Overview

The tracker reporting protocol is the mechanism by which the iTriangle OBD II sends GNSS fixes, OBD II/CAN telemetry, accelerometer and event information to a cloud endpoint so platforms like Plaspy can ingest, display and act on the data. The protocol allows the device to identify itself, report periodic and event driven data, and receive remote configuration or firmware updates when supported.

- Enables delivery of GNSS location fixes and historical tracks to Plaspy for live maps and reporting.
- Transports vehicle telemetry and diagnostics such as OBD II and CAN data needed for maintenance and analytics.
- Conveys event signals like tamper alerts, power loss, and accelerometer events that support alerts and workflows.
- Supports remote configuration and OTA/FOTA updates through control channels provided by the manufacturer.
- Provides the identification and status fields Plaspy uses to associate a device with a customer account and vehicle record.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and automatically detects the tracker protocol for supported devices, including the iTriangle OBD II. In typical deployments the device is configured to report to Plaspy and no manual protocol selection is required inside the Plaspy platform.

- Plaspy listens on a single port used by all supported devices and automatically determines the tracker protocol on received connections.
- If the iTriangle OBD II is configured to report to the Plaspy endpoint, Plaspy will identify the device by its reported identifier and process telemetry accordingly.
- Users generally do not need to choose a protocol in Plaspy if the device is correctly pointing to the Plaspy endpoint.
- Proper device configuration at the tracker side (server address, transport mode, and reporting intervals) ensures automatic detection and correct ingestion.
- Review device and firmware documentation if a device does not appear to be detected automatically.

## Transport and Connection Context

The iTriangle OBD II supports common IP transports and remote configuration channels; exact options depend on firmware and regional cellular support. For Plaspy integration, devices can be pointed at the Plaspy server using the shared connection details and either UDP or TCP depending on the device configuration.

- Plaspy server domain is d.plaspy.com and the known public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen transport mode.
- Pointing the tracker to d.plaspy.com or 54.85.159.138 on port 8888 is the common method to direct reports to Plaspy.
- The OBD II also supports remote configuration channels such as SMS and Bluetooth for factory provisioning and field adjustments where applicable.

## Protocol Compatibility Notes

- Firmware version differences can change message timing, supported fields, and available diagnostics; always note the device firmware when validating behavior.
- Hardware revisions or regional variants of the OBD II may expose different sets of OBD II PIDs or CAN channels.
- Transport selection (UDP versus TCP) affects delivery semantics; choose the transport supported by the specific firmware build and network environment.
- Manufacturer configuration options may enable or disable certain telemetry streams or reduce reporting frequency for power management.
- Plaspy automatically handles protocol detection, but validating that the device is correctly configured to the Plaspy endpoint is a critical first step.
- For the most precise compatibility information, consult iTriangle documentation for the device firmware revision in use.

## Why Protocol Understanding Matters

Understanding how the tracker communicates helps ensure reliable setup, faster troubleshooting, and predictable operational behavior when the device is used with Plaspy. A clear view of the public protocol context reduces deployment friction and supports accurate expectations about what telemetry will be available.

- Speeds initial provisioning by confirming correct server address, transport mode, and reporting intervals.
- Helps diagnose missing data or partial telemetry by checking firmware capabilities and enabled streams.
- Supports planning for fleet scale by understanding message frequency, event reporting, and potential data volume.
- Guides firmware update strategies and field configuration to enable features like OTA/FOTA and remote diagnostics.
- Allows operations teams to align device capabilities with Plaspy dashboards, alerts, and reporting needs.

## Why Use Plaspy with This Protocol

Using the iTriangle OBD II with Plaspy provides a straightforward path to capture real time location, OBD II diagnostics, and event-driven telemetry for fleet management, rental operations and vehicle monitoring. The device's plug and play form factor, internal antennas, and CAN access make it practical for rapid deployment while Plaspy handles ingestion, mapping, alerts and reporting.

Plaspy's shared connection settings simplify integration: point the device to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP as supported, and Plaspy will automatically detect the tracker protocol and begin processing data. To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and implementation guidance consult iTriangle's official documentation at https://www.itriangle.net/.
