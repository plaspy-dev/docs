---
slug: /autofon/e_mayak_31/features
id: e_mayak_31-features
sidebar_label: Features
title: AutoFon - E-Mayak 3.1 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the AutoFon E-Mayak 3.1 GPS tracker and how it integrates with Plaspy for SMS based location and telemetry
keywords:
  - AutoFon E-Mayak 3.1
  - E Mayak 3.1 features
  - AutoFon GPS tracker
  - SMS GPS tracker
  - covert GPS beacon
  - long battery life tracker
  - E Mayak telemetry
  - Plaspy device compatibility
  - vehicle recovery tracker
  - asset tracking with SMS
---

# AutoFon - E-Mayak 3.1 Features

This page describes the public feature context for using the AutoFon E-Mayak 3.1 tracker with Plaspy. It focuses on practical capabilities, how the device reports location and telemetry, and the ways those reports can be integrated into Plaspy workflows for mapping, monitoring, and basic alerting.

Exact feature availability for any particular unit can vary with firmware version, hardware revision, installation method, and the manufacturer implementation. The information below is based on the device description and highlights the functions commonly reported for E-Mayak 3.1 units when used in Plaspy-centered workflows.

## Feature Overview

The E-Mayak 3.1 is an SMS first, low-power GPS beacon designed for long autonomous operation and discreet placement. It is intended for on-demand location checks and periodic telemetry rather than continuous GPRS streaming, making it suitable for recovery and long-term unattended monitoring where battery life and minimal detectability are priorities.

- SMS based location reports that include GPS coordinates and two common map link formats for quick viewing.
- Deep sleep autonomy and configurable life/sleep cycles for multi month to multi year standby operation on batteries.
- Basic telemetry over SMS including battery discharge status, temperature readings, heartbeat life signals, and SIM balance alerts.
- Security features such as PIN protected configuration and notifications for owner number changes or incorrect password attempts.
- Compact, covert form factor for hidden installations in vehicles, trailers, containers, or personal items.

## Core Features of AutoFon - E-Mayak 3.1

- SMS control and reporting for position and telemetry without continuous GPRS connectivity.
- GPS positioning with cell tower fallback for improved coverage in marginal GNSS conditions.
- Long autonomous operation with configurable sleep cycles and up to extended standby on removable CR123A batteries.
- Battery discharge monitoring and SIM balance alerts sent via SMS for remote maintenance visibility.
- Temperature sensing reported by SMS for simple environmental monitoring.
- Configurable heartbeat or life signal SMS to confirm device health on a schedule.
- PIN protected configuration and security notifications for basic anti-tamper awareness.
- Sequential SMS numbering to help correlate messages and events over time.

## How These Features Work with Plaspy

When integrated with Plaspy, the E-Mayak 3.1’s SMS centric messages can be captured and translated into location events and telemetry records. Plaspy workflows typically ingest SMS content either by manual entry or by using an SMS to API gateway so that position and status updates appear on maps and dashboards alongside other fleet data.

- Forwarded or gatewayed SMS coordinates become plotted locations that can be visualized on Plaspy maps.
- Map links included in the tracker SMS can be pasted or parsed into Plaspy to speed location verification.
- Battery and temperature SMS messages can be displayed in device status fields to support maintenance and replacement planning.
- Heartbeat SMS messages can be used to monitor device health and trigger notifications when expected signals stop.
- Sequential SMS numbers and balance alerts help correlate messages in Plaspy logs for audit and incident review.

## Typical Use Cases

- Covert anti-theft tracking for vehicles and motorcycles where long standby and concealment are required.
- Recovery of trailers, small boats, or containers where external power is unavailable and periodic checks are sufficient.
- Monitoring valuable shipments during storage or transit when low detectability is desirable.
- Temporary personal or animal tracking where periodic location queries and long battery life are a priority.
- Low cost location checks for assets on intermittent schedules without recurring data subscription fees.

## Feature Availability Notes

- Firmware variations and manufacturer updates can change SMS formats, available telemetry, and command sets.
- Hardware revisions or regional variants may alter battery life, supported GSM bands, or antenna performance.
- Installation method and mounting location affect GPS reception and the reliability of position reports.
- Using Plaspy with SMS based devices commonly requires an SMS forwarding method or gateway to ingest messages into the platform.
- Manufacturer documentation should be consulted for precise command syntax, PIN behavior, and configuration steps.

## Why Use Plaspy with These Features

Plaspy provides a practical way to centralize location events and SMS telemetry from devices like the E-Mayak 3.1 into familiar maps and operational dashboards. For teams focused on recovery, periodic monitoring, and long term unattended assets, pairing an SMS first tracker with Plaspy allows you to treat on demand position reports as part of your broader tracking and incident workflows.

To learn more about how Plaspy can work with the AutoFon E-Mayak 3.1 visit https://www.plaspy.com. For the most current device specific details, firmware notes, and official instructions consult the manufacturer at https://www.autofon.ru/ as features and behavior may change over time.
