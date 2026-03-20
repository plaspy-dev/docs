---
slug: /teltonika/fmc800/features
id: fmc800-features
sidebar_label: Features
title: Teltonika - FMC800 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Teltonika FMC800 GPS tracker and how it works with Plaspy for fleet tracking and crash trace reporting
keywords:
  - Teltonika FMC800 features
  - Teltonika FMC800 GPS tracker
  - FMC800 features
  - FMC800 crash detection
  - FMC800 Bluetooth LE
  - Teltonika FMC800 Plaspy
  - FMC800 vehicle tracking
  - Fleet management FMC800
  - FMC800 GNSS tracking
  - OBD II tracker FMC800
---

# Teltonika - FMC800 Features

This page provides a public feature overview of the Teltonika FMC800 and how its capabilities are used with Plaspy for fleet tracking and operational monitoring. It focuses on user facing features, practical value, and how the device reports into Plaspy without exposing private implementation details.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and manufacturer implementation. Users should treat the information here as a practical summary and consult official Teltonika documentation for device specific technical details.

## Feature Overview

The FMC800 is a compact OBD II plug and play tracker designed for vehicle tracking and fleet management. It combines LTE Cat 1 cellular connectivity with fallback to 2G, multi constellation GNSS positioning, built in accelerometer crash tracing, and Bluetooth LE for tethering external low energy devices or sensors.

- Plug and play OBD II form factor for fast installation and vehicle power
- LTE Cat 1 connectivity with 2G fallback for wide network coverage and future resilience
- Configurable crash trace using a built in 3 axis accelerometer for detailed incident data
- Bluetooth LE support for connecting low energy beacons and sensors such as temperature and magnet detection
- Multi constellation GNSS positioning for high accuracy location updates
- Small footprint and internal backup battery for uninterrupted reporting during brief power interruptions

## Core Features of Teltonika - FMC800

- Plug and play OBD II connection for simple installation and power from the vehicle
- LTE Cat 1 cellular modem with 2G fallback for mobile network connectivity
- Built in 3 axis accelerometer with configurable crash trace parameters
- Bluetooth Low Energy interface for external beacons and low energy sensors
- Multi constellation GNSS support including GPS GLONASS GALILEO BEIDOU QZSS and A GPS assistance
- Position accuracy suited for vehicle tracking with high sensitivity GNSS reception
- Internal backup battery to maintain operation during brief power loss
- IP41 rated enclosure and wide operating temperature range for vehicular environments

## How These Features Work with Plaspy

Plaspy ingests location and event data from the FMC800 so fleet managers can see vehicle status, crash traces, and connected sensor information in the platform. Plaspy automatically detects the device protocol and normalizes incoming data for visibility and reporting.

- Real time location and route history visible in Plaspy as the tracker reports GNSS fixes
- Crash events and detailed crash trace data appear as timestamped events for incident review
- Bluetooth LE linked sensor events and beacon presence can be captured and surfaced when the FMC800 reports them
- Device connectivity and power state, including unplug or backup battery events, are available for monitoring
- Plaspy accepts standard TCP or UDP connections and can receive device traffic addressed to the Plaspy server domain for automatic handling

## Typical Use Cases

- Rapid deployment of vehicle tracking using the OBD II plug and play connection
- Crash detection and post incident analysis using accelerometer based crash trace data
- Asset condition monitoring by pairing external Bluetooth LE sensors for temperature or movement alerts
- Driver and fleet performance monitoring with positional history and event reporting
- Theft or unauthorized movement detection using unplug and towing detection events
- Long term fleet visibility and route auditing enabled by multi constellation GNSS tracking

## Feature Availability Notes

- Feature behavior can differ between firmware releases and manufacturer firmware settings
- Hardware revisions and regional variants may change supported cellular bands or certification
- Some Bluetooth LE use cases depend on the availability and configuration of compatible beacons or external sensors
- Installation method and vehicle wiring can affect which vehicle signals and power states are available to the device
- For precise parameter ranges and configuration options consult the official Teltonika documentation

## Why Use Plaspy with These Features

Using the Teltonika FMC800 with Plaspy gives organizations consolidated visibility into vehicle location, crash events, and connected sensor data. Plaspy’s platform collects and normalizes the tracker data so operations teams can monitor fleets, investigate incidents, and build reports without managing raw device traffic.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific feature and firmware details on the manufacturer site https://www.teltonika-gps.com/ . Device features and firmware behavior can evolve over time so confirm current specifications and configuration steps with the official manufacturer documentation.
