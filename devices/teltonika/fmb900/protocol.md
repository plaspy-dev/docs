---
slug: /teltonika/fmb900/protocol
id: fmb900-protocol
sidebar_label: Protocol
title: Teltonika - FMB900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMB900 integration with Plaspy covering connection settings transport and compatibility notes
keywords:
  - Teltonika FMB900 protocol
  - Teltonika FMB900 GPS protocol
  - FMB900 Plaspy compatibility
  - FMB900 communication protocol
  - Plaspy device protocol
  - Teltonika GPS tracker protocol
  - FMB900 tracking protocol
  - vehicle tracking FMB900
  - FMB900 BLE telemetry
  - FMB900 fleet management
---

# Teltonika - FMB900 Protocol

This page covers the public protocol context for using the Teltonika FMB900 tracker with Plaspy. It describes how the device communicates with Plaspy in general terms, which connection endpoints and transport options are used, and what to expect when integrating the FMB900 into a Plaspy deployment. The content focuses on non-sensitive, public information to help with setup and compatibility checks.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so consider this a practical overview rather than a firmware specific manual.

## Protocol Overview

The FMB900 uses a standard tracker reporting approach to deliver location and telemetry data to a remote server endpoint. The public protocol context for this model centers on reliable reporting of GNSS position, BLE sensor telemetry, and basic I/O status so that the data is usable in fleet management platforms such as Plaspy.

- The protocol enables the device to identify itself and send position and telemetry updates to the Plaspy endpoint.
- Reporting typically includes GNSS coordinates, speed and time, basic input and output states, and BLE sensor values when available.
- The communication channel between device and server is established over standard network transports so messages are delivered to Plaspy for parsing and display.
- Protocol details determine how data points are packaged and which telemetry fields are present, which affects Plaspy data mapping.
- Remote device management and firmware updates remain manufacturer handled, while telemetry flows to Plaspy for monitoring and analytics.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically detects the tracker protocol for devices that report correctly. In most cases the user does not need to choose a protocol inside Plaspy; proper device configuration to the Plaspy address is sufficient for automatic detection.

- Plaspy listens on the same port for all supported trackers to simplify device setup.
- When a device reports to the Plaspy endpoint, the platform examines the incoming data and determines the protocol for processing.
- Users typically configure the FMB900 to report to the Plaspy server address and Plaspy handles protocol identification automatically.
- No manual protocol selection is required in Plaspy if the tracker is pointed at the correct Plaspy host and port.
- Confirm device reporting settings are applied on the tracker side so the automatic detection can occur.

## Transport and Connection Context

Connection setup for the FMB900 is handled using standard IP transports. The device can be configured to report to Plaspy using either UDP or TCP depending on device support and the chosen configuration. Plaspy provides a single host and port that the FMB900 can use to send telemetry and location data.

- Devices may be configured to report to d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- The Plaspy listening port for device reports is 8888 and all devices use the same port to simplify provisioning.
- The FMB900 can be set to use UDP or TCP on port 8888 depending on device settings and network requirements.
- Choose UDP for lightweight reporting where network conditions and packet loss tradeoffs are acceptable, or TCP for a connection oriented approach when supported.
- Ensure APN and GPRS settings on the tracker are correct so the device can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- The FMB900 is compatible with Plaspy when configured to report to the Plaspy endpoint, but feature availability can vary with firmware releases.
- Firmware updates or hardware revisions may change the set of telemetry fields or BLE sensor handling; verify behavior after upgrades.
- Transport selection between UDP and TCP can affect delivery guarantees and should match your operational needs and tracker configuration.
- Manufacturer-side configuration tools such as Teltonika Configurator and FOTA mechanisms influence device behavior but do not change the public reporting destination.
- BLE telemetry from EYE Sensor and EYE Beacon is carried by the device into the tracker report and may appear differently depending on firmware and Plaspy mapping.
- Always validate critical functionality such as immobilizer control and BLE sensor reporting in a controlled test before full deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure that devices are configured correctly, data arrives as expected, and any anomalies can be diagnosed quickly. Good protocol awareness reduces setup time and improves operational reliability when using the FMB900 with Plaspy.

- It helps you confirm that the tracker is pointed to the correct Plaspy host and port and using the intended transport.
- Knowing which telemetry fields to expect allows faster mapping of those fields into Plaspy displays and alerts.
- Awareness of firmware and hardware version differences prevents surprises after remote updates or replacements.
- Protocol context makes troubleshooting easier when telemetry is missing or when BLE sensor data does not appear.
- It guides decisions about using UDP versus TCP based on performance and reliability needs.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB900 with Plaspy gives organizations a straightforward path to real time location, basic telemetry, and BLE enabled sensor inputs for fleet and asset monitoring. The FMB900’s compact form factor and BLE support make it a practical choice for applications where size and cost efficiency matter, while Plaspy receives and processes the device reports for visualization, alerts, and reporting.

To get started, configure the FMB900 to report to Plaspy at d.plaspy.com or 54.85.159.138 using port 8888 and choose UDP or TCP according to your network needs. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device is correctly configured. Learn more about Plaspy at https://www.plaspy.com and verify the latest device protocol and firmware details with the manufacturer at https://www.teltonika-gps.com/ so you are always working with the most current information.
