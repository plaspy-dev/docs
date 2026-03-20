---
slug: /concox/ll705/features
id: ll705-features
sidebar_label: Features
title: Concox - LL705 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Concox LL705 GPS tracker and how it integrates with Plaspy for long term asset monitoring
keywords:
  - Concox LL705
  - Concox LL705 features
  - Concox LL705 GPS tracker
  - LL705 battery life
  - LL705 IP67
  - LL705 BLE support
  - LL705 Beidou GPS
  - LL705 LTE tracker
  - LL705 FOTA
  - Plaspy compatible tracker
---

# Concox - LL705 Features

This page provides a public overview of the Concox LL705 features as they relate to use with Plaspy. It focuses on practical, non-sensitive information about what the tracker is designed to do and how those capabilities map to visibility and operational workflows in Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and how the unit is installed. Where possible this page reflects the device description provided by the manufacturer, but users should confirm device specific behavior and options for their units before deployment.

## Feature Overview

The LL705 is a purpose-built 4G asset tracker intended for long-term, low-maintenance monitoring of high-value and remote assets. Its design emphasizes extended battery life, multi-source positioning, rugged enclosure, and remote management features that reduce field visits and simplify fleet oversight.

- Extremely long standby performance enabled by an 18,000 mAh Li‑SOCl2 battery to reduce maintenance intervals.
- Multi-source positioning using GNSS plus Beidou, cellular LBS fallback, and BLE for maintaining location in challenging signal environments.
- Rugged IP67 enclosure to withstand dust and water exposure in outdoor and industrial deployments.
- Configurable working modes to balance update frequency with battery life for different operational needs.
- Tamper detection and low-battery alerts to trigger maintenance and anti-theft responses.
- FOTA support for remote firmware updates and simplified device maintenance.

## Core Features of Concox - LL705

- LTE Cat 1 primary connectivity with GSM fallback for broad cellular coverage across regions.
- Multi-source positioning: GPS and Beidou (BDS) plus cell tower LBS and BLE presence for short range location assistance.
- Large 18,000 mAh Li‑SOCl2 battery designed for extended standby life and infrequent servicing.
- Configurable working modes including Regular GPS, Tracking, Phase‑based, and Alarm‑based modes to control reporting behavior.
- Rugged IP67-rated housing suitable for outdoor and industrial asset deployments.
- Tamper detection using light sensing and optional vibration alerts to flag unauthorized handling.
- Low-battery notifications with configurable thresholds to support proactive maintenance workflows.
- FOTA capability for remote firmware updates to keep deployed units current.

## How These Features Work with Plaspy

Plaspy ingests the LL705’s location and event data to provide continuous visibility, event routing, and historical reporting. When the LL705 is connected to Plaspy, common device behaviors translate into platform-level signals that help teams monitor and act on asset status.

- Real-time and periodic location reporting via GNSS, Beidou, and LBS shown on Plaspy maps for situational awareness.
- Tamper alerts and optional vibration events delivered to Plaspy to trigger notifications, escalation, or workflow rules.
- Low-battery alerts forwarded into Plaspy to create maintenance tasks or scheduled replacement reminders.
- BLE sensor discoveries and short range telemetry can be surfaced in Plaspy when BLE-enabled peripherals are present.
- FOTA and device management workflows coordinated through Plaspy-compatible device management interfaces to simplify remote updates.
- Configurable reporting intervals in Plaspy mapped to the LL705 working modes to balance telemetry frequency and battery life.

## Typical Use Cases

- Long-term monitoring of construction equipment where reduced field visits lower operating costs.
- Asset tracking for mining deployments that require rugged hardware and multi-source positioning.
- Trailer and container anti-theft monitoring using long standby life and tamper alerts.
- Remote inventory monitoring of nonpowered assets with periodic location updates.
- Fleet oversight where configurable reporting modes help balance visibility and battery longevity.
- Distributed equipment deployments across multiple sites requiring centralized device management.

## Feature Availability Notes

- Feature sets and performance depend on firmware version and manufacturer firmware behavior; FOTA updates may change available options.
- Regional hardware variants exist for cellular band support; confirm the correct model variant for your deployment region.
- Some capabilities such as BLE sensor behavior and tamper thresholds may be configurable or optional depending on factory settings and installation.
- Battery life estimates depend heavily on reporting frequency, chosen working mode, and environmental conditions.
- Always consult the official manufacturer documentation for the most current technical specifications and regional model differences.

## Why Use Plaspy with These Features

Pairing the LL705 with Plaspy provides a workflow-focused approach to long-term asset visibility. Plaspy centralizes location, alerting, and device management so teams can monitor tamper events, low-battery conditions, and movement across large fleets without intensive on site support. The combination of long battery life and remote management lowers total cost of ownership for assets deployed in remote or harsh conditions.

To learn more about using Plaspy with the Concox LL705, visit https://www.plaspy.com. Please verify the latest device features, firmware behavior, and manufacturer implementation details with the official Concox site https://www.iconcox.com/ since device capabilities and firmware can change over time.
