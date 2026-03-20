---
slug: /xirgo/xg37/features
id: xg37-features
sidebar_label: Features
title: Xirgo - XG37 Features
sidebar_class_name: menu_item_tracker
description: Feature summary for Xirgo XG37 GPS tracker and its compatibility with Plaspy for fleet telematics, CANBUS telemetry, geofencing and compliance workflows
keywords:
  - Xirgo XG37
  - XG37 features
  - Xirgo GPS tracker
  - XG37 CANBUS
  - XG37 MQTT TLS
  - XG37 geofence notifications
  - XG37 tachograph
  - Plaspy compatible tracker
  - fleet telematics
  - vehicle telemetry
---

# Xirgo - XG37 Features

This page provides the public feature context for using the Xirgo XG37 tracker with Plaspy. It summarizes the model's practical capabilities, how those capabilities map into Plaspy for real-time tracking and operational visibility, and what fleets should expect when evaluating the device for telematics and compliance workflows.

Exact feature availability can vary by firmware release, hardware revision, regional model, and the specifics of vehicle installation or wiring. For the most current and device specific technical behavior consult official manufacturer documentation and release notes from Xirgo.

## Feature Overview

The XG37 is a rugged vehicle telematics unit designed to feed live position, vehicle telemetry, and compliance data into platforms like Plaspy. Its design emphasizes secure telemetry transport, rich vehicle data where supported, and flexibility for fleet integrations.

- Real-time GNSS position reporting for live tracking and mapping in Plaspy.
- Full CANBUS telemetry access where supported by the vehicle for engine and diagnostic signals.
- MQTT based data transfer with TLS 1.2 for encrypted telemetry to Plaspy.
- Instant geofence notifications for route compliance, yard control, and anti theft awareness.
- Remote tachograph download capability to support driver hours and compliance workflows.
- Device SDK and custom algorithm support to enable device side filtering and edge logic.

## Core Features of Xirgo - XG37

- Rugged vehicle telematics form factor built for professional fleet installations.
- Full CANBUS data access to capture engine, ignition, and diagnostic signals where available.
- Secure MQTT telemetry with TLS 1.2 to protect data in transit.
- Cellular connectivity options depending on model to support wide area coverage and fallback paths.
- Instant geofence notification engine for event driven alerts.
- Remote tachograph download support for compliance related data retrieval.
- On device SDK to implement custom scenarios and reduce noisy telemetry.
- Optional battery configurations to support backup operation and flexible installations.

## How These Features Work with Plaspy

Plaspy consumes the telemetry and event data the XG37 produces and presents it within a single fleet management environment for monitoring and reporting. Plaspy automatically detects compatible tracker protocols and can surface the device's location and supported vehicle telemetry without requiring detailed protocol configuration from users.

- Live location and heading display in Plaspy maps for real time operational awareness.
- CANBUS telemetry forwarded into Plaspy for vehicle diagnostics, status monitoring, and analysis where the vehicle provides those signals.
- Geofence alerts and entry exit events delivered to Plaspy for compliance and security workflows.
- Remote tachograph files and related compliance events available for collection and reporting inside Plaspy.
- Secure transport using MQTT with TLS 1.2 helps maintain data integrity between the device and Plaspy.
- Device SDK can be used to implement sampling and event rules that reduce noise and focus Plaspy on meaningful events.

## Typical Use Cases

- Fleet location and asset tracking for dispatch and utilization management.
- Regulatory compliance workflows using remote tachograph downloads and centralized reporting.
- Route compliance and perimeter control using instant geofence notifications.
- Telemetry driven maintenance planning using vehicle diagnostic signals where available.
- Anti theft monitoring and rapid response through live position and alerting.
- Edge logic implementations that send only relevant events to Plaspy to reduce data volume.

## Feature Availability Notes

- Feature support depends on the specific XG37 model and its firmware; some capabilities may be present only on select regional or hardware variants.
- CANBUS data availability is subject to vehicle make and model and how the tracker is integrated into the vehicle network.
- Remote tachograph functionality requires the appropriate hardware and configuration and may be restricted by regional regulations.
- Optional batteries and accessory features vary by configuration and should be confirmed prior to purchase.
- Always verify the installed firmware version and device configuration when planning integrations with Plaspy.

## Why Use Plaspy with These Features

Pairing the XG37 with Plaspy consolidates location, vehicle telemetry, and compliance data in one platform, giving operations teams a clearer picture of fleet status and helping streamline reporting and alerting workflows. The device's support for secure telemetry transport and an on device SDK makes it practical to reduce data noise and deliver the events that matter most to operations.

To learn more about how Plaspy can work with the XG37 and other fleet trackers visit https://www.plaspy.com. For the latest device specific technical details, firmware notes, and official specifications consult Xirgo documentation at https://xirgo.com/ as manufacturer features and implementations can change over time.
