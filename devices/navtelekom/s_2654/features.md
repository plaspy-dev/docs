---
slug: /navtelekom/s_2654/features
id: s_2654-features
sidebar_label: Features
title: Navtelekom - СИГНАЛ S-2654 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary and Plaspy compatibility for the Navtelekom СИГНАЛ S-2654 GLONASS vehicle tracker
keywords:
  - Navtelekom СИГНАЛ S-2654
  - Navtelekom tracker features
  - СИГНАЛ S-2654 GLONASS
  - GLONASS vehicle tracker
  - 3G vehicle tracker
  - dual SIM tracker
  - microSD logging tracker
  - MODBUS CAN RS232 RS485
  - Plaspy compatible trackers
  - fleet telemetry device
---

# Navtelekom - СИГНАЛ S-2654 Features

This page provides a public feature overview of the Navtelekom СИГНАЛ S-2654 and how its capabilities are presented when integrated with Plaspy. It summarizes the practical functions, I/O options, and telemetry behaviors relevant to fleet managers, integrators, and operators who are evaluating or maintaining devices connected into Plaspy workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer configuration. The S-2654 is listed as archived by the manufacturer, and while documentation, configuration tools, and firmware history remain available through Navtelekom resources, individual units may differ in which functions are active or supported.

## Feature Overview

The СИГНАЛ S-2654 is a GLONASS vehicle tracker intended for fleet and industrial telemetry use. It combines a 3G cellular modem with dual SIM redundancy, local logging and extensive industrial I/O to deliver location reporting and telemetry to a central platform such as Plaspy.

- Real time GNSS positioning over GLONASS with external antenna support for improved signal reception.
- Built in 3G modem and dual SIM redundancy to maintain cellular connectivity for reporting and telemetry.
- Local data buffering and trip logging on microSD card support up to 32 GB for offline reconciliation.
- Comprehensive I/O and serial interfaces including universal inputs, configurable outputs, RS-232, RS-485, CAN and 1-Wire for integration with vehicle systems.
- MODBUS support to relay telemetry from third party controllers and sensors into a tracking platform.
- Internal backup battery and robust power line protection suited for vehicle and industrial environments.

## Core Features of Navtelekom - СИГНАЛ S-2654

- GLONASS satellite positioning with external GNSS antenna option.
- Integrated 3G cellular modem combined with dual SIM support for carrier redundancy.
- Local storage by microSD card for continuous logging during coverage gaps.
- Six universal inputs and four configurable outputs for event detection and remote control.
- Serial and bus interfaces: RS-232, RS-485, CAN bus and 1-Wire for equipment connectivity.
- MODBUS protocol support for third party telemetry integration.
- Internal Li Po backup battery around 800 mAh to sustain short autonomous operation.
- Robust input power protection designed for vehicle and industrial power systems.

## How These Features Work with Plaspy

When connected to Plaspy, the S-2654 delivers location fixes and telemetry for live monitoring, historical playback and event reporting. Plaspy ingests the device data and exposes it through maps, reports and alerts so operators can track assets and respond to events.

- Real time location updates and historical routes appear in Plaspy maps and trip playback when the device reports via its cellular link.
- Universal inputs map to event types in Plaspy so ignition, door or alarm status can trigger alerts and reports.
- Serial, CAN and MODBUS telemetry can be forwarded into Plaspy as sensor or controller data for operational visibility.
- Local microSD logs provide buffered records that Plaspy can reconcile when connectivity is restored.
- Plaspy detects compatible tracker protocols and accepts device connections to its ingestion endpoint, allowing the S-2654 to integrate without manual protocol mapping.
- Dual SIM and resilient cellular connectivity reduce data gaps and improve continuity of reporting into Plaspy.

## Typical Use Cases

- Fleet management with live vehicle tracking, route history and operational reporting for service and delivery fleets.
- Anti theft and immobilization workflows using configurable outputs and event driven controls linked from Plaspy alerts.
- Fuel and engine telemetry collection by integrating MODBUS or CAN connected sensors and forwarding readings to Plaspy.
- Industrial vehicle integration using RS-232 or RS-485 links to capture equipment telemetry for centralized monitoring.
- Offline logging for trips in low coverage areas with later reconciliation into Plaspy using microSD records.
- Remote diagnostics and version management leveraging manufacturer tools and Plaspy visibility for maintenance planning.

## Feature Availability Notes

- The S-2654 is listed as archived by the manufacturer; supported documentation and firmware history remain available but device behavior can differ by firmware build.
- Hardware revisions and installation wiring choices can change which inputs, outputs and interfaces are present or active on a fitted unit.
- Regional cellular band support, modem firmware and carrier compatibility depend on the specific unit and its provisioning.
- MODBUS, CAN and serial integrations require appropriate wiring and configuration using Navtelekom utilities and may need mapping before data appears in Plaspy.
- MicroSD logging capacity and backup battery runtime depend on card quality, logging settings and device condition.

## Why Use Plaspy with These Features

Plaspy provides a single operational view for the S-2654 data stream, collecting position fixes, I/O events and serial telemetry into dashboards, alerts and reports. For organizations needing consistent location awareness, auditable trip history and integration of vehicle telemetry, the S-2654’s industrial interfaces and local logging combine well with Plaspy’s tracking and reporting workflows.

To learn more about how Plaspy can be used with devices like the СИГНАЛ S-2654 visit https://www.plaspy.com. Please verify device specific details, firmware behavior and manufacturer documentation on the official Navtelekom site https://www.navtelecom.ru/ as features and implementations can change over time.
