---
slug: /xirgo/xt63/features
id: xt63-features
sidebar_label: Features
title: Xirgo - XT63 Features
sidebar_class_name: menu_item_tracker
description: A practical summary of Xirgo XT63 GPS tracker features and how it works with Plaspy compatible fleet systems
keywords:
  - Xirgo XT63
  - Xirgo XT63 features
  - XT63 GPS tracker
  - Xirgo GPS tracker
  - XT63 Plaspy compatibility
  - XT63 OBD JBUS
  - XT63 geofence
  - XT63 telemetry
  - Plaspy compatible tracker
  - fleet tracking XT63
---

# Xirgo - XT63 Features

This page describes the public feature context for using the Xirgo XT63 tracker with Plaspy. It summarizes the XT63 capabilities relevant to fleet monitoring, event reporting, and telemetry integration within Plaspy powered dashboards and workflows, and explains how those capabilities are typically reflected in platform-level monitoring.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, regional variant, and manufacturer configuration. For device-specific detail, configuration options, and the latest technical specifications consult the official Xirgo documentation.

## Feature Overview

The XT63 is a vehicle telematics tracker designed to provide reliable location and vehicle telemetry for passenger vehicles, commercial trucks, and equipment. It combines GNSS positioning with cellular connectivity, optional Bluetooth, and multiple vehicle interface options to support tracking, event monitoring, and integration with fleet platforms like Plaspy.

- Real time GPS location reporting for continuous fleet visibility and route monitoring.
- OBD and JBUS protocol support where equipped to surface engine and vehicle parameters.
- Geofence notifications and motion based alerts powered by an onboard accelerometer.
- Flexible telemetry transport over common protocols including MQTT, HTTPS, UDP, and SMS.
- Multiple I O ports and serial interfaces to capture ignition, door, alarm, and actuator signals.

## Core Features of Xirgo - XT63

- Embedded GNSS and cellular connectivity with model dependent multi network support to maintain coverage.
- Optional OBD and JBUS interfaces for engine parameters and diagnostics when available.
- Digital and analog I O including multiple inputs and outputs plus serial and 1 wire ports for vehicle integrations.
- Motion detection and 3 axis accelerometer for movement alerts and anti theft monitoring.
- Optional Bluetooth support to expand telemetry with external sensors and beacons.
- Configurable transport and security options including MQTT, AWS MQTT with TLS 1.2, HTTPS, UDP, and SMS.
- Customizable data packets and platform level configuration to match reporting needs.

## How These Features Work with Plaspy

Plaspy ingests location and telemetry from compatible trackers like the XT63 and presents that data in dashboards, reports, and alerting rules. The platform detects the tracker protocol and maps device events into usable telemetry so fleet teams can monitor vehicles, configure alerts, and analyze operational data without building custom middleware.

- Live position updates and historical tracks appear in Plaspy maps for route review and dispatch.
- Geofence events and motion alerts generate notifications and can be tied to workflows inside Plaspy.
- Digital input events such as ignition, door, and alarm status are available as discrete events for reporting and alerts.
- OBD and JBUS data from the device are reflected as engine and fuel related telemetry when the unit is connected and reporting.
- Device outputs and actuator state changes can be tracked in Plaspy as event records where supported by installation.
- Plaspy automatically detects the tracker protocol and accepts TCP or UDP connections on the platform endpoint to simplify device setup.

## Typical Use Cases

- Fleet operations monitoring for real time location, route adherence, and utilization reporting.
- Anti theft and recovery workflows using motion alerts, geofence violation notifications, and event history.
- Engine diagnostics and fuel monitoring when the XT63 is connected to OBD or JBUS interfaces.
- Remote actuator and security control integration for managed immobilizer or starter cut applications where permitted.
- Asset and cargo monitoring enhanced with optional Bluetooth sensors for temperature or proximity telemetry.
- Equipment tracking for mixed fleets including light and heavy duty vehicles and commercial equipment.

## Feature Availability Notes

- Some features such as Bluetooth, specific cellular bands, or optional battery backups are model dependent and may not be present on every XT63 unit.
- Firmware version and manufacturer configuration determine available telemetry fields, event behavior, and packet formats.
- Physical installation and wiring affect which inputs, outputs, and vehicle interfaces are usable in a given deployment.
- Regional variants or carrier approvals influence supported network generations and roaming behavior.
- Always verify the exact capabilities for your serial number or purchase batch with the manufacturer documentation.

## Why Use Plaspy with These Features

Using the XT63 with Plaspy gives organizations consolidated visibility into vehicle location, event activity, and vehicle level telemetry. The combination of in vehicle interfaces, motion sensing, and configurable transport protocols makes the XT63 a practical device for fleets that need actionable alerts, historical reporting, and integration of engine or sensor data into operational workflows.

Learn more about Plaspy and how the platform can process XT63 telemetry by visiting https://www.plaspy.com. For the most current device specifications, feature lists, and firmware behavior consult the official Xirgo documentation at https://xirgo.com/ to confirm implementation details and supported options.
