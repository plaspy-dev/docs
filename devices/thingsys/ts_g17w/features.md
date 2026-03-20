---
slug: /thingsys/ts_g17w/features
id: ts_g17w-features
sidebar_label: Features
title: ThingSys - TS-G17W Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the ThingSys TS G17W GPS tracker and how it integrates with Plaspy for real time fleet tracking and alerts
keywords:
  - ThingSys TS-G17W
  - TS G17W features
  - ThingSys GPS tracker
  - TS-G17W Plaspy
  - vehicle GPS tracker
  - 4G GPS tracker
  - IP67 GPS tracker
  - fleet tracking device
  - GPS tracker features
  - real time tracking
---

# ThingSys - TS-G17W Features

This page describes the public feature context for using the ThingSys TS-G17W tracker with Plaspy. It summarizes the practical capabilities you can expect to see in Plaspy when the device is deployed for live tracking, alerts, and basic vehicle telemetry. The content is focused on user facing features and operational value rather than detailed configuration steps.

Exact feature availability for a specific unit can vary by firmware version, hardware revision, regional banding, and installation method. Always verify device firmware, supported bands, and any optional accessories with the manufacturer and review on site behavior during initial commissioning.

## Feature Overview

The TS-G17W is a compact, rugged vehicle tracker built for continuous location reporting in exposed or mobile environments. It combines cellular connectivity with a high sensitivity GNSS receiver and a small backup battery to maintain reporting during brief power interruptions, making it suitable for fleet vehicles, rental cars, logistics assets, and anti-theft deployments.

- Waterproof IP67 housing and compact form factor for discreet installation in harsh environments
- 4G LTE FDD primary connectivity with 2G GSM fallback where supported regionally for wide coverage
- High sensitivity GNSS with typical positioning accuracy around 5 meters for precise location reporting
- Built in backup battery to allow brief reporting during power loss and tolerant input voltage for vehicle installations
- Vehicle oriented I O including ignition detection and optional external relay support for remote cut off
- Supports GPRS trace modes and SMS polling to accommodate areas with limited data coverage

## Core Features of ThingSys - TS-G17W

- 4G LTE FDD connectivity with regional 2G fallback for broader carrier support
- High sensitivity GNSS receiver with typical accuracy near 5 m and strong weak signal performance
- Built in 3.7 V Li ion backup battery to permit short interval reporting during power interruptions
- ACC ignition detection to report vehicle on off state for event based tracking
- Optional external relay interface enabling remote cut off functionality when installed
- IP67 waterproof rating and wide operating voltage range suitable for vehicle systems
- Support for GPRS trace mode and SMS polling for flexible telemetry in different network conditions

## How These Features Work with Plaspy

Plaspy ingests reports from the TS-G17W and presents them as live location points, historical tracks, and alert events in dashboards and automated reports. Integration is designed to be straightforward: Plaspy automatically detects common tracker protocols and surfaces the device data alongside other fleet telemetry for operational oversight.

- Real time location updates and historical tracks displayed in Plaspy for routing and replay
- Ignition state reported to Plaspy so on off events and trip segmentation are visible in reports
- Alarm events such as over speed and vibration are delivered to Plaspy as alerts for rule based workflows
- GPRS trace mode or SMS polling reports are processed by Plaspy when data coverage varies
- Remote cut off commands supported when the tracker is configured with an external relay and platform routing is enabled

## Typical Use Cases

- Fleet management with live tracking, trip history, and driver event monitoring
- Vehicle anti theft and recovery workflows that use remote cut off and alarm notifications
- Rental and shared vehicle monitoring to track ignition status and location history
- Logistics and asset tracking for trailers or exposed equipment needing IP67 protection
- Deployments where cellular coverage is variable and SMS polling complements GPRS reporting

## Feature Availability Notes

- Cellular band support and fallback behavior depend on the regional SKU and carrier banding for the unit
- Exact GNSS chipset and sensitivity may vary by production batch or regional model; reported metrics are typical values
- Optional features such as the external relay require appropriate installation and wiring and may not be included with every unit
- Firmware version affects available alert types, configuration commands, and reporting modes
- Verify installation approach and sensor wiring at the time of deployment to ensure signals such as ACC ignition are read reliably

## Why Use Plaspy with These Features

Using the TS-G17W with Plaspy provides a practical path to turn rugged vehicle tracking hardware into operational insight. The tracker supplies location points, ignition events, and configurable alarms while Plaspy presents that information in live maps, rules, and reports so teams can monitor fleets, respond to incidents, and analyze historical activity from a single platform.

To learn more about Plaspy and how the platform can be used with ThingSys devices visit https://www.plaspy.com. For the most current device specific feature details, firmware behavior, and regional model information please consult the manufacturer at https://www.thingsys.com/.
