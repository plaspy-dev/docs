---
slug: /queclink/gv350mg/features
id: gv350mg-features
sidebar_label: Features
title: QuecLink - GV350MG Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the QuecLink GV350MG and how it works with Plaspy for fleet and cold chain tracking
keywords:
  - QuecLink GV350MG
  - GV350MG features
  - GV350MG GPS tracker
  - QuecLink telematics
  - GV350MG Plaspy compatibility
  - fleet tracking GV350MG
  - cold chain GV350MG
  - CAN bus GV350MG
  - 1 wire temperature GV350MG
  - vehicle tracker GV350MG
---

# QuecLink - GV350MG Features

This page covers the public feature context for using the QuecLink GV350MG with Plaspy. It summarizes the device capabilities that are relevant when integrating the GV350MG into Plaspy for real time tracking, telematics ingestion, and event monitoring. The content focuses on practical, non sensitive information that helps fleet and logistics teams understand how the tracker can be used with Plaspy.

Exact feature availability and behaviour can vary depending on device firmware, hardware revision, installation wiring and configuration, and how the manufacturer implements specific functions. For the most current device specific details please consult the official QuecLink documentation and your device supplier.

## Feature Overview

The GV350MG is a compact LTE Advanced vehicle tracker built for commercial fleets and cold chain applications. It combines robust GNSS positioning, cellular connectivity with fallback, vehicle bus interfaces and local buffering to provide continuous location and telemetry reporting suitable for integration with Plaspy.

- Reliable real time GNSS tracking with high sensitivity u blox receiver for precise location updates.
- LTE Cat M1 and NB1 primary connectivity with EGPRS 2G fallback to help maintain coverage in varied regions.
- Full vehicle integration via CAN 2.0A B and SAE J1939 plus RS232 and multiple digital I O for engine and sensor telemetry.
- Local buffering for offline periods and support for temperature sensors and accessory integrations for cold chain use.
- Alerting and event support including geo fence, tow and crash detection, driving behaviour monitoring and configurable I O events.

## Core Features of QuecLink - GV350MG

- LTE Cat M1 and NB1 cellular connectivity with EGPRS 2G fallback for resilient wide area coverage.
- High sensitivity u blox GNSS receiver with tracking sensitivity down to around 162 dBm and position accuracy typically under 2.5 m CEP.
- Full CAN 2.0A B and SAE J1939 support for vehicle engine and telemetry data collection.
- Two RS232 ports and multiple digital inputs and outputs including a latched output for ignition or alarm monitoring.
- Support for 1 wire temperature channels for refrigerated trailer monitoring and accessory sensor connections.
- Local message buffering capable of storing up to 10,000 messages to bridge connectivity outages.
- Remote control and management options including OTA control of digital outputs and firmware upgrades via mini USB.
- Wide vehicle power support with 8 to 32 V DC range and an internal backup battery for short term power continuity.

## How These Features Work with Plaspy

When paired with Plaspy, GV350MG telemetry is forwarded into a centralized dashboard where location, vehicle signals and configured events are visible for operations and reporting. Plaspy ingests the device data to provide alerts, historical replay and rule driven workflows that rely on the tracker data.

- Live location and historical playback for routes and position history based on GNSS fixes received from the device.
- Vehicle bus and engine parameters from CAN and RS232 appear as telemetry points in Plaspy for monitoring and reporting.
- Digital input events such as ignition, door or alarm triggers become actionable events and can be used in Plaspy rules and alerts.
- Geo fence, tow, crash and driving behaviour detections generate alerts inside Plaspy for rapid operational response.
- Buffered messages are delivered to Plaspy after reconnection so short outages do not cause gaps in historical records.
- Remote output control exposed by the device can be used from Plaspy to trigger configured outputs where supported by installation and policy.

## Typical Use Cases

- Fleet tracking and operational oversight for commercial vehicle fleets requiring reliable position and vehicle telemetry.
- Cold chain logistics with 1 wire temperature sensors combined with location data for temperature sensitive shipments.
- Fuel monitoring and vehicle diagnostics by combining CAN bus telemetry with sensor inputs for loss detection and analytics.
- Anti theft and recovery workflows using geo fence, tow detection and remote output control.
- Driver safety and coaching programs using crash detection and driving behaviour monitoring to reconstruct events.
- Camera and accessory integrations using RS232 and I O extenders to enrich situational awareness.

## Feature Availability Notes

- Feature availability may vary by firmware version and device hardware revision. Not every unit will expose all listed functions.
- Regional cellular variants and carrier approvals can affect supported network bands and fallback behaviour in different markets.
- Some features require specific wiring, installation of sensors or accessory modules and must be configured during setup.
- Manufacturer options such as external GNSS antenna, 1 wire sensor count, or accessory gateways may differ between SKUs.
- Always confirm exact capabilities, command sets and supported configurations in the official QuecLink technical documentation for your device serial number or part number.

## Why Use Plaspy with These Features

Using the GV350MG with Plaspy gives organizations a consolidated way to view location and vehicle telemetry alongside alerts and reports. The device hardware provides the sensors and vehicle interfaces, while Plaspy provides centralized dashboards, configurable rules and historical analysis that help turn that data into operational decisions. This combination is useful for teams managing fleets, refrigerated logistics, and vehicle security programs that need consistent reporting and event driven workflows.

Learn more about Plaspy and how Plaspy can be used with devices like the GV350MG on https://www.plaspy.com. Device features, firmware behaviour and manufacturer details can change over time so verify the latest device specific information on the QuecLink website https://www.queclink.com/.
