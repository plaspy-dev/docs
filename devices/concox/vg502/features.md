---
slug: /concox/vg502/features
id: vg502-features
sidebar_label: Features
title: Concox - VG502 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Concox VG502 OBDII GNSS tracker and how it integrates with Plaspy for fleet tracking and vehicle telemetry
keywords:
  - Concox VG502 features
  - Concox VG502 GPS tracker
  - VG502 OBDII tracker
  - Concox VG502 Plaspy
  - VG502 GPS features
  - vehicle tracking OBDII
  - GNSS OBDII tracker
  - driving behavior analysis
  - fleet telemetry VG502
  - usage based insurance tracker
---

# Concox - VG502 Features

This page describes the public feature context for using the Concox VG502 OBDII GNSS tracker with Plaspy. It focuses on the device capabilities that are relevant to Plaspy users and fleet managers, explains how the tracker maps into Plaspy workflows, and highlights practical benefits for deployment, monitoring, and reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, vehicle OBD implementation, and manufacturer configuration. For device specific technical details, firmware notes, and the latest specifications, refer to official Concox documentation and release notes.

## Feature Overview

The VG502 is a plug-and-play OBDII GNSS tracker designed for rapid installation in private vehicles, company cars, and usage based insurance programs. It combines dual GNSS positioning and cellular connectivity with OBD derived vehicle telemetry and driving behavior analysis to deliver actionable location and vehicle health information for operational oversight.

- Plug-and-play OBD-II form factor for quick installation without hardwiring.
- Dual GNSS positioning with GPS and BDS for reliable location fixes and quoted accuracy under typical conditions.
- OBD-II telemetry including mileage, fault codes, ACC or ignition state, fuel consumption, battery voltage, and engine speed for richer vehicle insight.
- Driving behavior analysis that detects harsh maneuvers and collision events for safety scoring and UBI programs.
- BLE 4.0 for local configuration, firmware updates, and optional Bluetooth sensor support to extend monitoring capabilities.
- Instant alerts for fault codes, collisions, geo-fence entry and exit, device removal, and power disconnection to support timely response.

## Core Features of Concox - VG502

- OBD-II plug form factor for fast deployment in vehicles compatible with OBD-II ports.
- Dual GNSS (GPS + BDS) positioning to improve fix availability and accuracy.
- Comprehensive OBD telemetry including odometer mileage, diagnostic trouble codes, ACC or ignition status, fuel consumption estimates, battery voltage, and engine speed.
- Driving Behavior Analysis for detecting events such as harsh acceleration and harsh braking and for generating driver safety data.
- BLE 4.0 support enabling local device configuration, firmware updates, and optional Bluetooth accessory sensors.
- Alerts and event reporting covering collisions, geo-fence entry/exit, device removal or tampering, power loss, and diagnostic fault conditions.
- Support for common OBD-II protocols to maximize compatibility across vehicle makes and models.

## How These Features Work with Plaspy

When integrated with Plaspy, the VG502 streams location fixes, OBD telemetry, and event reports to the Plaspy platform where data is presented on live maps, in historical reports, and through configurable alerts. Plaspy ingests the device data and applies geofencing, reporting, and analytics to make vehicle and driver information operationally useful.

- Real-time location and trip playback based on GNSS fixes reported by the VG502.
- Event logs in Plaspy reflecting ACC or ignition state and trip segmentation for duty time and idling analysis.
- OBD-derived telemetry such as mileage and fuel usage feeding Plaspy reports for cost and efficiency monitoring.
- Driving behavior and collision events surfaced as alerts and scorecards to support safety programs and insurer analytics.
- Device health and tamper indicators (power loss, device removal) visible in Plaspy to assist rapid incident response.

## Typical Use Cases

- Rapid fleet rollout where plug-and-play installation reduces downtime and installation cost.
- Usage based insurance programs using OBD telemetry and driving behavior analysis for pricing and risk assessment.
- Company car programs tracking mileage, fuel use, and vehicle diagnostics for compliance and cost control.
- Safety and driver coaching initiatives using DBA events and trip history to improve driving behavior.
- Theft deterrence and recovery workflows using device removal and power loss alerts combined with location history.
- Mixed fleet deployments where broad OBD protocol support helps ensure compatibility across vehicle makes.

## Feature Availability Notes

- Feature behavior and availability can change with firmware updates; manufacturers may enable or restrict specific telemetry fields across revisions.
- OBD-II data returned by the vehicle depends on the vehicle make, model, and ECU; some parameters can vary by model year or regional vehicle variant.
- BLE accessory support and local firmware update behavior may differ between firmware versions and regional product variants.
- Geo-fence, alerting, and analytics capabilities are provided by Plaspy; exact alert thresholds and reporting formats are configurable within the platform.
- Verify supported OBD-II protocols and GNSS performance claims against the vehicle and manufacturer documentation for best results.

## Why Use Plaspy with These Features

Pairing the Concox VG502 with Plaspy provides a practical combination for organizations that need fast deployment, real-time visibility, and richer vehicle telemetry without hardwiring. Plaspy turns the VG502 data stream into live maps, event-driven alerts, and historical reports so operations teams, fleet managers, and insurers can monitor vehicle status, driver behavior, and maintenance indicators from a central platform.

To learn more about how Plaspy supports trackers like the Concox VG502, visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer documentation, verify details with Concox at https://www.iconcox.com/ as device features and firmware behavior can change over time.
