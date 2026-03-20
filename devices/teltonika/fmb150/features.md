---
slug: /teltonika/fmb150/features
id: fmb150-features
sidebar_label: Features
title: Teltonika - FMB150 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMB150 tracker and how its capabilities integrate with Plaspy for fleet and vehicle monitoring
keywords:
  - Teltonika FMB150 features
  - Teltonika FMB150 GPS tracker
  - FMB150 CAN data
  - FMB150 Bluetooth LE
  - FMB150 GNSS support
  - FMB150 fleet tracking
  - FMB150 EV compatibility
  - Plaspy compatible tracker
  - FMB150 device specifications
  - FMB150 telemetry
---

# Teltonika - FMB150 Features

This page describes the public feature context for using the Teltonika FMB150 GPS tracker with Plaspy. It summarizes core capabilities that are relevant for fleet managers, integrators, and technical users who want to understand how this device can feed location, vehicle, and sensor data into Plaspy for monitoring and operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific parameters, supported vehicle models, and the latest firmware notes consult the official Teltonika documentation.

## Feature Overview

The Teltonika FMB150 is a 2G GPS tracker designed for vehicle tracking and CAN bus data collection, with Bluetooth LE support for external sensors. Its multi GNSS receiver and resilience for harsh environments make it suitable for a wide set of fleet and EV monitoring scenarios.

- CAN bus data reading for vehicle performance and basic diagnostics, including support for many electric vehicle models
- Bluetooth Low Energy support for connecting beacons and external sensors such as temperature, humidity, magnet detection, and movement
- Multi GNSS support for GPS, GLONASS, Galileo, BeiDou and auxiliary systems for improved positioning
- Quad band 2G GSM with GPRS data transfer for location and telemetry reporting
- Wide operating temperature range and IP41 ingress protection for durable field use

## Core Features of Teltonika - FMB150

- Integrated CAN data processor enabling CAN bus reading from light vehicles, trucks, buses, and supported electric vehicles
- Bluetooth LE radio for pairing Low Energy beacons and external sensors to extend telemetry
- Multi constellation GNSS receiver supporting GPS GLONASS GALILEO BEIDOU and assisted positioning methods
- TM2500 based module supporting GSM GPRS GNSS and Bluetooth technology
- Tracking sensitivity and position accuracy designed for reliable location updates
- Multiple physical interfaces including digital inputs outputs analog inputs CAN interfaces and a 1-Wire interface
- On device features such as accelerometer sensing, sleep modes, SMS and GPRS command support, time synchronization, ignition detection, and firmware configuration capability

## How These Features Work with Plaspy

Plaspy ingests the FMB150 telemetry to provide consolidated location, vehicle, and sensor visibility. The platform automatically detects supported tracker protocols so devices can report into Plaspy with minimal manual protocol selection.

- Vehicle location and GNSS position updates appear in Plaspy maps and history for tracking and route review
- CAN-derived parameters can be shown as vehicle telemetry or diagnostics fields within Plaspy dashboards and reports
- Bluetooth LE beacon and external sensor events can be surfaced as sensor readings or presence events in Plaspy
- Inputs such as ignition and digital inputs translate into event markers and status indicators for operational monitoring
- Device configuration state and firmware update readiness reported by the device can be tracked inside Plaspy for maintenance planning

## Typical Use Cases

- Fleet tracking and routine vehicle location monitoring for light commercial fleets
- Electric vehicle fleet monitoring where CAN data provides additional vehicle parameters
- Attaching Bluetooth LE temperature or humidity sensors for environmental monitoring of assets
- Monitoring special machinery and buses where CAN bus diagnostics add operational context
- Movement and tamper detection using accelerometer and external magnet sensors
- Asset tagging and proximity detection using BLE beacons for mixed asset workflows

## Feature Availability Notes

- Feature availability depends on the device firmware version and the specific hardware revision installed
- CAN data fields and supported EV models vary by vehicle make model and manufacturer implementation
- Bluetooth LE functionality depends on the external sensors and beacon compatibility
- Regional cellular networks and the ongoing availability of 2G services can affect connectivity in some areas
- Installation wiring and the presence of vehicle CAN signals or external sensors determine which features are usable

## Why Use Plaspy with These Features

Using the Teltonika FMB150 with Plaspy provides a practical way to combine precise GNSS location with CAN bus derived vehicle data and BLE sensor inputs in a single monitoring platform. This combination helps fleet managers and operations teams get richer situational awareness by correlating movement, vehicle status, and environmental sensor data alongside historical reports and alerts.

To learn more about Plaspy and how it can integrate with devices like the Teltonika FMB150 visit https://www.plaspy.com. For the most current device specifications firmware behavior and supported vehicle lists please verify details on the manufacturer site https://www.teltonika-gps.com/
