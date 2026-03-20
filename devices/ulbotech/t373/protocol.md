---
slug: /ulbotech/t373/protocol
id: t373-protocol
sidebar_label: Protocol
title: Ulbotech - T373 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ulbotech T373 compatibility with Plaspy including connection and detection guidance
keywords:
  - Ulbotech T373 protocol
  - Ulbotech T373 GPS protocol
  - Ulbotech T373 Plaspy
  - T373 tracker protocol
  - Ulbotech GPS protocol
  - T373 communication protocol
  - Plaspy device compatibility
  - vehicle tracking T373
  - fleet tracking Ulbotech T373
  - T373 protocol guide
---

# Ulbotech - T373 Protocol

This page provides a public, non sensitive overview of the communication protocol context for using the Ulbotech T373 tracker with the Plaspy platform. It describes how the device typically reports data to Plaspy, what role the protocol plays in reliable reporting, and what to check when integrating a tracker into a fleet setup.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behaviour and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a general level and encourages validation against official manufacturer documentation.

## Protocol Overview

The device protocol is the set of rules and conventions the tracker uses to send telemetry and receive commands. For integration with Plaspy, the protocol enables the tracker to identify itself, transmit location and status information, and deliver optional vehicle telemetry when the hardware supports it.

- Provides a structured way for the tracker to send GPS location and timestamped telemetry to a server
- Carries device identifiers so Plaspy can associate incoming messages with the correct asset
- Transports optional vehicle or sensor data when the tracker exposes OBDII or other inputs
- Enables remote command delivery and acknowledgements when supported by the device and firmware
- Ensures data arrives in a format Plaspy can parse for mapping, alerts, and reporting

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and performs automatic protocol detection for incoming connections. In most cases a properly configured tracker that points at the Plaspy endpoint will be recognized and assigned without manual protocol selection.

- Plaspy accepts tracker reports at the domain d.plaspy.com as well as at the public server IP 54.85.159.138
- The platform listens on port 8888 and all devices in Plaspy use the same port
- Devices may be configured to use either UDP or TCP depending on device capability and settings
- When a tracker reports to the Plaspy endpoint, protocol detection runs automatically so manual selection is normally not required
- If a device fails to appear in Plaspy, verify the device is pointed to the correct Plaspy endpoint and that transport settings match the device configuration

## Transport and Connection Context

Connection context covers how the tracker establishes its transport layer to reach Plaspy. The T373 can be configured to send data over either of the supported transport types, and the endpoint settings determine where the tracker reports.

- Devices may be configured to use UDP or TCP on port 8888 depending on the device firmware and chosen configuration
- Trackers can point to d.plaspy.com or directly to the server IP 54.85.159.138 to reach Plaspy
- Plaspy uses the same port for all supported devices which simplifies device endpoint setup
- Choose UDP or TCP based on device recommendation and network conditions; some carriers and routers behave differently with each transport
- Ensure APN and mobile network settings on the device are correct so the tracker can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change the exact set of messages and fields a device sends; always check firmware-specific notes
- Hardware revisions or different device SKUs from the same manufacturer may implement protocol variants
- Manufacturer server settings, default report intervals, and transport defaults can differ by market or firmware
- TCP versus UDP selection affects deliverability and session behavior; confirm which transport your device supports reliably
- Some advanced features such as OBDII telemetry or hotspot bridging may be optional and require specific firmware or configuration
- Validate device identifiers and IMEI reporting behavior to ensure Plaspy can automatically associate incoming data with the correct asset

## Why Protocol Understanding Matters

Understanding how the tracker communicates helps streamline setup, improves troubleshooting, and supports long term reliability when the device is used with Plaspy. Clear knowledge of the communication context reduces integration time and helps maintain data quality.

- Helps confirm the device is pointed to the correct Plaspy endpoint and using the correct transport
- Aids troubleshooting when the device is not visible or when telemetry appears incomplete
- Informs decisions about firmware upgrades and when to retest device behavior after changes
- Supports tuning of report intervals and data volume for operational and data cost considerations
- Improves confidence when deploying devices across a mixed fleet with varying hardware revisions

## Why Use Plaspy with This Protocol

Using Plaspy with an Ulbotech tracker like the T373 provides centralized visibility and the infrastructure to ingest and normalize tracker telemetry for mapping, alerts, and reporting. Plaspy’s automatic protocol detection and single port endpoint model simplify onboarding and reduce the configuration burden on field devices.

If you are evaluating or deploying T373 trackers at scale, Plaspy can help centralize fleet data and provide consistent downstream processing of location and vehicle telemetry. To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, verify information with the manufacturer at http://www.ulbotech.com/.
