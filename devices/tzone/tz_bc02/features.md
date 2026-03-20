---
slug: /tzone/tz_bc02/features
id: tz_bc02-features
sidebar_label: Features
title: TZone - TZ-BC02 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the TZone TZ-BC02 tracker and how it integrates with Plaspy for location and presence monitoring
keywords:
  - TZone TZ-BC02
  - TZone tracker features
  - TZ-BC02 iBeacon
  - Bluetooth 4.0 tracker
  - CR2477 battery tracker
  - compact GPS tracker
  - TZ-BC02 Plaspy compatibility
  - item tracking Bluetooth beacon
  - TZ-BC02 battery life
  - TZone device features
---

# TZone - TZ-BC02 Features

This page provides a public feature overview of the TZone TZ-BC02 and how its capabilities map into Plaspy for monitoring and operational visibility. It summarizes the user-facing functions that are relevant when using the TZ-BC02 with Plaspy and explains the practical value of those features for tracking and presence awareness.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and how the manufacturer implements specific functions. For device specific configuration, firmware releases, and the latest technical details refer to the official manufacturer documentation.

## Feature Overview

The TZ-BC02 is a compact, lightweight tracker described by the manufacturer as a device intended for reliable tracking and presence detection. Its publicly stated strengths center on Bluetooth iBeacon compatibility, long battery life, and configurable broadcast parameters that make it suitable for item level tracking and proximity detection.

- Compact form factor and low weight for easy placement and concealment
- iPhone iBeacon compatibility using Bluetooth 4.0 for proximity based tracking
- Android compatibility starting from Android 4.3 for broad smartphone support
- CR2477 3V battery power with estimated working time in typical modes of about 1.5 to 2.5 years
- Adjustable broadcast interval with a default of 500 ms and configurable transmit power for range tuning
- Transmission range of roughly 50 to 80 meters in open field conditions

## Core Features of TZone - TZ-BC02

- Compact dimensions approximately 50 x 50 x 20 mm for discreet placement
- Lightweight design around 30 grams
- Bluetooth 4.0 iBeacon support for integration with iOS devices using the iBeacon protocol
- Android compatibility for devices running Android 4.3 and newer
- CR2477 3V battery as the primary power source
- Adjustable broadcast interval with a 500 ms default setting
- Configurable transmit power in a range provided by the manufacturer
- Open field transmission distance approximately 50 to 80 meters

## How These Features Work with Plaspy

Plaspy can register compatible trackers and present device visibility and presence data in a centralized interface. When a TZ-BC02 is integrated into a Plaspy deployment, key device behaviors and broadcast settings influence how Plaspy displays presence and detection information.

- Plaspy lists the device and shows last seen or presence updates based on the device reporting behavior
- Broadcast interval affects how frequently the tracker is detected and how often Plaspy receives presence updates
- Transmit power and open field range influence detection coverage that Plaspy can visualize across locations
- Plaspy can receive device traffic routed to the Plaspy server domain and the platform automatically detects the tracker protocol
- Device network configuration can use standard transport options supported by Plaspy when the tracker is set up to report to the Plaspy server

Note: Plaspy supports automatic protocol detection for compatible devices and the platform is designed to accept connections when a device is configured to report into the Plaspy server.

## Typical Use Cases

- Item level tracking for valuables, luggage, or portable equipment
- Proximity based presence detection for assets or persons within a site
- Inventory tagging and locating of small items in warehouses or storage areas
- Personal item monitoring such as keys, bags, or small personal devices
- Asset visibility programs that combine beacon detections with centralized monitoring

## Feature Availability Notes

- Feature behavior such as broadcast interval, transmit power, and battery life depends on firmware and user configurable settings
- Hardware revisions and regional variants may present different performance characteristics or configurable ranges
- Installation and physical placement will affect transmission distance and detection reliability
- Battery lifetime estimates vary with reporting frequency and transmit power; actual life depends on usage patterns
- For the most current technical details and firmware change notes consult the manufacturer documentation

## Why Use Plaspy with These Features

Using the TZ-BC02 together with Plaspy provides a way to centralize presence and simple proximity based tracking data from compact Bluetooth beacons. Plaspy helps organizations collect, view, and manage device visibility so that users can monitor presence updates, check last seen times, and understand coverage behavior across sites.

If you would like to learn more about how Plaspy can work with devices like the TZ-BC02, visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation details can change over time so please verify the latest device specific information on the manufacturer site http://www.tzonedigital.com/ before deployment.
