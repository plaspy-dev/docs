---
slug: /dct/syrus_gps/features
id: syrus_gps-features
sidebar_label: Features
title: DCT - Syrus GPS Features
sidebar_class_name: menu_item_tracker
description: Detailed feature overview of the DCT Syrus GPS tracker and how it integrates with Plaspy for reliable vehicle and asset tracking
keywords:
  - DCT Syrus GPS
  - Syrus GPS features
  - DCT GPS tracker
  - Syrus GPS Plaspy
  - vehicle tracking
  - asset tracking
  - accelerometer crash detection
  - Iridium satellite backup
  - store and forward buffer
  - IP65 water resistant
---

# DCT - Syrus GPS Features

This page summarizes the public feature context for the DCT Syrus GPS tracker and explains how those capabilities are used with Plaspy for fleet and asset visibility. It focuses on user-facing functions and practical value rather than implementation details, so teams can understand what the device provides when paired with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, accessory choices, installation method, and manufacturer configuration. For device-specific commands, firmware notes, or accessory requirements refer to the manufacturer documentation and release notes.

## Feature Overview

The Syrus GPS is designed as a high-performance IoT tracker that prioritizes fast, reliable data transfer and robust event reporting. It combines location reporting with motion and safety-related events, satellite backup options, and durable packaging suited to exposed vehicle and asset installations.

- High-speed data transfer for timely location and event reporting to backend platforms
- Integrated 3-axis digital accelerometer providing motion, shock, and crash event detection
- Backup satellite communication capability via an IRIDIUM SATCOM accessory for remote coverage
- Large store and forward memory able to retain long event histories when network access is unavailable
- Rugged, water-resistant IP65 enclosure for use on vehicles and mobile assets
- Tamper detection to report likely case access or device interference

## Core Features of DCT - Syrus GPS

- 3-axis internal digital ±16G accelerometer with event logging and crash condition back log  
- Motion and shock detection supporting driver metrics, tow alert, and related configurable events  
- High-speed data transfer optimized for IoT and M2M communications  
- IRIDIUM satellite compatibility when used with the optional SATCOM accessory for remote reporting  
- Large store and forward buffer capable of saving up to 30,000 events while offline  
- Intelligent geofencing with user-defined support for circular and polygonal zones  
- Tamper detection to flag possible device case opening or interference  
- Low energy consumption modes to conserve power when the asset is inactive

## How These Features Work with Plaspy

Plaspy ingests tracker reports and exposes device events, locations, and state information for monitoring and operational workflows. The Syrus GPS feature set maps to Plaspy visibility and alerting functions so teams can act on motion, safety, and connectivity events.

- Location updates and high-speed reports appear in Plaspy as position events for real-time tracking and history playback  
- Accelerometer events such as crash logs, motion starts, and shock detections surface as discrete events that can be searched and filtered in Plaspy  
- Store and forward buffers sync historical events to Plaspy once connectivity is restored, preserving event continuity in the platform  
- Geofence entries and exits defined on the device or in Plaspy are exposed for rule-based alerts and reporting  
- Tamper and accessory-driven satellite failover events can be used to trigger notifications or escalate monitoring inside Plaspy  
- Plaspy automatically detects supported tracker protocols and associates device reports with your account and asset records

## Typical Use Cases

- Fleet location tracking with enhanced event reporting for safety and incident investigation  
- Remote asset monitoring where satellite backup via an IRIDIUM accessory provides periodic reachability beyond cellular coverage  
- Driver behavior and performance analysis using accelerometer-derived motion and shock events  
- Tow and unauthorized movement detection for parked vehicles and equipment  
- Operations that require resilient data logging with store and forward during extended offline periods  
- Installations in harsh environments where IP65 protection and tamper reporting are required

## Feature Availability Notes

- Some features depend on firmware version and may be added, improved, or changed in device updates  
- Optional accessories such as a SATCOM module are required to enable IRIDIUM satellite backup functionality  
- Hardware revisions and regional variants can affect available interfaces and certified networks  
- Installation wiring, accessory configuration, and mounting location can influence sensors such as tamper and accelerometer behavior  
- Verify geofence counts and configuration limits if you rely on a specific number of circular or polygonal zones

## Why Use Plaspy with These Features

Using the DCT Syrus GPS with Plaspy gives organizations a consolidated view of location, motion, and event data across vehicles and assets. Plaspy captures and normalizes device reports so teams can monitor incidents, replay historical activity, and build rules around motion, tamper, geofence, and satellite fallback events without managing low-level device protocols.

Learn more about how Plaspy can display Syrus GPS data and improve operational oversight at https://www.plaspy.com. Device features, firmware behavior, and accessory requirements can change over time, so please verify the latest technical details and compatibility information at the manufacturer site https://www.digitalcomtech.com/.
