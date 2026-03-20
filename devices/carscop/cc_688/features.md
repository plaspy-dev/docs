---
slug: /carscop/cc_688/features
id: cc_688-features
sidebar_label: Features
title: Carscop - CC-688 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Carscop CC-688 GPS tracker and how it integrates with Plaspy for fleet, rental and car sharing operations
keywords:
  - Carscop CC-688
  - Carscop CC 688
  - CC-688 features
  - Carscop GPS tracker
  - CC-688 capabilities
  - Plaspy compatible tracker
  - fleet tracking device
  - car sharing tracker
  - CAN OBD telemetry
  - keyless rental T Box
---

# Carscop - CC-688 Features

This page provides a public feature overview of the Carscop CC-688 T-Box and how its capabilities map to use with Plaspy. It is intended to describe the practical, non-sensitive functions of the CC-688 for fleet managers, car rental and car sharing operators who deploy this Plaspy compatible tracker for real-time monitoring and remote control.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, regional model, and manufacturer configuration. Use this page for planning and comparison, and consult the device manufacturer for the most current, device specific technical details.

## Feature Overview

The CC-688 is a purpose built vehicle T-Box combining GNSS positioning, global cellular connectivity and multiple vehicle interfaces to enable keyless rental workflows, remote control and telemetry reporting into Plaspy. It is designed for unattended rental, car sharing and broader fleet management where remote access and vehicle telemetry are required.

- Real time GNSS location and position reporting for live tracking and historical playback.
- Keyless access and push start support using BLE, NFC, and local touch pad authentication.
- CANBUS and OBD II telemetry integration to surface engine and vehicle sensor data when available from the vehicle bus.
- Relay outputs and actuator controls for door lock, horn, lights and engine start or stop for remote immobilization scenarios.
- Security and anti theft features including optional backup battery, impact detection via G sensor, and external siren support.

## Core Features of Carscop - CC-688

- Global cellular connectivity across 2G 3G and 4G for data forwarding and remote management.
- GNSS positioning with support for assisted positioning and multi constellation options depending on variant.
- BLE and NFC for local device pairing, phone handshake, and contactless access events.
- CANBUS and OBD II interfaces for collecting DTCs, engine status and vehicle sensor values exposed by the vehicle bus.
- Relay outputs and actuator control for lock unlock, horn, lights and engine start stop or cut for immobilizer style control.
- G sensor impact detection and optional backup battery for tamper and power loss notifications.
- OTA firmware updates and remote parameter changes to scale deployments and maintain device configurations.
- Wi Fi hotspot control for local connectivity management and an open API and TCP IP forwarding option for system integration.

## How These Features Work with Plaspy

When integrated with Plaspy, the CC-688 forwards location, telemetry and event data so fleet operators can monitor vehicles, manage access, and respond to incidents. Plaspy automatically detects many tracker protocols and can ingest the CC-688 telemetry to provide central visibility and event processing.

- Real time location and telemetry appear in Plaspy dashboards and support historical playback for route and event review.
- Access events from BLE NFC and touch pad authentication can be recorded in Plaspy for audit trails and usage reporting.
- CANBUS and OBD II data received by the device can be surfaced as vehicle status, DTCs or sensor readings in Plaspy where available from the vehicle.
- Relay and actuator command workflows are reflected as remote control actions within Plaspy, enabling immobilization and lock unlock operations when configured.
- Security events such as impact detection, backup battery alerts and tamper signals can generate alarms and notifications inside Plaspy for operator response.

## Typical Use Cases

- Unattended car rental and car sharing where app based bookings and keyless handover reduce onsite staffing requirements.
- Fleet management with real time tracking, telemetry based monitoring and centralized reporting for utilization and safety.
- Anti theft and recovery workflows that combine tamper alerts, backup battery notifications and remote engine cut features.
- Maintenance and diagnostics programs that leverage CANBUS and OBD II telemetry to identify DTCs and vehicle health indicators.
- Remote immobilization or access control for high risk or out of policy vehicle events.

## Feature Availability Notes

- Feature set can vary by firmware version and the device software loaded at the time of deployment.
- Hardware revisions and regional variants may change supported cellular bands, GNSS options or available I O ports.
- CANBUS and OBD II telemetry depend on vehicle model and whether the vehicle bus exposes the specific data points required.
- Some actuator or immobilizer functions may require professional installation and additional wiring harnesses or bypass modules.
- Manufacturer configuration and provisioning choices during installation can enable or disable specific access workflows like NFC or BLE unlocking.

## Why Use Plaspy with These Features

Using the CC-688 with Plaspy gives operators a single platform to collect location, vehicle telemetry and access events while managing remote control workflows centrally. Plaspy helps translate the CC-688 data into actionable insights for operations teams, enabling better utilization, faster incident response and simplified management of keyless rental or car sharing fleets.

Learn more about how Plaspy can work with devices like the Carscop CC-688 by visiting https://www.plaspy.com. Device features and firmware behavior can change over time, so please verify the latest device specific information and installation guidance on the manufacturer website at http://www.carscop.com/.
