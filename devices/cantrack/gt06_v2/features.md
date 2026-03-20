---
slug: /cantrack/gt06_v2/features
id: gt06_v2-features
sidebar_label: Features
title: CanTrack - GT06 v2 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the CanTrack GT06 v2 GPS tracker and how it works with Plaspy for vehicle tracking and monitoring
keywords:
  - CanTrack GT06 v2 features
  - CanTrack GT06 v2 GPS tracker
  - GT06 v2 Plaspy compatibility
  - CanTrack GT06 v2 functions
  - GT06 v2 capabilities
  - vehicle tracking GT06 v2
  - GPS tracker features Plaspy
  - GT06 v2 real time tracking
  - GT06 v2 alarms
  - CanTrack GPS tracker features
---

# CanTrack - GT06 v2 Features

This page describes the public feature context for the CanTrack GT06 v2 and how its capabilities are used with Plaspy. It focuses on user facing functions such as location reporting, alarm signals, and how those signals are typically reflected when the device reports to a fleet management platform like Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device level configuration, optional features, and the most current technical details consult the official CanTrack documentation.

## Feature Overview

The GT06 v2 is a compact vehicle tracker that uses GSM GPRS networks together with GPS satellite positioning to provide location reporting for vehicles and other mobile assets. It offers both SMS based and GPRS based reporting, a set of configurable alarms, and optional voice and control features that are commonly used in vehicle tracking workflows.

- Real time location reporting by SMS and by GPRS for server based tracking
- Global GSM quad band operation for wide network compatibility
- Alarms for overspeed, ACC anti theft, SOS, and power loss backed by a built in backup battery
- Optional two way calling and optional circuit cut functionality for specific installations
- Ability to view positions on mobile phones or on mapping services such as Google Maps and Google Earth

## Core Features of CanTrack - GT06 v2

- GPS position reporting suitable for vehicle tracking applications
- GPRS transmission of location data to an internet server for real time monitoring
- SMS based location queries and alarm notifications to authorized mobile numbers
- Overspeed alarm to notify when configured speed thresholds are exceeded
- ACC anti theft alarm to detect vehicle ignition related events when configured
- SOS alarm for user initiated emergency signaling
- Built in backup battery enabling power failure detection and notification
- Optional features including two way calling and remote cut of oil or circuit depending on hardware variant

## How These Features Work with Plaspy

When used with Plaspy, the GT06 v2 can forward its GPRS location data and alarm messages to the Plaspy server so vehicles and events are visible in a central monitoring interface. Plaspy detects supported tracker protocols and ingests the location and alert information to provide continuous visibility and event handling.

- GPRS reported positions appear on Plaspy maps for real time tracking and history visualization
- Alarms such as overspeed, SOS, and power loss are recorded as events so operators can review alerts and respond
- SMS based functions remain useful for direct device queries and for setups where GPRS is not available
- Optional remote control or voice features are handled outside core platform tracking unless integrated by the installer or manufacturer
- Plaspy captures incoming server reports and associates them with device records so fleet level oversight is available

## Typical Use Cases

- Fleet and rental vehicle location monitoring for operational oversight
- Asset protection and theft deterrence using power loss and anti theft alarms
- Personnel or vehicle tracking for businesses requiring location awareness
- Quick location queries via SMS when a cellular data connection is not available
- Peace of mind monitoring for individual business owners and managers
- Integrating alarm events into a central monitoring workflow for response coordination

## Feature Availability Notes

- Certain functions listed as optional by the manufacturer such as two way calling and remote cut may depend on the hardware variant or aftermarket configuration
- Firmware version and hardware revision can change how alarms and GPRS reporting behave in practice
- SMS features require an active SIM configured with sufficient credit and network coverage in the operating region
- Regional GSM frequency support is broad but actual network compatibility depends on local carriers
- For server based reporting, device settings must be configured to point to the intended tracking server as directed by the installer or platform

## Why Use Plaspy with These Features

Plaspy provides a centralized way to collect GPRS based positions and alarm signals from devices like the CanTrack GT06 v2, making it easier for organizations to maintain live visibility across a mixed fleet. Using Plaspy, operators can view location history, monitor alarm events, and manage multiple devices from a single interface to support routine operations and incident response.

To learn more about how Plaspy can work with CanTrack devices visit https://www.plaspy.com. For the most current device specific feature descriptions, firmware behavior, and optional hardware details please verify information with the manufacturer at https://www.cantrackgps.com/
