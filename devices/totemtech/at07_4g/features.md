---
slug: /totemtech/at07_4g/features
id: at07_4g-features
sidebar_label: Features
title: Totemtech - AT07-4G Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Totemtech AT07-4G tracker and how it integrates with Plaspy for fleet tracking and telemetry
keywords:
  - Totemtech AT07-4G
  - AT07-4G features
  - Totemtech GPS tracker
  - AT07-4G Plaspy compatibility
  - vehicle tracking
  - fleet management tracker
  - RS232 fuel sensor support
  - 1 wire temperature input
  - GNSS multi constellation
  - OTA firmware upgrades
---

# Totemtech - AT07-4G Features

This page provides a public feature overview of the Totemtech AT07-4G GPS tracker and how its capabilities map to use within Plaspy. It describes the device functions commonly used for fleet management, asset visibility, event reporting, and sensor telemetry when the device is connected to the Plaspy platform.

Exact feature availability and behavior can vary by device firmware, hardware revision, optional peripherals, installation method, and regional model variant. For device specific technical specifications and the latest implementation details consult the manufacturer documentation linked at the end of this page.

## Feature Overview

The AT07-4G is a compact rugged tracker intended for vehicle and asset deployments that need persistent location, event reporting, and sensor integration. With multi constellation GNSS, multiple cellular variants, and a variety of inputs and outputs, the device is suited to mixed fleet operations and security workflows that feed data into a central tracking platform such as Plaspy.

- Real time location and historical trace logging to support live maps and route history in Plaspy.
- Multi constellation GNSS positioning for faster fixes and improved accuracy across environments.
- Rich I O and serial interfaces for fuel meters, temperature sensors, door and ignition status, and other peripherals.
- Local storage and OTA firmware upgrade support to retain records and update devices when network access is intermittent.
- Alarm and event set including geo fencing, overspeed, SOS, door status, external power lost, towing and vibration alerts.

## Core Features of Totemtech - AT07-4G

- Multi constellation GNSS support including GPS GLONASS and BeiDou for reliable position fixes.
- Cellular variants with 3G and 4G support for broad network coverage and configurable reporting modes.
- RS232 serial port and analog digital inputs for integration with fuel meters and external sensors.
- 1 wire temperature input and general purpose I O for environmental telemetry and simple sensor attachments.
- Onboard flash memory for offline logging of position and events while the network is unavailable.
- OTA firmware upgrade capability and SMS or GPRS configuration support for remote device management.
- Comprehensive alarm suite with geo fencing overspeed SOS door status external power lost towing and vibration detection.
- Built in backup battery and wide DC input range to maintain operation through power interruptions.

## How These Features Work with Plaspy

When the AT07-4G is connected to Plaspy it supplies position fixes, time stamped events, and sensor telemetry that Plaspy can display, alert on, and include in reports. Plaspy automatically handles common tracker protocols and presents device data in maps, alerts, and historical traces for operational monitoring.

- Real time position updates and historical track playback to review routes and stops in Plaspy.
- Event visibility for door SOS external power lost and vibration alarms so teams can respond to security incidents.
- Sensor and telemetry ingestion for fuel meter data temperature readings and other analog or serial inputs.
- Offline log upload and continuity of records when the device regains connectivity, preserving historical traces.
- Configurable alerting and reporting in Plaspy based on the tracker events and thresholds reported by the device.

## Typical Use Cases

- Fleet management for mixed vehicle fleets needing continuous location and route history.
- Anti theft and security monitoring using door status external power alerts and SOS reporting.
- Fuel monitoring and consumption workflows using RS232 connected fuel meters and analog inputs.
- Perimeter and asset protection via geo fencing towing and vibration detection.
- Cold chain or environmental monitoring with 1 wire temperature input and serial sensor telemetry.
- Remote fleet oversight with OTA updates and centralized configuration through the tracking platform.

## Feature Availability Notes

- Feature support can differ between 3G and 4G model variants and between regional hardware revisions.
- Some capabilities require optional peripherals or specific sensor models to be present and correctly wired at installation.
- Firmware versions affect exact alarm behavior reporting formats and available configuration options.
- Manufacturer supplied specifications and accessory lists should be checked for the exact inputs outputs and supported sensor types.
- Plaspy ingests the data the tracker reports; confirm which events and telemetry are enabled on each device during deployment.

## Why Use Plaspy with These Features

Using the AT07-4G with Plaspy provides centralized visibility into vehicle and asset locations, event-driven alerts, and consolidated sensor telemetry that supports operational decision making. Plaspy organizes real time positions historical traces and device events into dashboards and reports so teams can monitor fleet activity, respond to incidents, and analyze trends across deployments.

To learn more about how Plaspy can work with Totemtech devices visit https://www.plaspy.com. Device firmware behavior hardware revisions and manufacturer details can change over time so verify the latest device specific information on the official manufacturer website http://www.totemtek.com/ before finalizing integration or installation plans.
