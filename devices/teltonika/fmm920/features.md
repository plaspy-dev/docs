---
slug: /teltonika/fmm920/features
id: fmm920-features
sidebar_label: Features
title: Teltonika - FMM920 Features
sidebar_class_name: menu_item_tracker
description: Overview of Teltonika FMM920 features and compatibility with Plaspy for compact real-time tracking and BLE sensor telemetry
keywords:
  - Teltonika FMM920
  - FMM920 features
  - Teltonika GPS tracker
  - FMM920 Plaspy compatibility
  - FMM920 BLE sensors
  - compact GPS tracker
  - Cat M1 NB IoT tracker
  - vehicle tracking FMM920
  - Teltonika FMM920 telemetry
  - remote immobilizer tracker
---

# Teltonika - FMM920 Features

This page provides a public, features-oriented overview of the Teltonika FMM920 as it is commonly used with Plaspy. It summarizes the device capabilities that matter for centralized tracking, telemetry forwarding, and remote control workflows when the unit is deployed in a Plaspy-managed fleet.

Exact feature availability and behavior depend on device firmware, hardware revision, installation type, and manufacturer implementation. For device-specific configuration, firmware release notes, and variant differences consult the official Teltonika documentation before deployment.

## Feature Overview

The FMM920 is a slim, compact GPS tracker designed for continuous position reporting and flexible telemetry in cellular networks. It pairs low-power LTE Cat M1 / NB-IoT connectivity with 2G fallback and includes BLE support and a backup battery to maintain reporting in common fleet and asset tracking scenarios.

- Continuous GNSS position reporting for live tracking and historical route replay.
- 4G LTE Cat M1 and NB-IoT primary connectivity with quad-band 2G fallback for broader regional reach.
- Built-in backup battery for continued reporting during main power loss and theft-recovery situations.
- Bluetooth Low Energy (BLE) support to pair external sensors and beacons for temperature, humidity, magnet, and movement telemetry.
- Remote actions such as engine blocking / immobilizer control together with remote firmware management.
- Slim 12 mm profile for discreet installation in vehicles and tight spaces.

## Core Features of Teltonika - FMM920

- GNSS position reporting enabling real-time location and historical telemetry.
- Cellular connectivity via Cat M1 and NB-IoT with quad-band 2G fallback (B2, B3, B5, B8).
- Bluetooth Low Energy for external sensor and beacon integration.
- Built-in backup battery to maintain device operation when vehicle power is lost.
- Remote immobilizer and engine block actions for anti-theft and fleet control measures.
- Remote firmware and configuration updates via Teltonika FOTA WEB for fleet maintenance.
- Compact 12 mm form factor suitable for discreet installations.

## How These Features Work with Plaspy

When the FMM920 is connected to Plaspy, device location and telemetry are delivered into a centralized monitoring environment for visibility, alerts, and analysis. Plaspy detects supported tracker protocols and ingests the telemetry needed for operational oversight and event-driven workflows.

- GNSS positions appear in Plaspy for live tracking, route history, and replay.
- BLE sensor readings forwarded by the FMM920 are available in Plaspy as telemetry events for temperature, humidity, magnet detection, and movement.
- Power-loss and backup battery status feed into Plaspy so operators can receive continuity and theft-related alerts.
- Remote immobilizer events and control status are reflected as device actions and events within Plaspy.
- Over-the-air firmware and configuration changes (via vendor tools such as Teltonika FOTA WEB) support consistent device behavior across a Plaspy-managed fleet.

## Typical Use Cases

- Anti-theft and quick recovery workflows using persistent tracking and remote immobilizer control.
- Fleet management for light commercial vehicles where compact installation and continuous telemetry are required.
- Rental and vehicle sharing fleets that need discreet tracking, remote control, and centralized oversight.
- Temperature-sensitive cargo monitoring when BLE temperature or humidity sensors are paired to the tracker.
- Distributed asset protection for trailers, containers, or auxiliary equipment installed in tight spaces.
- Maintenance and device lifecycle management using remote firmware updates and centralized monitoring.

## Feature Availability Notes

- Feature availability can vary by firmware version and hardware revision; not all features may be present on every unit or regional variant.
- BLE sensor functions and supported sensor types depend on manufacturer implementation and firmware; pairing and telemetry behavior should be validated during commissioning.
- Remote immobilizer behavior can be affected by installation wiring and vehicle systems; proper installation and testing are essential.
- Over-the-air update capabilities via Teltonika FOTA WEB require vendor services and correct device provisioning to perform fleet updates.
- Regional cellular band support and regulatory variants may affect connectivity options for Cat M1, NB-IoT, and 2G fallback.

## Why Use Plaspy with These Features

Using the Teltonika FMM920 with Plaspy centralizes location, sensor telemetry, and remote control actions into a single monitoring and reporting environment. For organizations that need operational visibility across vehicles and assets, this combination reduces the manual effort required to track devices, observe sensor data, and respond to events such as power loss or unauthorized movement.

To learn more about how Plaspy can use the FMM920 to deliver real-time tracking and fleet oversight visit https://www.plaspy.com. For the latest device-specific details, firmware behavior, and variant information consult the manufacturer at https://www.teltonika-gps.com/ to verify current capabilities and documentation.
