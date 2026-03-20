---
slug: /ulbotech/t363b/protocol
id: t363b-protocol
sidebar_label: Protocol
title: Ulbotech - T363B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ulbotech T363B GPS tracker and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Ulbotech T363B protocol
  - Ulbotech T363B GPS protocol
  - Ulbotech T363B for Plaspy
  - T363B OBD tracker
  - OBD GPS tracker protocol
  - vehicle tracking protocol
  - fleet tracking Plaspy
  - Ulbotech protocol compatibility
  - T363B telemetry
  - Plaspy tracker integration
---

# Ulbotech - T363B Protocol

This page describes the public protocol context for using the Ulbotech T363B tracker with Plaspy. It focuses on how the device communicates with the Plaspy backend in general, non sensitive terms, and what to consider when configuring the tracker for reliable reporting and telemetry ingestion. The T363B is an OBD plug and play tracker that reports GPS and vehicle telemetry over cellular GPRS and is designed to integrate with platforms such as Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Plaspy’s public server endpoint is d.plaspy.com with the server IP 54.85.159.138 and the listening port 8888. Devices may be configured to use UDP or TCP on port 8888, and all devices in Plaspy use the same port, though exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation.

## Protocol Overview

The protocol used by the T363B governs how position, OBD/CAN telemetry and event flags are packaged and sent from the device to a backend such as Plaspy. At a high level the protocol makes the device useful to fleet and asset managers by delivering timely location and vehicle state information and allowing remote control actions where supported.

- Enables the device to report GPS coordinates, timestamps and basic validity indicators so Plaspy can map location and reconstruct routes.
- Carries OBD and CAN derived telemetry values that Plaspy can use for maintenance, fuel and driver behavior analytics.
- Conveys event flags for motion, ignition, immobilizer actions and accelerometer based alarms so Plaspy can trigger alerts and workflows.
- Provides a channel for configuration responses and device acknowledgements as needed by the manufacturer for operational control.
- Supports periodic reporting and on demand events so both live monitoring and historical playback are available in Plaspy.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically identifies the incoming tracker protocol so users normally do not need to select a protocol manually. When a T363B is configured to report to Plaspy, the platform examines the incoming connection and maps the device to the correct parser and data channels by matching known, public protocol characteristics.

- Plaspy’s public server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy receives tracker reports on port 8888 and uses the same port for all supported devices.
- Devices can be configured to use UDP or TCP to send data to the Plaspy endpoint depending on device support.
- If the device is correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will attempt automatic protocol detection.
- Users typically only need to ensure APN and reporting server settings are correct on the device side; Plaspy handles protocol identification.

## Transport and Connection Context

Transport and connection settings determine how the T363B reaches Plaspy and are independent of the higher level message content. The device supports GPRS cellular transport and can be configured to use either a UDP or TCP socket to transmit messages to Plaspy’s listening port.

- The device may be configured using UDP or TCP on port 8888; the choice depends on device firmware and desired behavior.
- Devices should be pointed to the domain d.plaspy.com or directly to the IP 54.85.159.138 when configuring the reporting server.
- Plaspy uses the same port number 8888 for all devices, simplifying configuration across mixed fleets.
- Verify APN, SIM provisioning and GPRS connectivity so the tracker can establish outbound sessions to the Plaspy endpoint.
- Connection stability, retransmission behavior and transport selection are generally managed at the device firmware level.

## Protocol Compatibility Notes

- Firmware versions can change message timing, field availability and optional telemetry items; always confirm firmware release notes when troubleshooting.
- Hardware revisions or regional variants of the T363B may expose different OBD or CAN data subsets or change available digital outputs.
- Transport selection between UDP and TCP may affect delivery guarantees and should be chosen to match operational requirements and device capabilities.
- Manufacturer customization or operator specific firmware can introduce protocol deviations; verify with the device vendor if behavior differs from expectations.
- Plaspy’s automatic detection eases integration, but correct server, port and APN settings on the device remain essential.
- Validate any immobilizer or remote control features against vehicle and regulatory restrictions before enabling remote actions.

## Why Protocol Understanding Matters

Understanding how the T363B communicates with Plaspy helps installers, fleet managers and integrators diagnose issues, configure devices correctly and ensure reliable, long term operation. Knowing the role of the protocol makes it easier to confirm whether a device is reporting expected telemetry and responding to control actions.

- Helps confirm that the device is sending the right telemetry fields required by your monitoring and analytics workflows.
- Speeds troubleshooting when reports are missing by focusing checks on APN, server address, transport and firmware.
- Clarifies expectations for features such as immobilizer control, BLE sensor reporting and OBD derived metrics.
- Informs decisions about transport choice and reporting frequency to balance data granularity and cellular costs.
- Reduces integration time by aligning device configuration to Plaspy’s shared endpoint behavior.

## Why Use Plaspy with This Protocol

Using Plaspy with the Ulbotech T363B provides a straightforward path to visualizing GPS positions, OBD and CAN telemetry, and event driven alerts across vehicle fleets. The plug and play OBD form factor, internal GNSS and BLE support make the T363B a practical device for rapid deployment, while Plaspy ingests the device data to deliver maps, reports and alerting workflows that meet operational needs.

If you want to learn more about integrating trackers like the T363B with Plaspy, visit https://www.plaspy.com to explore platform features and documentation. For the most current device specific protocol details, firmware behavior and implementation notes, please verify with the manufacturer at http://www.ulbotech.com/ as device support and firmware can change over time.
