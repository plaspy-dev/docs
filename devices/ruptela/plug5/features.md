---
slug: /ruptela/plug5/features
id: plug5-features
sidebar_label: Features
title: Ruptela - Plug5 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Ruptela Plug5 OBD GPS tracker and how it integrates with Plaspy for fleet telematics and vehicle data
keywords:
  - Ruptela Plug5
  - Plug5 features
  - Ruptela Plug5 GPS tracker
  - Plug5 OBD dongle
  - Plug5 LTE M tracker
  - Plug5 BLE 5.1
  - Plug5 CAN OBDII
  - Plug5 motion detection
  - Plug5 fleet management
  - Plug5 Plaspy compatibility
---

# Ruptela - Plug5 Features

This page provides a public feature summary for the Ruptela Plug5 GPS tracker and explains how those capabilities are presented when the device is used with Plaspy. It is intended to help fleet managers, integrators, and technical teams understand the practical functions of Plug5 in the context of Plaspy fleet monitoring and reporting.

Exact feature availability can vary by device firmware, hardware revision, regional variant, and the way the unit is installed or configured. For device specific parameters, firmware behavior, or regional SKUs consult the manufacturer documentation and release notes for the most current technical details.

## Feature Overview

The Plug5 is an OBD form factor telematics dongle designed for fast, plug and play installation and deep vehicle data access. When used with Plaspy, it provides location tracking alongside vehicle diagnostics and event reporting to support fleet operations and loss prevention.

- Plug and play OBD/OBDII form factor that simplifies rollout and automatic vehicle model detection for mixed fleets.
- GNSS positioning combined with LTE‑M connectivity and 2G fallback to maintain real time location reporting across coverage conditions.
- Full OBDII and CAN data access plus proprietary manufacturer parameters for richer vehicle telemetry and fuel related metrics.
- BLE 5.1 support for accessory sensors and driver or cargo identification use cases.
- Motion and crash detection using an onboard 3 axis accelerometer, with internal buffering and backup power for continuity during power loss.

## Core Features of Ruptela - Plug5

- OBD/OBDII dongle design for quick installation and automatic detection of vehicle model and basic parameters.
- GNSS positioning using a high performance receiver for continuous location data.
- LTE‑M connectivity with automatic 2G fallback to preserve connectivity in varied network environments.
- Native reading of OBDII and CAN protocols including common fleet interfaces and proprietary manufacturer parameters where supported.
- BLE 5.1 radio for connecting external sensors, beacons, or driver identification accessories.
- Inertial monitoring with a 3 axis accelerometer for motion and crash detection and event generation.
- Internal backup battery and local memory buffering to store events and telemetry during temporary connectivity loss.
- Secure communications and remote device management support for firmware updates and configuration changes.

## How These Features Work with Plaspy

Plaspy receives location and vehicle telemetry from Plug5 to provide centralized visibility, alerting, and reporting across a fleet. Data from the device is surfaced in Plaspy dashboards and event systems to support operational workflows and incident response.

- Live location and vehicle telemetry displayed in Plaspy for routing, ETA estimation, and historical route review.
- OBD and CAN parameters available as telemetry streams in Plaspy to aid fuel monitoring, maintenance planning, and operational analysis.
- Event uploads from motion, crash detection, jamming or unplug detection appear as alerts or timeline entries for rapid review.
- Buffered records from the device are uploaded when connectivity resumes, preserving continuity in trip logs and incident reconstruction.
- BLE sensor and accessory inputs can be reflected in Plaspy as external sensor data or identification events when configured.

## Typical Use Cases

- Rapid fleet rollouts where plug and play installation and automatic vehicle detection reduce deployment time.
- Real time fleet tracking and route monitoring across mixed vehicle types for logistics and delivery operations.
- Fuel monitoring and telematics based maintenance planning using OBD and CAN derived vehicle parameters.
- Anti theft and stolen vehicle workflows using unplug detection, jamming alerts, last known GNSS, and internal battery reporting.
- Driver identification and accessory integration using BLE for driver tags or cargo sensors.
- Accident and incident capture with accelerometer triggered events and buffered telemetry for reconstruction.

## Feature Availability Notes

- Firmware and software revisions may enable or modify certain telemetry fields and behaviours; check firmware release notes for specifics.
- Hardware revisions and regional SKUs can affect supported cellular bands, BLE behavior, and certification; confirm the model variant before large deployments.
- Some manufacturer proprietary parameters and extended CAN data require vehicle or ECU support and may not be available on all models or regions.
- Installation method and vehicle wiring or OBD port conditions can change which signals are available to the device.
- Remote management and FOTA capabilities depend on device provisioning and access to the manufacturer device management platform.

## Why Use Plaspy with These Features

Using Plug5 with Plaspy gives organizations a combined solution for location awareness and vehicle level telemetry without complex hardware installation. The OBD form factor and automatic vehicle detection simplify rollouts, while OBD and CAN access plus BLE expand the types of operational data available in Plaspy for reporting, alerts, and maintenance workflows.

To learn more about how Plaspy can use Plug5 data for fleet visibility and operational oversight visit https://www.plaspy.com. For device specific technical details, firmware notes, and the latest manufacturer guidance please verify features and behavior with Ruptela at https://ruptela.com/ as device properties and firmware functionality can change over time.
