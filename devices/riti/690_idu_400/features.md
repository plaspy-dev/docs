---
slug: /riti/690_idu_400/features
id: 690_idu_400-features
sidebar_label: Features
title: Riti - 690 (IDU-400) Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Riti 690 IDU 400 GPS tracker showing capabilities and Plaspy compatibility for fleet tracking and telemetry
keywords:
  - Riti 690
  - Riti 690 IDU 400
  - Riti 690 features
  - Riti IDU 400 GPS tracker
  - Locator 690 features
  - Riti GPS tracker Plaspy
  - Plaspy compatible tracker
  - vehicle tracking Riti 690
  - fleet management tracker Riti
  - GNSS tracker Riti 690
---

# Riti - 690 (IDU-400) Features

This page provides a public overview of the Riti Locator 690 (IDU 400) feature set and how the device is commonly used with Plaspy for fleet management and operational telemetry. It is intended to explain practical capabilities and the types of telemetry Plaspy can ingest from this model, without replacing official manufacturer documentation.

Exact feature availability and behavior can vary by firmware version, hardware revision, optional accessories, installation method, and manufacturer implementation. Refer to the manufacturer's documentation for the most current device specific details and to confirm which capabilities are present on a particular unit.

## Feature Overview

The Locator 690 is a professional GNSS enabled intelligent data unit built for demanding fleet and commercial vehicle IoT. It delivers continuous position reporting, vehicle inputs and outputs, onboard storage with automatic backfill, and integration points for MDVR and auxiliary sensors to provide the core telemetry expected in Plaspy deployments.

- High sensitivity multi constellation GNSS for fast position fixes and reliable location data.
- Multi generation cellular connectivity for broad network coverage and reliable data uplink.
- Multiple digital and analog I O points plus temperature inputs for vehicle and sensor telemetry.
- Onboard event storage with automatic retransmit to Plaspy to avoid data gaps during outages.
- Integrated tamper detection and G sensor based event reporting for theft and collision awareness.

## Core Features of Riti - 690 (IDU-400)

- GNSS positioning with GPS and GLONASS support and high sensitivity reception for improved fix performance.
- Multi band cellular support across 2G 3G and 4G to maintain connectivity in diverse regions.
- Vehicle I O including five digital inputs two analog inputs two temperature inputs one SOS input and four digital outputs for integration with vehicle systems.
- Onboard storage capacity for approximately 30 000 records with automatic backfill when connectivity returns.
- Built in G sensor and tamper or power removal alerts for event driven notifications.
- Remote firmware update capability and fault detection to simplify maintenance at scale.
- RS 232 serial interfaces for MDVR and peripheral integration.

## How These Features Work with Plaspy

Plaspy ingests position fixes event reports and input state changes from compatible devices like the Locator 690 so fleets can monitor status and respond to events in real time. Plaspy automatically detects the tracker protocol and supports common transport modes used by this model, simplifying integration.

- Live location updates and historical playback are available in Plaspy dashboards for route review and analysis.
- Digital input events such as ignition or door status are visible in Plaspy for operational monitoring and rule based alerts.
- Stored records are retransmitted to Plaspy after outages so reports and history remain complete.
- Event driven alerts from G sensor tamper and SOS inputs can be forwarded to dispatchers and escalation workflows.
- RS 232 MDVR telemetry and other serial data can be captured and correlated with location data inside Plaspy for incident reconstruction.

## Typical Use Cases

- Continuous fleet tracking and dispatch where reliable GNSS and cellular telemetry feed live maps and ETA calculations.
- Anti theft monitoring and rapid response using tamper alerts G sensor events and geofence driven notifications.
- Regulatory or subsidy reporting that requires frequent odometer or mileage reporting and robust historical records.
- MDVR and driver safety programs combining video telemetry with location and event timelines.
- Cold chain monitoring and refrigerated transport using the device temperature inputs and optional external probes.
- Mixed fleet rollouts where multi band cellular support reduces regional connectivity gaps.

## Feature Availability Notes

- Specific I O counts sensor support and accessory compatibility can vary by hardware revision and optional configurations from the manufacturer.
- Firmware level affects behavior of features such as reporting intervals alarm generation and automatic retransmit logic.
- Some integrations such as external sensors or MDVR peripherals may require additional accessories or configuration during installation.
- Regional cellular band coverage and 2G 3G 4G behavior depend on local network operators and the device band version.
- Always confirm the exact feature list and supported options for your unit with Riti before deployment.

## Why Use Plaspy with These Features

Pairing the Riti Locator 690 with Plaspy provides a practical path to consolidated fleet visibility and operational oversight. The device supplies the core location and event data that Plaspy uses to populate live maps alerts and historical reports, while on device storage and remote update capabilities help maintain continuity and reduce maintenance effort across large deployments.

To learn more about how Plaspy can work with Riti devices visit https://www.plaspy.com. For the most current device specifications firmware notes and accessory options verify details on the manufacturer site https://www.riti.com.tw/ as features and firmware behavior may change over time.
