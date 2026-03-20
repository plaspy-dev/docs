---
slug: /sinotrack/st_901m/features
id: st_901m-features
sidebar_label: Features
title: SinoTrack - ST-901M Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the SinoTrack ST 901M GPS tracker and how it integrates with Plaspy for vehicle tracking and event reporting
keywords:
  - SinoTrack ST 901M
  - SinoTrack ST 901M features
  - SinoTrack GPS tracker
  - ST 901M Plaspy compatibility
  - vehicle GPS tracker wired
  - ignition detection tracker
  - GPRS SMS tracking
  - overspeed alarm tracker
  - external relay immobilizer
  - fleet tracking device
---

# SinoTrack - ST-901M Features

This page provides a public feature summary for the SinoTrack ST-901M and explains how the device can be used with Plaspy for vehicle tracking and event reporting. It focuses on user facing capabilities, how those capabilities appear in a monitoring platform, and what to expect when integrating the tracker into Plaspy for live telemetry and operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method and manufacturer implementation. Where applicable this page highlights the capabilities documented for the ST-901M while recommending verification against the official manufacturer documentation for device specific details.

## Feature Overview

The ST-901M is a wired GPS tracker designed for hardwired installation in cars, motorcycles, ATVs and similar vehicles. It reports GNSS position and key telemetry to monitoring platforms over cellular data or SMS, and supports configurable inputs and alarms that are useful for fleet management and anti theft monitoring.

- Real time GNSS position reporting sent over GPRS with SMS fallback for connectivity resilience.
- Ignition ACC detection to distinguish driving and parked states and enable event driven reporting.
- Configurable overspeed alarm and authorized number alerts for driver and security events.
- Two configurable reporting intervals for moving and stopped states to balance update frequency and data use.
- External relay support for optional remote immobilizer or power cutoff control.
- SMS based configuration including APN and server settings to point the device to a third party platform such as Plaspy.

## Core Features of SinoTrack - ST-901M

- Wired installation for vehicle deployments including cars, motorcycles and ATVs.
- GNSS position reporting for real time location visibility.
- GSM GPRS data reporting with SMS as an alternative reporting channel.
- Ignition ACC input to report on vehicle on off state and to drive reporting logic.
- Overspeed alarm and authorized number alerting for security and driver monitoring.
- Configurable reporting intervals for moving versus stopped operation.
- External relay connector to enable remote immobilizer or power control when fitted.
- SMS command based configuration for APN, platform server settings and basic remote setup.

## How These Features Work with Plaspy

When configured to send data to Plaspy, the ST-901M forwards location updates and event messages so that vehicle position, status and alarms are visible from the Plaspy interface. Plaspy ingests the tracker telemetry to provide real time mapping, status indicators and event history for operations and security teams.

- Live location updates appear on Plaspy maps so vehicles can be tracked in near real time.
- Ignition status is available in Plaspy to differentiate driving and parked states and to support reporting rules.
- Overspeed and authorized number alerts are forwarded as events that Plaspy records and can use to trigger notifications.
- Different moving and stopped reporting intervals reduce unnecessary data while maintaining useful location fidelity in Plaspy.
- Remote immobilizer actions using an external relay can be coordinated through platform to device messaging where platform command forwarding is supported.
- Device registration via IMEI and SMS configuration allows the tracker to be linked to a Plaspy account without physical access after installation.

## Typical Use Cases

- Fleet management for small to medium vehicle fleets requiring live location and ignition aware telemetry.
- Anti theft monitoring with alarm reporting and optional relay based immobilization to stop unauthorized use.
- Driver behavior and safety programs using overspeed and ignition events to identify risky patterns.
- Asset tracking for motorcycles and ATVs with wired installations and configurable reporting.
- Remote immobilization of recovered vehicles using an external relay controlled through the monitoring platform.
- Dispatch and operational oversight where real time position and engine state improve response and utilization.

## Feature Availability Notes

- Exact features depend on the ST-901M firmware version and hardware revision shipped by the manufacturer.
- Installation wiring and the presence of optional hardware such as an external relay determine which capabilities are usable.
- Cellular behavior and APN setup are subject to regional carrier settings and the SIM/APN configuration provided at installation.
- Some features such as backup battery details and precise GNSS accuracy are documented as unspecified in available materials and should be confirmed with the manufacturer.
- Manufacturer regional variants or custom OEM builds may change available inputs, alarms or connectors.

## Why Use Plaspy with These Features

Using the SinoTrack ST-901M with Plaspy gives organizations a straightforward path to ingesting live location and event telemetry from wired vehicle trackers. Plaspy can present position, ignition state and configured alarms in dashboards and event logs that support fleet optimization, security workflows and operational reporting without requiring additional middleware.

If you would like to learn more about how Plaspy works with devices such as the ST-901M, visit https://www.plaspy.com to explore platform features and deployment options. For the most current device specific details, firmware notes and installation guides consult the manufacturer at https://www.sinotrackgps.com/ as device behavior and specifications can change over time.
