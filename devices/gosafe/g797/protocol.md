---
slug: /gosafe/g797/protocol
id: g797-protocol
sidebar_label: Protocol
title: Gosafe - G797 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Gosafe G797 OBD2 tracker with Plaspy using shared connection settings
keywords:
  - Gosafe G797 protocol
  - Gosafe G797 GPS protocol
  - Gosafe G797 Plaspy compatibility
  - G797 OBD2 tracker protocol
  - Plaspy tracker integration
  - vehicle telematics protocol
  - OBDII GPS tracker protocol
  - fleet tracking communication protocol
  - GPRS GPS tracker protocol
  - usage based insurance telemetry
---

# Gosafe - G797 Protocol

This page documents the public protocol context for using the Gosafe G797 OBD2 GPS tracker with Plaspy. It explains how the tracker reports GNSS, OBD and event telemetry to Plaspy and clarifies the connection settings Plaspy expects for ingesting device data.

The G797 is a plug and play OBDII telematics device that combines a Ublox 6 GNSS engine, self calibrating 3D accelerometry (with optional 6D IMU), and OBD/CAN diagnostics. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware revisions, hardware variants, and manufacturer implementation.

## Protocol Overview

The tracker protocol governs how the G797 identifies itself to a server, packages GNSS positions, OBD derived values, and sensor events, and delivers those messages to Plaspy for live tracking and historical telemetry. This page describes the public, implementation neutral aspects of that communication so integrators can provision devices to report to Plaspy.

- The protocol enables the device to send GNSS position fixes, time stamps, and basic satellite metadata to Plaspy for mapping and replay.
- OBD and CAN diagnostics such as VIN, odometer inputs, and available PIDs are reported alongside position data to support vehicle identification and telemetry.
- Accelerometer and event signals are reported to allow FNOL alerts, crash detection, and driver behavior analytics in Plaspy.
- Message transport and retry behavior determine delivery reliability over cellular links; the G797 supports GPRS and EDGE with optional UMTS and LTE variants.
- The protocol exposes configuration and provisioning channels used during rollout and remote updates when supported by the device firmware.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a shared endpoint and automatically determines the tracker protocol when a properly configured device reports in. In most cases a G797 that is pointed at Plaspy will not require a manual protocol selection inside the Plaspy platform.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888.
- The device may be configured using UDP or TCP on port 8888 depending on the model and provisioning choice.
- All devices in Plaspy use the same port which simplifies provisioning across large fleets.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol manually when the device is correctly pointed to the Plaspy endpoint.
- If a device uses SMS or an alternate transport for fall back reporting, Plaspy can ingest that data when those channels are configured according to your deployment plan.

## Transport and Connection Context

Connection context covers the network endpoint and transport the G797 uses to reach Plaspy. Transport choice (TCP vs UDP) and cellular variant influence latency, retransmission, and configuration steps during provisioning.

- The G797 supports reporting over TCP and UDP and may also support SMS reporting depending on the hardware variant and firmware.
- The device may be configured using UDP or TCP on port 8888 to send telemetry to Plaspy.
- Devices can point to the Plaspy hostname d.plaspy.com or the Plaspy server IP 54.85.159.138 as their reporting destination.
- Plaspy listens on a single port for all devices which reduces per device configuration differences during fleet rollout.
- Cellular variants (GPRS EDGE or optional UMTS LTE models) determine available throughput and roaming behavior which can affect message timing and firmware update delivery.

## Protocol Compatibility Notes

- Firmware revisions can change message sets, reporting intervals, or configuration commands. Validate the firmware version in use during integration.
- Hardware revisions and optional variants (for example UMTS or LTE builds) may alter supported transports and available diagnostics PIDs.
- Manufacturer side configuration and optional provisioning tools used by Gosafe may affect how the device is pointed to Plaspy and which channels are enabled.
- Transport selection between TCP and UDP affects delivery semantics; choose the transport supported by your device firmware and provisioning workflow.
- If you rely on specific OBD PIDs or multi source odometer accumulation, verify that the vehicle exposes those PIDs and that the G797 firmware reads them.
- Always cross check compatibility claims with the manufacturer documentation when planning fleet deployments or critical integrations.

## Why Protocol Understanding Matters

Having a clear, public understanding of the communication protocol helps ensure successful setup, predictable behavior, and efficient troubleshooting when using the G797 with Plaspy.

- Ensures correct device provisioning so messages reach the Plaspy endpoint at d.plaspy.com on port 8888 using the desired transport.
- Helps interpret telemetry differences that arise from firmware or hardware variations during rollouts.
- Supports troubleshooting of missing or delayed data by narrowing whether an issue is transport, provisioning, or device firmware related.
- Enables informed decisions about which cellular variant and transport to deploy for coverage and reliability needs.
- Improves planning for feature requirements such as FNOL alerts, odometer sourcing, and OBD PID usage.

## Why Use Plaspy with This Protocol

Using the G797 in combination with Plaspy provides a practical solution for organizations that need accurate GNSS location, in vehicle diagnostics, and event-driven telemetry. The device’s OBDII integration delivers VIN and vehicle telemetry that complement GNSS positions, enabling clearer vehicle identification, multi source mileage tracking, and richer operational reporting within Plaspy.

Plaspy’s unified ingestion approach reduces per device configuration by using the same port for all supported devices and automatically detecting the tracker protocol when devices report to d.plaspy.com. To learn more about Plaspy and how it can support your fleet or insurance telematics needs visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific protocol documentation with the manufacturer at https://gosafesystem.com/.
