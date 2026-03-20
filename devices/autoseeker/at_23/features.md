---
slug: /autoseeker/at_23/features
id: at_23-features
sidebar_label: Features
title: Autoseeker - AT-23 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Autoseeker AT 23 GPS tracker and how its capabilities are used with Plaspy
keywords:
  - Autoseeker AT-23 features
  - Autoseeker AT-23 GPS tracker
  - AT-23 relay tracker
  - AT-23 Plaspy compatibility
  - Autoseeker GPS tracker features
  - vehicle immobilizer tracker
  - 2G relay GPS tracker
  - fleet tracking AT-23
  - asset tracking Autoseeker
  - AT-23 features for Plaspy
---

# Autoseeker - AT-23 Features

This page describes the public feature context for the Autoseeker AT-23 when used with Plaspy. It summarizes the device capabilities that are relevant to Plaspy users, explains how those capabilities appear inside Plaspy dashboards, and highlights practical uses for fleet and asset monitoring while avoiding sensitive implementation details.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method and manufacturer implementation. The AT-23 as described is a compact 2G relay GPS tracker with GPS plus Beidou positioning and a built in relay for remote fuel or power cutoff, but specific telemetry, event thresholds and supported commands depend on the device firmware and how it is installed and configured.

## Feature Overview

The Autoseeker AT-23 delivers real time vehicle tracking and event reporting that integrates into Plaspy for live mapping, history playback and alerts. It is designed for concealed, permanent installation in a range of mobile assets and includes a relay to support remote immobilizer workflows.

- Real time GNSS position reporting using GPS and Beidou for location updates and route history.
- Built in relay for remote fuel or power cutoff and resume to support anti theft immobilization workflows.
- Event generation for geofence actions, overspeed, vibration, main power loss and low backup battery.
- Compact form factor and vehicle grade power range to simplify concealed installations across cars, motorcycles, trucks and boats.
- 2G cellular connectivity with standard SIM support for reporting location and events to Plaspy.

## Core Features of Autoseeker - AT-23

- Real time tracking and route history reporting suitable for live fleet monitoring and playback.
- Integrated relay module for remote cutoff and resume of fuel or power circuits as part of immobilizer strategies.
- Dual mode GNSS positioning with GPS plus Beidou for reliable location fixes.
- Event alerts including geofence entry and exit, overspeed warnings and vibration tamper detection.
- Power management features including main power cut off detection and optional backup battery reporting.
- Small ABS housing and discreet mounting options for concealed installation in vehicles and small assets.
- Standard 2G cellular support with a regular SIM card slot for data uplink to tracking platforms.

## How These Features Work with Plaspy

Plaspy receives the AT-23 position, status and event messages so operators can see live location, review history and respond to incidents from a single interface. Plaspy automatically detects supported tracker protocols and accepts device reports sent to the platform domain, providing an easy path to integrate the AT-23 into dashboards and automated workflows.

- Live location updates appear on Plaspy maps for real time tracking and dispatch visibility.
- Geofence entry and exit events create alerts and are visible alongside historical routes for quick investigation.
- Overspeed and vibration events are logged in Plaspy timelines and can trigger notifications or escalation rules.
- Relay cut and resume events are recorded so immobilizer actions are visible in audit trails and incident reports.
- Power loss and low backup battery alerts help operators detect tampering or vehicle power issues within the Plaspy interface.

## Typical Use Cases

- Fleet anti theft and immobilization using the relay to stop unauthorized vehicle movement and log the event in Plaspy.
- Fleet operations and dispatching with live location, route history and overspeed monitoring for driver compliance.
- Motorcycle and small vehicle protection thanks to the device compact size and discreet installation profile.
- Asset tracking for boats and mobile equipment combining GNSS location with power loss and tamper alerts for rapid response.
- Centralized monitoring of mixed vehicle types where Plaspy consolidates location and event telemetry from each AT-23 unit.

## Feature Availability Notes

- Feature support depends on the AT-23 firmware and hardware revision so specific alerts and command behaviors may differ between units.
- Regional 2G network availability affects connectivity and should be considered before deployment in areas where 2G is being retired.
- Relay behavior and immobilizer effectiveness depend on how the device is wired into the vehicle and local safety or legal requirements.
- Optional backup battery presence and battery reporting depend on the purchased configuration and firmware settings.
- Always review the device configuration and manufacturer documentation when planning integrations or remote command use.

## Why Use Plaspy with These Features

Using the AT-23 together with Plaspy gives organizations a practical, integrated way to combine compact relay based immobilizer capability with centralized location visibility and event management. Plaspy brings position updates, alerts and history into a single operational view so fleet managers and asset owners can monitor activity, investigate incidents and automate routine notifications.

To learn more about Plaspy and how it can be used with compatible trackers visit https://www.plaspy.com. Device features, firmware behavior and manufacturer details can change over time so please verify the latest device specific information on the manufacturer website https://autoseekergps.com/ before relying on particular behaviors.
