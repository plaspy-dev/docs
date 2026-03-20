---
slug: /autofon/e_mayak_31/features
id: e_mayak_31-features
sidebar_label: Features
title: AutoFon - E-Mayak 3.1 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the AutoFon E Mayak 3.1 GPS tracker and how it integrates with Plaspy for SMS based on demand tracking
keywords:
  - AutoFon E Mayak 3.1
  - AutoFon E Mayak 3.1 features
  - E Mayak 3.1 GPS tracker
  - AutoFon SMS tracker
  - Plaspy compatible tracker
  - covert GPS tracker
  - long battery GPS tracker
  - SMS telemetry tracker
  - asset tracking E Mayak
  - vehicle anti theft tracker
---

# AutoFon - E-Mayak 3.1 Features

This page describes the public feature context for using the AutoFon E-Mayak 3.1 tracker with Plaspy. It focuses on the device capabilities that are relevant to Plaspy workflows, including the SMS based location and telemetry reporting model, battery life and autonomy characteristics, and the typical ways E-Mayak 3.1 position messages and map links are integrated into Plaspy for visualization and reporting.

Exact feature availability and behavior can vary with firmware version, hardware revision, installation method, and manufacturer implementation. Where relevant, this page highlights practical, non sensitive features drawn from manufacturer descriptions and how those features are commonly used in Plaspy rather than device internals or configuration secrets.

## Feature Overview

The AutoFon E-Mayak 3.1 is an SMS first compact tracker designed for long autonomous operation and discreet placement. It reports location and basic telemetry by SMS, provides map link formats suitable for quick review, and is intended for on demand tracking and recovery workflows rather than continuous GPRS streaming.

- On demand GPS position reporting via SMS including coordinate formats and standard SMS map links
- Very long standby autonomy with configurable sleep cycles to support months or years of operation
- Basic telemetry by SMS such as battery discharge status, temperature readings, heartbeat life signal, and SIM balance alerts
- PIN protected configuration and security notifications for incorrect attempts and owner number changes
- Compact, covert enclosure suited to concealed installations in vehicles, containers, or portable assets

## Core Features of AutoFon - E-Mayak 3.1

- SMS based control and reporting for on demand location and status queries
- GPS positioning with cell tower fallback for improved coverage in marginal GPS conditions
- Long autonomous operation using replaceable CR123A battery cells with configurable sleep intervals
- Temperature sensing and battery discharge monitoring reported by SMS
- Heartbeat or life signal SMS to confirm device availability on a schedule
- PIN protected configuration and alerts for security related events
- Sequential SMS numbering and SIM balance notifications to help correlate messages

## How These Features Work with Plaspy

When an E-Mayak 3.1 is used with Plaspy, SMS based positions and telemetry are brought into Plaspy workflows either by forwarding SMS content into an ingestion endpoint or by manually importing the coordinate links and messages. Plaspy then uses that input for mapping, logging, and alerting according to the same visibility and reporting tools used for other devices.

- Forward SMS messages or use an SMS to API gateway to feed position and telemetry into Plaspy
- Paste or import standard SMS map links and coordinates into Plaspy to display location on maps
- Use heartbeat SMS messages to track device health and show last seen time in Plaspy dashboards
- Surface battery and temperature alerts in Plaspy to help plan maintenance and replacement cycles
- Correlate sequential SMS numbers and balance notifications with Plaspy activity logs for auditing and troubleshooting

## Typical Use Cases

- Covert vehicle and motorcycle anti theft tracking where long battery life and concealment matter
- Long term monitoring of trailers, boats, or equipment without reliable external power
- Tracking shipments and containers during storage or transit when periodic position checks suffice
- Temporary personal or animal monitoring where scheduled reporting meets requirements
- Recovery operations that rely on on demand position requests rather than continuous streaming

## Feature Availability Notes

- Firmware differences can change message formats, available telemetry fields, and configuration commands
- Hardware revisions and regional device variants may alter battery life, antenna performance, or GSM band support
- Installation method and placement impact GPS reception and the effectiveness of covert mounting
- SMS forwarding and gateway setup with network operators is often required to integrate SMS messages into Plaspy
- Manufacturer documentation is the authoritative source for the most current technical details and limitations

## Why Use Plaspy with These Features

Combining the AutoFon E-Mayak 3.1 with Plaspy provides practical visibility for workflows that prioritize autonomy and on demand tracking. Plaspy can ingest SMS derived positions and telemetry, map them, and include those messages in reporting and alerts so operations teams can monitor device health, plan battery replacements, and coordinate recovery actions when required.

If your use case values long battery life, discreet installation, and low ongoing data cost, using E-Mayak 3.1 with Plaspy offers a straightforward path to situational awareness without continuous GPRS telemetry. To learn more about how Plaspy supports trackers like this one visit https://www.plaspy.com. For the latest device specific information, firmware notes, and detailed configuration instructions check the manufacturer website at https://www.autofon.ru/ as features and firmware behavior can change over time.
