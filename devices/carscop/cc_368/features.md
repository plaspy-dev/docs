---
slug: /carscop/cc_368/features
id: cc_368-features
sidebar_label: Features
title: Carscop - CC-368 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Carscop CC 368 4G T Box and how its telematics integrate with Plaspy compatible fleet platforms
keywords:
  - Carscop CC-368
  - Carscop CC 368 features
  - CC-368 GPS tracker
  - Carscop telematics
  - CC-368 Plaspy compatibility
  - OBD II CANBUS tracker
  - keyless rental tracker
  - 4G T Box tracker
  - BLE NFC access control
  - vehicle remote immobilizer
---

# Carscop - CC-368 Features

This page provides a public feature summary for the Carscop CC-368 4G T-Box and explains how its capabilities are used when the device is connected to Plaspy. It focuses on practical, non-sensitive feature context that helps operators and integrators understand what the tracker offers and how it maps to fleet management workflows in Plaspy.

Exact feature availability can vary by firmware version, hardware revision, regional SKU and the specifics of an installation. Refer to manufacturer documentation and installer configuration for device options and any model specific details that affect behaviour in the field.

## Feature Overview

The CC-368 is a purpose-built vehicle telematics T-Box designed for car rental, car sharing and mixed fleet management. It combines global cellular connectivity, GNSS positioning and multiple vehicle interfaces to deliver live tracking, diagnostic telemetry and remote control capabilities suitable for Plaspy-enabled deployments.

- Real-time GNSS tracking with A-GPS and external GPS antenna for reliable location updates.
- Global cellular support across 2G/3G/4G LTE networks for broad coverage and live telemetry.
- OBD II CANBUS interface for reading vehicle parameters and diagnostic trouble codes where available.
- Keyless access support via NFC, built-in touch pad and Bluetooth Low Energy for rental and sharing workflows.
- Remote vehicle control features including immobilizer and remote engine start when configured.
- Internal logging and LBS fallback to preserve location records during temporary cellular loss.

## Core Features of Carscop - CC-368

- 4G T-Box design with multi generation cellular support for live connectivity in mixed networks.
- U‑Blox GNSS receiver with A‑GPS and provision for external GPS antenna to improve fix reliability.
- OBD II CANBUS read and control for vehicle telemetry and DTC forwarding where the vehicle exposes PIDs.
- Bluetooth Low Energy support for proximity access, sensor integration and BLE based unlocking.
- NFC and touch pad password module for flexible keyless entry options.
- Remote immobilizer and remote engine start capabilities to support secure rental and anti-theft workflows.
- Internal rechargeable backup battery, power-down alarm and offline track logging for continuity during power or network interruptions.
- Firmware over the air updates and TCP/IP API interfaces to support integration and remote device management.

## How These Features Work with Plaspy

When the CC-368 is integrated with Plaspy, its location, diagnostics and event data become visible on the Plaspy platform to support monitoring, alerts and operational control. Plaspy receives telemetry and event streams and can act on them via scheduled reports, automations and remote commands.

- Live GNSS position and historical routes appear in Plaspy for fleet visibility and auditing.
- OBD II CANBUS parameters and DTC events forwarded to Plaspy enable remote diagnostics and maintenance workflows when vehicle data is available.
- Door, ACC, shock and other discrete input events are represented as alerts or triggers within Plaspy for operational automation.
- Remote immobilizer and engine start commands can be executed through Plaspy interfaces when the device and installation support those functions.
- Offline logging and LBS fallback preserve continuity of tracking data that Plaspy can reconcile when the device reconnects.

## Typical Use Cases

- Unattended car rental and car sharing operations using NFC, touch pad or BLE for keyless access managed through Plaspy.
- Fleet management with centralized location tracking, telematics collection and scheduled reporting for mixed vehicle fleets.
- Anti-theft response workflows combining alarm events, remote immobilizer actions and location tracking in Plaspy.
- Remote diagnostics and maintenance support by forwarding OBD II data and DTCs to Plaspy for service planning.
- Mixed fleet deployments that require wide voltage support and flexible connectivity across cellular networks.

## Feature Availability Notes

- Feature sets depend on firmware and hardware revision; some functions may vary between SKUs or regional variants.
- OBD II CANBUS data availability depends on the vehicle make and model and which PIDs the vehicle exposes.
- Remote immobilizer and engine start require correct installation, wiring and proper configuration in Plaspy to function safely.
- Bluetooth, NFC and touch pad access depend on supplied accessories and how the unit is installed in the vehicle.
- Offline logging and LBS fallback provide continuity but behaviour and buffer capacity are determined by firmware and configuration.

## Why Use Plaspy with These Features

Connecting the Carscop CC-368 to Plaspy provides operators with consolidated visibility and control over vehicles and rental units. The combination of GNSS positioning, OBD II telemetry and remote control features supports operational oversight, quicker response to events and streamlined rental or sharing workflows. Integrators and fleet managers benefit from remote firmware updates and API access to adapt the device to existing back office systems.

To learn more about how Plaspy can work with devices like the CC-368, visit https://www.plaspy.com. For the most current device specifications, firmware behaviour and manufacturer details please verify information on the official Carscop website http://www.carscop.com/.
