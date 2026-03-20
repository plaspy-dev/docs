---
slug: /totemtech/at07_3g/features
id: at07_3g-features
sidebar_label: Features
title: Totemtech - AT07-3G Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Totemtech AT07 3G GPS tracker and its compatibility with Plaspy for location monitoring and data logging
keywords:
  - Totemtech AT07 3G
  - Totemtech GPS tracker
  - AT07 3G features
  - AT07 3G Plaspy compatibility
  - GPS tracking device
  - vehicle tracking
  - asset tracking
  - OTA firmware update
  - micro SD logging
  - accelerometer movement detection
---

# Totemtech - AT07-3G Features

This page provides a public feature overview for the Totemtech AT07-3G GPS tracker and how its capabilities are expressed when used with Plaspy. It summarizes the device features that matter to fleet and asset monitoring, data logging, and event reporting as they integrate with Plaspy's tracking platform.

Exact feature availability for any individual AT07-3G unit can vary by firmware version, hardware revision, regional model, and the specifics of physical installation. For precise device behavior consult the official Totemtech documentation and your vendor for firmware and revision details.

## Feature Overview

The AT07-3G is a general purpose GPS tracking device designed to support continuous location reporting, local logging, movement detection, and a range of configurable alarms. It is suited for deployments that require dual server reporting and multiple communication methods.

- Dual server reporting for sending data to two servers simultaneously to increase redundancy.
- Built in 3 axis accelerometer for movement status and tremble detection.
- Micro SD card storage for extended local logging of routes and events.
- OTA firmware upgrade capability to keep device firmware current.
- Support for GPRS, SMS, and USB communications for commands and data transfer.

## Core Features of Totemtech - AT07-3G

- Dual server reporting allowing simultaneous transmission to two backend servers.
- 3 axis digital accelerometer providing movement detection and tremble status.
- Micro SD card support for onboard storage of location and history data.
- Over the air firmware upgrade support to deploy updates remotely.
- Multiple communication channels including GPRS, SMS, and USB for flexibility.
- Real time tracking plus history trace playback for route reconstruction.
- Configurable I O port settings for basic integration and custom inputs.
- Built in alarm types such as over speed, low power, tremble, parking, SOS, external power off, and internal power low.

## How These Features Work with Plaspy

Plaspy receives and processes the AT07-3G data so operators can monitor location, events, and device status in a unified view. Plaspy automatically detects supported tracker protocols and presents received telemetry and alerts within the platform.

- Real time location updates and live position markers in Plaspy when the device reports.
- History and route playback using logged points that the device transmits or stores locally.
- Movement and tremble indicators derived from the device accelerometer shown as events in Plaspy.
- Alarm and status notifications for power, SOS, and other configured alerts surfaced in Plaspy event lists.
- Device online status and last known communication time to help manage device connectivity.
- Dual reporting enables a redundant data path to Plaspy when configured alongside a secondary server.

## Typical Use Cases

- Vehicle fleet location monitoring for route visibility and dispatch support.
- Asset tracking where local logging on micro SD is useful for intermittent connectivity.
- Detecting movement or tampering through accelerometer based tremble and motion events.
- Remote history playback for incident investigation and route verification.
- Power and SOS alerts used for operator notification and safety monitoring.
- Deployments that need redundant server reporting for higher availability.

## Feature Availability Notes

- Firmware level affects feature availability and behavior; some capabilities require recent firmware.
- Hardware revisions or regional variants may change supported cellular bands and specific I O mappings.
- Installation wiring and configuration determine which I O functions and alarms are usable in practice.
- Micro SD logging and OTA updates require those features to be enabled in device firmware and supported by the installer.
- Manufacturer documentation should be consulted for exact alarm thresholds, reporting intervals, and electrical specifications.

## Why Use Plaspy with These Features

Using the AT07-3G with Plaspy provides a straightforward way to centralize location, alert, and history data from this tracker model. Plaspy presents movement status, alarm events, and historical traces in a single interface, helping operators turn device telemetry into operational insight without managing low level protocol details.

To learn more about how Plaspy works with compatible trackers and to explore platform capabilities, visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance, verify details on the official Totemtech website http://www.totemtek.com/ as device features and firmware behavior can change over time.
