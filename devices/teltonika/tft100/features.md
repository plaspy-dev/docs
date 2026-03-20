---
slug: /teltonika/tft100/features
id: tft100-features
sidebar_label: Features
title: Teltonika - TFT100 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika TFT100 GPS tracker and how its capabilities work with Plaspy for e mobility and industrial fleet monitoring
keywords:
  - Teltonika TFT100 features
  - TFT100 GPS tracker
  - Teltonika TFT100 Plaspy
  - TFT100 e mobility
  - industrial vehicle tracker
  - rugged GPS tracker
  - vehicle bus integration
  - BLE sensor tracker
  - fleet telemetry tracker
  - TFT100 features for Plaspy
---

# Teltonika - TFT100 Features

This page provides a public feature overview of the Teltonika TFT100 and explains how its documented capabilities relate to use with Plaspy. It focuses on practical, non sensitive details about tracking, telemetry and integration so fleet managers and integrators can understand what to expect when onboarding this model into Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method and manufacturer implementation. The TFT100 is listed by Teltonika as End of Life, so confirm current availability, firmware status and replacement options with the manufacturer before planning deployments.

## Feature Overview

The Teltonika TFT100 is a rugged 2G GPS tracker designed for e mobility and high voltage industrial vehicles. In Plaspy the tracker is typically used to deliver location, vehicle bus telemetry and external sensor data for real time monitoring and historical analysis in demanding outdoor environments.

- IP67 rated enclosure for protection in outdoor and industrial settings.
- Wide 10–97 V power input to support a broad range of vehicle electrical systems.
- 2G cellular connectivity for position reporting and telemetry uplinks in supported regions.
- Multiple wired interfaces including CAN, RS232, RS485 and UART for vehicle bus integration.
- Bluetooth Low Energy support to pair external sensors and beacons for environmental and asset monitoring.

## Core Features of Teltonika - TFT100

- Rugged mechanical design and IP67 ingress protection for dusty or wet installations.
- Wide input voltage range that accommodates diverse e mobility and heavy equipment power systems.
- 2G modem for basic cellular telemetry and location reporting where 2G service exists.
- Direct vehicle bus access via CAN and serial interfaces to collect BMS and operational data.
- Bluetooth Low Energy for pairing temperature, humidity, magnet/movement and asset ID beacons.
- Multiple interface variants and ordering codes to match installation needs and wiring harnesses.
- Configuration and remote management supported through Teltonika tools such as Configurator and FOTA WEB.

## How These Features Work with Plaspy

When a TFT100 is connected to Plaspy it can feed location and telemetry into Plaspy dashboards, maps and alerts. Plaspy consumes the tracker telemetry and surfaces it for operational oversight, historical review and event driven workflows relevant to e mobility and heavy equipment fleets.

- Real time location reporting and historical route playback visible in Plaspy maps.
- Vehicle bus telemetry parsed from CAN or serial interfaces can be displayed as telemetry channels and used in reports.
- BLE sensor readings and beacon events can be ingested for environmental monitoring and asset identification in Plaspy.
- Telemetry driven events such as charge state changes or door alerts can be translated into Plaspy alerts and workflows.
- Plaspy displays sensor and status data alongside position to aid maintenance scheduling and operational decisions.

## Typical Use Cases

- Battery management monitoring for electric forklifts and industrial vehicles using CAN derived BMS data.
- E mobility fleet tracking to monitor vehicle location, utilization and charging activities.
- Heavy machinery oversight for telehandlers, loaders and outdoor equipment operating in harsh conditions.
- Cold chain or environmental sensing using BLE temperature and humidity sensors paired to the tracker.
- Anti tamper and security monitoring by combining vehicle bus events and BLE beacon alerts into Plaspy alerts.

## Feature Availability Notes

- Manufacturer firmware versions and configuration profiles can enable or restrict specific telemetry fields and parsing rules.
- Hardware revisions and order codes determine available interface combinations such as CAN or RS485 on particular units.
- Regional cellular variants affect 2G frequency support; verify radio band compatibility for your deployment area.
- Bluetooth sensor support depends on paired sensor types and configured scanning rules in the device.
- Teltonika lists the TFT100 as End of Life; check current availability, replacement guidance and firmware support with Teltonika.

## Why Use Plaspy with These Features

Using the Teltonika TFT100 with Plaspy gives operations and fleet teams consolidated visibility into location and vehicle telemetry without rebuilding integrations. The tracker’s rugged design and wide power input make it suitable for demanding e mobility and industrial environments, while wired and wireless interfaces let you bring BMS and sensor data into Plaspy for monitoring, alerts and reporting.

Learn more about integrating devices and fleet workflows on the Plaspy website https://www.plaspy.com. For the latest device specific feature details, firmware behavior and manufacturer guidance verify information with Teltonika at https://www.teltonika-gps.com/.
