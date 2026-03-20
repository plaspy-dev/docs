---
slug: /bofan/pt621/features
id: pt621-features
sidebar_label: Features
title: Bofan - PT621 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Bofan PT621 GPS tracker and how it integrates with Plaspy for fleet tracking and telemetry
keywords:
  - Bofan PT621
  - Bofan PT621 features
  - PT621 GPS tracker
  - PT621 Plaspy
  - Bofan GPS tracker
  - vehicle GPS tracker
  - fleet tracking PT621
  - PT621 camera support
  - PT621 remote immobilizer
  - PT621 driver ID
---

# Bofan - PT621 Features

This page describes the public feature context for using the Bofan PT621 tracker with Plaspy. It focuses on the practical capabilities you can expect to see in Plaspy when the PT621 is integrated, and how those capabilities support fleet visibility, event reporting, and operational oversight.

Exact feature availability can vary by firmware version, hardware revision, installed accessories, regional variants, and the way the unit is configured at installation. For device-specific parameters, wiring, or the latest firmware behavior, consult the manufacturer documentation and release notes.

## Feature Overview

The PT621 is a vehicle-focused 4G GPS tracker designed to deliver continuous position updates, alarms, and peripheral telemetry into fleet platforms such as Plaspy. It combines location reporting with configurable inputs, outputs, camera support, and driver identification to produce actionable events for fleet operators.

- Real-time location reporting over cellular networks with SMS as a fallback for critical alerts
- Event and alarm support including SOS, geo-fence, speed, ACC status, antenna cut, and fuel/temperature alerts
- Support for external peripherals such as up to four cameras and an RFID reader for driver identification
- Remote engine cut via an external relay and flexible digital inputs and outputs for custom integrations
- Two-way voice capability and local message/buzzer outputs for driver communication and reminders

## Core Features of Bofan - PT621

- 4G/GPRS location reporting with SMS fallback for critical notifications
- GPS position tracking and historical location reporting
- Support for up to four external cameras and event-triggered photo capture
- Remote engine cut via external relay for immobilization control
- External RFID driver identification interface to associate drivers with trips
- Comprehensive alarm suite including SOS, geo-fence, speed, fuel and temperature alerts, ACC on/off, and antenna cut detection
- Multiple digital inputs and outputs plus microphone and speaker for two-way voice
- Sensor inputs for fuel, temperature, door status, buzzer and LED message output support

## How These Features Work with Plaspy

When a PT621 is connected to Plaspy, the device's position updates, alarms, and peripheral events are ingested into the Plaspy platform and presented as map markers, event notifications, and historical records. Plaspy automatically detects common tracker protocols used by compatible devices and consolidates incoming data for visibility and reporting.

- Live and historical location traces visible on Plaspy maps for route review and dispatching
- Alarm and event notifications (geo-fence breaches, SOS, speed alerts, antenna cut) surfaced in the Plaspy alerts feed
- Camera-triggered images can be linked to events in Plaspy where platform support is available, aiding incident documentation
- Driver ID events from RFID reads shown in trip and driver assignment records inside Plaspy
- Inputs and outputs, plus fuel and temperature sensor readings, presented as telemetry points and available in reports for operational analysis

## Typical Use Cases

- Fleet management and dispatching with live location and historical route playback
- Driver accountability and trip attribution through RFID driver identification
- Anti-theft workflows using immobilization and antenna cut alerts combined with SOS reporting
- Cold-chain or temperature-sensitive transport monitoring with temperature alarm visibility
- Automated evidence capture with event-linked photos from external cameras
- Fuel monitoring and discrepancy detection using supported sensor inputs

## Feature Availability Notes

- Some features require specific hardware accessories such as external cameras, RFID tags/readers, or a relay for engine cut
- Firmware versions and regional hardware variants can affect supported bands, alarm behavior, and peripheral compatibility
- Installation type and wiring practice influence which inputs and outputs are available and how sensors report
- Manufacturer configuration choices and FMS integration options determine which events are reported and how they appear in Plaspy
- Always confirm the exact feature set for your unit by checking the manufacturer product datasheet and firmware notes

## Why Use Plaspy with These Features

Using the PT621 with Plaspy brings device-level telematics into a single operational console where location, alarms, and peripheral telemetry are combined for monitoring, alerting, and reporting. This integration helps fleet operators reduce response times, document incidents, and maintain continuous oversight across vehicles and drivers.

To learn more about how Plaspy presents device data and to review platform capabilities, visit https://www.plaspy.com. For the most current device specifications, accessory requirements, and firmware behavior for the PT621, verify details on the manufacturer website https://www.bofancloud.com/ as features and implementations may change over time.
