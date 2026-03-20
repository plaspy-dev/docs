---
slug: /teltonika/fm_2200/features
id: fm_2200-features
sidebar_label: Features
title: Teltonika - FM 2200 Features
sidebar_class_name: menu_item_tracker
description: Public features summary for Teltonika FM 2200 GPS tracker and how it works with Plaspy
keywords:
  - Teltonika FM 2200
  - FM2200 features
  - Teltonika GPS tracker
  - FM 2200 Plaspy compatibility
  - FM 2200 NMEA output
  - FM 2200 geofence
  - FM 2200 GPRS
  - vehicle tracking FM 2200
  - FM 2200 movement sensor
  - FM 2200 inputs outputs
---

# Teltonika - FM 2200 Features

This page provides a public, features-oriented summary of the Teltonika FM 2200 and how its capabilities map to the Plaspy platform. It is intended to help fleet managers, integrators, and technical users understand what the device can do when reporting into Plaspy and what practical value those features deliver.

Exact feature availability can vary by firmware version, hardware revision, installation type, and the manufacturer's implementation. Where possible this page references the FM 2200 capabilities reported by Teltonika, but installers and operators should confirm details against the device firmware and official Teltonika documentation.

## Feature Overview

The FM 2200 is a compact GSM enabled GPS tracker focused on reliable position reporting and flexible integration. It combines GPS reception, configurable inputs and outputs, NMEA output via USB, and multiple data reporting and update methods to suit asset and vehicle tracking workflows.

- Real time location reporting over GPRS with support for TCP and UDP transport
- USB port offering NMEA output and a configuration path for local setup
- Configurable digital inputs and open collector outputs for remote monitoring and control
- Built in movement sensor to improve reporting behavior and reduce unnecessary transmissions
- Support for multiple geofence areas and storage of historical records for later retrieval

## Core Features of Teltonika - FM 2200

- GSM GPRS communication with support for TCP IP and UDP IP reporting
- 50 channel GPS receiver compatible with common NMEA sentences including GGA GGL GSA GSV RMC and WGS 84
- USB port for NMEA output and configuration access
- Two digital inputs and two open collector outputs for external device monitoring and basic control
- Built in movement sensor for motion detection and improved reporting logic
- On device storage of historical data with capacity for up to 15 000 records
- Configurable geofence areas with enter and exit detection
- Multiple update and maintenance methods including firmware and configuration updates over GPRS SMS and USB

## How These Features Work with Plaspy

Plaspy can accept position and event data from the FM 2200 and present it within mapping, history, and event interfaces to support operational monitoring. Plaspy automatically detects the tracker protocol and can receive reports from FM 2200 devices configured to report into the Plaspy server.

- Live location and track history displayed on Plaspy maps using received GPS fixes
- Recorded positions stored on the device can be transmitted to Plaspy and shown as historical trips or points
- Geofence events from the FM 2200 map to Plaspy alerts and can be used for automation or notifications
- Input and output state changes reported by the device become visible as discrete events in Plaspy for monitoring external sensors or actuators
- Plaspy supports receiving data over TCP or UDP and can accept reports from devices configured to report to d.plaspy.com using the standard Plaspy intake port
- Device configuration and firmware workflows remain managed by the device tools while operational telemetry is consumed by Plaspy for oversight

## Typical Use Cases

- Real time vehicle tracking for route monitoring and dispatch coordination
- Asset tracking where motion sensing and periodic reporting reduce data usage
- Perimeter monitoring using multiple geofences for entry exit alerts
- Remote monitoring of auxiliary equipment using the device inputs and outputs
- Historical trip reconstruction and compliance reporting using stored records
- Remote firmware and configuration updates to keep devices on current settings

## Feature Availability Notes

- Some features depend on firmware version and device hardware revision; newer device batches may include updated GPS sensitivity or different chipset variants
- Input and output behavior can change with wiring and installation choices; confirm wiring and integration details during installation
- Geofence behavior and storage limits are influenced by configuration parameters set on the device
- Regional variants of the FM 2200 may have different radio or certification characteristics
- Always check Teltonika release notes and firmware documentation before relying on a specific feature

## Why Use Plaspy with These Features

Using Plaspy with the Teltonika FM 2200 brings the device telemetry into a unified platform for location visibility, event monitoring, and historical analysis. Plaspy converts incoming GPS fixes, geofence events, and input state changes into actionable information for operations teams, helping reduce time to detect incidents and simplifying fleet oversight.

To learn more about Plaspy and how it handles device telemetry visit https://www.plaspy.com. For the most current device specifications firmware notes and implementation details verify information with the manufacturer at https://www.teltonika-gps.com/
