---
slug: /gotop/g23/features
id: g23-features
sidebar_label: Features
title: GOTOP - G23 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the GOTOP G23 GPS tracker and how it integrates with Plaspy for vehicle tracking and anti theft
keywords:
  - GOTOP G23 features
  - GOTOP G23 GPS tracker
  - GOTOP G23 capabilities
  - GOTOP G23 Plaspy
  - G23 GPS tracker features
  - GOTOP G23 vehicle tracking
  - Plaspy compatible tracker
  - mini wire GPS tracker G23
  - G23 hybrid positioning
  - GOTOP G23 immobilizer
---

# GOTOP - G23 Features

This page provides a public feature overview for the GOTOP G23 mini wire GPS tracker and how its capabilities are used with Plaspy for centralized tracking and fleet oversight. It summarizes practical, non‑sensitive device behavior and explains what data and alarms the G23 can report into Plaspy for live monitoring, historical playback, and operational alerts.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model, and installation method. Where the G23 supports a function (for example ACC detection, remote power/fuel cut, hybrid GNSS positioning or backup battery alerts), Plaspy can receive and use those reports, but final capabilities depend on the specific device unit and manufacturer implementation.

## Feature Overview

The GOTOP G23 is a compact vehicle tracker built for discreet installations where reliable location and basic vehicle telemetry are required. It pairs hybrid positioning with vehicle inputs and low power operation to provide continuous monitoring for cars, motorcycles, e‑bikes and light commercial vehicles.

- Hybrid positioning using GPS plus BeiDou and cellular LBS to improve location availability and provide roughly 5 meter accuracy in typical conditions.
- Vehicle inputs including ignition ACC detection and event reporting for unauthorized starts or engine state monitoring.
- Remote power/fuel cut and power‑off alarm for anti‑theft or immobilizer style interventions when supported by installation and local rules.
- Low power design with wide DC input (9–95 V) and an internal backup battery to report offline or tamper events.
- Compact mini wire form factor with internal antennas for discreet mounting in vehicles.

## Core Features of GOTOP - G23

- Hybrid GNSS positioning: GPS + BeiDou + LBS for improved location fix availability and practical route playback.
- 2G GSM connectivity for reporting location and event telemetry to a server.
- Ignition (ACC) detection to report engine or ignition state changes.
- Remote power/fuel cut output usable as an immobilizer function when installed and controlled appropriately.
- Power‑off alarm plus an 80 mAh backup battery to send offline or tampering notifications.
- Overspeed detection and vibration/movement alerts for event‑based reporting.
- Wide DC input range (9–95 V) to support installation across motorcycles, cars, e‑bikes and light commercial vehicles.
- Compact ABS housing with internal antennas for low‑profile, hidden installations.

## How These Features Work with Plaspy

Plaspy ingests position reports, alarm events and status markers from compatible trackers such as the G23 so fleet operators can monitor vehicles in real time and respond to incidents. Plaspy automatically detects supported tracker protocols and maps standard G23 event codes into dashboards and notifications.

- Live GNSS and LBS positions appear on Plaspy maps for real time tracking and route playback.
- ACC ignition and illegal start alerts are surfaced as events so operators can monitor unauthorized engine activity.
- Power‑off alarms and backup battery notifications feed into Plaspy alert rules for tamper and loss of primary power detection.
- Overspeed and vibration/movement alarms are available to trigger notifications, reports, or automated workflows inside Plaspy.
- Remote power/fuel cut capability from the device can be integrated into Plaspy control flows where allowed by local regulations and correct wiring.
- Device configuration and data routing can be set to Plaspy’s ingestion endpoint (for example by pointing the device to the Plaspy server); Plaspy supports automatic protocol detection and standard UDP or TCP reporting methods.

## Typical Use Cases

- Fleet management for taxis, delivery vehicles and mixed vehicle fleets requiring continuous location and event visibility.
- Anti‑theft monitoring and immobilization workflows using power‑cut and power‑off alarm capabilities.
- Motorcycle and e‑bike tracking where compact size, internal antennas and wide voltage tolerance are needed.
- Rental fleets and car sharing operations that require ignition state monitoring and historical playback.
- Light commercial vehicle oversight including overspeed and movement alerts to support safety and compliance.
- Telemetry for operators that need a discreet tracker to minimize visibility while maintaining monitoring capability.

## Feature Availability Notes

- Function availability can depend on the device firmware version and the exact hardware revision shipped by the manufacturer.
- Regional 2G GSM coverage and band support affect real world connectivity; check local network availability before deployment.
- Some features require correct wiring and installation (for example ACC detection and remote power cut); installation specifics impact behavior.
- The G23 is configured using its UART‑TTL interface for advanced setup; web or FOTA management is not specified in the device documentation.
- Manufacturer documentation and regional model differences may change operational details; always verify the unit you receive against official specifications.

## Why Use Plaspy with These Features

Pairing the GOTOP G23 with Plaspy gives operators a simple path to turn device‑level location and event telemetry into actionable operational visibility. Plaspy ingests GNSS and LBS positions and maps G23 alarms to dashboards, alerts and reports so teams can monitor vehicles, respond to tamper events, and manage immobilizer actions where permitted.

To learn more about Plaspy and how the platform can centralize tracking for devices like the GOTOP G23, visit https://www.plaspy.com. For the most current, device specific technical details and firmware behavior, review the official GOTOP documentation at https://www.gotop.cc/ as manufacturer features and implementations may change over time.
