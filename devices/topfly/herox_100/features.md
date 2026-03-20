---
slug: /topfly/herox_100/features
id: herox_100-features
sidebar_label: Features
title: TopFly - HeroX 100 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the TopFly HeroX 100 GPS tracker and how it works with Plaspy for fleet tracking and telemetry
keywords:
  - TopFly HeroX 100
  - TopFly GPS tracker
  - HeroX 100 features
  - HeroX 100 Plaspy
  - GPS tracker for fleet
  - CAN BUS telemetry tracker
  - BLE 5.1 tracker
  - cold chain tracking
  - vehicle tracking device
  - anti theft tracker
---

# TopFly - HeroX 100 Features

This page provides a public, non sensitive overview of the TopFly HeroX 100 feature set as it applies when used with Plaspy. It focuses on practical capabilities, common workflows, and how device data is typically consumed in Plaspy for tracking, monitoring, and operational visibility.

Exact feature availability can vary by firmware version, hardware revision, installation method, and regional manufacturer choices. For device specific technical details, firmware notes, and the latest specifications consult the official TopFly documentation and release notes.

## Feature Overview

The HeroX 100 is a hardwired, Plaspy compatible GPS tracker designed for vehicle and asset deployments that need precise positioning, extensive I O, and accessory integration. It emphasizes continuous location reporting, robust telemetry, and expandability for fleet and anti theft workflows.

- High accuracy multi GNSS positioning with GPS, BeiDou, Galileo and QZSS and autonomous CEP under 1.5 m for reliable routing and geofencing.
- 4G CAT 1 cellular connectivity with 2G fallback for wide network reach and consistent telemetry transmission.
- Configurable real time reporting as frequent as every 3 seconds plus large offline buffering to preserve historical points during connectivity loss.
- Rich interface set including CAN BUS FMS, multiple digital and analog I O, RS485 ports, 1 wire iButton support and relay outputs for remote control.
- BLE 5.1 long range support for TopFly and third party Bluetooth sensors useful for temperature, humidity, door and driver ID scenarios.

## Core Features of TopFly - HeroX 100

- Multi GNSS positioning with tight accuracy targets to support precise location and geofencing workflows.
- 4G CAT 1 cellular modem with fallback to 2G for coverage resilience in mixed networks.
- Large local buffer for offline storage of position points to maintain history through network outages.
- CAN BUS FMS telemetry support for vehicle data integration where available.
- Extensive digital and analog I O plus relay outputs to enable remote control and event signaling.
- BLE 5.1 support to pair wireless sensors and driver identification tags.
- Internal 6 axis accelerometer and dedicated safety inputs for crash detection, SOS input and driving behavior events.
- Remote firmware updates and secure transport options including common encrypted channels.

## How These Features Work with Plaspy

When paired with Plaspy, HeroX 100 device data is ingested and mapped to live views, alerts, and reports that support operational decisions. Plaspy receives GNSS fixes, I O events, CAN telemetry and BLE sensor readings and makes that information actionable for fleet operators and integrators.

- Live location tracking on maps with configurable update intervals for responsive dispatch and monitoring.
- Event driven alerts such as ignition on off, disconnection, SOS, crash and tamper indicators surfaced inside Plaspy for rapid response.
- CAN BUS telemetry forwarded to Plaspy dashboards to support fuel, odometer, RPM and other vehicle metrics when provided by the vehicle.
- Remote relay control and immobilizer workflows managed through Plaspy commands tied to device outputs and safety checks.
- Bluetooth sensor data for temperature, humidity or driver ID passed into Plaspy for condition monitoring and audit logs.
- Historical playback from buffered points to reconstruct trips and investigate incidents that occurred while offline.

## Typical Use Cases

- Fleet management and route optimization using frequent position updates and vehicle telemetry.
- Anti theft and immobilization scenarios that combine relay outputs, tamper alerts and remote commands.
- Cold chain monitoring with BLE temperature and humidity sensors reported into Plaspy for compliance and tracing.
- Driver identification and logging using 1 wire iButton or BLE tags for automated driver assignment.
- Specialized equipment monitoring where RS485, analog inputs or CAN interfaces capture custom telemetry.
- Safety and incident response using crash detection, SOS inputs and accelerometer events to trigger workflows.

## Feature Availability Notes

- Firmware versions can enable or change behaviors for reporting intervals, buffering capacity and encryption options.
- Hardware revisions and regional variants may affect supported cellular bands, available I O or accessory compatibility.
- Certain telemetry items such as specific CAN signals depend on vehicle make model and FMS availability and mapping.
- Installation choices influence which inputs are active and how features like ignition detection or relay control are wired.
- For the most current capabilities and implementation details verify the device datasheet and release notes from the manufacturer.

## Why Use Plaspy with These Features

Using HeroX 100 with Plaspy puts precise location and rich vehicle telemetry into a platform designed for monitoring, alerts, and operational workflows. The combination helps organizations maintain continuous visibility, act on safety events, and integrate sensor data for specialized needs such as cold chain or driver ID.

To learn more about Plaspy and how HeroX 100 can fit into your deployment visit https://www.plaspy.com. For the latest device specific feature details, firmware notes, and manufacturer documentation consult TopFly at https://www.topflytech.com/
