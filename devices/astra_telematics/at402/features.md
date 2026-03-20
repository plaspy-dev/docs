---
slug: /astra_telematics/at402/features
id: at402-features
sidebar_label: Features
title: Astra Telematics - AT402 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Astra Telematics AT402 GPS tracker and how it integrates with Plaspy for fleet and shared mobility management
keywords:
  - Astra Telematics AT402
  - AT402 features
  - AT402 GPS tracker
  - Astra Telematics tracker features
  - AT402 Plaspy compatibility
  - vehicle tracking AT402
  - moto sharing GPS tracker
  - AT402 CANBus BLE RS232
  - LTE M GPS tracker
  - AT402 IP65 automotive
---

# Astra Telematics - AT402 Features

This page provides a public feature overview for the Astra Telematics AT402 and how its capabilities map into the Plaspy fleet management platform. It covers the device features that are relevant for real time tracking, vehicle telemetry and shared mobility deployments when used with Plaspy, based on the manufacturer description and Plaspy compatibility details.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional cellular configuration and the specifics of installation and vehicle wiring. For device specific technical limits, release notes and configuration steps refer to the official Astra Telematics documentation and your device firmware notes.

## Feature Overview

The AT402 is a compact, automotive ready GPS tracker designed to deliver continuous tracking and vehicle telemetry for light commercial fleets and shared mobility use cases. It combines LTE‑M primary connectivity with GSM/GPRS fallback, integrated GNSS, and a set of vehicle interfaces to bring location and event data into Plaspy for monitoring, alerts and analytics.

- LTE‑M primary cellular connectivity with 2G fallback to maintain reporting where LTE‑M is unavailable.
- Multi GNSS support with an internal GNSS antenna for reliable position fixes in urban and mobile environments.
- Vehicle integration via CANBus, RS232, digital inputs and outputs, and driver ID to surface ignition and vehicle parameters to Plaspy.
- Bluetooth Low Energy for local sensor pairing and short range interactions useful for moto sharing and proximity workflows.
- Compact IP65 automotive enclosure with internal antennas and an automotive wiring connector to simplify installation.
- Internal backup battery and wide operating voltage range to improve resilience for anti‑theft and shared use scenarios.

## Core Features of Astra Telematics - AT402

- Cellular connectivity: LTE‑M primary path with GSM/GPRS 2G fallback for continuous reporting across coverage conditions.
- Multi GNSS: Support for standard GNSS constellations for position reporting via the internal GNSS antenna.
- Vehicle interfaces: CANBus, RS232 and 1‑Wire support to collect vehicle bus parameters and peripheral data where available.
- I O and driver support: Digital inputs and outputs plus driver ID capability to capture ignition events and driver association.
- Bluetooth Low Energy: Local BLE for pairing sensors, beacons or short range device interactions.
- Rugged hardware and installation: IP65 rated, internal GNSS and GSM antennas, automotive connector for production or aftermarket fitment.
- Power resilience: Wide operating voltage range and a 510 mAh internal backup battery to maintain reporting during power interruptions.
- Product support: Manufacturer warranty and lifetime system updates as part of Astra Telematics product support and optional customization services.

## How These Features Work with Plaspy

Plaspy ingests position and telemetry from compatible trackers to provide unified visibility, alerts and reports. The AT402 can transmit GNSS positions, vehicle bus parameters and input events into Plaspy where they are displayed, correlated and used to trigger rules and workflows for fleet operations.

- Real time position and movement visibility inside Plaspy for vehicle tracking and route monitoring.
- Vehicle telemetry from CANBus and RS232 shown as parameters and events for fuel, speed and other bus‑exposed data when available from the vehicle.
- Digital input and driver ID events mapped to ignition and driver change events for operational and anti‑theft monitoring.
- BLE sensor and proximity information surfaced to Plaspy when the device reports paired sensor data.
- Plaspy automatically detects supported tracker protocols and can accept device reports to the Plaspy cloud; Astra devices like the AT402 can be configured to report to the Plaspy endpoint for monitoring and analytics.

## Typical Use Cases

- Real time fleet tracking for light commercial vehicles that require position reporting and basic vehicle telemetry.
- Moto sharing and micromobility deployments where compact, IP65 devices with BLE are used to support user interactions and short range checks.
- Anti‑theft monitoring and recovery workflows using ignition monitoring, backup battery reporting and configurable outputs managed through Plaspy rules.
- Vehicle health and fuel monitoring where CANBus parameters are exposed and forwarded to Plaspy for alerts and analytics.
- Aftermarket and production rollouts that benefit from automotive connectors and integration kits for faster installation and scale.

## Feature Availability Notes

- Firmware and software updates can enable, alter or deprecate features; verify the feature set for your unit against the installed firmware release.
- Hardware revisions and regional variants may change cellular band support, connector types or accessory compatibility.
- Vehicle integration capabilities depend on the vehicle bus and what parameters the vehicle exposes over CANBus or RS232.
- Installation type and wiring affect available signals such as ignition detection and digital I O behavior.
- Manufacturer customizations and optional evaluation kits may modify default I O mappings or reporting behavior.

## Why Use Plaspy with These Features

Using the AT402 with Plaspy brings device level tracking and vehicle telemetry together into a platform designed for operational oversight. Plaspy helps convert GNSS positions, CANBus parameters, input events and BLE sensor data into dashboards, alerts and reports that support fleet optimization, shared mobility management and anti‑theft workflows.

Learn more about how Plaspy can work with Astra Telematics devices and other compatible trackers at https://www.plaspy.com. Device feature sets, firmware behavior and manufacturer implementation details can change over time, so verify the latest device specific information on the Astra Telematics website https://astratelematics.com/ before making deployment decisions.
