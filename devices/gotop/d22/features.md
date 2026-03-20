---
slug: /gotop/d22/features
id: d22-features
sidebar_label: Features
title: GOTOP - D22 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the GOTOP D22 GPS tracker and how its capabilities are used with Plaspy for vehicle tracking
keywords:
  - GOTOP D22
  - GOTOP D22 features
  - GOTOP D22 GPS tracker
  - GOTOP D22 capabilities
  - GOTOP D22 Plaspy
  - D22 vehicle tracker
  - 4G GPS tracker D22
  - D22 geofence SOS
  - GOTOP waterproof tracker
  - D22 alarms and monitoring
---

# GOTOP - D22 Features

This page provides a public, feature-focused overview of the GOTOP D22 and how those capabilities are used with Plaspy for vehicle tracking and fleet management. It summarizes the tracker’s practical functions based on the device description and explains how those functions map to visibility and monitoring workflows in Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, the specifics of installation, and the manufacturer implementation. Read this page for a general compatibility and capability overview, and consult manufacturer resources for the most current technical details.

## Feature Overview

The GOTOP D22 is a waterproof vehicle tracker built for real-time tracking and monitoring using 4G communications and GPS/BDS satellite positioning. It combines integrated antennas and sensors with a set of alarms and auxiliary inputs to provide reliable location awareness and status reporting suitable for fleet and vehicle security scenarios.

- Real-time GPS/BDS positioning for accurate location tracking across service areas
- 4G cellular communication with TCP/IP data transmission for timely reporting
- Built-in 3-axis sensor and movement detection to report vehicle motion events
- Multiple alarm functions including power failure, over-speed, movement, and low battery alerts
- Electronic fence (geofence) support and SOS alarm to flag location-based events
- Built-in microphone and speaker for two-way communication and support for a door sensor

## Core Features of GOTOP - D22

- Waterproof enclosure suitable for vehicle or outdoor installations
- Dual-satellite positioning using GPS and BDS for improved coverage
- High-sensitivity and anti-jamming antenna design to improve signal reliability
- Built-in 3-axis sensor for movement detection and related events
- Multiple alarm types: power failure alarm, over-speed alarm, movement alarm, low battery alarm, and SOS
- Electronic fence (geofence) functionality to detect entry and exit of defined zones
- Support for connection to an external oil-cutting relay for remote power cut off
- Local offline data storage with automatic supplementary transmission after blind area recovery

## How These Features Work with Plaspy

Plaspy can be used to collect, display, and act on the D22’s location and event data so fleet operators gain operational visibility and historical context. Plaspy automatically detects common tracker protocols and ingests device reports so the D22’s key events and telemetry are available in the platform.

- Real-time location updates and historical tracks from GPS/BDS positioning appear on Plaspy maps
- Alarm events (power loss, overspeed, movement, low battery, SOS) are recorded and can trigger notifications or logging in Plaspy
- Geofence events from the D22 are reflected as entry and exit events inside Plaspy for zone-based monitoring
- Offline stored data uploaded by the tracker after reconnecting is reconstructed in Plaspy to fill gaps from blind areas
- Movement and status changes reported by the 3-axis sensor and door input are available as events for operational review
- Remote command and control flows may be supported where Plaspy and the device protocol allow, enabling coordinated responses to events

## Typical Use Cases

- Fleet tracking for delivery, service, and transport vehicles requiring reliable location updates
- Theft detection and recovery workflows using movement alarms, SOS, and remote cut-off support
- Geofence-based operations such as route compliance, zone entry monitoring, and automated alerts
- Vehicle status monitoring including power and door status to detect unauthorized use
- Situations with intermittent coverage where offline storage and blind-area retransmission preserve trip data

## Feature Availability Notes

- Feature behavior depends on the device firmware version and the specific hardware revision installed
- Some capabilities require appropriate wiring or accessory installation, for example the external oil-cut relay or door sensor
- Regional cellular band support and 4G availability depend on the module variant and local carrier coverage
- Manufacturer configuration and settings may enable or disable individual alarms and functions
- Always verify supported commands, event names, and exact behavior against the official GOTOP documentation for your device unit

## Why Use Plaspy with These Features

Using the GOTOP D22 together with Plaspy provides a straightforward way to convert the tracker’s raw events and positioning into operational insight. Plaspy brings mapping, event logging, notifications, and historical playback to the D22’s position reports, alarm signals, and offline retransmissions, helping teams monitor vehicle status and respond to incidents more quickly.

If you want to learn more about how Plaspy can work with trackers like the GOTOP D22, visit https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and installation guidance for the GOTOP D22, please verify information with the manufacturer at https://www.gotop.cc/.
