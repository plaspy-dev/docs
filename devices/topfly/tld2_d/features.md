---
slug: /topfly/tld2_d/features
id: tld2_d-features
sidebar_label: Features
title: TopFly - TLD2-D Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the TopFly TLD2-D OBDII GPS tracker compatible with Plaspy
keywords:
  - TopFly TLD2-D features
  - TopFly TLD2 D GPS tracker
  - TLD2-D OBDII tracker
  - TLD2-D CAN BUS telemetry
  - TopFly BLE sensors
  - Plaspy compatible tracker
  - TLD2-D fleet management
  - TopFly vehicle tracking
  - TLD2-D LTE tracker
  - TLD2-D driving events
---

# TopFly - TLD2-D Features

This page provides a public feature overview of the TopFly TLD2-D and how its capabilities map to Plaspy for fleet and vehicle monitoring. It summarizes practical, user facing functions and the ways the device can be used in Plaspy without exposing low level implementation details.

Exact feature availability can vary by firmware version, hardware revision, vehicle installation and the manufacturer implementation. For device specific technical details and the latest firmware notes consult the official TopFly documentation and release notes.

## Feature Overview

The TLD2-D is a plug and play OBDII tracker engineered for rapid deployment in fleets, rental cars and company vehicles. Its design focuses on delivering frequent location updates plus rich vehicle telemetry and accessory sensor inputs that integrate into Plaspy for operational visibility.

- Plug and play OBDII installation for quick deployment without hard wiring.
- High frequency, real time GPS position updates for tight location accuracy.
- Deep CAN BUS telemetry including VIN, odometer, fuel level, RPM and DTC for vehicle diagnostics.
- BLE 5.0 support for external temperature, humidity and door sensors to extend monitoring.
- Integrated motion sensing and driver buzzer for harsh event detection and in vehicle warnings.
- Cellular resilience with low power LTE modes, fallback cellular coverage and multiple transport options for reliable data delivery.

## Core Features of TopFly - TLD2-D

- OBDII plug and play form factor for noninvasive installation and rapid fleet rollouts.
- High frequency tracking with configurable reporting intervals down to a few seconds.
- CAN BUS data reading delivering VIN, odometer, fuel level, RPM and diagnostic trouble codes.
- BLE 5.0 compatibility for pairing temperature, humidity and door sensors to augment vehicle data.
- Internal 6 axis motion sensing for harsh acceleration, braking and sharp turn detection and internal buzzer for driver alerts.
- Multi mode cellular connectivity with fallback and flexible data transports such as TCP UDP MQTT and SMS.
- Built in backup battery and network jamming detection to support anti theft awareness and disconnection alerts.
- Remote management features including FOTA and diagnostic status indicators for maintenance and updates.

## How These Features Work with Plaspy

Plaspy ingests the TLD2-D data stream to provide live mapping, historical reports and alerting. The platform presents vehicle location, CAN BUS telemetry and paired sensor information in unified dashboards so fleet managers can act on events and trends.

- Real time location and telemetry are shown on Plaspy maps and can be mapped to vehicle records.
- CAN BUS fields such as VIN, odometer and RPM are available for reporting, filtering and maintenance workflows.
- Driving events from the device motion sensor are surfaced as behavior events for review and coaching.
- BLE sensor readings for temperature humidity and door status appear alongside location information for cargo and access monitoring.
- Disconnection alerts backup battery events and network interference indicators are used to trigger anti theft notifications in Plaspy.

## Typical Use Cases

- Rapid fleet onboarding where units are deployed to vehicles without hard wiring.
- Routine fleet monitoring and maintenance planning using odometer and diagnostic code data.
- Fuel monitoring and operational efficiency programs using CAN BUS fuel and RPM data.
- Driver safety and coaching programs driven by harsh event detection and recorded incidents.
- Temperature sensitive transport where BLE temperature and humidity sensors are paired to track conditions.
- Anti theft and recovery programs using disconnection alerts and jamming detection.

## Feature Availability Notes

- Firmware and software revisions can enable or change available telemetry fields and reporting behavior.
- Hardware revisions or regional variants may affect supported cellular bands and accessory compatibility.
- Some BLE accessories are manufacturer specific and pairing behavior can differ by firmware.
- OBDII data availability depends on vehicle make model and supported CAN parameters.
- Check TopFly documentation for the most current hardware and firmware specifications.

## Why Use Plaspy with These Features

Using the TLD2-D with Plaspy gives organizations a straightforward path to combine high frequency location with vehicle diagnostics and environmental sensing. Plaspy brings the device telemetry into a centralized platform to support mapping, alerts, historical analysis and operational workflows that matter for fleet managers, rental operators and security teams.

Learn more about Plaspy and how the platform can present TLD2-D data on dashboards and reports at https://www.plaspy.com. For the latest device specific feature details firmware notes and manufacturer guidance verify information on the official TopFly website https://www.topflytech.com/ .
