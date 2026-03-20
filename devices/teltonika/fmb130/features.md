---
slug: /teltonika/fmb130/features
id: fmb130-features
sidebar_label: Features
title: Teltonika - FMB130 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMB130 and how its tracking and telemetry capabilities work with Plaspy
keywords:
  - Teltonika FMB130
  - Teltonika FMB130 features
  - FMB130 GPS tracker
  - FMB130 Plaspy
  - FMB130 fuel monitoring
  - FMB130 CAN adapter
  - FMB130 BLE sensors
  - vehicle GPS tracker
  - fleet tracking Plaspy
  - Teltonika GPS features
---

# Teltonika - FMB130 Features

This page provides a public feature overview of the Teltonika FMB130 and how the device is used with Plaspy for real‑time tracking and fleet management. It summarizes practical, non‑sensitive capabilities that are relevant when integrating the FMB130 into Plaspy workflows and dashboards.

Exact feature availability and behavior can vary by device firmware, hardware revision, installed accessories, and the specific installation. Always confirm the capabilities you rely on against the device firmware notes, accessory list, and the manufacturer documentation to ensure the features match your deployment needs.

## Feature Overview

The FMB130 is a compact, vehicle focused GPS tracker designed for machinery and special equipment. In Plaspy, it forwards position data plus telemetry derived from CAN adapters and paired Bluetooth sensors so teams can monitor location, fuel, and environmental parameters alongside standard tracking information.

- Reliable position reporting for vehicle and equipment tracking in Plaspy.
- Fuel monitoring via impulse inputs to support fuel flow meter data and theft analysis.
- CAN adapter compatibility to surface vehicle parameters such as fuel level, odometer, RPM, and engine temperature into Plaspy reports.
- Bluetooth Low Energy support to pair external sensors and beacons for temperature, humidity, and asset sensing.
- Remote engine blocking (immobilizer) capability that can be used as part of anti‑theft workflows where supported and authorized.
- Remote firmware and configuration management via Teltonika tools to simplify large deployments.

## Core Features of Teltonika - FMB130

- Vehicle grade GPS position and movement reporting suitable for heavy machinery and special equipment.
- Quad band 2G cellular connectivity for broad 2G coverage in regions where 2G is available.
- Impulse input support for pulse based fuel flow meters to enable fuel consumption monitoring.
- CAN adapter compatibility to read vehicle telemetry such as fuel level, odometer, RPM, and engine temperature.
- Bluetooth Low Energy support for pairing external sensors and beacons for environmental and asset monitoring.
- Remote engine blocking (immobilizer) for anti‑theft and operational control actions.
- Support for Teltonika FOTA WEB and Teltonika Configurator for remote firmware updates and configuration management.
- Small form factor and vehicle oriented connectors to simplify installation in construction, agriculture, and special equipment.

## How These Features Work with Plaspy

Plaspy ingests the FMB130's position and telemetry so teams can visualize live location, review historical routes, and act on events. The platform normalizes telemetry from CAN adapters and connected BLE sensors so fuel and environmental data appear alongside location for unified reporting.

- Real‑time position and movement visibility in Plaspy dashboards and maps.
- CAN‑derived vehicle parameters appear in Plaspy as telemetry points for maintenance and operational reporting.
- Fuel monitoring data from impulse inputs is forwarded to Plaspy for consumption analysis and event detection.
- BLE sensor readings for temperature and humidity can be displayed and trended in Plaspy for cold chain and asset condition monitoring.
- Remote control actions such as engine blocking can be executed through Plaspy where device capabilities and permissions allow.

## Typical Use Cases

- Fleet fuel management for equipment that uses impulse fuel meters and CAN based telemetry.
- Construction and agricultural machinery tracking with anti‑theft controls and remote monitoring.
- Cold chain monitoring by pairing BLE temperature and humidity sensors for perishable cargo visibility.
- Rental and shared vehicle operations that require odometer, RPM and remote immobilizer functions for policy enforcement.
- Logistics and emergency transport where location, engine telemetry, and environmental sensing are monitored together.
- Mixed telematics projects combining vehicle telemetry and external sensor data for unified reporting.

## Feature Availability Notes

- Feature sets may differ between firmware versions and hardware revisions; confirm the firmware release notes for exact behavior.
- Some telemetry requires additional accessories such as CAN adapters or BLE sensors; verify required parts for your use case.
- Regional cellular coverage and regulatory variants affect 2G availability; confirm cellular strategy before deployment.
- Installation choices and vehicle interfaces determine whether remote engine blocking and certain telemetry channels are available.
- Manufacturer documentation and configuration tools are the authoritative source for device capabilities and supported configurations.

## Why Use Plaspy with These Features

Using the Teltonika FMB130 with Plaspy provides a practical path to combine location, vehicle telemetry, and external sensor data into a single operational view. Plaspy helps translate the FMB130's telemetry into actionable dashboards, alerts, and historical reports that support fuel analysis, maintenance planning, anti‑theft workflows, and environmental monitoring.

To learn more about how Plaspy can work with devices like the FMB130 visit https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and manufacturer instructions please verify details on the Teltonika website https://www.teltonika-gps.com/ as device features and firmware behavior may change over time.
