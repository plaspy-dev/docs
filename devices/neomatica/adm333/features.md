---
slug: /neomatica/adm333/features
id: adm333-features
sidebar_label: Features
title: Neomatica - ADM333 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Neomatica ADM333 GPS tracker and how it works with Plaspy for real time tracking and telemetry
keywords:
  - Neomatica ADM333 features
  - Neomatica ADM333 GPS tracker
  - ADM333 BLE tracker
  - ADM333 GPRS tracker
  - ADM333 telemetry
  - ADM333 Plaspy compatibility
  - Neomatica vehicle tracker ADM333
  - ADM333 fuel monitoring
  - ADM333 jamming detection
  - Neomatica ADM333 review
---

# Neomatica - ADM333 Features

This page covers the public feature context for using the Neomatica ADM333 tracker with Plaspy. It summarizes the ADM333 v2 capabilities relevant to Plaspy deployments, explaining how the device reports location and telemetry and what practical functionality you can expect when integrating the tracker into Plaspy-powered monitoring and fleet workflows.

Exact feature availability for any individual unit can vary by firmware version, hardware revision, installation choices, and manufacturer implementation. Where applicable this page references the ADM333 v2 public feature set; for device specific limits, firmware behavior or the latest peripheral support always check the official Neomatica documentation.

## Feature Overview

The ADM333 v2 is an ultra compact GPS tracker intended for vehicles and stationary assets that need reliable real time tracking and a flexible sensor ecosystem. It combines GNSS positioning, cellular GPRS uplink and Bluetooth Low Energy sensor support in a small package to provide telemetry, event alerts and data buffering for intermittent connections.

- Compact form factor and internal battery for short autonomous operation and discreet installations.
- GNSS location reporting with onboard route buffering to preserve tracks during connectivity gaps.
- Cellular GPRS uplink with an open protocol for straightforward integration into telematics platforms including Plaspy.
- Bluetooth Low Energy sensor support and wired interfaces such as RS‑485 and 1‑wire for temperature and fuel telemetry.
- Event detection features including jamming alerts, movement detection, and driver identification that can generate alerts in Plaspy.

## Core Features of Neomatica - ADM333

- GNSS positioning with modernized receiver performance for reliable location updates.
- GPRS cellular connectivity with an open protocol designed for third party telematics servers.
- Bluetooth Low Energy 4.0 support for external sensors and beacons.
- RS‑485 and 1‑wire interfaces for wired sensor integration and Modbus style devices.
- Multiple analog inputs including ignition sensing for engine on/off events.
- Built in rechargeable battery to provide several hours of autonomy during power loss.
- Onboard storage for route records to preserve history when cellular coverage is intermittent.
- Jamming detection and a three axis accelerometer for movement and event detection.

## How These Features Work with Plaspy

Plaspy ingests the ADM333 telemetry and location reports to present real time location, historical routes and event driven alerts. The ADM333 v2 uses an open protocol and GPRS uplink so it can be configured to send packets directly to a Plaspy endpoint or to an intermediary server; Plaspy automatically detects supported tracker protocols to simplify onboarding.

- Real time GNSS location updates appear in Plaspy for live tracking and map visualization.
- Buffered route records from the device are imported into Plaspy when connectivity is restored, preserving historical tracks.
- Sensor readings from BLE devices, 1‑wire probes and RS‑485 peripherals can be forwarded into Plaspy for telemetry dashboards and reports.
- Ignition and analog input changes are available as events in Plaspy for fleet workflows such as engine on/off logging.
- Movement alerts, jamming detection and driver identification events can be configured to trigger notifications and automated responses inside Plaspy.

## Typical Use Cases

- Fleet management for vans and light trucks where compact installation and ignition monitoring are required.
- Anti theft workflows using jamming detection and remote immobilizer integration to reduce unauthorized use.
- Fuel monitoring deployments combining wired or wireless sensors with RS‑485 telemetry.
- Cold chain or environmental monitoring using BLE sensors or 1‑wire temperature probes for trailers and stationary assets.
- Asset tracking for mixed fleets including agricultural machinery and auxiliary equipment requiring discreet tracking and event alerts.

## Feature Availability Notes

- Firmware version and configuration options determine which sensors and features are active on a given ADM333 unit.
- Hardware revisions or regional variants may change available interfaces or radio band support.
- Some peripheral functions require additional cabling, accessories or partner modules to operate as described by the manufacturer.
- Device behavior for features like jamming detection, driver identification and BLE scanning can be tuned via manufacturer configuration tools.
- Always consult Neomatica documentation for the most current compatibility and installation recommendations.

## Why Use Plaspy with These Features

Using the ADM333 with Plaspy gives operators a predictable way to collect location and telemetry from a compact, sensor friendly tracker. Plaspy’s platform captures real time updates, stores buffered routes, and surfaces event alerts so teams can monitor assets, respond to incidents and analyze operational data from mixed device fleets.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific feature details and firmware behavior with Neomatica at https://neomatica.com/.
