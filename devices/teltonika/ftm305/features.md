---
slug: /teltonika/ftm305/features
id: ftm305-features
sidebar_label: Features
title: Teltonika - FTM305 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FTM305 and how it integrates with Plaspy for e mobility and industrial asset tracking
keywords:
  - Teltonika FTM305
  - FTM305 features
  - FTM305 GPS tracker
  - Teltonika FTM305 Plaspy
  - e mobility tracker
  - CAN bus GPS tracker
  - IP67 GPS tracker
  - LTE Cat M1 tracker
  - battery management tracking
  - vehicle telemetry tracker
---

# Teltonika - FTM305 Features

This page provides a public feature overview for the Teltonika FTM305 and explains how its capabilities can be used with Plaspy for vehicle and equipment monitoring. It focuses on practical, non-sensitive information about what the tracker reports and how those data points support visibility in Plaspy-powered fleet and asset management workflows.

Exact feature availability and behavior may vary by firmware version, hardware revision, regional model, installation wiring, and manufacturer implementation. For device-specific configuration, supported signals, and the latest technical details consult the manufacturer documentation and your device firmware notes.

## Feature Overview

The FTM305 is a compact 4G LTE Cat M1 tracker designed for e-mobility and industrial equipment where ruggedness, wide voltage support, and vehicle telemetry matter. In Plaspy, the device can deliver position and CAN-derived telemetry to help operators monitor assets, trigger events, and generate reports.

- Real-time GNSS positioning suitable for e-bikes, forklifts and other compact electric equipment
- CAN bus telemetry capture to surface vehicle data such as battery and voltage signals where available
- Rugged IP67 enclosure for outdoor and industrial mounting in demanding environments
- Wide input voltage support for both low voltage micro mobility and higher voltage industrial systems
- LTE Cat M1 connectivity with fallback options to extend coverage and reduce power consumption

## Core Features of Teltonika - FTM305

- Multi-constellation GNSS receiver for improved positioning and reliability
- LTE Cat M1 cellular connectivity with NB2 fallback and 2G support where applicable depending on the region
- CAN bus data acquisition for reading vehicle telemetry and battery management system parameters when available
- Wide DC input range covering 10–97 V to support a variety of electric vehicles and equipment
- IP67 rated compact enclosure designed for outdoor and industrial use
- Compatibility with Teltonika remote device management tools for configuration and monitoring
- Region specific cellular variants to match local network bands and regulatory requirements

## How These Features Work with Plaspy

Plaspy can ingest GNSS coordinates and CAN-sourced telemetry from the FTM305 so fleet operators see location and relevant vehicle signals in dashboards, maps, and reports. Plaspy automatically detects many common tracker protocols and accepts device data streams for near real-time visibility. Devices may be set to report to Plaspy endpoints using standard transport methods supported by the tracker.

- Live map tracking and historical routes based on GNSS updates from the tracker
- CAN-derived telemetry such as battery voltage and other vehicle signals presented in Plaspy dashboards and charts
- Event generation and alerts in Plaspy when CAN or GNSS inputs meet configured rules
- Geofence, reporting, and analytics features that use both location and telemetry data to inform operations
- Remote configuration and status visibility supported alongside Teltonika remote management when configured for your deployment

## Typical Use Cases

- Tracking and managing e-bike and scooter fleets for routing and availability
- Monitoring forklifts, shuttle cars, and warehouse vehicles for position and usage data
- Battery management insights for electric equipment by reading CAN bus BMS parameters where available
- Coordinating battery swap logistics and station movements in micro-mobility operations
- Rugged outdoor asset tracking for equipment exposed to dust and moisture
- Scalable deployments across urban and industrial sites using region-appropriate cellular variants

## Feature Availability Notes

- Some CAN signals and telemetry depend on vehicle wiring and the specific ECU data available on the CAN bus; not all vehicles expose the same parameters
- Cellular band support and fallback behavior vary by regional model and product code; confirm the correct variant for your geography
- Firmware version can change supported features, signal names, and behavior; review release notes when updating devices
- Remote capabilities such as configuration and remote monitoring require appropriate Teltonika device management settings and access
- Installation method and the use of external interfaces may affect which inputs are available to Plaspy

## Why Use Plaspy with These Features

Using the FTM305 with Plaspy gives operations a practical way to combine precise GNSS location and vehicle telemetry into a single monitoring and reporting environment. Plaspy's visualization, rules, and reporting tools help turn GNSS and CAN inputs into actionable insights for routing, maintenance planning, and operational alerts.

Learn more about how Plaspy can work with trackers like the FTM305 at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time, so verify the latest device-specific information on the manufacturer site https://www.teltonika-gps.com/.
