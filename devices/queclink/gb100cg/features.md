---
slug: /queclink/gb100cg/features
id: gb100cg-features
sidebar_label: Features
title: QuecLink - GB100CG Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the QuecLink GB100CG and how it integrates with Plaspy for tracking fleet management and insurance telematics
keywords:
  - QuecLink GB100CG features
  - QuecLink GB100CG GPS tracker
  - GB100CG Plaspy compatibility
  - QuecLink GB100CG LTE tracker
  - GB100CG motion sensor
  - GB100CG BLE 5.2
  - GB100CG geofence capabilities
  - GB100CG UBI tracker
  - QuecLink vehicle tracker
  - GB100CG anti theft features
---

# QuecLink - GB100CG Features

This page describes the public feature context for using the QuecLink GB100CG tracker with Plaspy. It summarizes the GB100CG's practical capabilities and how those capabilities are typically presented and used inside Plaspy for fleet management, insurance telematics, and anti theft workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, regional variant, and manufacturer implementation. Always consider those variables when planning deployments and consult the manufacturer documentation for device specific details and the latest firmware information.

## Feature Overview

The GB100CG is a compact, battery-mounted tracker built for automotive telematics and insurance telematics applications. It combines wide cellular coverage with high-rate motion sensing and short range Bluetooth pairing to deliver location, motion and event reports suitable for real-time monitoring, incident analysis, and usage based services.

- LTE Cat 1 cellular connectivity with 2G fallback for consistent wide area coverage and continuous location reporting.
- High-frequency 6-axis motion sensor providing detailed driving behavior and crash level event detection.
- IP67 rated compact enclosure and battery mounting for discreet installation and environmental durability.
- BLE 5.2 support for pairing short range sensors and accessories to extend telemetry available to Plaspy.
- Configurable reporting options including time, distance and mileage based reports plus geofence and speed events.

## Core Features of QuecLink - GB100CG

- LTE Cat 1 primary connectivity with GSM 2G fallback to help maintain connectivity where primary networks are limited.
- High-frequency 6-axis motion sensor (3-axis accelerometer plus 3-axis gyroscope) for driving behavior analytics and crash data collection.
- IP67 waterproof housing and a compact battery-mounted form factor designed for covert or unobtrusive installation.
- BLE 5.2 for accessory pairing and short range telemetry such as auxiliary sensors and beacons.
- Configurable event reporting including scheduled reports, speed and tow alarms, and geofence entry or exit events.
- Virtual ignition detection logic combining voltage and motion inputs for trip segmentation and ignition based alerts.
- Internal backup battery and wide input voltage support to continue reporting during vehicle power loss.
- Multi GNSS support to provide robust positioning across different regional satellite systems.

## How These Features Work with Plaspy

Plaspy ingests the GB100CG telemetry and event messages to provide visibility, alerts, and analytics. The device can be set to report over TCP or UDP to Plaspy endpoints, and Plaspy automatically detects common tracker protocols so incoming data is mapped into the platform for tracking and event processing.

- Real time location updates and periodic position reports appear in Plaspy dashboards for live monitoring and historical playback.
- High rate motion and crash records are captured as events and can be used by Plaspy for incident reconstruction and aggressive driving analytics.
- Geofence triggers, speed alarms, tow and power loss reports generate immediate notifications and create historical event logs for audits and response workflows.
- BLE sensor telemetry that the GB100CG forwards can be correlated in Plaspy with GPS events to enrich asset state and contextual alerts.
- Virtual ignition detection supports trip segmentation and usage based reporting within Plaspy for UBI and billing workflows.

## Typical Use Cases

- Usage based insurance telematics where high frequency motion sampling supports risk scoring and claim reconstruction.
- Fleet management for real time tracking, route verification, mileage logging and driver behavior monitoring.
- Stolen vehicle recovery and anti theft monitoring leveraging tow detection, jamming alerts and persistent reporting on power loss.
- Crash detection and post incident analysis using high sample rate motion data to improve claim handling and forensics.
- Sensor augmented telemetry where BLE paired sensors add temperature, presence or proximity data to vehicle tracking.
- Compliance monitoring and operational oversight where reliable event logs and geofence alerts are required.

## Feature Availability Notes

- Feature presence and exact behavior depend on device firmware version and the hardware revision installed in the field.
- Regional cellular band support, SIM configuration options, and wireless behavior may vary by market and product SKU.
- Installation type and wiring impact available signals such as vehicle voltage sensing and virtual ignition detection.
- BLE accessory functionality may require specific firmware or accessories and can differ by region and configuration.
- Always confirm supported features for your device serial number and firmware on the official QuecLink resources before deployment.

## Why Use Plaspy with These Features

Using the GB100CG with Plaspy gives organizations a practical way to combine reliable connectivity, high fidelity motion sensing, and configurable reporting into a unified monitoring workflow. Plaspy translates the tracker’s position, event and sensor reports into dashboards, alerts and historical records that support fleet operations, insurance analytics and incident response.

To learn more about how Plaspy works with compatible trackers visit https://www.plaspy.com. For the most current device specific specifications, firmware notes and manufacturer details verify information at the official QuecLink site https://www.queclink.com/ as features and firmware behavior can change over time.
