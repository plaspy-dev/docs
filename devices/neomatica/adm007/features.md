---
slug: /neomatica/adm007/features
id: adm007-features
sidebar_label: Features
title: Neomatica - ADM007 Features
sidebar_class_name: menu_item_tracker
description: Compact Neomatica ADM007 BLE features including GNSS tracking BLE sensor support jamming detection and compatibility with Plaspy for discreet asset monitoring
keywords:
  - Neomatica ADM007
  - ADM007 features
  - ADM007 GPS tracker
  - ADM007 BLE
  - Neomatica GPS tracker
  - ADM007 Plaspy
  - BLE sensor tracker
  - asset tracking Neomatica
  - vehicle tracker ADM007
  - BLE telemetry tracker
---

# Neomatica - ADM007 Features

This page describes the public feature context for using the Neomatica ADM007 BLE tracker with Plaspy. It summarizes the device capabilities that are relevant for Plaspy users, including GNSS positioning, Bluetooth Low Energy sensor telemetry, route memory and device health signals, and how those capabilities typically map into Plaspy for monitoring and operational workflows.

Exact feature availability and behavior can vary by firmware level, hardware revision, installation method and manufacturer implementation. Use this page as a practical overview; for the most current device specifications, configuration options and firmware notes consult the manufacturer documentation.

## Feature Overview

The ADM007 BLE is an ultra-compact GNSS tracker designed to bring discreet positioning and BLE sensor telemetry into fleet and asset management platforms such as Plaspy. Its small form factor, support for multiple BLE peripherals and on-device route memory make it suitable for installations where space is limited and low data usage is desirable.

- Real-time GNSS tracking with support for GPS and GLONASS to provide continuous location updates into Plaspy.
- Bluetooth Low Energy support for up to eight external sensors to capture temperature, humidity, tilt and asset presence telemetry.
- Built-in jamming detection and device status reporting to surface potential interference or tampering events.
- Large on-device route archive that stores at least 63,000 records for historical playback and incident review.
- Low data consumption and compact form factor that enable covert vehicle installs and distributed asset monitoring.

## Core Features of Neomatica - ADM007

- High-sensitivity GNSS receiver with GPS and GLONASS support for reliable position fixes.
- Bluetooth 4.0 support for up to eight BLE sensors with practical range for site and vehicle deployments.
- GSM GPRS connectivity for reporting position, sensor telemetry and device status to cloud platforms.
- Jamming detection to flag potential RF interference or tampering for follow up inside Plaspy.
- Large internal route memory capable of storing at least 63,000 entries for upload and analysis.
- Single analog input to report external analog signals depending on installation and wiring.
- Remote configuration options via Bluetooth, SMS and GPRS for field management.
- Support for FOTA firmware updates to help maintain current device behavior over time.

## How These Features Work with Plaspy

When configured to report into Plaspy, the ADM007 BLE forwards GNSS positions, BLE sensor telemetry and device health information to the platform for visualization and alerting. Plaspy ingests these data streams to provide real-time location awareness, historical playback and operational notifications.

- Live location and movement history appear in Plaspy dashboards for route tracking and review.
- BLE sensor readings from paired peripherals are forwarded into Plaspy as telemetry for environmental or asset condition monitoring.
- Jamming and device status alerts can be surfaced as notifications or events to trigger workflows inside Plaspy.
- On-device route history can be uploaded into Plaspy for forensic reconstruction and reporting.
- Remote configuration and firmware update status reported by the device help administrators keep installations current.

## Typical Use Cases

- Discreet vehicle tracking and anti-theft monitoring where a small device footprint is required.
- Fleet operations that need BLE telemetry for temperature or presence information alongside location.
- Distributed asset monitoring across a site using BLE peripherals for environmental sensing.
- Cold-chain or environmental monitoring where external BLE sensors relay readings into Plaspy for alerts.
- Rental equipment and high-value tool tracking that benefit from compact installation and route history.

## Feature Availability Notes

- Feature set and behavior depend on the installed firmware version and may change with updates.
- Hardware revisions and regional variants can affect supported cellular bands and certifications.
- BLE peripheral support and the types of sensors available depend on compatible Neomatica accessories and their firmware.
- Installation wiring and the use of the analog input will influence which external signals are available to Plaspy.
- Always verify feature availability and recommended configuration procedures in the official Neomatica documentation.

## Why Use Plaspy with These Features

Using the ADM007 BLE with Plaspy gives organizations a compact option for combining reliable GNSS positions with BLE sensor telemetry and device health signals. This combination enables visibility into vehicle and asset location together with environmental or presence data, and it supports operational oversight through route playback, alerts and remote device management.

To learn more about Plaspy and how it can ingest ADM007 data for tracking dashboards alerts and reporting visit https://www.plaspy.com. For the latest device specifications firmware notes and manufacturer guidance verify details with Neomatica at https://neomatica.com/
