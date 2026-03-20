---
slug: /neomatica/adm007_ble_cl/features
id: adm007_ble_cl-features
sidebar_label: Features
title: Neomatica - ADM007 BLE CL Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Neomatica ADM007 BLE CL tracker and how it integrates with Plaspy for vehicle monitoring
keywords:
  - Neomatica ADM007 BLE CL
  - ADM007 BLE CL features
  - Neomatica GPS tracker
  - ADM007 BLE CL Bluetooth tracker
  - cigarette lighter GPS tracker
  - vehicle tracker BLE sensors
  - ADM007 BLE CL jamming detection
  - ADM007 BLE CL data usage
  - Neomatica tracker Plaspy
  - ADM007 BLE CL GLONASS GPS
---

# Neomatica - ADM007 BLE CL Features

This page provides a public feature overview for the Neomatica ADM007 BLE CL and explains how its capabilities are presented and used within Plaspy. It focuses on user facing functions, operational value, and how the tracker integrates with the Plaspy platform for location monitoring and event visibility.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer settings. For device specific technical details and the latest firmware behavior please consult official Neomatica documentation.

## Feature Overview

The ADM007 BLE CL is a compact cigarette lighter form factor tracker designed for straightforward installation and efficient long term monitoring. It emphasizes low data consumption and supports wireless BLE sensors to extend monitoring beyond basic location tracking.

- Plug in installation via the vehicle cigarette lighter for quick setup and discreet placement.
- Low data usage suitable for long term tracking, typically around 8 to 10 MB per month under typical reporting patterns.
- Support for up to 8 Bluetooth Low Energy sensors within a practical range up to 100 meters to gather additional sensor data.
- Fast and accurate GLONASS GPS location performance and a jamming detection feature for improved security awareness.
- External NanoSIM slot for easy access and management, plus local configuration via Bluetooth and mobile app.

## Core Features of Neomatica - ADM007 BLE CL

- Cigarette lighter power design for simple plug and play installation without permanent wiring.
- Bluetooth 4.0 interface with support for up to 8 wireless BLE sensors and a manufacturer stated practical range up to 100 meters.
- GLONASS GPS receiver performance with high sensitivity and multi channel tracking for reliable location fixes in varied conditions.
- Jamming detection to notify when radio interference is detected around the device.
- External NanoSIM slot and GSM GPRS communications for mobile network connectivity and remote reporting.
- Low average data and power consumption characteristics suitable for long term monitoring.
- Device management options including Bluetooth configuration, SMS, GPRS reporting, and firmware updates over the air as provided by the manufacturer.
- Onboard storage capacity for recorded route data, with a large record buffer as specified by Neomatica.

## How These Features Work with Plaspy

When used with Plaspy the ADM007 BLE CL reports location and status information to the platform so operators can monitor vehicles and related sensor inputs in one view. Plaspy detects compatible trackers automatically and presents their activity in standard device dashboards.

- Location fixes from the device appear in Plaspy maps and route history views for playback and trip analysis.
- BLE sensor states and supplementary inputs reported by the tracker are visible alongside the device record where supported by the incoming telemetry.
- Jamming detection events can surface as alerts or status notes in Plaspy to help operators notice possible interference.
- Plaspy automatically detects tracker protocol and accepts device reports using the platform transport options supported by the tracker.
- Device connectivity, last seen, and basic device metadata are displayed in Plaspy for operational oversight and troubleshooting.

## Typical Use Cases

- Short term or long term vehicle monitoring where quick installation is required without hardwiring.
- Fleet oversight for light commercial vehicles and passenger cars requiring discreet tracking.
- Use cases that benefit from additional BLE sensors for monitoring doors, cargo conditions, or accessory states.
- Low data cost deployments where monthly traffic needs to be minimized.
- Situations where jamming detection adds a layer of security awareness for stolen or tampered vehicles.
- Rentals and shared vehicles where external SIM access and easy removal are operational advantages.

## Feature Availability Notes

- BLE sensor support and behavior may vary by firmware version and by the specific sensor models used.
- Some capabilities described are dependent on the device firmware and hardware revision from Neomatica.
- Installation type matters: cigarette lighter installation provides a convenient form factor but may impact continuous power behavior compared to hardwired installations.
- Regional mobile network support can affect connectivity and should be verified against the device GSM specifications and local operators.
- For operational details such as exact current draw, data patterns, and FOTA behavior consult Neomatica technical documentation.

## Why Use Plaspy with These Features

Using the ADM007 BLE CL with Plaspy centralizes vehicle location, route history, and supplementary sensor visibility into a single monitoring platform. Plaspy helps teams maintain situational awareness, review historical movement, and receive event notifications that support operational decisions.

Learn more about Plaspy and how it integrates with compatible trackers at https://www.plaspy.com. For the most current device specific features firmware notes and manufacturer details verify information on the official Neomatica website https://neomatica.com/ as capabilities and implementations can change over time.
