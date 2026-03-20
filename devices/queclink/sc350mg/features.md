---
slug: /queclink/sc350mg/features
id: sc350mg-features
sidebar_label: Features
title: QuecLink - SC350MG Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the QuecLink SC350MG GNSS e bike tracker and how it works with Plaspy for monitoring and security
keywords:
  - QuecLink SC350MG
  - SC350MG features
  - QuecLink SC350MG GPS tracker
  - E bike tracker
  - GNSS tracker for e bikes
  - LTE Cat M1 NB2 tracker
  - ECU BMS data reader
  - BLE bike unlock
  - vibration detection tracker
  - Plaspy compatible tracker
---

# QuecLink - SC350MG Features

This page provides a public feature overview of the QuecLink SC350MG and how its capabilities map to monitoring and management in Plaspy. It focuses on practical, non-sensitive information about the device and the kinds of visibility and operational value you can expect when the SC350MG is used with the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and installation method. The information on this page reflects the model description and common configurations, but you should verify device specific details with the manufacturer and your deployment documentation.

## Feature Overview

The QuecLink SC350MG is a compact, water resistant GNSS tracker designed for E bikes that combines cellular connectivity, vehicle controller data access, and local sensors to support security and fleet management workflows. When connected to Plaspy, the device can report location, motion events, and selected vehicle data to enable remote monitoring and operational oversight.

- Compact water resistant form factor for discreet mounting on E bikes
- LTE Cat M1 and NB2 cellular connectivity with 2G fallback for broad coverage
- Wide DC input range for compatibility with many E bike electrical systems
- Ability to read ECU and BMS data via CAN and UART interfaces for vehicle intelligence
- BLE support enabling local unlocking workflows and paired device interactions
- Motion awareness through vibration detection and a 3 axis acceleration sensor

## Core Features of QuecLink - SC350MG

- GNSS location tracking designed for E bike positioning and movement monitoring
- LTE Cat M1 NB2 cellular communication with fallback to 2G where available
- Water resistance rated to support outdoor use and exposure typical for bicycles
- Wide voltage input range DC 8 60V to fit common E bike power systems
- CAN and UART ports to collect ECU and BMS data from vehicle controllers and battery systems
- Built in Bluetooth Low Energy for proximity based functions such as unlocking
- Vibration detection for basic anti theft or tamper indication
- 3 axis acceleration sensor for motion detection and activity monitoring

## How These Features Work with Plaspy

Plaspy provides a platform layer that receives telemetry and event data from compatible trackers like the SC350MG and displays that information for monitoring and analysis. Plaspy automatically detects common tracker protocols and accepts device connections so the SC350MG can deliver location and sensor data into the system without manual protocol selection.

- Location updates from the SC350MG are shown on Plaspy maps for real time and historical tracking
- Motion and vibration events can be surfaced as alerts or timeline events to indicate activity or potential tampering
- ECU and BMS readings forwarded from the device can appear as telemetry fields or custom data points in Plaspy for operational insight
- BLE related events such as unlock attempts can be logged to provide an audit trail when integrated into bike access workflows
- Device status and connectivity information are available in Plaspy to help monitor device health and network reachability

## Typical Use Cases

- Fleet managers tracking a mixed fleet of E bikes for location, utilization, and routing insights
- Urban bike sharing or rental operators monitoring bike activity and access events
- Owners and operators using vibration and motion detection for anti theft monitoring
- Remote monitoring of battery and ECU status reported from the bike for maintenance planning
- Enabling proximity based unlocking and user access control through BLE integration
- Covert installation to preserve bike aesthetics while adding connected monitoring

## Feature Availability Notes

- Certain features such as ECU and BMS data availability depend on the specific E bike controller and whether the required CAN or UART signals are exposed
- Firmware version and regional hardware variants can change which telemetry fields and events are supported by a given SC350MG unit
- Installation method and wiring impact which power ranges and interfaces are accessible during operation
- BLE behavior and unlocking workflows require a paired client application or integration to manage authentication and access
- Always consult the device firmware release notes and manufacturer documentation for the most current supported functions

## Why Use Plaspy with These Features

Using the QuecLink SC350MG with Plaspy gives organizations a way to consolidate location, motion, and vehicle data from E bikes into a single monitoring and management platform. The combination of GNSS tracking, motion sensors, and ECU/BMS data enables improved security, better maintenance planning, and clearer operational visibility for bike fleets or individual owners.

To learn more about how Plaspy can work with the QuecLink SC350MG and other trackers visit https://www.plaspy.com. For the latest device specific feature lists, firmware behavior, and manufacturer implementation details please verify information on the QuecLink website https://www.queclink.com/ as product capabilities and firmware behavior may change over time.
