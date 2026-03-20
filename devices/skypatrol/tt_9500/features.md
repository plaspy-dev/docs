---
slug: /skypatrol/tt_9500/features
id: tt_9500-features
sidebar_label: Features
title: SkyPatrol - TT 9500 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for SkyPatrol TT 9500 GPS tracker compatibility and capabilities with Plaspy
keywords:
  - SkyPatrol TT 9500
  - SkyPatrol TT 9500 features
  - SkyPatrol tracker features
  - TT 9500 geofencing
  - TT 9500 relay control
  - TT 9500 counters
  - GPS tracker Plaspy
  - Plaspy compatible tracker
  - TT 9500 quad band
  - TT 9500 GPS sensitivity
---

# SkyPatrol - TT 9500 Features

This page describes the public feature context for using the SkyPatrol TT 9500 with Plaspy. It focuses on practical capabilities, geofencing options, and device functions you can expect to use within Plaspy for location monitoring and operational visibility. The TT 9500 is described as a compact, rugged tracker compatible with Plaspy for worldwide volume tracking deployments.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation method, and manufacturer implementation. This page summarizes capabilities reported for the TT 9500 and how those capabilities map to Plaspy workflows; consult manufacturer documentation for definitive, device specific details.

## Feature Overview

The TT 9500 is marketed as an all in one GPS tracker for broad tracking needs with a focus on geofencing capacity, remote control via an internal relay, and efficient power use. Its design emphasizes easy installation, global GSM compatibility, and durable construction suited to outdoor use.

- Supports advanced device based geofencing via SkyPatrol EDDIE+ Custom Protocol with large fence counts
- Built in relay for remote control of connected systems or equipment
- Low power consumption to prolong deployment intervals between maintenance
- Quad band GSM compatibility for operation across international mobile networks
- Rugged, splash proof housing and an ultra sensitive GPS receiver for improved position acquisition
- Seven configurable counters and messaging sequencing for event identification and tracking

## Core Features of SkyPatrol - TT 9500

- EDDIE+ Custom Protocol support with device based geofence capacity up to 250 fences
- Multiple geofence types including circular fences, polygonal fences (supporting up to 25 points), and route geofencing for predefined paths
- Internal relay for remote activation or deactivation of connected equipment
- Low power consumption suitable for longer battery life in field deployments
- Quad band modem compatibility for global GSM network coverage
- Durable splash proof enclosure for outdoor and industrial use
- Ultra sensitive GPS receiver specification for improved signal acquisition in challenging environments
- Seven distinct counter types for tracking event counts or operational metrics

## How These Features Work with Plaspy

Plaspy can receive and display location and event data from compatible TT 9500 units and provide centralized visibility, alerting, and historical playback for operations teams. Plaspy automatically detects the tracker protocol and accepts device reports into the platform, enabling use of the TT 9500 feature set without per device protocol selection.

- Geofence events reported by the TT 9500 can be surfaced as entry and exit events inside Plaspy for monitoring and alerting
- Relay activations and remote control events can be logged and shown in the device event timeline for operational oversight
- Counters reported by the device can be used to track usage metrics and appear in Plaspy event history or reporting tools
- Plaspy accepts device connections to its ingestion endpoint d.plaspy.com and can work with UDP or TCP reporting as supported by the tracker configuration
- Location fixes from the TT 9500 are plotted on Plaspy maps and included in route history and live tracking views
- Messaging sequencing and event identifiers from the TT 9500 assist Plaspy in correlating device events to user defined rules

## Typical Use Cases

- Fleet tracking where remote relay control can support equipment power management or immobilization workflows
- Asset monitoring in outdoor or industrial environments that require rugged housing and reliable GPS acquisition
- Regional and international tracking projects leveraging quad band GSM compatibility
- Operations that require a large number of device side geofences for site boundary management or route enforcement
- Deployments needing event counters for mileage, run time, or other usage tracking metrics
- Installations that benefit from low power consumption to reduce maintenance intervals

## Feature Availability Notes

- Feature sets such as geofence limits, counter types, and relay behavior depend on the device firmware version and manufacturer configuration
- Hardware revisions and regional variants can affect modem banding, enclosure options, or power characteristics
- Installation choices and wiring can change which features are available or how they behave in practice
- Plaspy will ingest supported events, but the exact event names and parameters depend on the firmware and protocol messages sent by the device
- Always verify the exact capabilities of a specific unit against current manufacturer documentation and firmware release notes

## Why Use Plaspy with These Features

Using the TT 9500 with Plaspy provides a practical way to centralize location data, geofence events, and device counters for operational visibility and incident tracking. Plaspy's platform is designed to visualize live location, store historical traces, and surface device events so teams can monitor assets and fleets using the TT 9500 feature set.

To learn more about how Plaspy can work with SkyPatrol devices, visit https://www.plaspy.com. For the most current, device specific feature details, firmware notes, and official specifications, please verify information with the manufacturer at https://www.skypatrol.com/
