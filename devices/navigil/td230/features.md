---
slug: /navigil/td230/features
id: td230-features
sidebar_label: Features
title: Navigil - TD230 Features
sidebar_class_name: menu_item_tracker
description: Clear overview of Navigil TD230 features and how the TD230 works with Plaspy for tracking geofences reporting and power management
keywords:
  - Navigil TD230
  - Navigil TD230 features
  - Navigil TD230 GPS tracker
  - TD230 features
  - TD230 GPS tracker
  - Navigil GPS tracker
  - TD230 Plaspy compatibility
  - TD230 geofence support
  - TD230 OTA updates
  - TD230 power management
---

# Navigil - TD230 Features

This page summarizes the public feature context for using the Navigil TD230 tracker with Plaspy. It describes the TD230's practical capabilities, the kinds of telemetry and behaviors the device firmware typically supports, and how those capabilities map to monitoring and reporting inside the Plaspy platform.

Exact feature availability for an individual TD230 unit can vary by firmware version, hardware revision, installation method, or manufacturer configuration. Where applicable this page highlights the most commonly available functions provided by the standard TD230 TG2 firmware and the device's production ready software, while encouraging verification against the manufacturer documentation.

## Feature Overview

The Navigil TD230 is positioned as an OEM tracking module with production ready firmware aimed at quick integration into customer solutions. It combines a customizable physical membrane with intelligent firmware designed to deliver location reporting, event detection, and low power operation for extended deployments.

- OEM friendly design with a customizable user interface membrane that supports different button and LED layouts for rebranding.
- Production ready TG2 firmware that implements common tracking functions such as geofence handling and vehicle state monitoring.
- Over the air upgradeable firmware and configuration files to keep devices up to date without physical access.
- Intelligent power management and low power sleep modes to extend battery life while maintaining periodic server communication.
- SDK available for further device customization where integrators need to adapt behavior to specific use cases.

## Core Features of Navigil - TD230

- Rebrandable hardware membrane with configurable button and LED layouts for OEM customization.
- Standard TD230 TG2 firmware offering geofence support for location based event handling.
- Vehicle state monitoring capabilities provided by the production firmware for basic operational awareness.
- Server reporting routines to send position and event updates to a back end.
- Over the air firmware and configuration updates to simplify maintenance and feature rollout.
- Low power sleep modes plus intelligent power management to prolong battery operation.
- Wake from power saving by scheduled events mechanical motion or external input for timely responsiveness.
- SDK for integrators who need to implement custom behavior beyond standard firmware features.

## How These Features Work with Plaspy

Plaspy receives and processes tracking reports from compatible devices such as the TD230 and exposes those reports in a vehicle and asset monitoring context. Plaspy automatically detects many common tracker protocols and presents device state and location information in a consistent way for operations and reporting.

- Geofence events reported by the TD230 appear as location based events inside Plaspy enabling zone entry and exit visibility.
- Vehicle state information from the device is surfaced in Plaspy to help operators understand operational status at a glance.
- Server reporting from TD230 units is ingested by Plaspy so periodic position updates and event messages are available in the platform.
- Over the air update capability simplifies keeping deployed units current without manual retrieval; Plaspy can coexist with device OTA workflows.
- Low power operation and scheduled wake events translate into predictable reporting patterns that Plaspy can display and analyze.
- Plaspy automatically detects tracker protocol and accepts standard device reports allowing TD230 units to be added without manual protocol selection.

## Typical Use Cases

- Fleet location tracking with zone monitoring using geofences and event reporting.
- OEM integrations where a custom branded membrane and button layout are required for resale.
- Remote or battery powered asset tracking where long battery life and periodic reporting are needed.
- Deployments that benefit from OTA firmware and configuration updates to maintain feature parity.
- Integrator projects using the TD230 SDK to tailor device logic for specific business workflows.
- Situations requiring wake on motion scheduled wake or external input to balance responsiveness and power savings.

## Feature Availability Notes

- Manufacturer firmware versions and hardware revisions influence which features are available on any given TD230 device.
- Custom membrane layouts and button/LED configurations are OEM options and may not be present on all units.
- OTA update capability depends on network availability and the specific firmware image provided by the manufacturer or integrator.
- Installation wiring and external input connections affect wake behavior and any external input based functionality.
- Regional or carrier specific variants may modify supported behaviors or network compatibility.
- Always confirm exact feature sets and firmware change logs with the manufacturer for deployed units.

## Why Use Plaspy with These Features

Using the Navigil TD230 together with Plaspy gives organizations a practical path from device level capabilities to operational visibility. Plaspy ingests device reports and presents geofence, state, and location information in a unified interface so teams can monitor assets, respond to events, and analyze historical activity.

If you want to learn more about how Plaspy supports tracker integrations like the TD230 visit https://www.plaspy.com. For the most current device specific details firmware behavior and manufacturer documentation please verify information with Navigil at http://www.navigil.com/
