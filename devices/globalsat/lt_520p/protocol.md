---
slug: /globalsat/lt_520p/protocol
id: lt_520p-protocol
sidebar_label: Protocol
title: GlobalSat - LT-520P Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GlobalSat LT 520P and how it communicates with Plaspy for livestock tracking
keywords:
  - GlobalSat LT-520P protocol
  - GlobalSat LT-520P GPS protocol
  - LT-520P Plaspy compatibility
  - LT-520P communication protocol
  - LT-520P tracking protocol
  - GlobalSat GPS tracker protocol
  - Plaspy device protocol
  - livestock GPS tracker protocol
  - LoRaWAN livestock tracker
  - BLE configuration LT-520P
---

# GlobalSat - LT-520P Protocol

This page explains the public protocol context for using the GlobalSat LT-520P with Plaspy. It focuses on the high level communication and integration points that enable the LT-520P to deliver GNSS positions, behavior telemetry, and event reports into Plaspy for mapping, herd analytics, and alerting. The LT-520P is an ultra rugged, battery powered tracker built for long term livestock monitoring using GNSS (GPS plus GLONASS), LoRaWAN uplinks, and Bluetooth Low Energy for local configuration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Public Plaspy settings include the server domain d.plaspy.com and server IP 54.85.159.138 using port 8888. The device may be configured using UDP or TCP on port 8888 and Plaspy uses the same port for all supported devices. Exact protocol behavior and message timing can vary by firmware revision, hardware variant, regional LoRaWAN settings, and manufacturer implementation, so firmware specific details should be validated against official GlobalSat documentation.

## Protocol Overview

The communication protocol governs how the LT-520P delivers location, activity, and status information to backend systems such as Plaspy and how local management is performed via BLE. For the LT-520P, the primary telemetry path is LoRaWAN uplinks for low power wide area reporting, while BLE provides a local channel for configuration and OTA updates.

- Enables regular GNSS position reporting and compact activity summaries for mapping and alerts in Plaspy.
- Carries device identity, battery and health indicators, and behavior analytics needed for herd level workflows.
- Allows local configuration and firmware maintenance through BLE when field technicians are nearby.
- Supports configurable reporting cadence so operators can trade update frequency for multi year battery life.
- Integrates with Plaspy backends where the platform automatically interprets supported device messages for dashboards and alerts.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and uses its detection processes to match incoming messages to the correct device type and parser. In most cases a device that is correctly pointed at the Plaspy endpoint will be identified automatically without manual protocol selection inside Plaspy.

- Devices should be configured to report to d.plaspy.com or 54.85.159.138 using port 8888 so Plaspy can receive telemetry.
- Plaspy accepts device traffic on port 8888 and supports both UDP and TCP reporting where device firmware supports IP transport.
- Plaspy automatically detects the tracker protocol for supported devices once telemetry reaches the Plaspy endpoint.
- Users typically do not need to choose a protocol inside Plaspy if the device is configured to send data to the Plaspy server address.
- For LT-520P deployments using LoRaWAN, Plaspy ingests uplinks provided by the LoRaWAN network integration rather than direct IP reporting.

## Transport and Connection Context

Connection context covers how telemetry is transported from the tracker to Plaspy and how local management occurs. The LT-520P favors LoRaWAN uplinks for long battery life and may use BLE for direct device configuration, while other trackers in Plaspy deployments sometimes use IP based transports.

- The device may be configured using UDP or TCP on port 8888 where IP based reporting is supported by the tracker and network.
- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138; the port used by all devices in Plaspy is 8888.
- LoRaWAN is the primary uplink technology for LT-520P telemetry in many deployments, with data funneled to Plaspy through network server integrations.
- BLE is used locally for device configuration, diagnostics, and firmware updates and does not route telemetry to Plaspy directly.
- Regional LoRaWAN band selection and network server setup can affect how and when uplinks reach Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change reporting cadence, field definitions, or feature availability; confirm behavior for the firmware version in use.
- Hardware revisions or regional variants may alter supported radio bands or local configuration options.
- For LT-520P, LoRaWAN regional band support is configuration dependent and should be validated for your deployment region.
- If IP based reporting is required, verify that the specific device firmware supports UDP or TCP reporting to the d.plaspy.com endpoint on port 8888.
- BLE based configuration and OTA processes are local operations and may use manufacturer tooling; Plaspy receives telemetry via network uplinks.
- Always validate compatibility with the most recent manufacturer documentation and with your LoRaWAN network server settings.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure correct setup, efficient troubleshooting, and predictable long term behavior of devices within Plaspy. Protocol awareness also lets teams balance update frequency against battery life and design appropriate data workflows for alerts and analytics.

- Helps ensure the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 so Plaspy can receive telemetry.
- Clarifies whether the tracker will report directly over IP or via LoRaWAN network server integrations to Plaspy.
- Enables informed choices about reporting cadence to optimize battery life versus real time visibility.
- Reduces time spent diagnosing missing or malformed telemetry by verifying firmware version and transport settings.
- Supports planning for local maintenance using BLE for configuration and OTA when network based changes are not possible.

## Why Use Plaspy with This Protocol

Using the LT-520P with Plaspy provides a practical solution for livestock operations that need long term, low maintenance telemetry combined with behavior analytics. The LT-520P’s LoRaWAN efficiency and GNSS positioning feed location and activity insights into Plaspy so teams can monitor herd movement, receive heat detection alerts, and analyze historical trends while minimizing field service visits.

To learn more about how Plaspy handles device connectivity and supported trackers, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and regional configurations for the LT-520P, please verify current information at the manufacturer site https://www.globalsat.com.tw/ as protocol support and firmware behavior can change over time.
