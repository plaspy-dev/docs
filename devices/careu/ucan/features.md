---
slug: /careu/ucan/features
id: ucan-features
sidebar_label: Features
title: CAREU - UCAN Features
sidebar_class_name: menu_item_tracker
description: Public overview of CAREU UCAN GPS tracker features and Plaspy compatibility for OBD II telemetry, real time tracking, and driver event reporting
keywords:
  - CAREU UCAN features
  - CAREU UCAN GPS tracker
  - UCAN OBD II tracker
  - Plaspy compatible tracker
  - UCAN vehicle telemetry
  - UCAN accelerometer events
  - UCAN 4G LTE tracker
  - UCAN Bluetooth 4.0
  - fleet tracking UCAN
  - OBD II telemetry for Plaspy
---

# CAREU - UCAN Features

This page provides a public, feature-focused overview of the CAREU UCAN tracker and how its capabilities are used with Plaspy. It is intended to help fleet managers, integrators, and technical evaluators understand the UCAN's practical functions when reporting location, vehicle telemetry, and event data into the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and how the unit is installed or configured. For the most current device-specific details consult the manufacturer documentation and firmware release notes from CAREU as needed.

## Feature Overview

The CAREU UCAN is a plug-and-play OBD-II tracker designed for rapid vehicle rollout and continuous fleet visibility. It combines GNSS positioning, OBD-II vehicle data, event detection, and cellular connectivity so fleets can capture both location and operational telemetry without complex wiring.

- Plug-and-play OBD-II installation for fast deployment and minimal installation time.
- Real-time GNSS position reporting combined with OBD-II telemetry such as odometer, RPM, speed, fuel level, working hours, and DTC error codes.
- 4G LTE connectivity with fallback to 3G and 2G where supported, plus optional eSIM for flexible provisioning and roaming.
- Built-in 6-axis accelerometer for detecting harsh acceleration, harsh braking, impact events, and other driving events used in safety analysis.
- Large onboard log memory to preserve position history through network interruptions and synchronize to Plaspy when connectivity resumes.
- Bluetooth 4.0 (4G variant) to extend telemetry with compatible Bluetooth sensors and accessories.

## Core Features of CAREU - UCAN

- OBD-II plug-and-play interface for direct vehicle connection and telemetry access.
- GNSS location reporting for live tracking and historical routes.
- OBD-II data capture including mileage/odometer, RPM, vehicle speed, fuel level, working hours, and DTC diagnostic codes.
- Cellular connectivity with 4G LTE Cat.1 / Cat.M and fallback support to 3G/2G depending on variant; optional eSIM provisioning where available.
- Built-in 6-axis accelerometer for event detection such as harsh braking, harsh acceleration, impacts, and flip-over conditions.
- Onboard log storage sized for extensive offline recording (variant dependent).
- Bluetooth 4.0 available in the 4G variant for accessory and sensor integration.
- Support for remote configuration and FOTA firmware updates via FTP, plus optional accessories such as RS-232, digital I/O, and a wireless relay accessory on supported variants.

## How These Features Work with Plaspy

When installed, the UCAN reports GNSS position and OBD telemetry to Plaspy for centralized visibility across a fleet. Plaspy automatically recognizes compatible tracker protocols and consolidates data for monitoring, alerting, and reporting.

- Live location updates and historical routes are visible in Plaspy for tracking and route analysis.
- Engine and ignition status plus OBD-II diagnostics including DTC codes, RPM, and speed appear in Plaspy dashboards for maintenance and compliance workflows.
- Fuel level and odometer data captured via OBD-II can be used in Plaspy reports to support fuel monitoring and operational planning.
- Accelerometer-detected events such as harsh braking or impact are surfaced as events for driver scorecards and safety alerts.
- Bluetooth sensor data from the 4G variant can be surfaced in Plaspy where sensor telemetry is configured.
- Stored logs on the device synchronize to Plaspy when network connectivity is restored, preserving continuity of position history.

## Typical Use Cases

- Rapid fleet rollout where plug-and-play OBD-II installation reduces downtime for vehicles in mixed fleets.
- Real-time fleet monitoring and route management for delivery, service, and logistics operations.
- Driver behavior and safety programs using accelerometer event detection to inform coaching and incident review.
- Maintenance planning and diagnostics using OBD-II telemetry and DTC codes to prioritize service needs.
- Anti-theft and security monitoring using continuous location reporting and offline log preservation for recovery analysis.
- Extensions with Bluetooth sensors or optional I/O accessories for specific operational sensors or integrations.

## Feature Availability Notes

- Some features are variant dependent; Bluetooth and certain accessory interfaces are available only on specified 4G variants.
- Log memory capacity and cellular fallback behavior differ between 4G and 3/2G variants; check the unit label and variant details.
- Remote configuration and FOTA are supported, but available options and workflows may change with firmware releases.
- Optional accessories such as RS-232, digital I/O, and wireless relay are not standard on every unit and require separate provisioning and configuration.
- Regional cellular support and eSIM availability depend on carrier agreements and the device variant shipped for that market.

## Why Use Plaspy with These Features

Pairing the CAREU UCAN with Plaspy gives fleet teams a straightforward way to combine vehicle location, OBD-II telemetry, and event detection in a single management platform. Plaspy consolidates reporting and alerts so operations, maintenance, and safety teams can act on location and vehicle health data without juggling multiple systems. The UCAN's plug-and-play form factor and onboard log storage reduce installation friction and help maintain continuity when cellular coverage is inconsistent.

To learn more about Plaspy and how compatible trackers like the CAREU UCAN integrate with our platform visit https://www.plaspy.com. Please verify the latest device capabilities, firmware behavior, and manufacturer implementation details on the official CAREU product pages at https://www.systech-iot.com/ since features and firmware can change over time.
