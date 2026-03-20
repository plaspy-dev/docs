---
slug: /astra_telematics/at202/features
id: at202-features
sidebar_label: Features
title: Astra Telematics - AT202 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Astra Telematics AT202 GPS tracker and how it works with Plaspy for fleet tracking and telemetry
keywords:
  - Astra Telematics AT202
  - AT202 features
  - AT202 GPS tracker
  - AT202 Plaspy
  - Astra Telematics features
  - vehicle tracking AT202
  - fleet telemetry AT202
  - AT202 CANBus
  - AT202 NB IoT
  - AT202 LTE M
---

# Astra Telematics - AT202 Features

This page provides a public, non sensitive feature overview for the Astra Telematics AT202 and how it can be used with Plaspy for fleet tracking and telemetry. It summarizes the device capabilities relevant to Plaspy users, focusing on practical functions such as positioning, connectivity, I O integration, and device resilience without replacing manufacturer documentation.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, installation method, and manufacturer implementation choices. For device specific configuration, firmware details, and the latest technical specifications always consult the official Astra Telematics documentation and release notes.

## Feature Overview

The AT202 is a compact tracker built for vehicle and IoT fleet use, combining multi constellation GNSS positioning with multi network cellular connectivity and a broad set of vehicle I O. It is designed to provide continuous location and telemetry to platforms like Plaspy while supporting common fleet installation environments.

- Multi constellation GNSS for consistent position fixes across GPS Galileo GLONASS and BeiDou
- Multi network cellular connectivity with GPRS LTE M and NB IoT for broad coverage
- Rich I O including CANBus digital inputs and outputs ADC RS232 and 1 Wire for vehicle telemetry and driver ID
- Internal 900mAh backup battery plus low power reporting options to maintain data during power loss
- Vehicle electrical tolerance up to 65V and internal MEMS accelerometer for motion and tamper detection
- Compact form factor with internal antennas and available kit variants to suit different installations

## Core Features of Astra Telematics - AT202

- Multi constellation GNSS support covering GPS Galileo GLONASS and BeiDou for reliable positioning
- Multi network cellular radios including GPRS LTE M and NB IoT to reach a wide set of networks and coverage scenarios
- Comprehensive I O suite including CANBus 2 digital inputs 2 digital outputs 1 ADC RS232 and 1 Wire for external sensors and driver ID
- 900mAh internal backup battery with low power reporting modes to continue telemetry in power interruption scenarios
- Internal MEMS accelerometer for movement and impact event detection
- Vehicle electrical tolerance up to 65V making the unit suitable for many vehicle types
- Internal cellular and GNSS antennas with multiple kit variants and accessory options for installation flexibility

## How These Features Work with Plaspy

When deployed with Plaspy the AT202 streams GNSS fixes and vehicle telemetry to Plaspy for real time tracking and historical reporting. Plaspy ingests location and event data and translates raw inputs into actionable information for monitoring and operations.

- Real time location updates and position history visible in Plaspy dashboards and maps
- CANBus channel parsing and telemetry ingestion for engine odometer and other supported OEM channels
- Digital input events such as ignition or door state available as discrete events in Plaspy
- ADC readings and analog sensor values represented in Plaspy for fuel level or other analog sensors when configured
- RS232 and 1 Wire integrations captured as serial or driver ID events for attribution and logging
- Accelerometer movement and impact events plus battery and connectivity status reported to Plaspy for tamper and offline awareness

Plaspy automatically detects the tracker protocol and accepts device reports over TCP or UDP to the Plaspy ingest domain, simplifying device onboarding and data ingestion.

## Typical Use Cases

- Fleet management and dispatch optimization with real time location and route replay
- Anti theft monitoring and recovery workflows using accelerometer events and digital input alerts
- Vehicle telemetry and maintenance scheduling by capturing CANBus and ADC sensor data
- Driver identification and behavior attribution using 1 Wire or serial driver ID integration
- Mixed fleet asset monitoring across ICE and many electric vehicles thanks to 65V tolerance
- Remote installations where low power or backup battery reporting preserves critical data

## Feature Availability Notes

- Feature availability may depend on the AT202 firmware version and manufacturer feature configuration.
- Hardware variants and regional cellular band differences can affect network support and connectivity options.
- Some I O or telemetry channels require proper installation and wiring to vehicle systems and may be limited by installation choices.
- Kit variants and accessory cables influence which interfaces are readily available out of the box.
- Always consult Astra Telematics product documentation for the precise capabilities of your device serial number and build.

## Why Use Plaspy with These Features

Combining the AT202 with Plaspy provides a practical way to centralize location and vehicle telemetry for operational oversight. The device's positioning, cellular redundancy, and extensive I O allow Plaspy to present actionable location context alongside vehicle signals and event data, helping teams monitor fleets, respond to alerts, and analyze historical performance.

Learn more about how Plaspy can ingest and visualize AT202 data at https://www.plaspy.com. Device features firmware behavior and manufacturer implementation can change over time so verify the latest device specific information and installation guidance at the Astra Telematics website https://astratelematics.com/.
