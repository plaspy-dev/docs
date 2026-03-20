---
slug: /telic/lt910_ww/features
id: lt910_ww-features
sidebar_label: Features
title: Telic - LT910-WW Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Telic LT910 WW and how it integrates with Plaspy for fleet tracking and remote telemetry
keywords:
  - Telic LT910 WW features
  - Telic LT910 WW GPS tracker
  - LT910 WW Plaspy compatibility
  - Telic LTE GPS tracker
  - LT910 WW RS232 USB tracker
  - Telic fleet tracking
  - LT910 WW global LTE tracker
  - industrial IoT tracker
  - Plaspy compatible device
  - vehicle telemetry gateway
---

# Telic - LT910-WW Features

This page provides a public feature overview of the Telic LT910-WW and how its capabilities are commonly used with Plaspy. It covers the device's practical strengths in cellular connectivity, industrial interfaces, and how those strengths map to common Plaspy workflows for tracking, telemetry forwarding, and remote monitoring.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and the specifics of the installation or connected peripherals. For device specific limits, interfaces, or the most current technical details consult the manufacturer's documentation and release notes.

## Feature Overview

The LT910-WW is an industrial IoT terminal designed for global cellular connectivity with fallback options, and for integration with external GNSS receivers and sensor peripherals via serial and USB interfaces. In Plaspy deployments the terminal typically acts as a robust communications gateway, forwarding positional and telemetry data to the Plaspy cloud for visualization, alerts, and historical reporting.

- Global LTE connectivity with automatic fallback to 3G and 2G for extended coverage in roaming scenarios.
- Industrial RS232 and USB interfaces to attach external GNSS receivers, telemetry adapters, or sensor gateways.
- Wide input voltage support and a low power mode to suit vehicle installations and energy constrained deployments.
- Lockable SIM holder and rugged enclosure with wide operating temperature for secure field installations.
- Acts as a telemetry gateway when paired with external sensors or vehicle interfaces to feed Plaspy dashboards and reports.

## Core Features of Telic - LT910-WW

- LTE primary connectivity with automatic fallback to 3G and 2G for continuous reporting across regions.
- Based on the Telit LE910C1-WWX wideband module for broad band support in international deployments.
- RS232 (V.24/V.28) Sub-D and USB ports for attaching external GNSS units, OBD or CAN adapters, and other sensor modules.
- Wide supply voltage support and a low power mode suitable for vehicle and remote asset installations.
- Lockable SIM card holder and standard antenna connector for secure, reliable field use.
- Rugged operating temperature range and compact industrial housing for vehicle, cabinet, and equipment mounting.
- Designed to act as a telemetry gateway when combined with external peripheral modules for positional and analog/digital data.

## How These Features Work with Plaspy

When deployed with Plaspy, the LT910-WW forwards telemetry and status from its cellular connection and attached peripherals into Plaspy’s cloud, where that data is normalized for monitoring and analysis. The terminal can be configured to report to Plaspy endpoints using TCP or UDP on the platform's standard port, and Plaspy detects the tracker protocol and ingests data for real time use.

- Real time location reporting in Plaspy when an external GNSS receiver or NMEA feed is connected via RS232 or USB.
- Telemetry and digital input status from vehicle interfaces or ADC gateways are forwarded into Plaspy for dashboards and rule triggers.
- Low power or intermittent reporting modes are reflected as device status in Plaspy so operators can track connectivity and battery backed assets.
- External gateways such as BLE or CAN adapters attached to the LT910-WW can provide additional sensor data that Plaspy will surface for monitoring and alarms.
- Plaspy presents historical tracks, live positions, geofence events, and alerting based on the serialized telemetry sent by the terminal.

## Typical Use Cases

- Global fleet connectivity where a primary LTE link with 3G/2G fallback ensures broad roaming coverage and continuous reporting to Plaspy.
- Remote asset telemetry that aggregates sensor data through RS232 or USB attached devices and forwards it for centralized monitoring.
- Vehicle anti-theft and immobilization workflows when combined with external control interfaces and Plaspy rules and alerts.
- Temporary or portable deployments where wide input voltage range and low power mode reduce installation complexity.
- Industrial machine monitoring that uses serial telemetry to convey operational data into Plaspy for analytics and notifications.
- Integration hubs that convert legacy vehicle or equipment signals into IP telemetry for Plaspy consumption.

## Feature Availability Notes

- Firmware versions and manufacturer firmware options affect which interfaces and behaviors are available on a given unit.
- Hardware revisions and regional module variants may change supported LTE bands and specific connector options.
- Some capabilities, such as positional reporting, require external GNSS receivers or NMEA feeds attached to the device.
- Installation details and attached peripherals determine whether features like ignition, fuel or immobilizer workflows are possible.
- Always verify the exact feature set for your serial number and firmware with the manufacturer documentation before deployment.

## Why Use Plaspy with These Features

Pairing the LT910-WW with Plaspy gives organizations a flexible way to turn rugged cellular transport and industrial I/O into actionable fleet and asset intelligence. Plaspy normalizes telemetry from the terminal and attached peripherals into maps, alerts, and reports so teams can maintain visibility, respond to events, and analyze historical performance across global deployments.

To learn more about how Plaspy works with devices like the LT910-WW visit https://www.plaspy.com. For the most current device feature details, firmware behavior, and manufacturer specifications verify information on the official Telic site https://www.telic.de.
