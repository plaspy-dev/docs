---
slug: /bofan/pt_300x/features
id: pt_300x-features
sidebar_label: Features
title: Bofan - PT-300X Features
sidebar_class_name: menu_item_tracker
description: Public overview of Bofan PT-300X GPS tracker features and how it works with Plaspy for vehicle tracking and alerts
keywords:
  - Bofan PT-300X
  - Bofan PT-300X features
  - Bofan PT-300X GPS tracker
  - PT-300X Plaspy compatibility
  - vehicle tracker features
  - GPS tracking PT-300X
  - overspeed alert PT-300X
  - geo fencing PT-300X
  - SOS button PT-300X
  - PT-300X real time tracking
---

# Bofan - PT-300X Features

This page provides a public feature overview for the Bofan PT-300X GPS vehicle tracker and explains how those features are typically used with Plaspy. It focuses on practical, non-sensitive details about reporting, alerts, and operational value when the PT-300X is connected to the Plaspy platform.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation wiring, and the manufacturer implementation. Where possible this page reflects the PT-300X capabilities described by the manufacturer, but customers should verify device specific behavior with the official Bofan documentation.

## Feature Overview

The PT-300X is a compact vehicle tracker designed to report location and events over SMS or GPRS using TCP or UDP. It supports periodic reporting, alerting for defined conditions, and manual emergency signals, making it suitable for vehicle monitoring and basic fleet oversight.

- Real time location reporting via SMS or GPRS using TCP or UDP
- Time interval based tracking for regular position updates and trip history
- Low battery alert to notify when device power requires attention
- Overspeed alert to flag when a configured speed threshold is exceeded
- Geo fencing support to notify when the vehicle enters or leaves defined areas
- SOS button for sending an emergency alert to predefined contacts

## Core Features of Bofan - PT-300X

- Location reporting by SMS or GPRS TCP UDP so devices can send position updates to tracking servers
- Time interval tracking that allows the device to send periodic position reports for route history and monitoring
- Low battery alert to surface power issues and help ensure devices remain online
- Overspeed alert to detect and report when configured speed limits are exceeded
- Geo fencing control for virtual perimeter monitoring and entry exit notifications
- SOS button to generate an immediate alert event for emergency situations
- Stop car functionality via an external relay that can be used to immobilize a vehicle when the relay is installed and configured

## How These Features Work with Plaspy

When a PT-300X is connected to Plaspy, the tracker’s reporting and alerts become visible in the Plaspy interface for monitoring and operational use. Plaspy automatically detects supported tracker protocols and accepts TCP or UDP device reports on the platform port used by Plaspy.

- Real time and interval location updates appear on Plaspy maps and are stored as track history for playback and analysis
- Overspeed and low battery alerts are shown as events so operators can act or review occurrences
- Geo fence enter and exit events can be reflected as notifications or logged events in Plaspy
- SOS signals are highlighted as high priority events for rapid operator awareness
- Stop car activations reported by the device are recorded as device events in Plaspy when the tracker sends the corresponding status update

## Typical Use Cases

- Fleet location monitoring with periodic position updates for route visibility
- Safety monitoring through overspeed alerts and SOS event visibility
- Asset security using geo fencing to detect unauthorized movement or boundary crossing
- Maintenance and uptime management by tracking low battery alerts for device health
- Incident review and route playback using time interval reports to reconstruct trips
- Remote immobilization workflows where the installed relay and device reporting are part of a loss prevention process

## Feature Availability Notes

- Some features depend on the device firmware and may be added, changed, or removed by the manufacturer in different firmware versions
- Hardware revisions and regional product variants may affect which features are present or how they are wired during installation
- SMS based reporting and GPRS based reporting may both be available but require correct configuration for the chosen transport
- Features that require extra hardware such as an immobilization relay or a wired SOS input depend on the installer enabling and connecting those components
- Always consult the device installation manual and firmware release notes for specifics before relying on a particular function

## Why Use Plaspy with These Features

Using Plaspy with the PT-300X centralizes location and event data so organizations gain continuous visibility into vehicle movements, alerts, and device health. Plaspy’s mapping, event logging, and configurable notifications help turn the tracker’s raw reports into operational insights for fleet managers, safety teams, and security personnel.

To learn more about how Plaspy can work with the PT-300X and other trackers, visit https://www.plaspy.com. For the most current and device specific feature details, firmware notes, and installation instructions consult the manufacturer at https://www.bofancloud.com/ which is the authoritative source for PT-300X technical documentation.
