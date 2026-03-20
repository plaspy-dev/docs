---
slug: /globalsat/gtr_388nb/features
id: gtr_388nb-features
sidebar_label: Features
title: GlobalSat - GTR-388NB Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the GlobalSat GTR 388NB and how it integrates with Plaspy for vehicle and micromobility tracking
keywords:
  - GlobalSat GTR-388NB features
  - GTR-388NB GPS tracker
  - GTR-388NB Plaspy compatibility
  - NB-IoT GPS tracker
  - eBike tracker
  - motorcycle GPS tracker
  - waterproof GPS tracker
  - vehicle telematics tracker
  - ACC and relay input tracker
  - analog telemetry tracker
---

# GlobalSat - GTR-388NB Features

This page provides a public feature overview of the GlobalSat GTR-388NB and how it functions when used with the Plaspy platform. It focuses on practical capabilities, common telemetry inputs, and the ways Plaspy can present device data for fleet management, anti theft, and shared mobility use cases.

Exact feature availability can vary by factory firmware version, hardware revision, installation method, and regional device variants. For device specific specifications, firmware behavior, and installation guidance consult the manufacturer documentation and release notes from GlobalSat.

## Feature Overview

The GTR-388NB is a compact, rugged NB‑IoT tracker built for eBikes, motorcycles, scooters and light vehicles. It emphasizes waterproof protection, low power operation with an internal backup battery, and straightforward wiring for quick installs. When paired with Plaspy the device provides continuous position reporting and telemetry useful for tracking, trip logs, and event driven alerts.

- Compact waterproof enclosure and lightweight design for unobtrusive mounting on motorcycles and shared micromobility vehicles.
- NB‑IoT connectivity using UDP transport for efficient low bandwidth reporting across wide areas.
- Built in GNSS with AGPS support to improve time to first fix and maintain reliable location updates.
- Internal motion G sensor and dedicated emergency input to detect movement and trigger alerts.
- Multiple I O options including ACC ignition input, analog 0–28 V input and a negative trigger digital output for relay control.
- Internal rechargeable backup battery and optimized power management to support long standby periods and continuity of telemetry.

## Core Features of GlobalSat - GTR-388NB

- NB‑IoT connectivity on supported bands with UDP data transport for telemetry and position updates.
- Built in GNSS receiver with AGPS support and integrated ceramic patch antenna for position fixes.
- Rugged IPX7 rated enclosure suitable for outdoor vehicle use and shared mobility fleets.
- Internal motion G sensor for movement detection and tamper awareness.
- Dedicated ACC ignition input for trip and engine state reporting.
- Analog input supporting 0–28 V telemetry useful for simple voltage based sensors.
- Negative trigger digital output usable for relay based immobilizer or accessory control.
- Rechargeable 820 mAh internal backup battery and power management tuned for low power operation.

## How These Features Work with Plaspy

Plaspy receives the GTR-388NB telemetry and location packets and converts them into live map positions, historical trails, and event records that operators can monitor in real time. Plaspy automatically detects common tracker protocols and ingests UDP reports so device data becomes actionable in the Plaspy dashboard and APIs.

- Live location updates and history playback showing GNSS coordinates and timestamps for fleet oversight.
- Motion and tamper events derived from the internal G sensor appear as alerts and can be used to trigger notifications.
- Ignition and ACC state changes are recorded as trip start and stop events for mileage and usage tracking.
- Analog 0–28 V readings are shown as telemetry values in Plaspy and can be used for voltage based monitoring when configured.
- Relay output control can be represented in Plaspy as a remote control action when paired with the appropriate accessory and wiring.
- Emergency input activations are routed to Plaspy notifications so operators can receive and act on urgent signals.

## Typical Use Cases

- Real time fleet tracking for light vehicles, motorcycles and eBike fleets requiring compact waterproof trackers.
- Anti theft workflows combining motion detection, emergency input and remote relay control for immobilization.
- Shared micromobility operations where unobtrusive mounting, low power and reliable outdoor performance are priorities.
- Trip logging and ignition based reporting for operational analytics and maintenance planning.
- Voltage based telemetry monitoring such as battery voltage reporting integrated into Plaspy dashboards.
- Asset tracking in outdoor environments where IPX7 protection and rugged design are required.

## Feature Availability Notes

- Feature behavior depends on device firmware version and manufacturer configuration; capabilities may differ by hardware revision.
- Optional accessories such as relay modules, OBDII power cables, or external emergency buttons change installation options and available functions.
- Regional NB‑IoT band support and carrier availability can affect connectivity and should be verified for your deployment area.
- Installation wiring and vehicle integration affect what telemetry is available for Plaspy to display, for example ACC or analog sensors.
- Consult GlobalSat documentation for the most current technical specifications, accessory lists, and environmental ratings.

## Why Use Plaspy with These Features

Using the GTR-388NB with Plaspy gives operators a concise way to convert NB‑IoT position and telemetry packets into operational insights. Plaspy presents location, motion, ignition and analog telemetry in a single interface so teams can monitor vehicle state, receive event notifications, and review historical trips for analytics and reporting. The device design and accessory options make it practical for micromobility, motorcycle fleets, and light vehicle telematics where compact size and waterproofing matter.

Learn more about Plaspy and how it can consolidate GTR-388NB telemetry into live tracking, alerts and API driven integrations at https://www.plaspy.com. For the most current device specific details, firmware notes and accessory compatibility verify information with the manufacturer at https://www.globalsat.com.tw/ as device features and firmware behavior can change over time.
