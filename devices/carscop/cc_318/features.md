---
slug: /carscop/cc_318/features
id: cc_318-features
sidebar_label: Features
title: Carscop - CC-318 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Carscop CC-318 GPS tracker and how it works with Plaspy for fleet and rental operations
keywords:
  - Carscop CC-318
  - Carscop CC-318 features
  - CC-318 GPS tracker
  - Carscop GPS tracker
  - CC-318 Plaspy compatibility
  - CC-318 remote immobilizer
  - CC-318 backup battery
  - CC-318 alarm inputs
  - CC-318 Bluetooth CANbus optional
  - vehicle tracking CC-318
---

# Carscop - CC-318 Features

This page describes the public feature context for using the Carscop CC-318 GPS tracker with Plaspy. It focuses on the model capabilities relevant to monitoring, remote control and security workflows when the device is connected to the Plaspy platform, and how those capabilities typically appear to fleet and rental operators.

Exact feature availability and behavior can vary by firmware version, hardware revision, the specific installation method and the manufacturer implementation. For precise device specifications, supported options and firmware notes consult the official Carscop documentation and release notes.

## Feature Overview

The CC-318 is a compact, Plaspy compatible vehicle tracker designed for fleet management, car rental and car sharing. It combines GNSS positioning with cellular connectivity and a set of alarm inputs and outputs intended for remote control and anti-theft workflows.

- Real time GPS and Beidou positioning with A GPS assistance for faster fixes and LBS fallback when GNSS is unavailable.
- Remote control outputs for lock and unlock, light and horn activation, plus on demand engine cut for immobilization.
- Rechargeable internal Li ion backup battery and power down alarm to report tampering or loss of main power.
- Alarm inputs for shock, door and ACC to generate security and driver behavior events.
- Onboard memory for offline track recording so location history is preserved during connectivity gaps.

## Core Features of Carscop - CC-318

- 2G GSM data and SMS connectivity for reporting telemetry and receiving remote commands.
- GNSS positioning using GPS and Beidou with A GPS assistance and LBS cell tower fallback for improved coverage.
- Remote action outputs including lock unlock, flashing lights and horn activation, and support for remote immobilizer commands.
- Rechargeable Li ion backup battery plus power down alarm to notify Plaspy when main vehicle power is interrupted.
- Dedicated alarm inputs for shock detection, door status and ACC monitoring to generate alerts and events.
- Onboard storage for offline track logging to preserve movement history during network outages.
- Built in G sensor for driving behavior logging and event capture.
- Optional upgrades such as Bluetooth and CANbus modules to extend sensor support and vehicle data access when fitted.

## How These Features Work with Plaspy

When integrated, the CC-318 reports location, security inputs and sensor events into Plaspy so teams can monitor status and take remote actions. Plaspy auto detects supported tracker protocols to simplify initial integration and receives telemetry for live monitoring and historical analysis.

- Real time location updates and historical tracks visible in Plaspy using GNSS position reports and LBS fallback data.
- Security and alarm events like door open, shock and ACC changes appear as alerts or event records in Plaspy.
- Power down and backup battery events are surfaced to help detect tampering or main power loss.
- Remote control and immobilizer commands can be issued from the Plaspy platform to the device where network or SMS control is enabled.
- Optional CANbus and Bluetooth data, when present and configured, can be forwarded into Plaspy as additional telemetry for vehicle and sensor visibility.

## Typical Use Cases

- Fleet management with continuous location tracking, driving behavior logging and offline track continuity for operations oversight.
- Car rental and car sharing that require remote lock unlock, on demand immobilization and usage tracking integrated with Plaspy workflows.
- Anti theft and recovery deployments using tamper and power down alarms together with remote immobilizer capability.
- Vehicle telemetry and maintenance programs that combine G sensor logs with optional CANbus data for operational diagnostics.
- Hybrid monitoring setups that use optional Bluetooth sensors for proximity, driver identification or environmental sensing.

## Feature Availability Notes

- Feature sets can differ between firmware revisions and hardware variants so consult the manufacturer for exact capabilities on your unit.
- Optional modules such as Bluetooth and CANbus require the relevant hardware upgrade and configuration to be available.
- Cellular connectivity behavior depends on regional 2G network availability and operator support in the deployment area.
- Installed wiring and integration choices can affect which alarm inputs and outputs are available for use.
- Onboard logging behavior and event retention depend on device configuration and firmware settings.

## Why Use Plaspy with These Features

Pairing the CC-318 with Plaspy provides a unified platform for location awareness, event visibility and remote vehicle control. Plaspy aggregates position reports, alarm inputs and optional vehicle data to give operational teams a single place to monitor assets, respond to alerts and automate workflows such as immobilization or access control.

If you want to explore how the CC-318 fits into your fleet or rental operations, learn more about Plaspy at https://www.plaspy.com. Device features, firmware behavior and manufacturer implementation can change over time, so please verify the latest device specific details with the manufacturer at http://www.carscop.com/ before relying on a particular capability.
