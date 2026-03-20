---
slug: /tzone/tz_bc01/features
id: tz_bc01-features
sidebar_label: Features
title: TZone - TZ-BC01 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for TZone TZ-BC01 beacon tracker and how it works with Plaspy for proximity and asset tracking
keywords:
  - TZone TZ-BC01
  - TZ-BC01 features
  - TZone iBeacon tracker
  - Bluetooth 4.0 beacon
  - TZ-BC01 battery life
  - TZ-BC01 broadcasting interval
  - TZone tracker Plaspy
  - TZ-BC01 proximity tracking
  - TZone asset tracker
  - TZ-BC01 transmission distance
---

# TZone - TZ-BC01 Features

This page provides a public feature summary for the TZone TZ-BC01 and explains how those capabilities are presented and used within Plaspy. It focuses on user facing functionality and practical value rather than low level implementation details, and is intended to help fleet and asset managers understand what to expect when using the TZ-BC01 with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. The information below is grounded in the device description from the manufacturer and highlights the capabilities known for the TZ-BC01; check manufacturer documentation for the most current device specifics.

## Feature Overview

The TZone TZ-BC01 is a compact, battery powered beacon device that uses the iPhone iBeacon protocol and Bluetooth 4.0 technology to provide proximity and location awareness for assets and personal items. Its small size and long battery life make it suitable for discreet tagging where periodic presence updates are useful.

- Compact and lightweight form factor for discreet attachment and easy deployment
- Uses iPhone iBeacon protocol over Bluetooth 4.0 for proximity based location awareness
- Long battery life with CR2450 cell offering up to 12 months of operation under typical use
- Adjustable broadcasting interval with a default of 500 ms for tuning responsiveness and power use
- Configurable transmit power range for balancing reach and energy consumption
- Password protection to restrict access and changes to device settings

## Core Features of TZone - TZ-BC01

- Compact dimensions and low weight suitable for attaching to small items
- iPhone iBeacon protocol support for beacon based proximity detection
- Bluetooth 4.0 radio for broad mobile device compatibility
- Compatibility with iOS 7.0 and later and Android 4.3 and later
- CR2450 coin cell power with up to 12 months working time in normal conditions
- Adjustable broadcast interval (default 500 ms) to control update frequency
- Adjustable transmit power between reported device levels for range tuning
- Transmission range of approximately 50 to 80 meters in open field conditions
- Password protection for basic device access control

## How These Features Work with Plaspy

When used with Plaspy, the TZ-BC01's beacon and battery characteristics translate into regular presence events and operational benefits for tracking and monitoring. Plaspy detects compatible tracker protocols automatically and ingests the device data so it can be shown alongside other tracked items.

- Plaspy displays beacon derived presence and recent activity so you can see when a tagged item was last detected
- Long battery life reduces maintenance events shown in Plaspy and supports longer unattended deployments
- Adjustable broadcast interval and transmit power allow you to tune how often the device reports presence to match monitoring needs visible in Plaspy
- Plaspy can accept device connections to the centralized server domain d.plaspy.com and devices may be configured to use UDP or TCP on the standard Plaspy port if network forwarding or gateway configuration is required
- Password protected devices appear as secured entries where settings changes are restricted to authorized operators

## Typical Use Cases

- Tagging small assets and equipment where discreet, long lasting presence reporting is required
- Personal item tracking such as bags, keys, or carry items that benefit from proximity based alerts
- Inventory and retail item tagging for location awareness inside defined areas
- Short range location sensing in facilities where Bluetooth beacon detection is available
- Periodic presence monitoring where low maintenance battery life is important

## Feature Availability Notes

- Firmware version and manufacturer configuration can change how features are exposed or behave
- Hardware revisions or regional variants may affect transmit power, broadcast behavior, or supported settings
- Installation method and placement (indoors, enclosed spaces) will influence effective transmission distance
- Some device settings such as broadcasting interval and transmit power require compatible configuration tools and may be subject to password protection
- Always confirm which features are present on your specific unit by consulting the official manufacturer materials

## Why Use Plaspy with These Features

Using the TZ-BC01 with Plaspy helps organizations combine discreet beacon based presence data with broader asset and fleet visibility. Plaspy aggregates device events so operations teams can view recent activity, manage device inventory, and include beacon-tagged items in location reports alongside other tracked assets.

To learn more about Plaspy and how it can integrate beacon and tracker devices, visit https://www.plaspy.com. For the most current and authoritative details about TZ-BC01 features, firmware behavior, and manufacturer specifications, consult the official TZone documentation at http://www.tzonedigital.com/ as device capabilities and implementations can change over time.
