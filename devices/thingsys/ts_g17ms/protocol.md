---
slug: /thingsys/ts_g17ms/protocol
id: ts_g17ms-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17Ms Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the ThingSys TS-G17Ms GPS tracker and Plaspy integration including connection and transport context
keywords:
  - ThingSys TS-G17Ms protocol
  - ThingSys TS-G17Ms GPS protocol
  - TS-G17Ms Plaspy compatibility
  - TS-G17Ms communication protocol
  - TS-G17Ms tracking protocol
  - ThingSys GPS tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol
  - fleet tracking TS-G17Ms
  - 2G GPS tracker protocol
---

# ThingSys - TS-G17Ms Protocol

This page describes the public protocol context for using the ThingSys TS-G17Ms tracker with the Plaspy platform. It focuses on how the device communicates in general terms, how Plaspy accepts device data, and the transport and connection details you will typically need to configure the device to report to Plaspy.

The TS-G17Ms is a compact 2G quad band tracker designed for motorcycles, cars and commercial vehicles. It supports real-time GPRS trace tracking and SMS polling, SOS alerts, remote voice monitoring, vibration and overspeed alarms, ACC ignition detection, and a relay for remote fuel or power cut. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol is the set of messages and reporting behaviors the TS-G17Ms uses to identify itself, send location and event data, and receive remote commands when supported. In practice this protocol enables the device to stream GNSS fixes, alarm events, and basic telemetry to Plaspy so the platform can display location, raise alerts, and trigger workflows.

- Enables periodic or event driven location reporting from the TS-G17Ms to a remote server for visualization and logging.
- Carries alarm and status events such as SOS, overspeed, vibration, and ACC state changes so Plaspy can surface notifications.
- Allows for lightweight SMS polling as an alternate reporting mode and GPRS trace tracking for continuous online monitoring.
- Provides the necessary device identification so Plaspy can associate inbound data with the correct asset record.
- Supports simple remote control actions where the device firmware and installed hardware allow, for example relay based immobilization.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and automatically detects the tracker protocol used by the device. When a TS-G17Ms is properly configured to report to Plaspy, the platform will normally identify the device type and begin ingesting location and event messages without requiring manual protocol selection in most setups.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and is also usable where a numeric endpoint is required.
- The port is 8888 and all Plaspy devices use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network configuration.
- Plaspy automatically detects the tracker protocol so manual selection inside the platform is typically unnecessary if the device reports to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers the transport layer choices the TS-G17Ms can use to reach Plaspy and the practical settings you will enter during device setup. For this tracker the common options are GPRS based reporting to the Plaspy host or SMS commands for occasional polling and configuration when GPRS is not available.

- Devices may point to the domain d.plaspy.com or the numeric host 54.85.159.138 when configuring the reporting server.
- The device may be set to use either UDP or TCP on port 8888 according to the firmware and installer preference.
- All Plaspy supported devices use the same port which simplifies configuration across mixed fleets.
- GPRS trace tracking is commonly used for continuous location updates while SMS polling can be used for ad hoc queries or fallback.
- Ensure APN and mobile network settings are correctly configured on the device so GPRS reporting to Plaspy is reliable.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available commands, and event reporting details; verify the device firmware level when troubleshooting.
- Hardware revisions and regional variants may affect available features such as input types, external microphone support, or relay wiring.
- Transport selection between TCP and UDP can impact delivery behavior in specific mobile network conditions; choose the transport supported and recommended by the device firmware.
- Some features described by the manufacturer such as remote voice monitoring or relay immobilization require correct wiring and optional accessories to be installed.
- Always validate compatibility for advanced workflows against the official ThingSys documentation for the exact model and firmware combination.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices reliably report to Plaspy, supports effective troubleshooting, and improves long term operational reliability for a fleet or single vehicle installation.

- Speeds up initial setup by ensuring the device points to the correct Plaspy endpoint and transport settings.
- Makes it easier to interpret device behavior when alarms or telemetry do not appear in the platform.
- Helps decide when to use SMS polling versus continuous GPRS trace tracking for different operational needs.
- Informs firmware update decisions and change management when manufacturer updates modify behavior.
- Reduces downtime by clarifying which features depend on firmware, wiring, or external accessories.

## Why Use Plaspy with This Protocol

Using the TS-G17Ms with Plaspy delivers a straightforward path to real time location, event alerts, and basic telemetry across vehicles. The combination of the TS-G17Ms feature set and Plaspy’s ingestion and visualization lets operations teams and vehicle owners monitor position, handle SOS and alarm conditions, and execute simple immobilization workflows when appropriate.

If you would like to learn more about Plaspy and how it integrates with trackers like the TS-G17Ms, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and installation guidance please verify information on the manufacturer website https://www.thingsys.com/ as implementations and firmware behavior can change over time.
