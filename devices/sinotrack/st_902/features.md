---
slug: /sinotrack/st_902/features
id: st_902-features
sidebar_label: Features
title: SinoTrack - ST-902 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the SinoTrack ST-902 OBD2 GPS tracker and how it integrates with Plaspy for fleet tracking and alerts
keywords:
  - SinoTrack ST-902 features
  - SinoTrack ST-902 GPS tracker
  - ST-902 OBD2 tracker
  - ST-902 Plaspy compatibility
  - OBD2 GPS tracker
  - fleet tracking ST-902
  - SinoTrack ST902 alarms
  - ST-902 GPS capabilities
  - SinoTrack OBD2 Plaspy
  - vehicle tracking ST-902
---

# SinoTrack - ST-902 Features

This page provides a public, non-sensitive feature overview of the SinoTrack ST-902 and explains how the device can be used with Plaspy for centralised tracking, alerting, and fleet telemetry. It focuses on the practical capabilities you can expect when the ST-902 is pointed at Plaspy and how those capabilities translate into operational value.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, regional variant, and manufacturer implementation. For device-specific configuration steps and the most current technical details consult the official SinoTrack documentation.

## Feature Overview

The ST-902 is a plug‑and‑play OBD2 tracker intended for fast deployment to vehicles. It combines GNSS position fixes, cellular GPRS reporting with SMS fallback, a compact backup battery, and a standard alarm suite to provide continuous location visibility and event reporting that can be routed into Plaspy.

- Instant installation via standard 16‑pin OBD‑II plug for minimal downtime during deployment.
- GSM/GPRS for regular position uploads with SMS fallback for basic reporting when data is unavailable.
- Built-in alarm suite including shock/impact, overspeed, geo‑fence and low battery alerts for anti‑theft and incident monitoring.
- Small internal rechargeable backup battery to maintain limited operation during power loss or unplug events.
- High sensitivity GNSS receiver with roughly 10 m 2D RMS accuracy for practical route and location monitoring.

## Core Features of SinoTrack - ST-902

- OBD‑II plug‑and‑play form factor that installs into the vehicle diagnostic port.
- GSM/GPRS connectivity for real‑time reporting and SMS as a fallback channel.
- Alarm support for shock or impact events, overspeed detection, geo‑fence alerts, and low battery warnings.
- Internal rechargeable backup battery (150mAh, 3.7V) for brief operation when external power is lost.
- High sensitivity UBLOX7020 GNSS receiver with manufacturer‑stated approximate 10 m position accuracy.
- SMS command interface for remote configuration including server assignment and basic queries.
- Ability to point reporting to third party platforms such as Plaspy or the vendor SinoTrack PRO.
- Two year vendor warranty and access to manufacturer technical support for rollout assistance.

## How These Features Work with Plaspy

When configured to report to Plaspy, the ST-902 sends position updates and alarm events that Plaspy ingests for live tracking, alerting, and historical reporting. Plaspy automatically detects supported tracker protocols and consolidates incoming telemetry for unified fleet visibility.

- Real‑time GPS locations and timestamps are displayed in Plaspy for live monitoring and route playback.
- Alarm events such as shock, overspeed, geo‑fence, and low battery are forwarded to Plaspy so notifications and rules can be triggered.
- OBD‑II exposed telemetry can be forwarded into Plaspy when the vehicle exposes relevant PIDs and the device is configured to report them.
- Devices can be configured to send to Plaspy’s collector domain d.plaspy.com and Plaspy supports common transport methods so the tracker can be directed to the correct server.
- SMS configuration is useful for remote devices that need server IP or domain changes without physical access.

## Typical Use Cases

- Rapid fleet onboarding where minimal installation time is essential for scale deployments.
- Anti‑theft monitoring and tamper detection using shock and geo‑fence alerts routed to central operations.
- Taxi and rideshare vehicle tracking for dispatch and operational oversight.
- Short term rental and car sharing where quick plug‑in activation and turnarounds are required.
- Commercial vehicle visibility for simple location and event reporting without permanent wiring.
- Situations requiring SMS fallback reporting when cellular data is intermittently unavailable.

## Feature Availability Notes

- Firmware variations and hardware revisions can change which alarms, SMS commands, or OBD‑II PIDs are available on a given unit.
- Regional variants and carrier support affect GSM/GPRS band availability and may require specific SIM and APN settings.
- The ST-902 ships without a SIM card; operators must provision a local SIM and correct APN for reliable reporting.
- Backup battery provides limited operation time and is intended for short intervals during power loss or unplug events.
- Manufacturer configuration interfaces and command sets are the authoritative source for advanced settings and should be consulted when planning deployments.

## Why Use Plaspy with These Features

Pairing the ST-902 with Plaspy gives organisations centralised visibility into vehicle locations and alarm events while keeping deployment simple. The OBD2 plug‑and‑play form factor reduces installation time and cost, and Plaspy consolidates incoming positions and alerts into dashboards, historical reports, and notification workflows for operational oversight.

To learn more about Plaspy and how it can integrate with devices like the ST-902 visit https://www.plaspy.com. For the latest device specifications, firmware notes, and manufacturer guidance please verify details on the official SinoTrack website https://www.sinotrackgps.com/ as product features and firmware behavior can change over time.
