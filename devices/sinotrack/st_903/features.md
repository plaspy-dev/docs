---
slug: /sinotrack/st_903/features
id: st_903-features
sidebar_label: Features
title: SinoTrack - ST-903 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the SinoTrack ST 903 and how it works with Plaspy for compact real time and small asset tracking
keywords:
  - SinoTrack ST-903
  - SinoTrack ST-903 features
  - SinoTrack ST-903 GPS tracker
  - ST-903 Plaspy compatibility
  - compact GPS tracker
  - pet tracking tracker
  - small asset tracking
  - GPRS SMS tracker
  - Google Maps SMS link
  - high sensitivity GPS tracker
---

# SinoTrack - ST-903 Features

This page describes the public feature context for using the SinoTrack ST-903 with Plaspy. It focuses on practical, user-facing capabilities you can expect when the ST-903 is configured to report to a Plaspy server and how those capabilities can be used for real time visibility and history within Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method and manufacturer implementation. For device specific settings, SMS configuration commands, and the latest details refer to the manufacturer documentation as well as the product packaging and release notes.

## Feature Overview

The ST-903 is an ultra compact GPS tracker designed for discreet personal and small asset tracking. It supports multiple reporting methods and power profiles so users can balance update frequency against battery life according to the tracking scenario.

- Coin sized form factor suited to collars and small hides for discreet placement
- High sensitivity GPS and GSM antenna for stable positioning and mobile communications
- Reporting via SMS, GPRS and Google Maps link SMS messages for quick checks or automated server reporting
- SMS configurable server IP and port so the device can be pointed to a Plaspy server without firmware changes
- Multi mode power management with continuous, motion triggered and standby profiles to extend runtime
- Built in battery runtime profiles roughly corresponding to frequent update, motion optimized, and standby use cases

## Core Features of SinoTrack - ST-903

- Ultra compact, coin size enclosure for discreet attachment to collars or small items
- High sensitivity GPS receiver for position fixes in a small form factor
- 2G GSM connectivity with GPRS and SMS reporting modes
- SMS Google Maps link messages for instant location checks via text
- SMS configuration of server settings and APN for directing data to a chosen tracking server
- Multi mode power management including continuous, motion triggered, and standby profiles
- Geofence and overspeed alarm support and local event reporting
- On device history logging for route playback and post event review

## How These Features Work with Plaspy

When the ST-903 is configured to send position and event data to a Plaspy server, Plaspy receives the device updates for real time monitoring, alerts and history analysis. Plaspy ingests location and status reports and exposes them through its dashboards and reporting tools.

- Real time location updates appear in Plaspy maps when the device sends GPRS position packets to the configured server
- Geofence and overspeed events reported by the device can be surfaced as alerts inside Plaspy for operational notifications
- Recorded positions and route history can be reviewed in Plaspy for post event analysis and route reconstruction
- SMS based commands and Google Maps link SMS messages provide a manual fallback for remote checks when mobile data is unavailable
- Plaspy can display device connectivity and basic event history so operators can track runtime profile effects on reporting frequency

## Typical Use Cases

- Pet tracking for discreet monitoring of cats, dogs or other companion animals
- Personal monitoring for caregivers and family members needing compact location devices
- Small asset tracking for bags, equipment or portable items where size and weight are important
- Event and route review using recorded history to reconstruct recent movements
- Basic anti theft awareness using geofence alerts and overspeed warnings as a first line of detection

## Feature Availability Notes

- Feature behavior and available commands depend on the device firmware version and manufacturer configuration
- Hardware revisions and regional variants may affect supported bands, power profiles and runtime estimates
- The ST-903 uses 2G GSM for GPRS and SMS reporting; choose a compatible 2G SIM card and verify network availability in your area
- Some features such as geofence or overspeed may require configuration on the device and optionally on the server platform
- Check the manufacturer documentation for SMS command formats, warranty details and included accessories

## Why Use Plaspy with These Features

Pairing the ST-903 with Plaspy gives organizations and individuals a simple way to centralize location updates, event alerts and history playback from a compact tracker. The device’s SMS configurable server settings make it straightforward to direct position reports to Plaspy for continuous monitoring and operational oversight without custom firmware.

To learn more about Plaspy and how it can receive and display updates from the ST-903, visit https://www.plaspy.com. For the most current and detailed device specific information, firmware notes and official configuration commands refer to the manufacturer site https://www.sinotrackgps.com/. Device features, firmware behavior and manufacturer implementation can change over time so please verify current details with the official manufacturer documentation.
