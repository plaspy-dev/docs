---
slug: /concox/vl802/features
id: vl802-features
sidebar_label: Features
title: Concox - VL802 Features
sidebar_class_name: menu_item_tracker
description: Overview of Concox VL802 features and how this Plaspy compatible LTE vehicle tracker supports fleet tracking, telemetry, and anti theft workflows
keywords:
  - Concox VL802 features
  - Concox VL802 GPS tracker
  - VL802 Plaspy compatibility
  - VL802 vehicle tracker features
  - Concox VL802 capabilities
  - VL802 LTE tracker
  - fleet tracking Concox VL802
  - VL802 telemetry features
  - Concox VL802 immobilizer
  - VL802 GNSS tracking
---

# Concox - VL802 Features

This page summarizes the public feature context for the Concox VL802 when used with Plaspy. It focuses on the practical capabilities you can expect to use in Plaspy for vehicle location, telemetry, event reporting, and remote control workflows. The content is intended to help fleet operators, integrators, and technical evaluators understand how the VL802 functions as a Plaspy compatible terminal.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation wiring, and manufacturer configuration. Use this page as a high level guide; consult the official Concox documentation and firmware release notes for device specific and up to date technical details.

## Feature Overview

The VL802 is a compact LTE vehicle terminal designed for continuous fleet operation and integration with telematics platforms such as Plaspy. Its combination of cellular redundancy, multi constellation GNSS, and extensive I/O provides reliable real-time tracking, sensor telemetry, and remote control capabilities for a wide range of vehicle types.

- LTE with 2G GSM fallback for robust cellular connectivity and consistent reporting in mixed coverage areas
- Multi-constellation GNSS positioning that improves location accuracy and faster fixes in varied environments
- Industrial power range with an internal backup battery to keep reporting during power interruptions
- Comprehensive inputs and outputs including ACC, SOS, configurable I/Os, analog 0–5 V detection, RS485 and a relay output for immobilizer control
- Built-in audio, accelerometer-based event detection, and Bluetooth for local configuration and accessory pairing

## Core Features of Concox - VL802

- LTE Cat 1 primary cellular connectivity with 2G GSM fallback for continuity of data delivery
- Multi GNSS support (GPS plus BDS and LBS) for improved positioning and reduced time to first fix
- Vehicle power support across an industrial voltage range plus onboard Li-Polymer backup battery for resilience
- Digital inputs for ignition detection (ACC) and SOS, plus configurable digital I/O for custom event wiring
- Analog 0–5 V detection for external sensor telemetry such as fuel or other voltage-based sensors
- RS485 interface and a relay output suitable for remote immobilizer or cut-off control
- Onboard accelerometer and event-triggered alerts including speeding, vibration, fatigue driving and geo-fence related events
- Two-way audio handling and remote listen-in for incident verification, plus Bluetooth for fast local setup

## How These Features Work with Plaspy

When connected to Plaspy, the VL802 streams GNSS coordinates, telemetry, and event notifications so fleet managers and integrators can monitor assets in real time. Plaspy ingests position and sensor data and exposes it through dashboards, reports, and configurable alerts to support operational workflows.

- Real-time location updates and continuity through LTE with GSM fallback appear in Plaspy maps and live tracking views
- Ignition (ACC) status and digital input events such as SOS or door alarms are delivered to Plaspy for event logging and alerting
- Analog 0–5 V sensor readings and RS485 sourced telemetry can be presented in Plaspy as telemetry channels for dashboards and reports
- Relay control and remote immobilizer actions can be executed from Plaspy command channels to support anti-theft and recovery procedures
- Accelerometer and configured event alerts are sent as actionable notifications in Plaspy for driver behavior monitoring and incident response

## Typical Use Cases

- Commercial fleet location and dispatch where continuous tracking and ignition-aware reporting improve routing and utilization
- Anti-theft workflows that combine remote relay control, location tracking, and alarm inputs for asset protection
- Public transport monitoring using live location, audio monitoring, and SOS handling for passenger safety and operational oversight
- Telematics and driver scoring where speeding, fatigue driving, and vibration events feed analytics and coaching workflows
- Sensor telemetry and fuel monitoring using analog inputs and RS485 integrations for fuel usage and maintenance insights

## Feature Availability Notes

- Feature sets can differ by firmware version and hardware revision; firmware updates can enable, modify, or refine functionality
- Regional product variants may ship with different cellular band support or default configurations; confirm the variant used for your deployment
- Installation choices such as wiring for ACC, SOS, and relay outputs affect which features are available in a particular vehicle
- Some advanced functions require platform-side configuration in Plaspy to consume and present the data effectively
- Always verify any regulatory, carrier, or local installation requirements when deploying cellular telematics equipment

## Why Use Plaspy with These Features

Pairing the Concox VL802 with Plaspy provides a practical path from device telemetry to operational insight. Plaspy consolidates GNSS position data, digital and analog telemetry, and event notifications into live views, historical reports, and alerting rules that help fleets reduce downtime, improve safety, and respond faster to incidents.

To learn more about how Plaspy supports trackers like the VL802 and to review integration options, visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer guidance, verify information on the official Concox site at https://www.iconcox.com/ as implementations and feature behavior can change over time.
