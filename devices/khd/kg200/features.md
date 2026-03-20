---
slug: /khd/kg200/features
id: kg200-features
sidebar_label: Features
title: KHD - KG200 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the KHD KG200 GNSS tracker and how its capabilities are used with Plaspy for vehicle and ship tracking
keywords:
  - KHD KG200 features
  - KHD KG200 GPS tracker
  - KG200 functions
  - KG200 capabilities
  - KHD GPS tracker
  - vehicle tracking KG200
  - ship tracking KG200
  - KG200 Plaspy compatibility
  - KG200 geo fence
  - KG200 real time tracking
---

# KHD - KG200 Features

This page provides a public, features-oriented overview of the KHD KG200 tracker and how its capabilities are typically used with the Plaspy fleet management platform. It is intended to describe user-facing features, practical uses, and the general ways the KG200 reports location and events into Plaspy for visibility and monitoring.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific settings, configuration commands, and the latest technical details please consult the official manufacturer documentation linked at the end of this page.

## Feature Overview

The KHD KG200 is a GNSS tracker designed for vehicle and maritime use that pairs satellite positioning with cellular connectivity. In practice this means the KG200 provides positional updates, event reporting, and remote reporting options that can be ingested by a platform like Plaspy to support tracking, monitoring, and operational oversight.

- High sensitivity GNSS positioning with support for GPS or GLONASS for reliable location fixes
- Cellular communication using GSM and GPRS for real time reporting and remote monitoring
- SMS capable reporting option for environments or installations where data connectivity is limited
- Event reporting for emergency alerts, geo-fence boundary crossings, and scheduled reports
- Compatibility with PC and smartphone interfaces for device setup and platform integration

## Core Features of KHD - KG200

- GNSS support allowing location fixes via GPS or GLONASS
- Cellular connectivity enabling GPRS style data reporting over mobile networks
- SMS reporting capability as an alternative reporting channel
- Emergency alert reporting to notify predefined recipients or systems
- Geo-fence boundary crossing detection and reporting
- Scheduled reporting for periodic location and status updates
- High receive sensitivity for improved tracking performance in challenging reception areas
- Designed for both vehicle and ship tracking deployments

## How These Features Work with Plaspy

Plaspy can receive and display the KG200 tracking data to provide live location awareness, event notifications, and operational history. Plaspy detects and interprets compatible tracker messages so fleet managers can monitor assets without dealing with raw device protocols.

- Live map visualization of KG200 position reports and track history
- Event flags and timeline entries for geo-fence crossings and emergency alerts
- Scheduled report entries shown as periodic location points or status updates
- SMS based alerts reflected in Plaspy as events when the platform receives them through supported ingestion paths
- Automatic protocol detection to simplify adding KG200 devices to the Plaspy platform

## Typical Use Cases

- Real time vehicle fleet tracking for route monitoring and dispatch coordination
- Ship and small vessel location tracking for coastal operations and asset oversight
- Geo-fence monitoring to detect unauthorized movements or boundary breaches
- Emergency alerting to notify operations teams of immediate incidents
- Scheduled position reporting for routine check ins or compliance reporting

## Feature Availability Notes

- Firmware differences can change available functions and parameter names for reporting and alerts
- Hardware revisions and regional variants may affect cellular bands and SMS support
- Installation choices such as external antennas or wiring can influence GNSS receive sensitivity and performance
- Some features require configuration on the device and on the monitoring platform to appear in Plaspy
- Always verify the device settings and event definitions after installation to confirm expected behavior

## Why Use Plaspy with These Features

Using Plaspy together with the KHD KG200 brings satellite positioning and cellular reporting into a single operational view. Plaspy helps translate device reports into meaningful location history, event notifications, and dashboard insights so teams can act on alerts, verify schedules, and maintain visibility across vehicle and maritime assets.

Learn more about Plaspy and how the platform integrates with compatible trackers at https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer implementation details please review the official KHD documentation at http://www.khd.hk.
